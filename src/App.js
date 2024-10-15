import React, { useState, useEffect } from "react";
import "./App.css";
import { firebase } from "@firebase/app";
import { Switch, Route } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import Threads from "./components/Threads";
import Header from "./components/Header";
import ShowPostForm from "./components/ShowPostForm";
import SingleThread from "./components/pages/SingleThread";

function App() {
  const [threadPosts, setThreadPosts] = useState([]);

  // gets Threas from firestore on first load
  useEffect(() => {
    firebase
      .firestore()
      .collection("board")
      .orderBy("created", "desc")
      .onSnapshot((serverUpdate) => {
        const firebaseThreads = serverUpdate.docs.map((item) => {
          let data = item.data();
          data.id = item.id;
          return data;
        });
        setThreadPosts(firebaseThreads);
      });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header
            chan="The Forum"
            desc="We cannot guarantee that your brain won't explode"
          />
          <ShowPostForm thread={true} />
          <main>
            <Threads threadArray={threadPosts} />
          </main>
        </Route>
        <Route path="/thread/:threadID">
          <Header
            chan="Bes's"
            desc="Don't tell me you expected some quirky text here"
          />
          <SingleThread />
        </Route>
      </Switch>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
        }}
      >
        <a href="https://github.com/Sebosun/anonymous-forum">
          <AiFillGithub color="black" size="2em" />
        </a>
      </div>
    </div>
  );
}
export default App;
