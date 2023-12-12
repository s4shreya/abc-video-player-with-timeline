import { useState, useRef } from "react";

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
    }, 25);
  };

  return (
    <>
      <div className={styles["button-container"]}>
        <button
          onClick={() => {
            horizontalScrollHandler(-10);
          }}
          disabled={scrollLeftEnd}
        >
          Left
        </button>
        <button
          onClick={() => {
            horizontalScrollHandler(10);
          }}
        >
          Right
        </button>
      </div>
      Timeline
      <div ref={scrollRef} className={styles["img-container"]}>
        {timelineItemsArray.map((data) => (
          <TimelineCard
            data={data}
            seekToPositionHandler={seekToPositionHandler}
          />
        ))}
      </div>
    </>
  );
};
export default Timeline;
