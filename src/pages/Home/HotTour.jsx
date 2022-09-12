import React from "react";
import Events from "../../components/Home/HotTour/Events";

const HotTour = ({ showData }) => {
  return (
    <div>
      <h1 className="title">Hot Event</h1>
      <Events showData={showData} />
    </div>
  );
};

export default HotTour;
