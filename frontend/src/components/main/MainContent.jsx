import { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../../config";
import VideoPlayer from "./VideoPlayer";
import styles from "./MainContent.module.css";
import Loading from "./Loading";
import VideoDescription from "./description/VideoDescription";
import Entities from "./entities/Entities";

// storing server URL to fetch timeline json data
const baseURL = BASE_URL;

const MainContent = () => {
  const [loading, setLoading] = useState(true);
  const [timelineData, setTimelineData] = useState(null);
  const [sortedTimelineItems, setSortedTimelineItems] = useState([]);
  const [displayEntities, setDisplayEntities] = useState(false);
  const [timeStamp, setTimeStamp] = useState(0);

  // fetching timeline data and updating the setTimelineData state
  // to store the timeline JSON data
  useEffect(() => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((res) => {
        setTimelineData(res.data);

        let arr = [...res.data.timeline_items];
        arr.sort((a, b) => a.offset_seconds - b.offset_seconds);
        setSortedTimelineItems(arr);

        setLoading(false);
      })
      .catch((error) => {
        console.log(`Error found! ${error.message}`);
      });
  }, []);

  // updates the state with the latest entities sent when clicked
  // on particular timeline
  const displayEntitiesHandler = (entities, offsetTime) => {
    setDisplayEntities(entities);
    setTimeStamp(offsetTime);
  };

  return (
    <div className={styles["main-container"]}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {sortedTimelineItems && (
            <VideoPlayer
              // timelineItems={timelineData.timeline_items}
              timelineItems={sortedTimelineItems}
              displayEntitiesHandler={displayEntitiesHandler}
            />
          )}
          {displayEntities && (
            <>
              <h3 className={styles["timestamp-heading"]}>
                Time stamp:{" "}
                {timeStamp[0] > 1
                  ? `${timeStamp[0]} hours `
                  : `${timeStamp[0]} hour `}
                {timeStamp[1] > 1
                  ? `${timeStamp[1]} minutes `
                  : `${timeStamp[1]} minute `}
                {timeStamp[2] > 1
                  ? `${timeStamp[2]} seconds `
                  : `${timeStamp[2]} second `}
              </h3>
              <div className={styles["entities-container"]}>
                {displayEntities.map((entity, index) => (
                  <Entities key={index} entity={entity} />
                ))}
              </div>
            </>
          )}
          <VideoDescription
            title={timelineData.cms_title_display}
            duration={timelineData.duration}
            episodeNo={timelineData.item_title}
            itemCount={timelineData.timeline_items.length}
          />
        </>
      )}
    </div>
  );
};
export default MainContent;
