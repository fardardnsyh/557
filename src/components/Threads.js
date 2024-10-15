import Thread from "./Thread";

const Threads = (props) => {
  return (
    <div className="Threads">
      {props.threadArray.map((thread) => {
        return (
          <Thread
            key={thread.id}
            id={thread.id}
            postNo={thread.postNo}
            title={thread.title}
            time={thread.created}
            text={thread.text}
            image={thread.image}
            user={thread.user}
          />
        );
      })}
    </div>
  );
};

export default Threads;
