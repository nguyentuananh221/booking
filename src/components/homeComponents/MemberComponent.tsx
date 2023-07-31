import { Breadcrumb } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function MemberComponent({ }: Props) {
     return (
          <div className='mb-28'>
               <div className="text-center">
                    <p className='text-2xl font-bold mb-2'>Chỉ dành riêng cho thành viên Traveloka</p>
                    <p className='font-semibold text-base'><NavLink to='' className='text-blue-600'>Đăng nhập</NavLink> hoặc <NavLink to='' className='text-blue-600'>đăng ký</NavLink> để khám phá thêm nhiều ưu đãi đặc biệt</p>

                    <div className='breadcrum flex items-center justify-center gap-2 mt-4'>
                         <div className='flex items-center'><img className='mr-2' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337373515-af609f47175de76990927fa1b716955e.svg?tr=q-75' alt='noti' /> <a href="" className='mr-2 font-semibold text-base text-black' >Thông báo giá vé</a> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>

                         <div className='flex items-center'><img className='mr-2' src='https://ik.imagekit.io/tvlk/image/imageResource/2018/12/13/1544686625813-8ab151967e81e28cc2eb3288980fe2c0.svg?tr=q-75' alt='noti' /> <a href="" className='mr-2 font-semibold text-base text-black' >Danh sách đã lưu</a> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>

                         <div className='flex items-center'><img className='mr-2' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337376527-d35060d4ef861c829d6902ff7ac4b664.svg?tr=q-75' alt='noti' /> <a href="" className='mr-2 font-semibold text-base text-black' >Easy Reschedule</a> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                         
                         <div className='flex items-center'><img className='mr-2' src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/25/1506337380633-78091cf18a1b1d8cc6f125991f7d9c17.svg?tr=q-75' alt='noti' /> <a href="" className='mr-2 font-semibold text-base text-black' >Passenger Quick Pick</a> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
                    </div>
               </div>
          </div>
     )
}