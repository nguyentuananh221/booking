import React from "react";
import AdsComponent from "../../components/flightTicketComponent/AdsComponent";
import FlightInforComponent from "../../components/flightTicketComponent/FlightInforComponent";
import FlightDetailComponent from "../../components/flightTicketComponent/FlightDetailComponent";
import FlightReturnDetailComponent from "../../components/flightTicketComponent/FlightReturnDetailComponent";

type Props = {};

export default function FlightTicketReturn({}: Props) {
  return (
    <div className="bg-gray-100">
      {/* <AdsComponent /> */}
      <div className="row container my-0 py-4 mx-auto">
        <div className="col-3 pl-0">
          <FlightInforComponent />
        </div>
        <div className="col-9 p-0">
          <FlightReturnDetailComponent />
        </div>
      </div>
    </div>
  );
}
