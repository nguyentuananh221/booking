import { DatePicker, DatePickerProps, Space } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillBagCheckFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { GiEating } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineAddReaction } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { DispatchType } from "../../redux/configStore";
import { useDispatch } from "react-redux";
import { dataFromFlightReducer, dataFromFlightReturn, dataFromUserContactReducer } from "../../redux/dataReducer/dataReducer";
import moment from "moment";
import { dbName, storeName } from "../../App";
const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";

type Props = {};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        padding: "10px",
        position: "absolute",
        zIndex: "222",
        top: "-10%",
        right: "-60px",
        borderRadius: "50%",
      }}
      className="cursor-pointer block"
      onClick={onClick}
    >
      <svg width={25} height={25} viewBox="0 0 16 16" className=" r-1p6iasa">
        <g transform="scale(1,1)" fill="none" fillRule="evenodd">
          <rect width={16} height={16} />
          <polyline
            stroke="#0194f3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            points="6 3 11 8 6 13"
          />
        </g>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        padding: "10px",
        position: "absolute",
        zIndex: "222",
        top: "-10%",
        left: "-60px",
        borderRadius: "50%",
      }}
      className="cursor-pointer block"
      onClick={onClick}
    >
      <svg width="25" height="25" viewBox="0 0 16 16" className=" r-1p6iasa">
        <g transform="scale(1,1)" fill="none" fill-rule="evenodd">
          <rect width="16" height="16"></rect>
          <polyline
            stroke="#0194f3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            points="10 3 5 8 10 13"
          ></polyline>
        </g>
      </svg>
    </div>
  );
}

