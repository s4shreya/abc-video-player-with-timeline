import ReactPlayer from "react-player";
import { useRef } from "react";

import videoThumbnail from "../../images/video_thumbnail.jpg";
import styles from "./VideoPlayer.module.css";
import Timeline from "./timeline/Timeline";

const VideoPlayer = (props) => {
  // referencing react player to get the data
  const videoPlayerRef = useRef(null);

  const timelineItems = props.timelineItems;

  // Function to seek to the given time in the video
  const seekToPositionHandler = (position, entities, offsetTime) => {
    videoPlayerRef.current.seekTo(position);
    props.displayEntitiesHandler(entities, offsetTime);
  };

  return (
    <div>
      <div className={styles["player-wrapper"]}>
        <ReactPlayer
          ref={videoPlayerRef}
          url="https://s3.ap-southeast-1.amazonaws.com/vod-static-files.sensara.tv/videos/Avengers.mp4"
          controls
          playing
          preload="auto"
          light={videoThumbnail}
          className={styles.player}
          width="100%"
          height="100%"
          
        />
      </div>
      <Timeline
        timelineItems={timelineItems}
        seekToPositionHandler={seekToPositionHandler}
      />
    </div>
  );
};
export default VideoPlayer;
