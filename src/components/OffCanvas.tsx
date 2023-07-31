import React from 'react'
import { BiHomeAlt,BiListPlus,BiMailSend,BiCheckSquare, BiPhone, BiDonateHeart, BiHelpCircle, BiPaperPlane, BiHotel } from 'react-icons/bi';
import {GiCommercialAirplane} from 'react-icons/gi'
import {FaHandshake, FaHotel} from 'react-icons/fa'

type Props = {}

export default function OffCanvas({ }: Props) {
     return (
          <div>

               <div>
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                         {/* <div className="offcanvas-header justify-end">
                              <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ><i className="fa fa-times"></i></button>
                         </div> */}
                         <div className="offcanvas-body"> 
                              <div className='item flex text-base gap-3 items-center hover:bg-gray-100 cursor-pointer ' style={{padding:'15px'}}>
                                   <BiHomeAlt className='text-2xl text-blue-400'/>
                                   <span className='font-medium text-base'>Trang chủ</span>
                              </div>

                              <div className='item flex text-base gap-3 items-center hover:bg-gray-100 cursor-pointer ' style={{padding:'15px'}}>
                                   <BiListPlus className='text-2xl text-blue-400'/>
                                   <span className='font-medium text-base'>Đặt chỗ của tôi</span>
                              </div>

                              <div className='item flex text-base gap-3 items-center hover:bg-gray-100 cursor-pointer ' style={{padding:'15px'}}>
                                   <BiMailSend className='text-2xl text-blue-400'/>
                                   <span className='font-medium text-base'>Hộp thư của tôi</span>
                              </div>

                              <div className='item flex text-base gap-3 items-center hover:bg-gray-100 cursor-pointer ' style={{padding:'15px'}}>
                                   <BiCheckSquare className='text-2xl text-blue-400'/>
                                   <span className='font-medium text-base'>Đã lưu</span>
                              </div>

                              <div className='item flex text-base gap-3 items-center hover:bg-gray-100 cursor-pointer ' style={{padding:'15px'}}>
                                   <BiPhone className='text-2xl text-blue-400'/>
                                   <span className='font-medium text-base'>Liên hệ với chúng tôi</span>
                              </div>

                              <div className='item flex text-base gap-3 items-center hover:bg-gray-100 cursor-pointer ' style={{padding:'15px'}}>
                                   <FaHandshake className='text-2xl text-blue-400'/>
                                   <span className='font-medium text-base'>Hợp tác với chúng tôi</span>
                              </div>

                              <div className='item flex text-base gap-3 items-center hover:bg-gray-100 cursor-pointer ' style={{padding:'15px'}}>
                                   <BiHelpCircle className='text-2xl text-blue-400'/>
                                   <span className='font-medium text-base'>Trợ giúp</span>
                              </div>

                              <div className='item flex text-base gap-3 items-center hover:bg-gray-100 cursor-pointer ' style={{padding:'15px'}}>
                                   <GiCommercialAirplane className='text-2xl text-blue-400'/>
                                   <span className='font-medium text-base'>Vé máy bay</span>
                              </div>

                              <div className='item flex text-base gap-3 items-center hover:bg-gray-100 cursor-pointer ' style={{padding:'15px'}}>
                                   <FaHotel className='text-2xl text-blue-400'/>
                                   <span className='font-medium text-base'>Khách sạn</span>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     )
}
