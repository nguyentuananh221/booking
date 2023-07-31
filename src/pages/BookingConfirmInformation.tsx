import React from "react";
import HeaderInfoComponent from "../components/bookingInformationComponent/HeaderInfoComponent";
import SgLogin from "../components/bookingInformationComponent/SgLogin";
import DetailBooking from "../components/bookingInformationComponent/DetailBooking";
import ConfirmInforPersion from "../components/bookingConfirmInformationComponent/ConfirmInforPersion";

type Props = {};

export default function BookingConfirmInformation({ }: Props) {
  return (
    <div>
      <HeaderInfoComponent />
      <div className="containerHome">
        <div className="mb-4">
          <h2 className='mt-4 text-2xl font-bold	'>Đặt chỗ của tôi</h2>
          <p className='text-zinc-400	text-base'>Điền thông tin và xem lại đặt chỗ.</p>
        </div>
        <div className="row">
          <div className="col-8">
            <SgLogin />
            {/* <hr /> */}
            <ConfirmInforPersion />
          </div>
          <div className="col-4">
            <DetailBooking />
          </div>
        </div>
      </div>
    </div>
  );
}
