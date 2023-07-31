import React from "react";
import { Button, Layout, Space } from "antd";

import {
  BsArrowLeftRight,
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsFillAirplaneEnginesFill,
} from "react-icons/bs";
import { IoMdAirplane } from "react-icons/io";
import { BiBookBookmark, BiBookHeart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
  display: "flex",
  justifyContent: "space-around",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

type Props = {};

export default function DetailBooking({}: Props) {
  const price = useSelector((state: RootState) => state.testData.price);
  const airName = useSelector((state: RootState) => state.testData.name_flight);
  const departureTime = useSelector(
    (state: RootState) => state.testData.depature_time
  );
  const landTime = useSelector((state: RootState) => state.testData.arrival_time);
  // const priceReturn = useSelector(
  //   (state: RootState) => state.testData.prive
  // );
  const airNameReturn = useSelector(
    (state: RootState) => state.testData.name_flight_retunr
  );
  const departureTimeReturn = useSelector(
    (state: RootState) => state.testData.depature_time_retunr
  );
  const landTimeReturn = useSelector(
    (state: RootState) => state.testData.arrival_time_retunr
  );
  return (
    <div id="main-detail">
      <div className="infor-travel">
        <div className="name-travel">
          <IoMdAirplane
            style={{
              display: "inline-block",
              fontSize: "30",
              color: "#1aa3ff",
            }}
          />
          <p> TP HCM ⇄ Tokyo</p>
        </div>
        <div className="btn-detail">
          <input type="submit" value="Chi tiết" />
        </div>
      </div>
      <hr />
      <div className="infor-Detail">
        <div className="list-travel">
          <div className="list-travel_name pb-4">
            <h4>Chuyến bay đi • Fri, 07 Apr 2023</h4>
          </div>
          <div className="list-travel_airline">
            <div className="travel_airline-icon">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2022/11/29/1669692919958-81f0c812fcaa9551ef47319232a413c0.png?tr=h-20,q-75"
                alt=""
              />
            </div>
            <div className="travel_airline-name">
              <h4>{airName}</h4>
              <p>Khuyến mãi</p>
            </div>
          </div>
        </div>
        <div className="time-travel">
          <div className="time-travel_left">
            <p className="mb-2">{departureTime}</p>
            <p className="time-travel_address">SGN</p>
          </div>
          <div className="time-travel_middle">
            <p className="mb-2">6h 20m</p>
            <hr />
            <div className="time-travel_middle_direction mt-2">Bay thẳng</div>
          </div>
          <div className="time-travel_right">
            <p className="mb-2">
              {landTime}
              <span>(+1d)</span>
            </p>
            <p className="time-travel_address">NRT</p>
          </div>
        </div>
        <div className="policy-travel">
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/cb44d8f687512efb3aa32c7b6f46d9ab.svg"
            alt=""
          />
          <p className="exclamation">Chính sách hoàn ltiền không xác định.</p>
          <br />
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0451207408e414bb8a1664153973b3c8.svg"
            alt=""
          />
          <p className="check">Có áp dụng đổi lịch bay.</p>
        </div>
      </div>
      <hr />
      <div className="infor-Detail">
        <div className="list-travel">
          <div className="list-travel_name pb-4">
            <h4>Chuyến bay về • Fri, 07 Apr 2023</h4>
          </div>
          <div className="list-travel_airline">
            <div className="travel_airline-icon">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2022/11/29/1669692919958-81f0c812fcaa9551ef47319232a413c0.png?tr=h-20,q-75"
                alt=""
              />
            </div>
            <div className="travel_airline-name">
              <h4>{airNameReturn}</h4>
              <p>Khuyến mãi</p>
            </div>
          </div>
        </div>
        <div className="time-travel">
          <div className="time-travel_left">
            <p className="mb-2">{departureTimeReturn}</p>
            <p className="time-travel_address">SGN</p>
          </div>
          <div className="time-travel_middle">
            <p className="mb-2">{landTimeReturn}</p>
            <hr />
            <div className="time-travel_middle_direction mt-2">Bay thẳng</div>
          </div>
          <div className="time-travel_right">
            <p className="mb-2">
              07:40<span>(+1d)</span>
            </p>
            <p className="time-travel_address">NRT</p>
          </div>
        </div>
        <div className="policy-travel">
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/cb44d8f687512efb3aa32c7b6f46d9ab.svg"
            alt=""
          />
          <p className="exclamation">Chính sách hoàn ltiền không xác định.</p>
          <br />
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0451207408e414bb8a1664153973b3c8.svg"
            alt=""
          />
          <p className="check">Có áp dụng đổi lịch bay.</p>
        </div>
      </div>
    </div>
  );
}
