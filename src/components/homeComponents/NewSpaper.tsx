import React from 'react'
import Slider from "react-slick";
import { IoIosArrowRoundForward } from 'react-icons/io';

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
               <svg width="25" height="25" viewBox="0 0 16 16" className=" r-1p6iasa"><g transform="scale(1,1)" fill="none" fill-rule="evenodd"><rect width="16" height="16"></rect><polyline stroke="#0194f3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="10 3 5 8 10 13"></polyline></g></svg>
          </div>
     );
}

export default function NewSpaper({ }: Props) {
     const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />
          ,
          prevArrow: <SamplePrevArrow />
     };

     return (
          <div className='mb-28' >
               <p className='text-2xl font-bold mb-2'>Nhật Bản mở cửa: Xem ngay cẩm nang du lịch mới nhất</p>
               <div className='carouselEpic'>
                    <div>
                         {/* <h2>Custom Arrows</h2> */}
                         <Slider {...settings}>
                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md h-36" src="https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-nara-cover.jpg?tr=w-427" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">Du lịch Nara: ghé thăm “thánh địa của những chú nai” tại Nhật Bản</h4>
                                                  <p className="card-text text-gray-500 text-xs font-medium">Thao Nguyen</p>
                                                  <p className="card-text text-gray-500 text-xs font-medium">13 min read</p>
                                                 
                                             </div>
                                        </div>
                                   </h3>

                              </div>

                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md h-36" src="https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-yamanashi-cover.jpg?tr=w-427" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">Dạo quanh Yamanashi với khung cảnh tuyệt đẹp dưới chân núi Phú Sĩ</h4>
                                                  <p className="card-text text-gray-500 text-xs font-medium">Thao Nguyen</p>
                                                  <p className="card-text text-gray-500 text-xs font-medium">15 min read</p>
                                                 
                                             </div>
                                        </div>
                                   </h3>

                              </div>

                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md h-36" src="https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-yokohama-cover.jpg?tr=w-427" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">Khám phá nét đẹp thanh lịch của thành phố lớn thứ hai Nhật Bản - Yokohama</h4>
                                                  <p className="card-text text-gray-500 text-xs font-medium">Thao Nguyen</p>
                                                  <p className="card-text text-gray-500 text-xs font-medium">14 min read</p>
                                                 
                                             </div>
                                        </div>
                                   </h3>

                              </div>
                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md h-36" src="https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-nara-cover.jpg?tr=w-427" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">Du lịch Nara: ghé thăm “thánh địa của những chú nai” tại Nhật Bản</h4>
                                                  <p className="card-text text-gray-500 text-xs font-medium">Thao Nguyen</p>
                                                  <p className="card-text text-gray-500 text-xs font-medium">13 min read</p>
                                                 
                                             </div>
                                        </div>
                                   </h3>

                              </div>

                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md h-36" src="https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-yamanashi-cover.jpg?tr=w-427" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">Dạo quanh Yamanashi với khung cảnh tuyệt đẹp dưới chân núi Phú Sĩ</h4>
                                                  <p className="card-text text-gray-500 text-xs font-medium">Thao Nguyen</p>
                                                  <p className="card-text text-gray-500 text-xs font-medium">15 min read</p>
                                                 
                                             </div>
                                        </div>
                                   </h3>

                              </div>

                             


                         </Slider>
                    </div>
               </div>
          </div>
     )
}