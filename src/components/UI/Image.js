import { useState } from "react";
import styles from "./Image.module.css";

const Image = (props) => {
  const [imgSize, setImgSize] = useState({
    maxHeight: "15vh",
  });

  const handleImageSize = () => {
    if (imgSize.maxHeight === "15vh") {
      setImgSize({
        maxHeight: "45vh",
      });
    } else {
      setImgSize({
        maxHeight: "15vh",
      });
    }
  };
  return (
    <img
      alt=""
      onClick={handleImageSize}
      src={props.src}
      className={styles.postImage}
      style={imgSize}
    ></img>
  );
};

export default Image;
