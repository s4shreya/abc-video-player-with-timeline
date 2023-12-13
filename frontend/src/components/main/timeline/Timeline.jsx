import { useState, useRef } from "react";

import { FaCircleLeft } from "react-icons/fa6";
import { FaCircleRight } from "react-icons/fa6";
import TimelineCard from "./TimelineCard";
import styles from "./Timeline.module.css";

const Timeline = (props) => {
  let scrollRef = useRef(null);
  const [scrollLeftEnd, setScrollLeftEnd] = useState(false);

  const timelineItemsArray = props.timelineItems;
  const seekToPositionHandler = props.seekToPositionHandler;

  const horizontalScrollHandler = (steps) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      scrollRef.current.scrollLeft += steps;
      scrollAmount += Math.abs(steps);
      if (scrollAmount >= 100) {
        clearInterval(slideTimer);
      }
      if (scrollRef.current.scrollLeft === 0) {
        setScrollLeftEnd(true);
      } else {
        setScrollLeftEnd(false);
      }
    }, 80);
  };

  return (
    <div className={styles["timeline-container"]}>
      <button
        onClick={() => {
          horizontalScrollHandler(-500);
        }}
        className={styles["scroll-left-button"]}
        disabled={scrollLeftEnd}
      >
        <FaCircleLeft />
      </button>
      <div ref={scrollRef} className={styles["card-container"]}>
        {timelineItemsArray.map((data, index) => (
          <TimelineCard
            key={index}
            data={data}
            seekToPositionHandler={seekToPositionHandler}
          />
        ))}
      </div>
      <button
        onClick={() => {
          horizontalScrollHandler(500);
        }}
        className={styles["scroll-right-button"]}
      >
        <FaCircleRight />
      </button>
    </div>
  );
};
export default Timeline;
