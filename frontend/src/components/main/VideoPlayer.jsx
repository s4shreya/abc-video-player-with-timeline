import ReactPlayer from "react-player";

import videoThumbnail from '../../images/video_thumbnail.jpg';
import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
  return (
    <div>
      VideoPlayer
      <ReactPlayer
        url="https://s3.ap-southeast-1.amazonaws.com/vod-static-files.sensara.tv/videos/Avengers.mp4"
        controls
        playing
        light={videoThumbnail}
        className={styles.player}
      />
    </div>
  );
};
export default VideoPlayer;
