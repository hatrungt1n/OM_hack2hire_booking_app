import React from "react";
import EventContainer from "../EventContainer";

const Events = ({ showData }) => {
  return (
    <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 py-10">
      {showData.slice(0, 9).map((data) => {
        return (
          <EventContainer
            name={data.name}
            id={data.show_id}
            img={data.image_url}
          />
        );
      })}
    </div>
  );
};

export default Events;
