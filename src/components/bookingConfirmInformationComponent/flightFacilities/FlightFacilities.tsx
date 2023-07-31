import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";

type Props = {};

export default function FlightFacilities({}: Props) {
  return (
    <div className="infor">
      <div className="infor-contact">
        <div className="user-name">
          <h4>
            <BsFillBagCheckFill
              style={{
                color: "rgb(1, 148, 243)",
                fontSize: "20px",
                display: "inline-block",
                position: "absolute",
                top: "0",
                left: "-20",
              }}
            />{" "}
            Hành lý
          </h4>
        </div>
        <div className="btn-edit_detail">
          <input type="submit" value="Chọn hành lý"></input>
        </div>
      </div>
      <hr />
      <div className="user-contact">
        <div className="user-infor">
          <div className="lable-name lable-name-left">
            Sao bạn phải cố nhồi nhét? Thêm hành lý để chuyến đi thêm nhẹ nhàng.
          </div>
        </div>
        <div className="user-infor">
          <div className="lable-name lable-name-right">Bắt đầu từ</div>
          <p className="price">73.500 VND</p>
        </div>
      </div>
      <div className="infor-user"></div>
    </div>
  );
}
