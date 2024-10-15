import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firebase } from "@firebase/app";
import { Link } from "react-router-dom";

import Image from "../UI/Image";
import ShowPostForm from "../ShowPostForm";
import Post from "../Post";

import classes from "./SingleThread.module.css";

const SingleThread = () => {
  const params = useParams();
  const [postsCol, setPostsCol] = useState([]);
  const [threadPost, setThreadPost] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("board")
      .where("postNo", "==", parseInt(params.threadID))
      .onSnapshot((serverUpdate) => {
        const firebaseThreads = serverUpdate.docs.map((item) => {
          let data = item.data();
          data.id = item.id;
          return data;
        });
        console.log(firebaseThreads);
        // setThreadToDisplay([firebaseThreads[0]]);
        setThreadPost(firebaseThreads);
        getPostsFromThread(firebaseThreads[0].id);
      });
  }, [params]);

  const getPostsFromThread = (id) => {
    const db = firebase.firestore();
    let posts = db
      .collection("board")
      .doc(id)
      .collection("posts")
      .orderBy("postNo", "desc");

    posts.onSnapshot((serverUpdate) => {
      const firebasePosts = serverUpdate.docs.map((_doc) => {
        let data = _doc.data();
        data.id = _doc.id;
        return data;
      });
      firebasePosts.reverse();
      setPostsCol(firebasePosts);
    });
  };

  // TODO special page where no post is found
  if (threadPost.length === 0) {
    return null;
  } else {
    return (
      <>
        <div className={classes.return}>
          <Link to="/">
            <div>Return to threads</div>
          </Link>
        </div>
        <div className={classes.Thread}>
          <div className={classes.threadContainer}>
            <div className={classes.secondThreadContainer}>
              <div className="threadInfo">
                <Image src={threadPost[0].image} />
                <div className="threadInfoContainer">
                  <div className="user" id="user">
                    {threadPost[0].user ? threadPost[0].user : "Anyonymous"}
                  </div>
                  <div className="title">
                    {threadPost[0].title ? threadPost[0].title : "Thread"}
                  </div>
                  {threadPost[0].created && (
                    <div className="time">
                      {threadPost[0].created.toDate().toDateString() +
                        " " +
                        threadPost[0].created.toDate().toLocaleTimeString()}
                    </div>
                  )}
                  <div>No. {threadPost[0].postNo}</div>
                </div>
                <div className="postText">
                  <p>{threadPost[0].text}</p>
                </div>
                {/* likely could be done differently, but it works so... */}
              </div>

              {postsCol.map((post, index) => {
                return (
                  <Post
                    key={index}
                    id={post.id}
                    postNo={post.postNo}
                    title={post.title}
                    time={post.created}
                    text={post.text}
                    image={post.image}
                    user={post.user}
                  />
                );
              })}
            </div>
            <ShowPostForm thread={false} id={threadPost[0].id} />
          </div>
        </div>
      </>
    );
  }
};

export default SingleThread;
