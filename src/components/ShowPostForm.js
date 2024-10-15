import { useState } from "react";
import PostForm from "./PostForm";
import Roller from "./UI/Roller";
import Button from "./UI/Button";
import styles from "./ShowPostForm.module.css";

// Receives an optional props.id, if thread is true, forwards the post form with na id to
// the PostForm.
// If it has post.id and thread is set to true, PostForm knows it's a reply.
// It takes post.id and uses it to add a reply to a particular thread
function ShowPostForm(props) {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function openCloseForm() {
    setShowForm((prevState) => !prevState);
  }

  const onSubmit = () => {
    setIsLoading((prev) => !prev);
  };

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Roller />
      </div>
    );
  } else {
    return (
      <div>
        {showForm ? (
          <div>
            <PostForm
              openCloseForm={openCloseForm}
              id={props.id}
              thread={props.thread}
              onSubmit={onSubmit}
            />
            <div className={styles.showButton}>
              <Button onClick={openCloseForm}>Close</Button>
            </div>
          </div>
        ) : (
          <div className={styles.showButton}>
            <Button onClick={openCloseForm}>
              {`${props.thread ? "Start a new thread" : "Add a reply"}`}
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default ShowPostForm;
