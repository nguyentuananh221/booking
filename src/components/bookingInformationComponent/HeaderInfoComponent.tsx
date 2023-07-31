import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function HeaderInfoComponent({ }: Props) {
  return (
    <div style={{ boxShadow: "0px 2px 5px rgba(3,18,26,0.15)" }}>
      <div className="container flex justify-between items-center	py-2" style={{ maxWidth: 1280 }}>
        <NavLink to="/">
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"
            alt=""
          />
        </NavLink>
        <div className="flex">
          <div className="flex items-center">
            <p className="rounded-full bg-sky-600	 stateBooking mr-2 text-white">1</p>
            <span style={{ color: 'rgba(104,113,118,1.00)' }} >Đặt</span>
            <div className="dashBardHeader"></div>
          </div>
          <div className="flex items-center">
            <p className="rounded-full bg-stone-500	 stateBooking mr-2 text-white">2</p>
            <span style={{ color: 'rgba(104,113,118,1.00)' }}>Xem lại</span>
            <div className="dashBardHeader"></div>
          </div>
          <div className="flex items-center">
            <p className="rounded-full bg-stone-500	 stateBooking mr-2 text-white">3</p>
            <span style={{ color: 'rgba(104,113,118,1.00)' }}>Thanh toán</span>
            <div className="dashBardHeader"></div>
          </div>
          <div className="flex items-center">
            <p className="rounded-full bg-stone-500	 stateBooking mr-2 text-white">4</p>
            <span style={{ color: 'rgba(104,113,118,1.00)' }}>Vé điện tử</span>
          </div>
        </div>
      </div>
    </div>
  );
}