export default function FlightReturnDetailComponent({ }: Props) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    // centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const dispatch: DispatchType = useDispatch()

  const handleSubmit = async () => {
    dispatch(dataFromFlightReturn({
      name_flight_return: 'VietNam Airline',
      price_return: '2.517.000',
      fligth_type: 'bay về',
      depature_airport_return: 'Nội Bài',
      arrival_airport_return: 'Tân Sơn Nhất',
      depature_time_return: '06:25',
      arrival_time_return: '07:50',
      flight_create_at_return: moment().format('DD/MM/YYYY'),
      flight_update_at_return: '',
      flight_status_return: 'active'
    }))

    const request = indexedDB.open(dbName, 1);

    request.onerror = (e: any) => {
      console.log('err')
    }

    request.onsuccess = function (event: any) {
      console.log('thanh cong create index db')
      const db = event.target.result;

      // // Add a product to the object store
      const flightDetail = {
        id: 'id_fromFlightReturn',
        name_flight_return: 'VietNam Airline',
        price_return: '2.517.000',
        fligth_type: 'bay về',
        depature_airport_return: 'Nội Bài',
        arrival_airport_return: 'Tân Sơn Nhất',
        depature_time_return: '06:25',
        arrival_time_return: '07:50',
        flight_create_at_return: moment().format('DD/MM/YYYY'),
        flight_update_at_return: '',
        flight_status_return: 'active'
      }

      const transaction = db.transaction([storeName], 'readwrite');

      const objectStore = transaction.objectStore(storeName);

      objectStore.put(flightDetail);


    };

  }

  const [activeCls, setActiveCls] = useState(1);
  const activeClass = "bg-blue-100";
  const handleClick = (id: number) => {
    setActiveCls(id);
  };
  return (
    <div className="flightDetailComponent">
      <div className="dateAndPrice">
        <div className="dateTop overflow-hidden m-0 w-full bg-gray-50 row justify-between rounded-t-lg">
          <div
            className="col  bg-white p-6 rounded-r-full pr-6  mr-4"
            style={{ boxShadow: "2px 0px 6px 0px #00000029" }}
          >
            <p className="text-base font-bold mb-2">
              Đà Nẵng (DAD) → TP HCM (SGN)
            </p>
            <p className="text-gray-500 font-medium">
              Thứ 5, 13 thg 4 2023 | 1 hành khách | Thương gia
            </p>
          </div>
          <div className="col-3 p-6 bg-gray-50 flex items-center justify-center">
            <button className="btn btn-primary font-bold">Đổi tìm kiếm</button>
          </div>
        </div>
        <div
          className="priceBottom "
          style={{ boxShadow: "0px 0px 6px 0px #00000029", marginTop: "2px" }}
        >
          <div className="row m-0 w-full bg-white justify-between items-center">
            <div className="col-11 flex justify-center items-center px-12 ">
              <div className="container">
                {/* carousel */}
                <div>
                  {/* <h2>Custom Arrows</h2> */}
                  <Slider {...settings}>
                    <div className="">
                      <h3
                        onClick={() => {
                          handleClick(1);
                        }}
                        className={`m-1 p-2 rounded-sm cursor-pointer ${activeCls === 1 ? activeClass : ""
                          }`}
                      >
                        <div>
                          <p className="text-center font-semibold text-gray-600">
                            Thứ 3, 4 th 4
                          </p>
                          <p className="text-blue-500 text-xs text-center">
                            Xem giá
                          </p>
                        </div>
                      </h3>
                    </div>

                    <div className="">
                      <h3
                        onClick={() => {
                          handleClick(2);
                        }}
                        className={`m-1 p-2 rounded-sm cursor-pointer ${activeCls === 2 ? activeClass : ""
                          }`}
                      >
                        <div>
                          <p className="text-center font-semibold text-gray-600">
                            Thứ 4, 5 th 4
                          </p>
                          <p className="text-blue-500 text-xs text-center">
                            Xem giá
                          </p>
                        </div>
                      </h3>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.16) -2px -2px 6px 0px" }}
              className="col-1 bg-white flex items-center justify-center"
            >
              <BsFillCalendarCheckFill className="text-xl text-blue-500 p-2 w-10 h-16 text-xl" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-7" />
      <div className="detail">
        <p className="font-bold text-sm">Tất cả các chuyến bay</p>
        <div
          className="p-4 rounded-md my-3 bg-white"
          style={{ border: "1px solid rgb(217, 152, 0)" }}
        >
          <p className="text-right font-semibold text-yellow-600">
            Bán chạy nhất
          </p>
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/19/1582084897287-d2de240a06eac5e3a70126425b62ee0b.png?tr=q-75,w-28"
              alt=""
            />
            <p className="font-medium text-base ml-2">Bamboo Airways</p>
          </div>
          {/* price */}
          <div className="flex justify-end">
            <div className="text-right">
              <p className="line-through text-gray-500 font-bold text-sm">
                3.052.000 VND /khách
              </p>
              <p className="font-bold text-xl text-orange-600">2.517.000 VND</p>
              <p className="font-bold text-gray-500">/khách</p>
            </div>
          </div>
          {/* detail */}
          <div className="row">
            <div className="col left">
              <div className="row">
                <div className="col text-center">
                  <p className="font-medium text-base mb-2">06:25</p>
                  <p className="inline-block py-1 px-2 bg-gray-200 rounded-3xl font-medium text-gray-500">
                    DAD
                  </p>
                </div>
                <div className="col text-center">
                  <p className="font-medium text-sm text-gray-500 ">1h 35m</p>
                  <hr className="my-1" />
                  <p className="font-medium text-sm text-gray-500">Bay thẳng</p>
                </div>

                <div className="col text-center">
                  <p className="font-medium text-base mb-2">07:50</p>
                  <p className="inline-block py-1 px-2 bg-gray-200 rounded-3xl font-medium text-gray-500">
                    SGN
                  </p>
                </div>
                <div className="col text-center">
                  <p className="font-medium text-base mb-2 text-blue-400 flex">
                    <BsFillBagCheckFill className="mr-3 text-xl" />{" "}
                    <GiEating className="mr-3 text-xl" />{" "}
                    <MdOutlineAddReaction className="mr-3 text-xl" />
                  </p>
                  {/* <p className='inline-block py-1 px-2 bg-gray-200 rounded-3xl font-medium text-gray-500'>SGN</p> */}
                </div>
              </div>
            </div>
            <div className="col right text-right">
              <p className=" mt-2 inline-block rounded-3xl py-2 px-1 text-green-700 bg-green-100 font-medium">
                Giảm giá lớn hơn
              </p>
            </div>
          </div>
          <div className="text-right" onClick={handleSubmit}>
            <NavLink
              to="/info"
              className="bg-orange-600 text-white py-2 px-20 rounded-lg outline-none border-none"
            >
              Chọn
            </NavLink>
          </div>
          <div className="mt-2">
            <p className="font-bold text-sm inline-block mr-8 text-blue-500">
              Chi tiết chuyến bay
            </p>
            <p className="font-bold text-sm inline-block mr-8 text-blue-500">
              Giá vé & Quyền lợi
            </p>
            <p className="font-bold text-sm inline-block mr-8 text-blue-500">
              Hoàn tiền
            </p>
            <p className="font-bold text-sm inline-block mr-8 text-blue-500">
              Khuyến mại có sẵn
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div >
  );
}
