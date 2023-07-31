import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Alert, Button, MenuProps, Space } from "antd";
import { Menu } from "antd";
import { FaExclamation } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { DispatchType, RootState } from "../../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { thanhToan } from "../../../redux/dataReducer/dataReducer";
import { gql, useQuery, useMutation } from '@apollo/client';

import emailjs from '@emailjs/browser';

type Props = {};
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),

  { type: "divider" },
];
export default function Summary({ }: Props) {
  const arrUser = useSelector((state: RootState) => state.testData.arrInfoUser)
  const dispatch: DispatchType = useDispatch();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const [urlPayment, setUrlPayment] = useState('')

  const fetchAPi = async () => {
    
    try {
      const response = await fetch('http://localhost:3002/momo-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: '500000',
          orderInfo: 'pay with MoMo',
        }),
      });

      const data = await response.json();
      // console.log('data post', data);
      await setUrlPayment(data)
      // Xử lý kết quả từ MoMo API trong client ReactJS
      // ...
    } catch (error) {
      console.error(error);
    }

  }

  

  const data = useSelector((state: RootState) => state.testData.test);

  console.log("data", data);

  const handleSubmitThanhToan = async () => {
    const cashier_name = 'Nguyen Thi A'

    

    
    
    await dispatch(thanhToan({
      cashier_name, arrUser, urlPayment
    }));
    

   
     
  };
  
  const [isCheck, isSetCheck] = useState(false);

  return (
    <div className="summary">
      {/* <Menu
        onClick={onClick}
        style={{ width: 820 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      /> */}
      <div className="Arlet">
        <div className="Arlet-top">
          <div className="drop-down">
            <div className="drop-down_top">
              <div className="title">
                <p>Giá bạn trả</p>
              </div>
              <div className="price">
                <p>7.600.000 VND</p>
                <img
                  // className="arow-up"
                  style={{ transitionDuration: "0.25s" }}
                  className={
                    "arow-up rotate-180" + (!isCheck ? "" : "rotate-180")
                  }
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/322a2293096022a2982555f2d101f8ec.svg"
                  alt=""
                  onClick={() => {
                    isSetCheck((isCheck) => !isCheck);
                    console.log(isCheck);
                  }}
                />
              </div>
            </div>
            <hr />
            <div
              className={
                "drop-down_bottom  hidden" + (!isCheck ? "" : "hidden")
              }
            >
              <div className="drop-down_bottom_hidden">
                <div className="title">
                  <p>VietJet Air (Người lớn) x1</p>
                </div>
                <div className="price">
                  <p>7.600.000 VND</p>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-title-primary">
            <img
              style={{
                position: "absolute",
                top: "12px",
                left: "25px",
              }}
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e56c74f2a3f73a0aab4442d5cc375ec5.svg"
              alt=""
            />
            <p>
              Đăng nhập hoặc Đăng ký để tích ngay điểm thưởng! Bạn có thể tiếp
              tục đặt chỗ sau vì tiến trình đã được lưu trên hệ thống.
            </p>
            <input type="submit" value="Đăng nhập" />
          </div>
        </div>
        <div className="icon-title-danger">
          <img
            style={{ width: "16px" }}
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/be72ed0a162cefe572c2c6dae0b99733.svg"
            alt=""
          />
          <p>
            Trước khi đặt vé, hãy đảm bảo rằng bạn có thể đáp ứng tất cả các yêu
            cầu đi lại theo quy định của cơ quan quản lý khu vực và quốc gia.
            Kiểm tra các yêu cầu đầy đủ bằng cách nhấn vào liên kết bên dưới.
          </p>
          <input type="submit" value="Chi tiết yêu cầu" />
        </div>
      </div>

      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Thanh toán
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">Bạn có chắc muốn thanh toán</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary text-black"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary text-black"
                onClick={handleSubmitThanhToan}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right">
        {" "}
        <button
          onClick={() => {
            // console.log('arr user', arrUser)
           fetchAPi()
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          // onClick={() => {
          //   alert("dat ve");
          // }}
          className="btn btn-primary px-20 text-white font-bold bg-orange-700 "
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}
