import { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../../config";
import VideoPlayer from "./VideoPlayer";
import styles from "./MainContent.module.css";
import Loading from "./Loading";
import VideoDescription from "./description/VideoDescription";

const baseURL = BASE_URL;

const MainContent = () => {
  const [loading, setLoading] = useState(true);
  const [timelineData, setTimelineData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((res) => {
        setTimelineData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(`Error found! ${error.message}`);
      });
  }, []);

  return (
    <div className={styles["main-container"]}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <VideoPlayer timelineItems={timelineData.timeline_items} />
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
