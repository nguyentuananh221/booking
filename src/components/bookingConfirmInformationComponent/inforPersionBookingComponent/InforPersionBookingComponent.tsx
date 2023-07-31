import React from "react";
import InforContactBooking from "./InforContactBooking";
import InforContactPersionBooking from "./InforContactPersionBooking";
// import './index.css'
type Props = {};

export default function InforPersionBookingComponent({}: Props) {
  return (
   <>
   <InforContactBooking/>
   <InforContactPersionBooking/>
   </>
  );
}
