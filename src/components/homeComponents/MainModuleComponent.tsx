import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React from 'react'
import { BiCheckSquare, BiHelpCircle, BiListPlus, BiMailSend, BiPhone } from 'react-icons/bi';
import { FaHandshake, FaHotel } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';
import PlanTicket from '../itemMainModuleComponent/PlanTicket';

type Props = {}

export default function MainModuleComponent({ }: Props) {

     const handleChange = (value: any) => {
          console.log(value)
     }

     return (
          <div className='mainModule mb-28'>

               <div className='containerHome rounded-md overflow-hidden bg-white'>
                    <Tabs tabPosition='left' defaultActiveKey='1' animated={true}>
                         <TabPane className='m-0' key={'1'} tab={<div className='flex items-center'><span className='mr-3'><GiCommercialAirplane className='text-base text-blue-400'/></span><h4>Vé máy bay</h4></div>}>
                              <PlanTicket/>
                         </TabPane>

                         <TabPane className='m-0' key={'2'} tab={<div className='flex items-center'><span className='mr-3'><FaHotel className='text-base text-blue-400'/></span><h4>Khách sạn</h4></div>}>
                              ks
                         </TabPane>

                         <TabPane className='m-0' key={'3'} tab={<div className='flex items-center'><span className='mr-3'><BiListPlus className='text-base text-blue-400'/></span><h4>Đặt chỗ</h4></div>}>
                              dat cho
                         </TabPane>
                         <TabPane className='m-0' key={'4'} tab={<div className='flex items-center'><span className='mr-3'><BiMailSend className='text-base text-blue-400'/></span><h4>Hộp thư</h4></div>}>
                              hop thu
                         </TabPane>

                         <TabPane className='m-0' key={'5'} tab={<div className='flex items-center'><span className='mr-3'><BiCheckSquare className='text-base text-blue-400'/></span><h4>Đã lưu</h4></div>}>
                              da luu
                         </TabPane>

                         <TabPane className='m-0' key={'6'} tab={<div className='flex items-center'><span className='mr-3'><BiPhone className='text-base text-blue-400'/></span><h4>Liên hệ</h4></div>}>
                              lien he
                         </TabPane>

                         <TabPane className='m-0' key={'7'} tab={<div className='flex items-center'><span className='mr-3'><FaHandshake className='text-base text-blue-400'/></span><h4>Hợp tác</h4></div>}>
                              hop tac
                         </TabPane>

                         {/* <TabPane className='m-0' key={'8'} tab={<div className='flex items-center'><span className='mr-3'><BiHelpCircle className='text-base text-blue-400'/></span><h4>Trợ giúp</h4></div>}>
                              tro giup
                         </TabPane> */}
                    </Tabs>
               </div>
          </div>
     )
}