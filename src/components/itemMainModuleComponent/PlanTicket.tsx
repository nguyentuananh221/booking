
import React, { useState, useEffect, useRef } from 'react'
import { Button, Checkbox, DatePicker, Divider, RadioChangeEvent, Select, Space } from 'antd';
import { Radio } from 'antd';
import { FaChild, FaPlaneArrival, FaPlaneDeparture, FaWheelchair } from 'react-icons/fa';
import { BsPersonPlusFill, BsZoomIn } from 'react-icons/bs';
import { GiPerson } from 'react-icons/gi';
import { GoCalendar } from 'react-icons/go';
import { BiChild } from 'react-icons/bi';
import { RxMagnifyingGlass } from 'react-icons/rx';

import moment from 'moment';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/configStore';
import dataReducer, { dataFromHome, getDataReducer } from '../../redux/dataReducer/dataReducer';
import { DispatchType } from '../../redux/configStore';
import { RangePickerProps } from 'antd/es/date-picker';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { dbName, storeName } from '../../App';
import axios from 'axios';


// graphQL
import { gql, useQuery, useMutation } from '@apollo/client';




// const Fetch2 = gql`
// query{
//      users {
//           representative_email
//         }
//    }
// `

type Props = {}


export default function PlanTicket({ }: Props) {

     const dispatch: DispatchType = useDispatch()
     // const data = useSelector((state:RootState)=>state.testData.value)
     const [dataFromIndexDB, setDataIndexDB]: any = useState('')

     const [value, setValue] = useState(1);
     const [open, setOpen] = useState(false)
     const [click, setClick] = useState(true)
     const [defaultDate, setDefaultDate] = useState(dayjs());
     const [defaultDateUp1, setDefaultDateUp1] = useState(defaultDate.add(1, 'day'));
     // console.log('dafault', dayjs(defaultDate).format('DD/MM/YYYY'))
     // data selected
     const [locationFrom, setLocationFrom] = useState('TP HCM (SGN)')
     const [locationTo, setLocationTo] = useState('Đà Nẵng (DAD)')
     const [startDate, setStartDate] = useState(dayjs(defaultDate).format('DD/MM/YYYY'))
     const [endDate, setEndDate] = useState(dayjs(defaultDateUp1).format('DD/MM/YYYY'))
     const [seatCls, setSeatCls] = useState('Phổ thông')

     const [checkerReturn, setCheckerReturn] = useState(true)

     let [nguoiLon, setNguoiLon] = useState(1)
     let [treEm, setTreEm] = useState(0)
     let [emBe, setEmBe] = useState(0)

     // graphQL
     const [fetchData, setFetch] = useState(0)

     const dataFetch = gql`
     mutation($representativeEmail: String!){
          getUser(representativeEmail: $representativeEmail) {
               representative_email
               first_name
               last_name
               dob
               nationaly
               user_name
               user_type
          }
        }`

     const dataFetch2 = gql`
     mutation($id: String!){
          deleteUserById(id: $id)
        }
     `

     // const { loading, error, data, refetch } = useQuery(dataFetch)
     const [getUser, { loading, error, data }] = useMutation(dataFetch);

     const [deleteUserById] = useMutation(dataFetch2)


     const handleQueryGraphDelete = async (id: string) => {
          await deleteUserById({ variables: { id: `${id}` } });
          await setFetch(fetchData + 1)
     }
     const handleQueryGraphGet = async (data: string) => {
          await getUser({ variables: { representativeEmail: `${data}` } });
          await setFetch(fetchData + 1)
     }

     // console.log('data graph', data)





     // const data = useQuery(Fetch);


     // cach 2
     //      client
     //           .query({
     //                query: gql`
     // query{
     //      user {
     //     dob
     //     first_name
     //     last_name
     //     representative_email
     //      }

     // }
     //     `
     //           })
     //           .then(result => console.log('data graphQL', result.data.user));


     // data indexDB

     // console.log('data index db', dataFromIndexDB)

     // tang so luong hanh khach
     const handleCountUpNum = (data: string) => {

          const sumUser: number = nguoiLon + treEm;


          switch (data) {
               case 'nguoiLon': {
                    if (sumUser < 7) {
                         setNguoiLon(nguoiLon += 1)
                    }
                    break;
               }
               case 'treEm': {
                    if (sumUser < 7) {
                         setTreEm(treEm += 1)
                    }
                    break;

               }
               case 'emBe': {
                    if (nguoiLon > emBe) {
                         setEmBe(emBe += 1)
                    }
                    break;
               }

               default: return;
          }
          console.log('so nguoi lon', nguoiLon)
     }

     // giam so luong hanh khach
     const handleCountDownNum = (data: string) => {
          const sumUser: number = nguoiLon + treEm;


          switch (data) {
               case 'nguoiLon': {
                    if (nguoiLon > 1) {
                         setNguoiLon(nguoiLon - 1)
                    }
                    break;
               }
               case 'treEm': {
                    if (treEm > 0) {
                         setTreEm(treEm - 1)
                    }
                    break;

               }
               case 'emBe': {
                    if (nguoiLon >= emBe && emBe > 0) {
                         setEmBe(emBe - 1)
                    }
                    break;
               }

               default: return;
          }
     }


     // disable date
     const disabledDate: RangePickerProps['disabledDate'] = (current) => {
          // Can not select days before today
          return current && current < dayjs().add(-1, 'day').endOf('day');
     };

     const onChange = (e: RadioChangeEvent) => {
          // console.log('radio checked', e.target.value);
          setValue(e.target.value);
     };

     const handleChangeStartDate = (value: any) => {
          // console.log('start date', dayjs(value).format('DD/MM/YYYY'))
          setStartDate(dayjs(value).format('DD/MM/YYYY'))
     }
     const handleChangeEndDate = (value: any) => {
          // console.log('end date', dayjs(value).format('DD/MM/YYYY'))
          setEndDate(dayjs(value).format('DD/MM/YYYY'))
     }

     const handleChangeSeatCls = (value: string) => {
          // console.log(`selected ${value}`);
          setSeatCls(value)

     };

     const handleChangeFrom = (value: string) => {
          // console.log(`selected from ${value}`);
          setLocationFrom(value)

     };
     const handleChangeTo = (value: string) => {
          // console.log(`selected to ${value}`);
          setLocationTo(value)
     };


     const keyName = 'id';
     const handleSubmit = async (e: any) => {

          await dispatch(dataFromHome({
               locationFrom,
               locationTo,
               startDate,
               retunrDate: checkerReturn ? 0 : endDate,
               numberNguoiLon: nguoiLon,
               numberTreEm: treEm,
               numberEmbe: emBe,
               seatCls
          }))

          // const request = indexedDB.open(dbName, 1);

          // request.onupgradeneeded = function (event: any) {
          //      const db = event.target.result;

          //      const objectStore = db.createObjectStore(storeName, { keyPath: keyName });

          // };

          // request.onsuccess = function (event: any) {
          //      console.log('thanh cong create index db')
          //      const db = event.target.result;

          //      // // Add a product to the object store
          //      const flight = {
          //           id: 'id_fromHome',
          //           locationFrom,
          //           locationTo,
          //           startDate,
          //           retunrDate: checkerReturn ? 0 : endDate,
          //           numberNguoiLon: nguoiLon,
          //           numberTreEm: treEm,
          //           numberEmbe: emBe,
          //           seatCls
          //      }
          //      // const product = { id: 1, name: 'Product 1', price: 10, age:24 };
          //      // const transaction = db.transaction([storeName], 'readwrite');
          //      const transaction = db.transaction([storeName], 'readwrite');
          //      // const objectStore = transaction.objectStore(storeName);
          //      const objectStore = transaction.objectStore(storeName);

          //      objectStore.put(flight);
          //      // objectStore2.put(product2);
          //      // objectStore.delete(5)

          //      // Get all products from the object store
          //      // const getAllProducts = () => {
          //      //      const transaction = db.transaction([storeName], 'readonly');
          //      //      const objectStore = transaction.objectStore(storeName);

          //      //      objectStore.getAll().onsuccess = function (event: any) {
          //      //           console.log(event.target.result);
          //      //      };
          //      // };

          //      // getAllProducts();

          // };

     }

     const handleChangeCheckbox = (e: CheckboxChangeEvent) => {
          // console.log(`checked = ${e.target.checked}`);
          setCheckerReturn(!checkerReturn)
     }

     const [items, setItems] = useState(['jack', 'lucy']);

     useEffect(() => {
          console.log(data)
          // console.log('fetch', fetchData)
     }, [fetchData])

     
     useEffect(() => {

          // const fetchAPi = async () => {
          //      try {
          //           const response = await fetch('http://localhost:3002/momo-payment', {
          //                method: 'POST',
          //                headers: {
          //                     'Content-Type': 'application/json',
          //                },
          //                body: JSON.stringify({
          //                     amount: '500000',
          //                     orderInfo: 'pay with MoMo',
          //                }),
          //           });

          //           const data = await response.json();
          //           console.log('data post',data);
          //           // Xử lý kết quả từ MoMo API trong client ReactJS
          //           // ...
          //      } catch (error) {
          //           console.error(error);
          //      }

          // }

          // fetchAPi()

          setOpen(false)


          // graphQL

          




          // indexedDB
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

               // // Add a product to the object store
               // const flight = { id_flight: '1', name: 'tan son nhat', address: 'dong nai' }
               // const product = { id: 1, name: 'Product 1', price: 10, age:24 };
               // const transaction = db.transaction([storeName], 'readwrite');
               // const objectStore = transaction.objectStore(storeName);

               // console.log('store name', storeName)

               const cursorRequest = objectStore.openCursor();
               cursorRequest.onsuccess = (event: any) => {
                    const cursor = event.target.result;
                    if (cursor) {
                         if (cursor.key === 'id_fromFlight') {
                              console.log(`Key "${keyName}" exists in the store.`);
                              return;
                         }
                         cursor.continue();
                    } else {
                         console.log(`Key "${keyName}" does not exist in the store.`);
                    }
               };
               // objectStore.put(flight);
               // objectStore2.put(product2);
               // objectStore.delete(5)

               // Get all products from the object store

               const getProducts = () => {
                    const transaction = db.transaction([storeName], 'readonly');
                    const objectStore = transaction.objectStore(storeName);

                    // objectStore.getAll().onsuccess = function (event: any) {
                    //      console.log(event.target.result[0]);
                    // };
                    var request = objectStore.get('id_fromHome')
                    request.onsuccess = function (event: any) {
                         var value = event.target.result;
                         // console.log('gia tri id_fromHome',value.nguoiLon);
                         if (value) {

                              setLocationFrom(value.locationFrom)
                              setLocationTo(value.locationTo)
                              setStartDate(value.startDate)
                              setEndDate(value.endDate)
                              setSeatCls(value.seatCls)
                              setNguoiLon(value.numberNguoiLon)
                              setEmBe(value.numberEmbe)
                              setTreEm(value.numberTreEm)

                              // const [locationFrom, setLocationFrom] = useState('TP HCM (SGN)')
                              // const [locationTo, setLocationTo] = useState('Đà Nẵng (DAD)')
                              // const [startDate, setStartDate] = useState(dayjs(defaultDate).format('DD/MM/YYYY'))
                              // const [endDate, setEndDate] = useState(dayjs(defaultDateUp1).format('DD/MM/YYYY'))
                              // const [seatCls, setSeatCls] = useState('Phổ thông 123')
                         }
                    };

               };

               // getProducts();

               const checkID = () => {
                    const transaction = db.transaction([storeName], 'readonly');
                    const objectStore = transaction.objectStore(storeName);

                    // const objectStore  = transaction.objectStore(storeName);
                    const getValue = objectStore.get(keyName);
                    getValue.onsuccess = function () {
                         const value = getValue.result;
                         if (value) {
                              console.log('Value exists:', value);
                         } else {
                              console.log('Value does not exist for key:', keyName);
                         }
                    };
                    // objectStore.getAll().onsuccess = function (event: any) {
                    //      if(event.target.result){
                    //           console.log('co data')
                    //      } else {
                    //           console.log('ko co data')
                    //      }
                    // };
               };

               checkID();


          };

     }, [click])

     return (
          <div className='p-3'>
               {/* <button className='btn btn-success' onClick={async () => {
                    await handleQueryGraphGet('tsizip@gmail.com')
               }}>query graphQL (get theo email)</button> */}
               {/* <button className='btn btn-success' onClick={() => {
                    // axios.post('http://localhost:3001/data', { email: 'tsizip@gmail.com' })
                    //      .then(res => {

                    //           // console.log('data email', res.data)
                    //      })
                    fetch('http://localhost:3001/data', {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json'
                         },
                         body: JSON.stringify({ email: 'tsizip@gmail.com' })
                    })
                         .then(response => response.json())
                         .then(data => {
                              // xử lý dữ liệu trả về ở đây
                              console.log(data);
                         })
                         .catch(error => {
                              // xử lý lỗi ở đây
                              console.error(error);
                         });
               }} >get data theo email</button> */}
               {/* <button className='btn btn-success' onClick={() => {
                    // axios.post('http://localhost:3001/delete', { id: '582f03ef-0f0b-410b-ac91-f2ca1e9d4e12' })
                    //      .then(res => { console.log('res', res.data) })
                    handleQueryGraphDelete('04b715e2-f72c-40f3-a3fb-05a76b4b52ea')
               }} >delete data theo id</button> */}
               <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}><span className='font-bold'>Một chiều / Khứ hồi</span></Radio>
                    <Radio value={2}><span className='font-bold'>Nhiều thành phố</span></Radio>
               </Radio.Group>

               <form onSubmit={handleSubmit} className='mt-2'>
                    <div className='top row mb-3'>
                         <div className='from col-3 font-bold '>
                              Từ
                              <div className='flex p-2 rounded-md border border-black items-center'>
                                   {/* <FaPlaneDeparture style={{ height: '20px', width: '30px', marginRight: '10px' }} /> */}
                                   <Select
                                        style={{ width: '100%', fontSize: '25px' }}
                                        onChange={handleChangeFrom}
                                        tokenSeparators={[',']}
                                        defaultValue='TP HCM (SGN)'
                                        // showArrow
                                        options={[
                                             { value: 'TP HCM (SGN)', label: <div><p>TP HCM, Việt Nam</p><p className='text-gray-500 text-xs'>SGN - Sân bay Tân Sơn Nhất</p></div> },
                                        ]}
                                   >

                                   </Select>
                              </div>
                         </div>
                         <div className='to col-3 font-bold '>
                              Đến
                              <div className='flex p-2 rounded-md border border-black items-center'>
                                   {/* <FaPlaneArrival style={{ height: '20px', width: '30px', marginRight: '10px' }} /> */}
                                   <Select
                                        style={{ width: '100%', fontSize: '25px' }}
                                        onChange={handleChangeTo}
                                        tokenSeparators={[',']}
                                        defaultValue='Đà Nẵng (DAD)'
                                        options={[
                                             { value: 'Đà Nẵng (DAD)', label: <div><p>Đà Nẵng, Việt Nam</p><p className='text-gray-500 text-xs'>DAD - Sân bay Đà Nẵng</p></div> },
                                        ]}
                                   >

                                   </Select>
                              </div>
                         </div>
                         <div className='count col-6 font-bold'>
                              Số hành khách
                              <div className='flex p-2 rounded-md border border-black items-center'>
                                   <BsPersonPlusFill style={{ height: '20px', width: '30px', marginRight: '10px' }} />

                                   <Select
                                        open={open}
                                        onClick={() => {
                                             setOpen(true)
                                        }}
                                        onBlur={() => {
                                             // setOpen(false)
                                        }}
                                        style={{ width: 300 }}
                                        value={`${nguoiLon} Người lớn, ${treEm} Trẻ em, ${emBe} Em bé`}
                                        dropdownRender={(menu) => (
                                             <div className='w-full'>

                                                  {/* <Space style={{ padding: '0 8px 4px', width: '100%' }}> */}

                                                  <div className='w-full'>
                                                       <div className='row w-full mb-3'>
                                                            <div className='col flex items-center'>
                                                                 <GiPerson className='w-6 h-6 mr-3' />
                                                                 <div>
                                                                      <p className=' font-bold text-sm'>Người lớn</p>
                                                                      <p className='text-xs text-gray-400'>(từ 12 tuổi)</p>
                                                                 </div>
                                                            </div>
                                                            <div className='col flex items-center justify-end  text-xl'>
                                                                 <button className='mx-4 text-2xl text-blue-700' onClick={() => {
                                                                      handleCountDownNum('nguoiLon')
                                                                 }}>-</button>
                                                                 <p>{nguoiLon}</p>
                                                                 <button className='mx-4 text-2xl text-blue-700' onClick={() => {
                                                                      handleCountUpNum('nguoiLon')
                                                                 }} >+</button>
                                                            </div>
                                                       </div>
                                                       <div className='row w-full mb-3'>
                                                            <div className='col flex items-center'>
                                                                 <FaChild className='w-6 h-6 mr-3' />
                                                                 <div>
                                                                      <p className=' font-bold text-sm'>Trẻ em</p>
                                                                      <p className='text-xs text-gray-400'>(từ 2 - 11 tuổi)</p>
                                                                 </div>
                                                            </div>
                                                            <div className='col flex items-center justify-end text-xl'>
                                                                 <button className='mx-4 text-2xl text-blue-700' onClick={() => {
                                                                      handleCountDownNum('treEm')
                                                                 }}>-</button>
                                                                 <p>{treEm}</p>
                                                                 <button className='mx-4 text-2xl text-blue-700' onClick={() => {
                                                                      handleCountUpNum('treEm')
                                                                 }} >+</button>
                                                            </div>
                                                       </div>

                                                       <div className='row w-full'>
                                                            <div className='col flex items-center'>
                                                                 <BiChild className='w-6 h-6 mr-3' />
                                                                 <div>
                                                                      <p className=' font-bold text-sm'>Em bé</p>
                                                                      <p className='text-xs text-gray-400'>(dưới 2 tuổi)</p>
                                                                 </div>
                                                            </div>
                                                            <div className='col flex items-center justify-end text-xl'>
                                                                 <button className='mx-4 text-2xl text-blue-700' onClick={() => {
                                                                      handleCountDownNum('emBe')
                                                                 }}>-</button>
                                                                 <p>{emBe}</p>
                                                                 <button className='mx-4 text-2xl text-blue-700' onClick={() => {
                                                                      handleCountUpNum('emBe')
                                                                 }} >+</button>
                                                            </div>
                                                       </div>
                                                       <Divider style={{ margin: '8px 0' }} />
                                                       <div className='text-right'>
                                                            <div className='btn text-sm text-blue-700 font-extrabold' onClick={() => {
                                                                 setClick(!click)

                                                            }}>Xong</div>
                                                       </div>
                                                  </div>
                                                  {/* </Space> */}
                                             </div>
                                        )}
                                        options={items.map((item) => ({ label: item, value: item }))}
                                   />

                              </div>
                         </div>
                    </div>
                    <div className='bottom row'>
                         <div className='from col-3 font-bold '>
                              Ngày đi
                              <div className='flex p-2 rounded-md border border-black items-center'>
                                   <GoCalendar style={{ height: '20px', width: '30px', marginRight: '10px' }} />
                                   <DatePicker disabledDate={disabledDate} defaultValue={defaultDate} format={'DD/MM/YYYY'} onChange={handleChangeStartDate} className='border-none outline-none' />
                              </div>
                         </div>
                         <div className='to col-3 font-bold '>
                              <Checkbox onChange={handleChangeCheckbox} >Khứ hồi</Checkbox>
                              <div className='flex p-2 rounded-md border border-black items-center'>
                                   <GoCalendar style={{ height: '20px', width: '30px', marginRight: '10px' }} />
                                   <DatePicker disabled={checkerReturn} disabledDate={disabledDate} defaultValue={defaultDateUp1} format={'DD/MM/YYYY'} onChange={handleChangeEndDate} className='border-none outline-none' />
                              </div>
                         </div>
                         <div className='count col-6 font-bold'>
                              Hạng ghế
                              <div className='flex p-2 rounded-md border border-black items-center'>
                                   <FaWheelchair style={{ height: '20px', width: '30px', marginRight: '10px' }} />
                                   <Select
                                        style={{ width: '100%', fontSize: '25px' }}
                                        onChange={handleChangeSeatCls}
                                        tokenSeparators={[',']}
                                        value={seatCls}
                                        options={[
                                             { value: 'Phổ thông', label: 'Phổ thông' },
                                             { value: 'Phổ thông đặc biệt', label: 'Phổ thông đặc biệt' },
                                             { value: 'Thương gia', label: 'Thương gia' },
                                             { value: 'Hạng nhất', label: 'Hạng nhất', disabled: false },
                                        ]}
                                   >

                                   </Select>
                              </div>
                         </div>
                    </div>
                    <div className='text-right'>
                         <button onClick={handleSubmit} className='font-bold p-2 mt-4 ml-auto mr-0 mb-0 rounded-md bg-orange-500 text-white flex items-center' >
                              <RxMagnifyingGlass className='mr-2' /> <NavLink to='/flight'>Tìm chuyến bay</NavLink>
                              {/* tim */}
                         </button>

                    </div>
               </form>
          </div>
     )
}