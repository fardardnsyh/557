import styles from "./ExpandThread.module.css";
import { BsBoxArrowInDown } from "react-icons/bs";

const ExpandThread = (props) => {
  return (
    <div className={styles.expandThread}>
      <div>{props.postNo - 3} posts omitted.</div>
      <BsBoxArrowInDown
        onClick={props.onClick}
        color="#00ff46"
        style={{ cursor: "pointer" }}
        size="1.5em"
      />
    </div>
  );
};

export default ExpandThread;
