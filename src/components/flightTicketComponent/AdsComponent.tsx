import React from "react";
import { Carousel } from "antd";
import Slider from "react-slick";

type Props = {};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function AdsComponent({}: Props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full flyCarousel  my-0 mx-auto">
      <div>
        <div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgb(27, 160, 226) 0%, rgb(7, 112, 205) 115.72%",
            }}
            className="py-2 pb-4"
          >
            <div className="flex containerHome pt-4">
              <div
                className="flex justify-center items-center rounded-full p-2 bg-white"
                style={{
                  border: "8px solid rgb(36, 109, 165)",
                }}
              >
                <img
                  style={{ width: 24, height: 24 }}
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/af270ff4a24acc248b13a91afb9558e3.svg"
                  alt=""
                />
                <span
                  className="mx-2 font-medium"
                  style={{ color: "rgb(1, 148, 243)" }}
                >
                  Quảng cáo
                </span>
                <div className="rounded-full bg-yellow-400 p-1">1</div>
              </div>
            </div>
            <div className="row containerHome py-4">
              <div className="col-8">
                <h3 className="text-white text-xl font-bold	">
                  Xem thêm khuyến mãi tại đây!
                </h3>
                <span className="text-white text-base font-medium	">
                  Tận hưởng những ưu đãi tốt hơn nữa. Xem để chọn chuyến bay tốt
                  nhất của bạn.
                </span>
              </div>
              <div
                className="col-4 bg-white rounded-lg"
                style={{ padding: 12, width: "341px" }}
              >
                <div className="flex justify-between">
                  <img
                    style={{ width: 60, height: 60 }}
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2023/03/29/1680117700175-5c4a84287d5759708092a7175e50ff02.jpeg?tr=h-60,q-75,w-60"
                    alt=""
                  />
                  <div>
                    <div className="flex justify-between items-center	">
                      <span className="font-semibold text-sm">
                        Vé máy bay sale khủng!
                      </span>
                      <p className="bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                        HOT
                      </p>
                      <img
                        style={{ width: 20, height: 20 }}
                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/10eeeb3d5c2ce1b525ef4a3edf98bce0.svg"
                        alt=""
                      />
                    </div>
                    <p
                      className="mt-2 text-xs"
                      style={{ color: "rgb(104, 113, 118)" }}
                    >
                      Giảm đến 50% trên giá vé cho mọi chặng bay
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    padding: "8px 12px",
                    marginTop: "12px",
                    border: "1px dotted gray",
                    backgroundColor: "rgba(247,249,250,1.00)",
                  }}
                  className="flex justify-between items-center"
                >
                  <p
                    style={{ color: "rgb(104, 113, 118)" }}
                    className="text-xs	"
                  >
                    BAYEPICALLDAY
                  </p>
                  <div className="text-sky-500 text-sm font-semibold	">
                    Sao chép
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Slider {...settings}>
          
          <div>
            <h2>abcd</h2>
          </div>

        </Slider> */}
      </div>
    </div>
  );
}
