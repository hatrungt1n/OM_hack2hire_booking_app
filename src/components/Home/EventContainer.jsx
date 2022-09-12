import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EventContainer = ({id, img, name}) => {
  return (
      <div className="h-full w-full p-4 rounded-2xl text-white bg-[#333333] flex flex-col items-center">
        <div className="h-[300px] w-full rounded-lg">
          <img
            src={img}
            alt=""
            className="bg-auto rounded-xl h-full w-full"
          />
        </div>
        <h1 className="mt-4 font-bold text-lg">{name}</h1>
        <Link to="/detail" state={{ _id: id }}>
          <Button
            variant="contained"
            fontWeight="fontWeightBold"
            style={{
              background: "#72A0C1",
              marginTop: "15px",
            }}
          >
            Buy Ticket
          </Button>
        </Link>
      </div>
  );
};

export default EventContainer;
