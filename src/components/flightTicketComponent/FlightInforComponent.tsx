import React, { useState } from "react";
import { Col, MenuProps, RadioChangeEvent, Row } from "antd";
import { Checkbox, Slider, Dropdown, Space, Radio } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";

type Props = {};

const items: MenuProps["items"] = [
  {
    label: (
      <Radio value={1}>
        <div className="mb-1 text-sm pt-1 font-medium">Giá thấp nhất</div>
      </Radio>
    ),
    key: "0",
  },
  {
    label: (
      <Radio value={2}>
        <div className="mb-1 text-sm pt-1 font-medium">Giá thấp nhất</div>
      </Radio>
    ),
    key: "1",
  },
  {
    label: (
      <Radio value={3}>
        <div className="mb-1 text-sm pt-1 font-medium">Giá thấp nhất</div>
      </Radio>
    ),
    key: "2",
  },
  {
    label: (
      <Radio value={4}>
        <div className="mb-1 text-sm pt-1 font-medium">Giá thấp nhất</div>
      </Radio>
    ),
    key: "3",
  },
];
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

export default function FlightInforComponent({ }: Props) {

  

  const [isActive, setIsActive] = useState(false);
  const [isTimeFly, setIsTimeFly] = useState(false);
  const [islabel, setIsLabel] = useState(false);
  const [isUtilities, setIsUtilities] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isOption, setIsOption] = useState(false);
  const [isSwap, setIsSwap] = useState(false);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <div className="pb-6 sticky top-28 bg-white rounded-md z-50 shadow-md">
        <div className="w-full pt-3 px-4">
          <div className="text-base font-bold">Chuyến bay của bạn</div>
        </div>
        <hr className="my-3" />
        <div
          className="w-full px-4 flex mb-3"
          style={{ boxShadow: "0px 4px 10px rgba(3,18,26,0.15)" }}
        >
          <div
            className="m-auto rounded-full h-6 w-6 flex items-center justify-center"
            style={{ backgroundColor: "rgb(1, 148, 243)" }}
          >
            <p className="text-white font-bold">1</p>
          </div>
          <div className="my-3 w-11/12 ml-2">
            <div className="text-xs font-medium">Thứ 6, 7 thg 4 2023</div>
            <div className="text-base font-bold ">TP HCM → Tokyo</div>
          </div>
        </div>

        <div className="w-full px-4 flex">
          <div
            className="m-auto rounded-full h-6 w-6 flex items-center justify-center"
            style={{ backgroundColor: "rgb(1, 148, 243)" }}
          >
            <p className="text-white font-bold">2</p>
          </div>
          <div className="my-3 w-11/12 ml-2">
            <div className="text-xs font-medium">Thứ 6, 7 thg 4 2023 </div>
            <div className="text-base font-bold ">Tokyo → TP HCM</div>
          </div>
        </div>
      </div>

      <div className="pb-3 pt-6">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => { }}>
            <Space className="bg-white rounded-md flex justify-around pt-3 pb-3 px-4">
              <div className="flex w-96">
                <div className="m-auto">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="IcSystemToolSort"
                  >
                    <path
                      d="M3 6H15.5M3 12H12.5M3 18H9"
                      stroke="#687176"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M19 6V19.5M19 19.5L16.5 17M19 19.5L21.5 17"
                      stroke="#0194F3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="w-11/12">
                  <div className="text-base font-bold">Sắp Xếp:</div>
                  <div>Giá thấp nhất</div>
                </div>
              </div>
              <svg
                className="rotate-180"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcSystemChevronUp"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="#0194f3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Space>
          </a>
        </Dropdown>
      </div>

      <div className="pt-6">
        <span className="text-base font-bold">Bộ lọc:</span>
        <div className="bg-white rounded-md w-full cursor-pointer mt-4">
          <a className="border-y-8">
            <Space
              className="flex justify-around pt-3 pb-3 px-4"
              onClick={() => {
                setIsActive((isActive) => !isActive);
              }}
            >
              <div className="flex w-96">
                <div className="text-base font-bold pl-2">Điểm dừng</div>
              </div>
              <svg
                style={{ transitionDuration: "0.25s" }}
                className={"rotate-180" + (!isActive ? "" : "rotate-180")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcSystemChevronUp"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="#0194f3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Space>
            <div
              className={"pt-3 pb-3 px-3 hidden" + (!isActive ? "" : "hidden")}
              style={{ transitionDuration: "0.25s" }}
            >
              <div className="text-base font-bold pl-2">Số điểm dừng</div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Bay thẳng</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>1 điểm dừng</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>2+ transits</Checkbox>
                </span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <div className="text-base font-bold pl-2">
                  Thời gian quá cảnh
                </div>
                <div className="font-medium pt-1">0h - 22h</div>
              </div>
              <div>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[0, 22]}
                  min={0}
                  max={22}
                />
                <div className="flex justify-between">
                  <div className="font-medium">0h</div>
                  <div className="font-medium">22h</div>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <div className="text-base font-bold pl-2">
                  Điểm dừng quá cảnh
                </div>
                <div className="font-medium pt-1 text-blue-500">
                  Chọn tất cả
                </div>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Los Angeles (LAX)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Bangkok (BKK)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Hồng Kông (HKG)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Jakarta (CGK)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Đài Bắc (TPE)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Manila (MNL)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Hà Nội (HAN)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Seoul (ICN)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Luân Đôn (LHR)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Singapore (SIN)</Checkbox>
                </span>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <span className="font-medium">
                  <Checkbox onChange={onChange}>Doha (DOH)</Checkbox>
                </span>
              </div>
            </div>
          </a>
          <hr className="my-0" />
          <a className="border-y-8">
            <Space
              className="flex justify-around pt-3 pb-3 px-4"
              onClick={() => {
                setIsTimeFly((isTimeFly) => !isTimeFly);
              }}
            >
              <div className="flex w-96">
                <div className="text-base font-bold pl-2">Thời gian bay</div>
              </div>
              <svg
                style={{ transitionDuration: "0.25s" }}
                className={"rotate-180" + (!isTimeFly ? "" : "rotate-180")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcSystemChevronUp"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="#0194f3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Space>
            <div
              className={"pt-3 pb-3 px-3 hidden" + (!isTimeFly ? "" : "hidden")}
              style={{ transitionDuration: "0.25s" }}
            >
              <div className="text-base font-bold pl-2 mb-2">Giờ cất cánh</div>
              <Row gutter={[12, 12]}>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
              </Row>
              <hr className="my-3" />
              <div className="text-base font-bold pl-2 mb-2">Giờ hạ cánh</div>
              <Row gutter={[12, 12]}>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
              </Row>
              <hr className="my-3" />
              <div className="flex justify-between">
                <div className="text-base font-bold pl-2">Thời gian bay</div>
                <div className="font-medium pt-1">0h - 22h</div>
              </div>
              <div>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[0, 22]}
                  min={0}
                  max={22}
                />
                <div className="flex justify-between">
                  <div className="font-medium">0h</div>
                  <div className="font-medium">22h</div>
                </div>
              </div>
            </div>
          </a>
          <hr className="my-0" />
          <a className="border-y-8">
            <Space
              className="flex justify-around pt-3 pb-3 px-4"
              onClick={() => {
                setIsLabel((islabel) => !islabel);
              }}
            >
              <div className="flex w-96">
                <div className="text-base font-bold pl-2">Hãng hàng không</div>
              </div>
              <svg
                style={{ transitionDuration: "0.25s" }}
                className={"rotate-180" + (!islabel ? "" : "rotate-180")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcSystemChevronUp"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="#0194f3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Space>
            <div
              className={"pt-3 pb-3 px-3 hidden" + (!islabel ? "" : "hidden")}
              style={{ transitionDuration: "0.25s" }}
            >
              <div className="text-base font-bold pl-2 mb-2">Giờ cất cánh</div>
              <Row gutter={[12, 12]}>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
              </Row>
              <hr className="my-3" />
              <div className="text-base font-bold pl-2 mb-2">Giờ hạ cánh</div>
              <Row gutter={[12, 12]}>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div
                    className="py-2 px-2 text-center rounded-md"
                    style={{ backgroundColor: "rgba(247,249,250,1.00)" }}
                  >
                    <div
                      className="mb-1 text-xs font-medium"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      Buổi sáng sớm
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "rgb(205, 208, 209)" }}
                    >
                      00:00 - 06:00
                    </div>
                  </div>
                </Col>
              </Row>
              <hr className="my-3" />
              <div className="flex justify-between">
                <div className="text-base font-bold pl-2">Thời gian bay</div>
                <div className="font-medium pt-1">0h - 22h</div>
              </div>
              <div>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[0, 22]}
                  min={0}
                  max={22}
                />
                <div className="flex justify-between">
                  <div className="font-medium">0h</div>
                  <div className="font-medium">22h</div>
                </div>
              </div>
            </div>
          </a>
          <hr className="my-0" />
          <a onClick={(e) => console.log(e)}>
            <Space
              className="flex justify-around pt-3 pb-3 px-4"
              onClick={() => {
                setIsUtilities((isUtilities) => !isUtilities);
              }}
            >
              <div className="flex w-96">
                <div className="text-base font-bold pl-2">Tiện ích</div>
              </div>
              <svg
                style={{ transitionDuration: "0.25s" }}
                className={"rotate-180" + (!isUtilities ? "" : "rotate-180")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcSystemChevronUp"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="#0194f3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Space>
            <div
              className={
                "pt-3 pb-3 px-3 hidden" + (!isUtilities ? "" : "hidden")
              }
              style={{ transitionDuration: "0.25s" }}
            >
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>Hành lý</Checkbox>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="IcFacilitiesBaggageEmpty"
                  >
                    <path
                      d="M8 7.2C8 6.07989 8 5.51984 8.21799 5.09202C8.40973 4.71569 8.71569 4.40973 9.09202 4.21799C9.51984 4 10.0799 4 11.2 4H12.8C13.9201 4 14.4802 4 14.908 4.21799C15.2843 4.40973 15.5903 4.71569 15.782 5.09202C16 5.51984 16 6.07989 16 7.2V8H8V7.2Z"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M2 10C2 8.89543 2.89543 8 4 8L20 8.00004C21.1046 8.00004 22 8.89547 22 10V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V10Z"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>Suất ăn</Checkbox>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="IcFacilitiesMeal"
                  >
                    <path
                      d="M7 11H8M7 11L6.14926 19.5074C6.06934 20.3066 6.69688 21 7.5 21V21C8.30312 21 8.93066 20.3066 8.85074 19.5074L8 11M7 11V11C5.34315 11 4 9.65685 4 8V6.5C4 4.567 5.567 3 7.5 3V3C9.433 3 11 4.567 11 6.5V8C11 9.65685 9.65685 11 8 11V11"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16 11L15.1493 19.5074C15.0693 20.3066 15.6969 21 16.5 21V21C17.3031 21 17.9307 20.3066 17.8507 19.5074L17 11M16 11H15.1378C13.9808 11 13.0652 10.0213 13.1422 8.86696L13.5 3.5M16 11H16.5M17 11H17.8622C19.0192 11 19.9348 10.0213 19.8578 8.86696L19.5 3.5M17 11H16.5M16.5 11V3.25"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>Giải trí</Checkbox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    data-id="IcFacilitiesEntertainment"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect width="24" height="24"></rect>
                      <path
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19,8 L19,7 L6,7 C5.44771525,7 5,7.44771525 5,8 L5,16 C5,16.5522847 5.44771525,17 6,17 L19,17 L19,16 M19,11 L19,13"
                      ></path>
                      <rect
                        width="20"
                        height="16"
                        x="2"
                        y="4"
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        rx="2"
                      ></rect>
                      <path
                        fill="#CDD0D1"
                        fillRule="nonzero"
                        d="M14.6237411,11.4344036 C15.1288239,11.7455992 15.1220038,12.254349 14.6237411,12.5613425 L10.9145334,14.8466886 C10.4094505,15.1578843 10,14.9832507 10,14.4323636 L10,9.56338248 C10,9.02336149 10.4162707,8.84206395 10.9145334,9.14905745 L14.6237411,11.4344036 Z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>WiFi</Checkbox>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="IcFacilitiesInternetWiFi"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 19.5L12 18.5L13 19.5L12 20.5L11 19.5Z"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.5 16C8 15.1667 9.6 13.5 12 13.5C14.4 13.5 16 15.1667 16.5 16"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4.5 12C5.66667 10.8333 8 8.5 12 8.5C16 8.5 18.3333 10.8333 19.5 12"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M2 8C3.5 6.5 6.5 3.5 12 3.5C17.5 3.5 20.5 6.5 22 8"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>Nguồn sạc / cổng USB</Checkbox>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="IcFacilitiesPowerPlug"
                  >
                    <path
                      d="M6.5 14V19C6.5 20.1046 7.39543 21 8.5 21H19C20.1046 21 21 20.1046 21 19V19C21 17.8954 20.1046 17 19 17H18L21 13H18L21 9M18 9L21 5H18"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4 2V6M4 6H3V10M4 6H9M9 2V6M9 6H10V10M3 10V11L5 14H8L10 11V10M3 10H10"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <hr className="my-0" />
          <a onClick={(e) => console.log(e)}>
            <Space
              className="flex justify-around pt-3 pb-3 px-4"
              onClick={() => {
                setIsPrice((isPrice) => !isPrice);
              }}
            >
              <div className="flex w-96">
                <div className="text-base font-bold pl-2">Giá/hành khách</div>
              </div>
              <svg
                style={{ transitionDuration: "0.25s" }}
                className={"rotate-180" + (!isPrice ? "" : "rotate-180")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcSystemChevronUp"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="#0194f3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Space>
            <div
              className={"pt-3 pb-3 px-3 hidden" + (!isPrice ? "" : "hidden")}
              style={{ transitionDuration: "0.25s" }}
            >
              <div className="flex justify-between">
                <div className="text-base font-bold pl-2">Thời gian bay</div>
                <div className="font-medium pt-1">0h - 22h</div>
              </div>
              <div>
                <Slider
                  range={{ draggableTrack: true }}
                  defaultValue={[0, 22]}
                  min={0}
                  max={22}
                />
                <div className="flex justify-between">
                  <div className="font-medium">0h</div>
                  <div className="font-medium">22h</div>
                </div>
              </div>
            </div>
          </a>
          <hr className="my-0" />
          <a onClick={(e) => console.log(e)}>
            <Space
              className="flex justify-around pt-3 pb-3 px-4"
              onClick={() => {
                setIsOption((isOption) => !isOption);
              }}
            >
              <div className="flex w-96">
                <div className="text-base font-bold pl-2">Lựa chọn ưu tiên</div>
              </div>
              <svg
                style={{ transitionDuration: "0.25s" }}
                className={"rotate-180" + (!isOption ? "" : "rotate-180")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcSystemChevronUp"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="#0194f3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Space>
            <div
              className={"pt-3 pb-3 px-3 hidden" + (!isOption ? "" : "hidden")}
              style={{ transitionDuration: "0.25s" }}
            >
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>
                    Không quá cảnh qua đêm
                  </Checkbox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    data-id="IcSystemEyeHide"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect width="24" height="24"></rect>
                      <path
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2,12 C4.66666667,7.33333333 8,5 12,5 C16,5 19.3333333,7.33333333 22,12 C19.3333333,16.6666667 16,19 12,19 C8,19 4.66666667,16.6666667 2,12 Z"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></circle>
                      <path
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.5,21.5 L21.5,3.5 C21.7761424,3.22385763 21.7761424,2.77614237 21.5,2.5 L21.5,2.5 C21.2238576,2.22385763 20.7761424,2.22385763 20.5,2.5 L2.5,20.5 C2.22385763,20.7761424 2.22385763,21.2238576 2.5,21.5 L2.5,21.5 C2.77614237,21.7761424 3.22385763,21.7761424 3.5,21.5 Z"
                      ></path>
                      <path
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3,21 L21,3"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>
                    Không chọn chuyến bay muộn
                  </Checkbox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    data-id="IcTimeNightStayUnavailable"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect width="24" height="24"></rect>
                      <path
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.8077873,3.00481111 C6.91650071,3.16156219 3,7.12885357 3,12 C3,16.9705627 7.07799756,21 12.1084625,21 C15.4810395,21 18.4255044,19.1888605 20,16.4972229 C19.1187139,16.8222951 18.1647194,17 17.1687194,17 C12.697195,17 9.07230832,13.418278 9.07230832,9 C9.07230832,6.61322764 10.1301249,4.47057955 11.8077873,3.00481111 Z"
                      ></path>
                      <path
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.75,6.75 L15.25,6.75 L15.25,7.25 L14.75,7.25 L14.75,6.75 Z M16,10.5 C17.0520892,10.4479108 17.7187559,10.2812441 18,10 C18.2812441,9.71875588 18.4479108,9.05208921 18.5,8 C18.521156,9.02115601 18.6878227,9.68782268 19,10 C19.3121773,10.3121773 19.978844,10.478844 21,10.5 C19.9719613,10.5280387 19.3052946,10.6947054 19,11 C18.6947054,11.3052946 18.5280387,11.9719613 18.5,13 C18.4487147,11.9487147 18.282048,11.282048 18,11 C17.717952,10.717952 17.0512853,10.5512853 16,10.5 Z"
                      ></path>
                      <path
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.5,21.5 L21.5,3.5 C21.7761424,3.22385763 21.7761424,2.77614237 21.5,2.5 L21.5,2.5 C21.2238576,2.22385763 20.7761424,2.22385763 20.5,2.5 L2.5,20.5 C2.22385763,20.7761424 2.22385763,21.2238576 2.5,21.5 L2.5,21.5 C2.77614237,21.7761424 3.22385763,21.7761424 3.5,21.5 Z"
                      ></path>
                      <path
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3,21 L21,3"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>
                    Chỉ làm thủ tục một lần
                  </Checkbox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    data-id="IcFlightConnecting"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect width="24" height="24"></rect>
                      <path
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4,7 L4,7 C2.20842913,7.59719029 1,9.27379615 1,11.1622777 L1,11.5 C1,13.4329966 2.56700338,15 4.5,15 L8,15 M20,17 L20,17 C21.7915709,16.4028097 23,14.7262039 23,12.8377223 L23,12.5 C23,10.5670034 21.4329966,9 19.5,9 L16,9 M5,18 L8,15 L5,12 M19,6 L16,9 L19,12"
                      ></path>
                      <path
                        fill="#CDD0D1"
                        fillRule="nonzero"
                        d="M17.7071068,5.29289322 L16,7 L14,7 L10,12 L9,12 L11,7 L8,7 L7,8 L6,8 L6,4 L7,4 L8,5 L11,5 L9,0 L10,0 L14,5 L17,5 C17.2761424,5 17.5261424,5.11192881 17.7071068,5.29289322 Z M6.29289322,18.7071068 L8,17 L10,17 L14,12 L15,12 L13,17 L16,17 L17,16 L18,16 L18,20 L17,20 L16,19 L13,19 L15,24 L14,24 L10,19 L7,19 C6.72385763,19 6.47385763,18.8880712 6.29289322,18.7071068 Z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>
                    Không chuyến bay liên danh
                  </Checkbox>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="IcFlightCodeshareNon"
                  >
                    <path
                      d="M7.58572 10H5.5C4.94772 10 4.5 10.4477 4.5 11C4.5 11.5523 4.94772 12 5.5 12H9.58572L7.58572 10Z"
                      fill="#CDD0D1"
                    ></path>
                    <path
                      d="M11.1166 13.5309C11.0422 13.6708 11 13.8305 11 14C11 14.5523 11.4477 15 12 15H12.5857L11.1166 13.5309Z"
                      fill="#CDD0D1"
                    ></path>
                    <path
                      d="M17.4142 15L15.4142 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H17.4142Z"
                      fill="#CDD0D1"
                    ></path>
                    <path
                      d="M13.5857 16H10C9.44772 16 9 16.4477 9 17C9 17.5523 9.44772 18 10 18H15.5857L13.5857 16Z"
                      fill="#CDD0D1"
                    ></path>
                    <path
                      d="M19.8833 17.4692L18.4142 16H19C19.5523 16 20 16.4477 20 17C20 17.1696 19.9578 17.3293 19.8833 17.4692Z"
                      fill="#CDD0D1"
                    ></path>
                    <path
                      d="M14.1629 11.7487L12.4142 10H13.5C14.0523 10 14.5 10.4477 14.5 11C14.5 11.298 14.3697 11.5655 14.1629 11.7487Z"
                      fill="#CDD0D1"
                    ></path>
                    <path
                      d="M5.88725 8.30153L0.692613 15.41C0.470451 15.714 0.437892 16.117 0.608372 16.4528C0.778852 16.7885 1.12347 17 1.5 17H8.18453L5.69261 20.41C5.47045 20.714 5.43789 21.117 5.60837 21.4528C5.77885 21.7885 6.12347 22 6.5 22H16.5229C17.3537 22 18.1233 21.6581 18.6754 21.0897L17.2607 19.675C17.0755 19.8774 16.8102 20 16.5229 20H8.46933L12.3185 14.7328L10.8873 13.3015L9.64606 15H3.46933L7.31847 9.73275L5.88725 8.30153Z"
                      fill="#CDD0D1"
                    ></path>
                    <path
                      d="M12.9259 10.5118L14.0015 9.03992L15.6268 4H12.5234C11.8851 4 11.2852 4.30464 10.9086 4.81997L9.35714 6.94299L7.92592 5.51177L9.2938 3.63993C10.047 2.60928 11.2468 2 12.5234 2H17C17.3197 2 17.6202 2.15287 17.8084 2.41132C17.9966 2.66977 18.0499 3.00263 17.9517 3.30692L16.7355 7.0783C16.9925 7.02668 17.2563 7 17.5234 7H22C22.3174 7 22.6159 7.15063 22.8044 7.4059C22.9929 7.66117 23.0491 7.99077 22.9558 8.29409L20.074 17.6599L18.4738 16.0597L20.646 9H17.5234C16.8851 9 16.2852 9.30464 15.9086 9.81997L14.3571 11.943L12.9259 10.5118Z"
                      fill="#CDD0D1"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z"
                      fill="#CDD0D1"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <hr className="my-0" />
          <a onClick={(e) => console.log(e)}>
            <Space
              className="flex justify-around pt-3 pb-3 px-4"
              onClick={() => {
                setIsSwap((isSwap) => !isSwap);
              }}
            >
              <div className="flex w-96">
                <div className="text-base font-bold pl-2">
                  Hoàn tiền & Đổi lịch
                </div>
              </div>
              <svg
                style={{ transitionDuration: "0.25s" }}
                className={"rotate-180" + (!isSwap ? "" : "rotate-180")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-id="IcSystemChevronUp"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke="#0194f3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Space>
            <div
              className={"pt-3 pb-3 px-3 hidden" + (!isSwap ? "" : "hidden")}
              style={{ transitionDuration: "0.25s" }}
            >
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>Được hoàn vé</Checkbox>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    data-id="IcPaymentRefund"
                  >
                    <g fill="none" fillRule="evenodd">
                      <rect width="24" height="24"></rect>
                      <path
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M22,15 L22,20 L20.4660884,20.2556519 C17.5028966,20.7495172 14.4856918,20.8317435 11.5,20.5 L11.5,20.5 C8.51786369,20.1686515 5.5024528,20.2995094 2.56023216,20.8879536 L2,21 L2,10 L2.56023216,9.88795357 C5.5024528,9.29950944 8.51786369,9.16865152 11.5,9.5 L12.8570637,9.65078485 C14.9276769,9.88085299 17.0235554,9.65881488 19,9 M2,18 L2.73567256,17.9019103 C3.83055267,17.7559263 4.83647179,18.5251586 4.9824558,19.6200387 C4.99413908,19.7076633 5,19.7959661 5,19.8843661 L5,20 M22,17 L20.7356726,17.168577 C19.7420605,17.3010586 19,18.1486276 19,19.1510328 L19,20 M2,13 L3.39223227,12.7215535 C4.32708066,12.5345839 5,11.7137542 5,10.7603922 L5,10"
                      ></path>
                      <circle
                        cx="12"
                        cy="15"
                        r="3"
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></circle>
                      <path
                        stroke="#CDD0D1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11,5 L18,5 C20.209139,5 22,6.790861 22,9 L22,9 C22,11.209139 20.209139,13 18,13 M13,3 L11,5 L13,7"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="text-base pl-2 pt-1 pb-1">
                <div className="font-medium flex justify-between">
                  <Checkbox onChange={onChange}>Đổi lịch có sẵn</Checkbox>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="IcSystemCalendarReschedule"
                  >
                    <path
                      d="M7 2V5M17 2V5M3 8H15M21 8V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H20M11.5 16.5H12.5V17.5H11.5V16.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM7.5 11.5V12.5H6.5V11.5H7.5Z"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15.5 17H20C21.3807 17 22.5 15.8807 22.5 14.5V14.5C22.5 13.1193 21.3807 12 20 12H15.5M15.5 12L18 14M15.5 12L18 10M11.5 13H12.5C12.7761 13 13 12.7761 13 12.5V11.5C13 11.2239 12.7761 11 12.5 11H11.5C11.2239 11 11 11.2239 11 11.5V12.5C11 12.7761 11.2239 13 11.5 13Z"
                      stroke="#CDD0D1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
