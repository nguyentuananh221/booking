import React from "react";
import InforPersionBookingComponent from "./inforPersionBookingComponent/InforPersionBookingComponent";
import FlightFacilities from "./flightFacilities/FlightFacilities";

import MoreWigets from "./moreWigets/MoreWigets";
import Summary from "./summary/Summary";
type Props = {};
export default function ConfirmInforPersion({ }: Props) {
  return (
    <div>
      <InforPersionBookingComponent />
      
      <div className="box-infor">
        <h2>Thông tin liên hệ</h2>
        <FlightFacilities></FlightFacilities>
      </div>
      <div className="box-widgets">
        <MoreWigets />

      </div>
      <Summary />
    </div>
  );
}
