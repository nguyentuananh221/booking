import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configStore";

type Props = {};

export default function InforContactPersionBooking({}: Props) {
  const firstName = useSelector(
    (state: RootState) => state.testData.firstNameUser
  );
  const lastName = useSelector(
    (state: RootState) => state.testData.lastNameUser
  );
  const national = useSelector(
    (state: RootState) => state.testData.nationalyUser
  );
  const dobUser = useSelector((state: RootState) => state.testData.dobUser);
  return (
    <div className="box-infor">
      <h2>Thông tin hành khách</h2>
      <div className="infor">
        <div className="infor-contact">
          <div className="user-name">
            <h4>
              {" "}
              <span>Ông</span> {`${lastName} ${firstName}`}
            </h4>
          </div>
          <div className="btn-edit_detail">
            <input type="submit" value="Chỉnh sửa Chi tiết"></input>
          </div>
        </div>

        <hr />
        <div className="user-contact">
          <div className="user-infor">
            <div className="lable-name lable-name-left">Ngày sinh</div>
            <p>{dobUser}</p>
          </div>
          <div className="user-infor">
            <div className="lable-name lable-name-left">Quốc tịch</div>
            <p>{national}</p>
          </div>
          <div></div>
        </div>
        <hr />
        {/* <div className="user-contact">
          <div className="user-infor">
            <div className="lable-name lable-name-left">Hộ chiếu</div>
            <p>2113213554646</p>
          </div>
          <div className="user-infor">
            <div className="lable-name lable-name-left">Quốc gia cấp</div>
            <p>{national}</p>
          </div>
          <div></div>
        </div> */}
        <hr />
        {/* <div className="user-contact">
          <div className="user-infor">
            <div className="lable-name lable-name-left">Ngày hết hạn</div>
            <p>16 tháng 09 2038</p>
          </div>
          <div className="user-infor"></div>
          <div></div>
        </div> */}
        <div className="infor-user"></div>
      </div>
    </div>
  );
}
