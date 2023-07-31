
import Slider from "react-slick";
import { IoIosArrowRoundForward } from 'react-icons/io';
import React from 'react'


type Props = {}

function SampleNextArrow(props: any) {
     const { className, style, onClick } = props;
     return (
          <div
               style={{ padding: '10px', position: 'absolute', zIndex: '222', top: '25%', right: '-20px', border: '1px solid white', borderRadius: '50%', boxShadow: 'rgba(3, 18, 26, 0.2) 0px 8px 16px', backgroundColor: 'white' }}
               className='cursor-pointer'
               onClick={onClick}
          >
               <svg width={25} height={25} viewBox="0 0 16 16" className=" r-1p6iasa"><g transform="scale(1,1)" fill="none" fillRule="evenodd"><rect width={16} height={16} /><polyline stroke="#0194f3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} points="6 3 11 8 6 13" /></g></svg>
          </div>
     );
}

function SamplePrevArrow(props: any) {
     const { className, style, onClick } = props;
     return (
          <div
               style={{ padding: '10px', position: 'absolute', zIndex: '222', top: '25%', left: '-35px', border: '1px solid white', borderRadius: '50%', boxShadow: 'rgba(3, 18, 26, 0.2) 0px 8px 16px', backgroundColor: 'white' }}
               className='cursor-pointer'
               onClick={onClick}
          >
               <svg width="25" height="25" viewBox="0 0 16 16" className=" r-1p6iasa"><g transform="scale(1,1)" fill="none" fillRule="evenodd"><rect width="16" height="16"></rect><polyline stroke="#0194f3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" points="10 3 5 8 10 13"></polyline></g></svg>
          </div>
     );
}

