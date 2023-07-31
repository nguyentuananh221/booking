import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configStore";

type Props = {};

export default function InforContactBooking({}: Props) {
  const firstName = useSelector(
    (state: RootState) => state.testData.firstNameContact
  );
  const lastName = useSelector(
    (state: RootState) => state.testData.lastNameContact
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.testData.phoneNumberContact
  );
  const email = useSelector((state: RootState) => state.testData.emailContact);
  return (
    <div className="box-infor">
      <h2>Thông tin liên hệ</h2>
      <div className="infor">
        <div className="infor-contact">
          <div className="user-name">
            <h4>{`${lastName} ${firstName}`}</h4>
          </div>
          <div className="btn-edit_detail">
            <input type="submit" value="Chỉnh sửa Chi tiết"></input>
          </div>
        </div>
        <hr />
        <div className="user-contact">
          <div className="user-infor">
            <div className="lable-name lable-name-left">Số di động</div>
            <p>{phoneNumber}</p>
          </div>
          <div className="user-infor">
            <div className="lable-name lable-name-left">Email</div>
            <p>{email}</p>
          </div>
          <div></div>
        </div>
        <div className="infor-user"></div>
      </div>
    </div>
  );
}
