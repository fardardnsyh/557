import styles from "./HideElement.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

const HideElement = (props) => {
  return (
    <div onClick={props.onClick} className={styles.hideContainer}>
      <IoMdCloseCircleOutline className={styles.icon} color="#00ff46" />
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default HideElement;
