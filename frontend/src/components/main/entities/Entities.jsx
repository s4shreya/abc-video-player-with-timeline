import styles from "./Entities.module.css";

const Entities = (props) => {
    // parsing the URL to display the image
  const thumbnailImageURL =
    "https://s3.ap-southeast-1.amazonaws.com/vod-static-files.sensara.tv/" +
    props.entity.url_cropped.substring(4);

  return (
    <div className={styles.card}>
      <img
        src={thumbnailImageURL}
        key={thumbnailImageURL}
        alt={props.entity.item_title}
        loading="lazy"
      />
      <p>Title: {props.entity.item_title}</p>
      <p>Type: {props.entity.item_type}</p>
      <p className={styles.emotions}>
        Emotions <br />
        {props.entity.emotion_profile.length === 0
          ? "No emotions present!"
          : props.entity.emotion_profile.map((emotion, index) => (
              <span key={index}>{emotion.item_id} </span>
            ))}
      </p>
    </div>
  );
};
export default Entities;
