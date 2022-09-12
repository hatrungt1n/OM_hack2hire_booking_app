import * as React from "react";
import SearchEvent from "../../components/Home/SearchEvents";
import HotTour from "./HotTour";
import AllTour from "./AllTour";

function Home({ showData }) {
  return (
    <div>
      <div className="cont mt-[10%]">
        <SearchEvent showData={showData} />
      </div>
      <div className="cont">
        <HotTour showData={showData} />
      </div>
      <div className="cont">
        <AllTour showData={showData} />
      </div>
    </div>
  );
}

export default Home;
