import styles from "./VideoDescription.module.css";

const VideoDescription = (props) => {
  const duration = [
    parseInt(props.duration / 3600),
    parseInt((props.duration % 3600) / 60),
    parseInt(props.duration % 60),
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{props.title}</h3>

      <p>
        <span>
          {duration[0] > 1 ? `${duration[0]} Hrs ` : `${duration[0]} Hr `}
          {duration[1] > 1 ? `${duration[1]} Mins ` : `${duration[1]} Min `}
          {duration[2] > 1 ? `${duration[2]} Secs ` : `${duration[2]} Sec `}
        </span>
        <span>{props.episodeNo}</span>
      </p>
      <p className={styles.description}>
        Earth's Mightiest Heroes stand as the planet's first line of defense
        against the most powerful threats in the universe. The Avengers began as
        a group of extraordinary individuals who were assembled to defeat Loki
        and his Chitauri army in New York City.
      </p>
      <p>Total Timeline entities: {props.itemCount}</p>
    </div>
  );
};
export default VideoDescription;
