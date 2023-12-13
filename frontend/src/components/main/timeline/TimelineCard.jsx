import { useState } from "react";

import styles from "./TimelineCard.module.css";
import { FaPlay } from "react-icons/fa";
import Entities from "../entities/Entities";

const TimelineCard = (props) => {
  const data = props.data;
  const thumbnailImageURL =
    "https://s3.ap-southeast-1.amazonaws.com/vod-static-files.sensara.tv/" +
    data.image.substring(4);
  const offsetTime = [
    parseInt(data.offset_seconds / 3600),
    parseInt((data.offset_seconds % 3600) / 60),
    parseInt(data.offset_seconds % 60),
  ];

  const seekHandler = () => {
    props.seekToPositionHandler(data.offset_seconds, data.entities, offsetTime);
  };

  return (
    <div className={styles.card} onClick={seekHandler}>
      <img src={thumbnailImageURL} alt={data.entities[0].item_title} />
      <button className={styles["seek-button"]}>
        <FaPlay />
        {offsetTime[0] > 1
          ? `${offsetTime[0]} hours `
          : `${offsetTime[0]} hour `}
        {offsetTime[1] > 1
          ? `${offsetTime[1]} minutes `
          : `${offsetTime[1]} minute `}
        {offsetTime[2] > 1
          ? `${offsetTime[2]} seconds `
          : `${offsetTime[2]} second `}
      </button>
    </div>
  );
};
export default TimelineCard;
