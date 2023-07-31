import React from "react";
import HeaderInfoComponent from "../components/bookingInformationComponent/HeaderInfoComponent";
import SgLogin from "../components/bookingInformationComponent/SgLogin";
import DetailBooking from "../components/bookingInformationComponent/DetailBooking";
import InfoPerson from "../components/bookingInformationComponent/InfoPerson";

type Props = {};

export default function BookingInformation({ }: Props) {
  return (
    <div>
      <HeaderInfoComponent />

      <div style={{ backgroundColor: "rgb(247, 249, 250)" }} >
        <div
          className="row containerHome"
        >
          <div className="mb-4">
            <h2 className='mt-4  text-2xl font-bold	'>Đặt chỗ của tôi</h2>
            <p className='text-zinc-400	text-base'>Điền thông tin và xem lại đặt chỗ.</p>
          </div>
          <div className="col-8">
            <SgLogin />
            {/* <hr /> */}
            <InfoPerson />
          </div>
          <div className="col-4">
            <DetailBooking />
          </div>
        </div>
      </div>
    </div>
  );
}
