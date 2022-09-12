import React, { Component } from "react";
import "./seats.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SeatPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      seat: [
        "x1",
        "x2",
        "x3",
        "x4",
        "x5",
        "x6",
        "x7",
        "y1",
        "y2",
        "y3",
        "y4",
        "y5",
        "y6",
        "y7",
        "z1",
        "z2",
        "z3",
        "z4",
        "z5",
        "z6",
        "z7",
      ],
      seatAvailable: [
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "B6",
        "B7",
        "C1",
        "C2",
        "C3",
        "C4",
        "C5",
        "C6",
        "C7",
      ],
      seatReserved: [],
      seatSelected: ["x7", "y7", "z7"],
    };
  }

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter((res) => res != seat),
        //seatSelected: this.state.seatSelected.filter(res => res != seat)
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        //seatSelected: this.state.seatSelected.concat(seat),
        seatAvailable: this.state.seatAvailable.filter((res) => res != seat),
      });
    }
  }
  checktrue(row) {
    if (this.state.seatSelected.indexOf(row) > -1) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmited() {
    this.setState({
      seatSelected: this.state.seatSelected.concat(this.state.seatReserved),
    });
    this.setState({
      seatReserved: [],
    });
    toast.success(
      `🦄 Done! You've bought ${this.state.seatReserved.length} ticket`,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }

  render() {
    return (
      <div>
        <h1 className="title pt-10">Seat Booking</h1>
        <div className="flex justify-center py-10 border-2 mb-20 mt-5">
          <h1 className="text-xl font-medium">Stage</h1>
        </div>
        <DrawGrid
          seat={this.state.seat}
          available={this.state.seatAvailable}
          reserved={this.state.seatReserved}
          selected={this.state.seatSelected}
          onClickData={this.onClickData.bind(this)}
          checktrue={this.checktrue.bind(this)}
          handleSubmited={this.handleSubmited.bind(this)}
        />
      </div>
    );
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
      <div className="pt-10">
        <h2 />
        <table className="grid">
          <tbody>
            <tr>
              {this.props.seat.map((row) => (
                <td
                  className={
                    this.props.selected.indexOf(row) > -1
                      ? "reserved"
                      : this.props.reserved.indexOf(row) > -1
                      ? "selected"
                      : "available"
                  }
                  key={row}
                  onClick={
                    this.props.checktrue(row)
                      ? (e) => this.onClickSeat(row)
                      : null
                  }
                >
                  {row}{" "}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <div className="flex gap-10 pt-5 justify-end pr-10">
          <div className="flex items-center gap-4">
            <div className="h-6 w-6 bg-[orange]"></div>
            Booked
          </div>
          <div className="flex items-center gap-4">
            <div className="h-6 w-6 bg-[red]"></div>
            Select
          </div>
          <div className="flex items-center gap-4">
            <div className="h-6 w-6 bg-[#BDB7B7]"></div>
            Available
          </div>
        </div>
        <div className="flex justify-end pr-10 py-10">
          <button
            type="button"
            className="bg-blue-200 px-10 py-4 rounded-xl"
            onClick={() => this.props.handleSubmited()}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
export default SeatPicker;
