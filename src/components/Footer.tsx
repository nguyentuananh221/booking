import { Button } from 'antd'
import React from 'react'
import { FaHandshake } from 'react-icons/fa'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Footer({ }: Props) {
     return (
          <div className='footer container-fluid bg-black'>
               <div className='container text-white '>
                    <div className='row '>
                         <div className='col-4 '>
                              <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/ad89f39fe62c8b500e6f9a25fa4427d8.svg' alt='logo' />
                              <div className='flex gap-4' >
                                   <img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75' alt='123' />
                                   <img src='https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100' alt='123' />

                              </div>
                              <div className='inline-flex btn btn-success bg-transparent border-2 border-white py-2.5 px-4 my-4'><FaHandshake className='text-2xl text-white mr-3' /> Hợp tác với Traveloka</div>

                              <div>
                                   <p className='font-bold text-base mb-2'>Đối tác thanh toán</p>
                                   <div className='row gap-2'>
                                        <div className="col-2 brand">
                                             <img src='https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=q-75,w-51' alt='1' />
                                        </div>
                                        <div className="col-2 brand">
                                             <img src='https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=q-75,w-51' alt='1' />
                                        </div>
                                        <div className="col-2 brand">
                                             <img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/07/08/1657286372391-45dab552eed9b787bfc93547e26c6d87.png?tr=q-75,w-51' alt='1' />
                                        </div>
                                        <div className="col-2 brand">
                                             <img src='https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=q-75,w-51' alt='1' />
                                        </div>
                                   </div>
                                   <div className='row gap-2'>
                                        <div className="col-2 brand">
                                             <img src='https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=q-75,w-51' alt='1' />
                                        </div>
                                        <div className="col-2 brand">
                                             <img src='https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=q-75,w-51' alt='1' />
                                        </div>
                                        <div className="col-2 brand">
                                             <img src='https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778793443-2f6b7f7d0668a4a815962032dd8233a2.png?tr=q-75,w-51' alt='1' />
                                        </div>
                                        <div className="col-2 brand">
                                             <img src='https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=q-75,w-51' alt='1' />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='col-8 pt-5'>
                              <div className='row'>
                                   <div className="col-4">
                                        <p className='font-bold text-base mb-2'>Về traveloka</p>
                                        <div className='text-sm font-semibold text-gray-400'>
                                             <p><NavLink to='/'>Cách đặt chỗ</NavLink></p>
                                             <p><NavLink to='/'>Liên hệ chúng tôi</NavLink></p>
                                             <p><NavLink to='/'>Trợ giúp</NavLink></p>
                                             <p><NavLink to='/'>Tuyển dụng</NavLink></p>
                                             <p><NavLink to='/'>Về chúng tôi</NavLink></p>
                                        </div>


                                        <p className='font-bold text-base mb-2 mt-3'>Theo dõi chúng tôi trên</p>
                                        <div className='text-sm font-semibold text-gray-400'>
                                             <p><NavLink to='/' className='flex items-center' ><BsFacebook className='mr-3' /> Facebook</NavLink></p>
                                             <p><NavLink to='/' className='flex items-center' ><BsInstagram className='mr-3' /> Instagram</NavLink></p>
                                             <p><NavLink to='/' className='flex items-center' ><BsYoutube className='mr-3' /> Youtube</NavLink></p>
                                        </div>
                                   </div>
                                   <div className="col-4">
                                        <p className='font-bold text-base mb-2'>Sản phẩm</p>
                                        <div className='text-sm font-semibold text-gray-400'>
                                             <p><NavLink to='/'>Vé máy bay</NavLink></p>
                                             <p><NavLink to='/'>Khách sạn</NavLink></p>
                                             <p><NavLink to='/'>Combo tiết kiệm</NavLink></p>
                                             <p><NavLink to='/'>Xperience</NavLink></p>
                                             <p><NavLink to='/'>Car Rental</NavLink></p>
                                             <p><NavLink to='/'>Biệt thự</NavLink></p>
                                             <p><NavLink to='/'>Căn hộ</NavLink></p>
                                             <p><NavLink to='/'>Đưa đón sân bay</NavLink></p>
                                        </div>
                                   </div>
                                   <div className="col-4">
                                        <p className='font-bold text-base mb-2'>Khác</p>
                                        <div className='text-sm font-semibold text-gray-400'>
                                             <p>Traveloka Affiliate</p>
                                             <p>Traveloka Blog</p>
                                             <p>Chính sách quyền riêng tư</p>
                                             <p>Điều khoản & Điều kiện</p>
                                             <p>Quy chế hoạt động</p>
                                             <p>Đăng ký nơi nghỉ của bạn</p>
                                             <p>Đăng ký doanh nghiệp hoạt động du lịch của bạn</p>
                                             <p>Khu vực báo chí</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* bottom */}
               <div className='border-t-2 text-gray-700 pt-5 py-32 border-gray-800'>
                    <p className='text-center font-medium'>Công Ty TNHH Phần Mềm Zero Nine có mã số thuế 0314491817, do ông/bà Đinh Tiến Dũng làm đại diện pháp luật, được cấp giấy chứng nhận đăng ký kinh doanh ngày 04/07/2017</p>
                    <p className='text-center mt-2 text-white'>Copyright © 2023 Zero Nine</p>
               </div>

          </div>
     )
}