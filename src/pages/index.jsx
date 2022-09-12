import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Details/Detail";
import ConfigEnv from "./ConfigEnv";
import { getSeatsAPI, getShowsAPI } from "../apis";

function MainRoutes() {
  const [showData, setShowData] = React.useState([]);
  const [seatData, setSeatData] = React.useState([]);

  React.useEffect(() => {
    const callApi = async () => {
      try {
        const show = await getShowsAPI();

        for (let i = 1; i <= 20; i++) {
          const seat = await getSeatsAPI(i);
          setSeatData(seat.data.seat_list);
        }

        setShowData(show.data.shows);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    callApi();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home showData={showData} />} />
      <Route path="/detail" element={<Detail showData={showData} seatData={seatData} />} />
      <Route path="/config-env" element={<ConfigEnv />} />
    </Routes>
  );
}

export default MainRoutes;
