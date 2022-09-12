import React from "react";
import Events from "../../components/Home/AllTour/Events";

const AllTour = ({ showData }) => {
  return (
    <div>
      <h1 className="title">All Event</h1>
      <Events showData={showData} />
    </div>
  );
};

export default AllTour;
