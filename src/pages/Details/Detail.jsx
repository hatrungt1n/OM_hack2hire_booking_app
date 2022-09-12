import * as React from "react";
import { useLocation } from "react-router-dom";
import SeatPicker from "../../components/Home/SeatPicker";

function Detail({ showData, seatData }) {
  const location = useLocation();
  const id = location.state._id;

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="cont">
      {showData.map((show) => {
        if (id === show.show_id) {
          return (
            <div className="flex flex-col h-screen">
              <div className="h-[80%] w-full rounded-lg">
                <img
                  src={show.image_url}
                  alt=""
                  className="bg-auto rounded-xl h-full w-full"
                />
              </div>
              <div className="h-[20%]">
                {seatData.map((seat) => {
                  if (id === seat.show_id) {
                    return <SeatPicker seatData={seat} />;
                  }
                })}
                <SeatPicker seatData={seatData} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Detail;
