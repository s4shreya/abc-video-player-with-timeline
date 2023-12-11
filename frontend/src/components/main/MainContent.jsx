import { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../../config";
import VideoPlayer from "./VideoPlayer";
import Timeline from "./timeline/Timeline";

const baseURL = BASE_URL;

const MainContent = () => {
  const [loading, setLoading] = useState(false);
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
    <div>
      <VideoPlayer />
      {timelineData && <Timeline timelineItems={timelineData.timeline_items} />}
    </div>
  );
};
export default MainContent;
