import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import Footer from "./components/footer/Footer";

const baseURL = BASE_URL;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [timelineData, setTimelineData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((res) => {
        console.log(`in app ${JSON.stringify(res.data.timeline_items)}`);
        setTimelineData(res.data);
      })
      .catch((error) => {
        console.log(`Error found! ${error.message}`);
      });
  }, []);

  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
