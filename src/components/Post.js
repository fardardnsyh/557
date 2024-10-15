import classes from "./Post.module.css";
import { useState } from "react";
import Image from "./UI/Image";
import HideElement from "./UI/HideElement";

function Post(props) {
  const [postVisible, setPostVisible] = useState(true);
  const [textOfHidePost, setTextOfHidePost] = useState("");

  function onHideThread() {
    setPostVisible((prevState) => !prevState);
    // this kind of doesnt make sense, but it works fine lmao
    setTextOfHidePost((prevState) => {
      if (postVisible === false) {
        return "";
      } else {
        return props.user ? props.user : "Anonymous";
      }
    });
  }
  return (
    <div className={classes.postContainer}>
      <HideElement
        className={classes.hideElem}
        text={textOfHidePost}
        onClick={onHideThread}
      />
      {postVisible && (
        <div className={classes.Post}>
          <div>
            <Image src={props.image} />
            <div className={classes.posterInfo}>
              <div id="user">{props.user ? props.user : "Anonymous"}</div>
              <div>{props.title}</div>
              {props.time && (
                <div>
                  {props.time.toDate().toDateString() +
                    " " +
                    props.time.toDate().toLocaleTimeString()}
                </div>
              )}
              <div className="postNo">No. {props.postNo}</div>
            </div>
            <p className={classes.postText}>{props.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
