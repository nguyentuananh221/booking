import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React from "react";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

type Props = {};

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

export default function MoreWigets({}: Props) {
  return (
    <div className="box-widgets">
      <h2>Thêm tiện ích cho chuyến đi</h2>
      <div className="widgets">
        <div className="more-widgets">
          <div className="check-widgets">
            <Checkbox style={{ fontSize: "16px" }} onChange={onChange}>
              Bảo hiểm Chubb Travel Protect
            </Checkbox>
          </div>
          <img
            style={{
              display: "inline-block",
              padding: "0 8px 8px 0",
              position: "absolute",
              top: "50px",
              left: "10px",
            }}
            src="https://ik.imagekit.io/tvlk/image/imageResource/2022/08/30/1661857674311-c90693d273deb6a3b30e503873bd7f88.png?tr=h-24,q-75,w-24"
            alt=""
          />
          <div className="widgets-title">
            <p>
              {/* <BsFillAirplaneEnginesFill
                style={{ display: "inline-block", color: "rgb(1, 148, 243)" }}
              />{" "} */}
              Bảo hiểm lên đến VND 210,000,000 cho Quyền lợi Tai nạn
            </p>
          </div>
        </div>
        <hr />
        <div className="more-widgets">
          <div className="infor-widgets">
            <div className="widgets-des">
              <div className="dot"></div>
              <div className="des">
                <p>
                  <BsCheck2
                    style={{
                      position: "absolute",
                      display: "inline-block",
                      padding: "4px 0",
                      fontSize: "20px",
                      color: "rgb(11, 193, 117)",
                      top: "0px",
                      left: "-5px",
                      fontWeight: "700",
                    }}
                  />
                  Bảo hiểm lên đến VND 210,000,000 cho Quyền lợi Tai nạn
                </p>
              </div>
              <div className="des">
                <p>
                  <BsCheck2
                    style={{
                      position: "absolute",
                      display: "inline-block",
                      padding: "4px 0",
                      fontSize: "20px",
                      color: "rgb(11, 193, 117)",
                      top: "0px",
                      left: "-5px",
                    }}
                  />{" "}
                  Bảo hiểm lên đến toàn bộ giá trị vé máy bay cho Quyền lợi Hủy
                  Chuyến Bay
                </p>
              </div>
              <div className="des">
                <p>
                  <BsCheck2
                    style={{
                      position: "absolute",
                      display: "inline-block",
                      padding: "4px 0",
                      fontSize: "20px",
                      color: "rgb(11, 193, 117)",
                      top: "0px",
                      left: "-5px",
                    }}
                  />{" "}
                  Bảo hiểm lên đến VND 2,600,000 cho Quyền lợi Chuyến bay và
                  Hành lý bị trì hoãn
                </p>
              </div>
            </div>
          </div>
          <div className="more-infor-price">
            <div className="more-infor">
              <input type="submit" value="Thêm thông tin" />
            </div>
            <div className="widgets-price">
              <p>VND66.000/khách</p>
            </div>
          </div>
        </div>
        <div className="infor-user"></div>
      </div>
      <div className="widgets">
        <div className="more-widgets">
          <div className="check-widgets">
            <Checkbox style={{ fontSize: "16px" }} onChange={onChange}>
              Bảo hiểm trễ chuyến bay
            </Checkbox>
          </div>
          <img
            style={{
              display: "inline-block",
              padding: "0 8px 8px 0",
              position: "absolute",
              top: "50px",
              left: "10px",
            }}
            src="https://ik.imagekit.io/tvlk/image/imageResource/2020/12/04/1607090634582-9abe614337ff2aad55ddb3077ace49c2.png?tr=h-24,q-75,w-24"
            alt=""
          />
          <div className="widgets-title">
            <p>
              Bồi hoàn lên đến 600.000 VNĐ/ Người/ chuyến nếu chuyến bay của
              Người được bảo hiểm bị chậm trễ hơn 120 phút.
            </p>
          </div>
        </div>
        <hr />
        <div className="more-widgets">
          <div className="infor-widgets">
            <div className="widgets-des">
              <div className="dot"></div>
              <div className="des">
                <p>
                  <BsCheck2
                    style={{
                      position: "absolute",
                      display: "inline-block",
                      padding: "4px 0",
                      fontSize: "20px",
                      color: "rgb(11, 193, 117)",
                      top: "0px",
                      left: "-5px",
                    }}
                  />
                  Tự động thông báo nếu chuyến bay của Người được bảo hiểm bị
                  chậm trễ và Người được bảo hiểm đủ điều kiện để gửi yêu cầu
                  bồi hoàn.
                </p>
              </div>
              <div className="des">
                <BsCheck2
                  style={{
                    position: "absolute",
                    display: "inline-block",
                    padding: "4px 0",
                    fontSize: "20px",
                    color: "rgb(11, 193, 117)",
                    top: "0px",
                    left: "-5px",
                  }}
                />{" "}
                <p>
                  Người được bảo hiểm chỉ hỉ cần cung cấp tài khoản ngân hàng để
                  xử lý yêu cầu bồi hoàn và nhận bồi hoàn sau 7 ngày làm việc.
                </p>
              </div>
            </div>
          </div>
          <div className="more-infor-price">
            <div className="more-infor">
              <input type="submit" value="Chi tiết" />
            </div>
            <div className="widgets-price">
              <p>VND66.000/khách</p>
            </div>
          </div>
        </div>
        <div className="infor-user"></div>
      </div>
      <div className="widgets">
        <div className="more-widgets">
          <div className="check-widgets">
            <Checkbox style={{ fontSize: "16px" }} onChange={onChange}>
              Bảo hiểm trễ chuyến bay
            </Checkbox>
          </div>
          <img
            style={{
              display: "inline-block",
              padding: "0 8px 8px 0",
              position: "absolute",
              top: "50px",
              left: "10px",
            }}
            src="https://ik.imagekit.io/tvlk/image/imageResource/2020/12/04/1607089869075-1fe0eb5eef94d1ac96f168f1c80ff90e.png?tr=h-24,q-75,w-24"
            alt=""
          />
          <div className="widgets-title">
            <p>
              Bảo hiểm lên đến VND 20.000.000 cho mất hoặc hư hại đối với hành
              lý, quần áo và các vật dụng cá nhân của Người Được Bảo hiểm
            </p>
          </div>
        </div>
        <hr />
        <div className="more-widgets">
          <div className="infor-widgets">
            <div className="widgets-des">
              <div className="dot"></div>
              <div className="des">
                <p>
                  <BsCheck2
                    style={{
                      position: "absolute",
                      display: "inline-block",
                      padding: "4px 0",
                      fontSize: "20px",
                      color: "rgb(11, 193, 117)",
                      top: "0px",
                      left: "-5px",
                    }}
                  />
                  Giới hạn VND3.000.000 cho mỗi món đồ
                </p>
              </div>
              <div className="des">
                <p>
                  <BsCheck2
                    style={{
                      position: "absolute",
                      display: "inline-block",
                      padding: "4px 0",
                      fontSize: "20px",
                      color: "rgb(11, 193, 117)",
                      top: "0px",
                      left: "-5px",
                    }}
                  />
                  Với việc lựa chọn chương trình Bảo hiểm này, Quý Khách đã hiểu
                  và đồng ý với Quyền lợi, Quy tắc bảo hiểm và Nội dung tuyên bố
                  và ủy quyền do Công ty TNHH Bảo hiểm Chubb Việt Nam quy định.
                </p>
              </div>
            </div>
          </div>
          <div className="more-infor-price">
            <div className="more-infor">
              <input type="submit" value="Thêm thông tin" />
            </div>
            <div className="widgets-price">
              <p>VND66.000/khách</p>
            </div>
          </div>
        </div>
        <div className="infor-user"></div>
      </div>
    </div>
  );
}