export default function EpicSaleTicket({ }: Props) {
     const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />
          ,
          prevArrow: <SamplePrevArrow />
     };
     return (
          <div className='mb-28'>
               <div>
                    <div className='flex items-center'>
                         <img className='mr-4' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/12/27/1672117599321-3cefefbbab1b91a39a089b1f5c26c6b5.png?_src=imagekit&tr=q-40,h-24' alt='sale' />
                         <h2 className='m-0 text-2xl font-bold ' style={{ color: 'rgb(255, 109, 112)' }}>EPIC Sale Vé vui chơi</h2>
                    </div>
                    <ul className="nav nav-pills my-4" id="pills-tab" role="tablist">
                         <li className="nav-item" role="presentation">
                              <button className="nav-link mr-2 font-semibold  active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" >Miền Bắc</button>
                         </li>
                         <li className="nav-item" role="presentation">
                              <button className="nav-link mr-2 font-semibold " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" >Đà Lạt</button>
                         </li>
                         <li className="nav-item" role="presentation">
                              <button className="nav-link mr-2 font-semibold " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" >Đà Nẵng & Miền Trung</button>
                         </li>
                         <li className="nav-item" role="presentation">
                              <button className="nav-link mr-2 font-semibold " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#sg" type="button" role="tab" >Sài Gòn & Lân Cận</button>
                         </li>
                         <li className="nav-item" role="presentation">
                              <button className="nav-link mr-2 font-semibold " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#nt" type="button" role="tab" >Nha Trang & Phú Quốc</button>
                         </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                         <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                              <div className='carouselEpic'>
                                   <div>
                                        {/* <h2>Custom Arrows</h2> */}
                                        <Slider {...settings}>
                                             <div className='mr-4 my-2'>
                                                  <h3>
                                                       <div className="card border-none outline-none mr-4 my-2">
                                                            <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/217/vi_VN/2022/07/22/3989eaff-b532-39a2-b00b-9876ccee3bcb?tr=w-256" alt="Title" />
                                                            <div className="card-body p-0">
                                                                 <h4 className="card-title mt-3 flex  items-center font-bold">Tour premium Bà Nà Hills - 1 ngày</h4>
                                                                 <p className="card-text text-gray-500 font-light text-xs line-through">VND 1.638.554</p>
                                                                 <p className="card-text text-orange-400">VND 1.633.000</p>
                                                                 {/* <div className='w-10 h-10 bg-red-600 rounded-full line'>O</div> */}
                                                            </div>
                                                       </div>
                                                  </h3>

                                             </div>

                                             <div className='mr-4 my-2'>
                                                  <h3>
                                                       <div className="card border-none outline-none mr-4 my-2">
                                                            <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/217/vi_VN/2022/07/22/a4679b84-a8d7-3153-a728-fccb54e1e95c?tr=w-256" alt="Title" />
                                                            <div className="card-body p-0">
                                                                 <h4 className="card-title mt-3 flex  items-center font-bold">Vé tham quan rừng dừa Bảy Mẫu bằng thuyền thúng</h4>
                                                                 <p className="card-text text-gray-500 font-light text-xs line-through">VND 200.000</p>
                                                                 <p className="card-text text-orange-400">VND 72.000</p>
                                                                 {/* <div className='w-10 h-10 bg-red-600 rounded-full line'>O</div> */}
                                                            </div>
                                                       </div>
                                                  </h3>

                                             </div>
                                             <div className='mr-4 my-2'>
                                                  <h3>
                                                       <div className="card border-none outline-none mr-4 my-2">
                                                            <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/217/vi_VN/2022/07/22/3989eaff-b532-39a2-b00b-9876ccee3bcb?tr=w-256" alt="Title" />
                                                            <div className="card-body p-0">
                                                                 <h4 className="card-title mt-3 flex  items-center font-bold">Tour premium Bà Nà Hills - 1 ngày</h4>
                                                                 <p className="card-text text-gray-500 font-light text-xs line-through">VND 1.638.554</p>
                                                                 <p className="card-text text-orange-400">VND 1.633.000</p>
                                                                 {/* <div className='w-10 h-10 bg-red-600 rounded-full line'>O</div> */}
                                                            </div>
                                                       </div>
                                                  </h3>

                                             </div>

                                             <div className='mr-4 my-2'>
                                                  <h3>
                                                       <div className="card border-none outline-none mr-4 my-2">
                                                            <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/217/vi_VN/2022/07/22/a4679b84-a8d7-3153-a728-fccb54e1e95c?tr=w-256" alt="Title" />
                                                            <div className="card-body p-0">
                                                                 <h4 className="card-title mt-3 flex  items-center font-bold">Vé tham quan rừng dừa Bảy Mẫu bằng thuyền thúng</h4>
                                                                 <p className="card-text text-gray-500 font-light text-xs line-through">VND 200.000</p>
                                                                 <p className="card-text text-orange-400">VND 72.000</p>
                                                                 {/* <div className='w-10 h-10 bg-red-600 rounded-full line'>O</div> */}
                                                            </div>
                                                       </div>
                                                  </h3>

                                             </div>
                                             <div className='mr-4 my-2'>
                                                  <h3>
                                                       <div className="card border-none outline-none mr-4 my-2">
                                                            <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/217/vi_VN/2022/07/22/3989eaff-b532-39a2-b00b-9876ccee3bcb?tr=w-256" alt="Title" />
                                                            <div className="card-body p-0">
                                                                 <h4 className="card-title mt-3 flex  items-center font-bold">Tour premium Bà Nà Hills - 1 ngày</h4>
                                                                 <p className="card-text text-gray-500 font-light text-xs line-through">VND 1.638.554</p>
                                                                 <p className="card-text text-orange-400">VND 1.633.000</p>
                                                                 {/* <div className='w-10 h-10 bg-red-600 rounded-full line'>O</div> */}
                                                            </div>
                                                       </div>
                                                  </h3>

                                             </div>

                                             <div className='mr-4 my-2'>
                                                  <h3>
                                                       <div className="card border-none outline-none mr-4 my-2">
                                                            <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/217/vi_VN/2022/07/22/a4679b84-a8d7-3153-a728-fccb54e1e95c?tr=w-256" alt="Title" />
                                                            <div className="card-body p-0">
                                                                 <h4 className="card-title mt-3 flex  items-center font-bold">Vé tham quan rừng dừa Bảy Mẫu bằng thuyền thúng</h4>
                                                                 <p className="card-text text-gray-500 font-light text-xs line-through">VND 200.000</p>
                                                                 <p className="card-text text-orange-400">VND 72.000</p>
                                                                 {/* <div className='w-10 h-10 bg-red-600 rounded-full line'>O</div> */}
                                                            </div>
                                                       </div>
                                                  </h3>

                                             </div>
                                             <div className='mr-4 my-2'>
                                                  <h3>
                                                       <div className="card border-none outline-none mr-4 my-2">
                                                            <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/217/vi_VN/2022/07/22/3989eaff-b532-39a2-b00b-9876ccee3bcb?tr=w-256" alt="Title" />
                                                            <div className="card-body p-0">
                                                                 <h4 className="card-title mt-3 flex  items-center font-bold">Tour premium Bà Nà Hills - 1 ngày</h4>
                                                                 <p className="card-text text-gray-500 font-light text-xs line-through">VND 1.638.554</p>
                                                                 <p className="card-text text-orange-400">VND 1.633.000</p>
                                                                 {/* <div className='w-10 h-10 bg-red-600 rounded-full line'>O</div> */}
                                                            </div>
                                                       </div>
                                                  </h3>

                                             </div>

                                             <div className='mr-4 my-2'>
                                                  <h3>
                                                       <div className="card border-none outline-none mr-4 my-2">
                                                            <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/217/vi_VN/2022/07/22/a4679b84-a8d7-3153-a728-fccb54e1e95c?tr=w-256" alt="Title" />
                                                            <div className="card-body p-0">
                                                                 <h4 className="card-title mt-3 flex  items-center font-bold">Vé tham quan rừng dừa Bảy Mẫu bằng thuyền thúng</h4>
                                                                 <p className="card-text text-gray-500 font-light text-xs line-through">VND 200.000</p>
                                                                 <p className="card-text text-orange-400">VND 72.000</p>
                                                                 {/* <div className='w-10 h-10 bg-red-600 rounded-full line'>O</div> */}
                                                            </div>
                                                       </div>
                                                  </h3>

                                             </div>




                                        </Slider>
                                   </div>
                              </div>
                              <div className='text-center'>
                                   <button className='btn font-bold text-white' style={{ backgroundColor: 'rgb(255, 109, 112)' }} >Xem thêm ưu đãi vui chơi</button>
                              </div>
                         </div>
                         <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>dl</div>
                         <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>dn</div>
                         <div className="tab-pane fade" id="sg" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>sg</div>
                         <div className="tab-pane fade" id="nt" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>nt</div>

                    </div>
               </div>


          </div>
     )
}