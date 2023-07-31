import React from "react";

type Props = {};

export default function SgLogin({ }: Props) {
  return (
    <div>
     
      <div
        style={{ boxShadow: "rgba(3, 18, 26, 0.2) 0px 1px 2px" }}

      >

        <div className="bg-white overflow-hidden	rounded-lg">
          <div className="row p-4">
            <div className="col-3">
              <img
                style={{ width: 100, height: 100 }}
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/334a43706b543daaa27995a60d895f2a.png"
                alt=""
              />
            </div>
            <div className="col-9 pl-1">
              <h3 className="font-bold text-base">
                Đăng nhập hoặc Đăng ký và tận hưởng ưu đãi dành riêng cho thành
                viên
              </h3>
              <div className="flex items-center">
                <img
                  style={{ width: 24, height: 24 }}
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/513ab8104dcf3ae7a42419cba432351d.svg"
                  alt=""
                />
                <p
                  className="ml-2 font-medium	"
                  style={{ color: "rgb(104, 113, 118)" }}
                >
                  Đặt chỗ nhanh và dễ dàng hơn với Passenger Quick Pick
                </p>
              </div>
              <button
                className="font-bold text-base mt-2"
                style={{ color: "rgb(1, 148, 243)" }}
              >
                Đăng nhập hoặc Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
