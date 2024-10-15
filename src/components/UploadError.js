import styles from "./UploadError.module.css";

const UploadError = () => {
  return (
    <div className={styles.uploadError}>
      <p className={styles.message}>Please upload an image file</p>
    </div>
  );
};

export default UploadError;
