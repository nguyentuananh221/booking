import React, { useEffect, useState } from "react";
import {
  Select,
  Space,
  Cascader,
  Input,
  Form,
  Divider,
  DatePicker,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { DispatchType, RootState } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { dataFromInfoPerson } from "../../redux/dataReducer/dataReducer";
import { dbName, storeName } from "../../App";

type Props = {};

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const { Option } = Select;

const selectBefore = (
  <Select defaultValue="+84">
    <Option value="84">+84</Option>
    <Option value="062">+062</Option>
    <Option value="063">+063</Option>
  </Select>
);

export default function InfoPerson({ }: Props) {
  const [firstNameContact, setFirstNameContact] = useState("");
  const [lastNameContact, setLastNameContact] = useState("");
  const [phoneNumberContact, setPhoneNumberContact] = useState("");
  const [emailContact, setEmailContact] = useState("");

  const [nameUser, setNameUser] = useState("");
  const [firstNameUser, setFirstNameUser] = useState("");
  const [lastNameUser, setLastNameUser] = useState("");
  const [dobUser, setDobUser] = useState("");
  const [nationalyUser, setNationalyUser] = useState("");


  const numberNguoiLon = useSelector((state: RootState) => state.testData.numberNguoiLon)
  const numberTreEm = useSelector((state: RootState) => state.testData.numberTreEm)
  const numberEmbe = useSelector((state: RootState) => state.testData.numberEmbe)

  const [arrInfoUser, setArrInfoUser] = useState([{}])
  // console.log('data number', numberNguoiLon, numberTreEm, numberEmbe)

  const dispatch: DispatchType = useDispatch();

  const handleSubmit = async () => {

    const arrNew = await arrInfoUser.slice(1)
    await dispatch(
      dataFromInfoPerson({
        firstNameContact,
        lastNameContact,
        phoneNumberContact,
        emailContact,
        nameUser,
        firstNameUser,
        lastNameUser,
        dobUser,
        nationalyUser,
        arrInfoUser: arrNew
      })
    );
    // console.log(arrInfoUser[1])

    const request = indexedDB.open(dbName, 1);

    request.onsuccess = function (event: any) {
      console.log('thanh cong create index db')
      const db = event.target.result;

      // // Add a product to the object store
      const infoPerson = {
        id: 'id_fromInfoPerson',
        firstNameContact,
        lastNameContact,
        phoneNumberContact,
        emailContact,
      }

      // const transaction = db.transaction([storeName], 'readwrite');
      const transaction = db.transaction([storeName], 'readwrite');
      // const objectStore = transaction.objectStore(storeName);
      const objectStore = transaction.objectStore(storeName);

      objectStore.put(infoPerson);

    };
  };



  const handleSubmitUser = async () => {
    // console.log('thong tin user', data)
    await setNum(num - 1)
    await setNumUp(numUp + 1)
    // const user = {
    //   nameUser,
    //   firstNameUser,
    //   lastNameUser,
    //   dobUser,
    //   nationalyUser,
    // }

    setArrInfoUser([...arrInfoUser, {
      representative_email: emailContact,
      user_type: 'người lớn',
      user_name: nameUser,
      first_name: firstNameUser,
      last_name: lastNameUser,
      dob: dobUser,
      nationaly: nationalyUser,
    }])

    // await arrInfoUser.push({
    //   nameUser,
    //   firstNameUser,
    //   lastNameUser,
    //   dobUser,
    //   nationalyUser,
    // })

    // console.log('user', {
    //   nameUser,
    //   firstNameUser,
    //   lastNameUser,
    //   dobUser,
    //   nationalyUser,
    // })




  }

  let [numUp, setNumUp] = useState(1)
  const [num, setNum] = useState(numberNguoiLon)

  const renderNguoiLon = () => {
    return <Form layout="vertical">
      <div
        className="infoCustomer mb-7 bg-white"
        style={{ boxShadow: "rgba(3, 18, 26, 0.2) 0px 1px 2px" }}
      >
        <div>
          <div
            className="flex justify-between items-center p-4"
            style={{
              borderBottom: "1px solid rgb(242, 243, 243)",
              height: 52,
            }}
          >
            <h4 className="text-lg">Người lớn {numUp}</h4>
            <button className="text-cyan-400 font-bold">Lưu</button>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <p className="font-semibold" style={{ color: "rgb(255, 165, 0)" }}>
            Hãy chắc chắn rằng tên của hành khách khớp với tên trên
            CCCD/CMND/Hộ chiếu/Giấy phép lái xe do chính phủ cấp.
          </p>
          <span
            className="font-semibold"
            style={{ color: "rgb(255, 165, 0)" }}
          >
            Bạn nên tránh sai sót vì một số hãng hàng không cho phép sửa tên
            sau khi đặt vé.
          </span>
        </div>
        <div className="w-4/12 px-4">
          {/* <p className="text-slate-900 font-bold">Danh xưng</p> */}

          <Form.Item
            label={<p className="text-slate-900 font-bold">Danh xưng</p>}
          >
            <Select
              onChange={(value) => {
                setNameUser(value);
              }}
              value={nameUser}
              defaultValue="Ông"
              style={{
                // width: 120,
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              // bordered
              // allowClear
              options={[
                { value: "male", label: "Ông" },
                { value: "female", label: "Bà" },
              ]}
            />
          </Form.Item>
        </div>
        <div className="flex p-4">
          <div className="w-2/4">
            <div className="flex flex-col mb-4 pr-5">
              <Form.Item
                label={
                  <p className="text-slate-900 font-bold">Họ (vd: Nguyen)</p>
                }
                extra={
                  <span className="text-gray-500 my-2 text-xs	">
                    như trên CMND (không dấu)
                  </span>
                }
              >
                <Input
                  onChange={(e: any) => {
                    setFirstNameUser(e.target.value);
                  }}
                  value={firstNameUser}
                  style={{}}
                  className="w-full outline-none bg-transparent	"
                  type="text"
                />
              </Form.Item>
            </div>

            <div className="">
              <Form.Item
                label={<p className="text-slate-900 font-bold">Ngày sinh</p>}
              >
                <DatePicker
                  onChange={(value) => {
                    setDobUser(dayjs(value).format("DD/MM/YYYY"));
                  }}
                  style={{ width: "297.44px" }}
                />
              </Form.Item>
            </div>
          </div>

          <div className="w-2/4	">
            <div className="flex flex-col mb-4">
              <Form.Item
                label={
                  <p className="text-slate-900 font-bold">
                    Tên Đệm & Tên (vd: Thi Ngoc Anh)
                  </p>
                }
                extra={
                  <span className="text-gray-500 my-2 text-xs">
                    như trên CMND (không dấu)
                  </span>
                }
              >
                <Input
                  onChange={(e: any) => {
                    setLastNameUser(e.target.value);
                  }}
                  value={lastNameUser}
                  className="w-full outline-none	bg-transparent	"
                  type="text"
                />
              </Form.Item>
            </div>
            <Form.Item
              label={<p className="text-slate-900 font-bold">Quốc tịch</p>}
            >
              <Select
                // showSearch
                // style={{ width: 160 }}
                optionFilterProp="children"
                onChange={(value) => {
                  setNationalyUser(value);
                }}
                value={nationalyUser}
                className="inputNational"
                // onSearch={onSearch}
                // filterOption={(input, option) =>
                //   (option?.label ?? "")
                //     .toLowerCase()
                //     .includes(input.toLowerCase())
                // }
                options={[
                  {
                    value: "cambodian",
                    label: "Cam Pu Chia",
                  },
                  {
                    value: "vietnam",
                    label: "Viet Nam",
                  },
                  {
                    value: "lao",
                    label: "lao",
                  },
                ]}
              />
            </Form.Item>

            <div className="text-right"><button className="btn btn-success" onClick={() => {
              handleSubmitUser()
            }}>xác nhận</button></div>
          </div>
        </div>
      </div>
    </Form>
  }

  console.log("dobUser", dobUser);
  console.log("nationalyUser", nationalyUser);

  const keyName = 'id'
  useEffect(() => {
    // console.log('mang user', arrInfoUser.slice(1))
    const request = indexedDB.open(dbName, 1);
    // const request = window.indexedDB.open(dbName);
    request.onupgradeneeded = function (event: any) {
      const db = event.target.result;

      const objectStore = db.createObjectStore(storeName, { keyPath: keyName });

    };

    request.onsuccess = function (event: any) {
      console.log('thanh cong create index db')
      const db = event.target.result;
      const transaction = db.transaction([storeName], 'readonly');
      const objectStore = transaction.objectStore(storeName);

      const getProducts = () => {
        const transaction = db.transaction([storeName], 'readonly');
        const objectStore = transaction.objectStore(storeName);

        // objectStore.getAll().onsuccess = function (event: any) {
        //      console.log(event.target.result[0]);
        // };
        var request = objectStore.get('id_fromInfoPerson')
        request.onsuccess = function (event: any) {
          var value = event.target.result;
          // console.log('gia tri id_fromHome',value.nguoiLon);
          if (value) {
            setFirstNameContact(value.firstNameContact)
            setLastNameContact(value.lastNameContact)
            setPhoneNumberContact(value.phoneNumberContact)
            setEmailContact(value.emailContact)
          };
        };
      };
      getProducts();
    }
  }, [])
  return (
    <div className="pb-11">
      <h3 className="text-xl my-4 font-bold	">Thông tin liên hệ</h3>
      {/* info Contact */}
      <Form id="formInfoContact" layout="vertical" onFinish={handleSubmit}>
        <div
          className="infoContact bg-white"
          style={{ boxShadow: "rgba(3, 18, 26, 0.2) 0px 1px 2px" }}
        >
          <div
            className="flex justify-between items-center p-4"
            style={{ borderBottom: "1px solid rgb(242, 243, 243)", height: 52 }}
          >
            <h4 className="text-lg ">
              Thông tin liên hệ (nhận vé/phiếu thanh toán)
            </h4>
            <button className="text-cyan-400 font-bold" form="formInfoContact">
              Lưu
            </button>
          </div>

          <div className="flex p-4">
            <div className="w-2/4">
              <div className="flex flex-col pr-5">
                <Form.Item
                  label={
                    <p className="text-slate-900 font-bold">Họ (vd: Nguyen)</p>
                  }
                  extra="như trên CMND (không dấu)"
                >
                  <Input
                    onChange={(e: any) => {
                      setFirstNameContact(e.target.value);
                    }}
                    value={firstNameContact}
                    className="w-full outline-none bg-transparent	"
                    type="text"
                  />
                </Form.Item>
              </div>
              <div className="flex flex-col pr-5">
                <Form.Item
                  label={
                    <p className="text-slate-900 font-bold">
                      Điện thoại di động
                    </p>
                  }
                  extra="VD: +84 901234567 trong đó (+84) là mã quốc gia và 901234567
                  là số di động"
                >
                  <Input
                    onChange={(e: any) => {
                      setPhoneNumberContact(e.target.value);
                    }}
                    value={phoneNumberContact}
                    addonBefore={selectBefore}
                    className="inputPhoneNumber"
                  />
                </Form.Item>
              </div>
            </div>

            <div className="w-2/4	">
              <div className="flex flex-col">
                <Form.Item
                  label={
                    <p className="text-slate-900 font-bold">
                      Tên Đệm & Tên (vd: Thi Ngoc Anh)
                    </p>
                  }
                  extra=" như trên CMND (không dấu)"
                >
                  <Input
                    onChange={(e: any) => {
                      setLastNameContact(e.target.value);
                    }}
                    value={lastNameContact}
                    className="w-full outline-none	bg-transparent	"
                    type="text"
                  />
                </Form.Item>
              </div>
              <div className="flex flex-col">
                <Form.Item
                  label={<p className="text-slate-900 font-bold">Email</p>}
                  extra="VD: email@example.com"
                >
                  <Input
                    onChange={(e: any) => {
                      setEmailContact(e.target.value);
                    }}
                    value={emailContact}
                    className="w-full outline-none	bg-transparent	"
                    type="text"
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
      </Form>

      {/* info Customer */}
      <h3 className="text-xl my-4 font-bold	">Thông tin hành khách</h3>

      {/* render so luong nguoi lon */}
      {num > 0 ? renderNguoiLon() : <p>Thông tin người lớn đã được lưu trữ!</p>}



      <p>end</p>

      <div className="text-right" onClick={handleSubmit}>
        <NavLink to="/confirm" className="btn btn-primary font-bold px-20">
          Tiếp Tục
        </NavLink>
      </div>
    </div>
  );
}
