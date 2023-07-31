import React from 'react'
import Slider from "react-slick";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GrFormNext, GrFormPrevious, GrNext, GrPrevious } from 'react-icons/gr';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Button } from 'antd';

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

export default function BayEpicComponent({ }: Props) {
     const settings = {
          dots: false,
          infinite: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />
          ,
          prevArrow: <SamplePrevArrow />
     };

     return (
          <div className='mb-28'>
               <div className='flex items-center'>
                    <img className='mr-4' src='https://ik.imagekit.io/tvlk/image/imageResource/2023/03/31/1680225201206-1ff57f058ea4606bb43a20472c5341b9.png?_src=imagekit&tr=q-40,h-24' alt='sale' />
                    <h2 className='m-0 text-2xl font-bold ' style={{ color: 'rgb(48, 197, 247)' }}>Bay EPIC!</h2>
               </div>
               <p className='text-gray-500 font-medium my-2 text-base'>Sử dụng mã giảm giá để được giảm thêm đến 700K</p>
               <div className='carouselEpic'>
                    <div>
                         {/* <h2>Custom Arrows</h2> */}
                         <Slider {...settings}>
                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/242/vi_VN/2023/03/28/04e1bf8a-4115-36f1-8889-89e56a95a07e?tr=w-256" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">TP HCM  <IoIosArrowRoundForward />  Hà Nội</h4>
                                                  <p className="card-text text-gray-500 font-light">12/04/2023</p>
                                                  <p className="card-text text-orange-400">VND 866.000</p>
                                                  {/* <div className='w-10 h-10 bg-red-600 rounded-full line'>O</div> */}
                                             </div>
                                        </div>
                                   </h3>

                              </div>

                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/242/vi_VN/2023/03/28/bc9859e7-f27f-3da7-8350-abf3ba5756be?tr=w-256" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">TP HCM  <IoIosArrowRoundForward />  Đà Nẵng</h4>
                                                  <p className="card-text text-gray-500 font-light">09/04/2023</p>
                                                  <p className="card-text text-orange-400">VND 723.900</p>
                                             </div>
                                        </div>
                                   </h3>

                              </div>
                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/242/vi_VN/2023/03/28/0cc41bf4-ca27-32e7-b9eb-c4eaa768d81f?tr=w-256" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">TP HCM  <IoIosArrowRoundForward />  Vinh</h4>
                                                  <p className="card-text text-gray-500 font-light">20/04/2023</p>
                                                  <p className="card-text text-orange-400">VND 923.000</p>
                                             </div>
                                        </div>
                                   </h3>

                              </div>
                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/242/vi_VN/2023/03/28/40773090-8383-34e5-a1c9-1ee0338ce384?tr=w-256" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">TP HCM  <IoIosArrowRoundForward />  Huế</h4>
                                                  <p className="card-text text-gray-500 font-light">24/04/2023</p>
                                                  <p className="card-text text-orange-400">VND 692.000</p>
                                             </div>
                                        </div>
                                   </h3>

                              </div>
                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/242/vi_VN/2023/03/28/cc9428ec-8ad8-3392-9350-37ebd6c49732?tr=w-256" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">TP HCM  <IoIosArrowRoundForward />  Phú Quốc</h4>
                                                  <p className="card-text text-gray-500 font-light">17/04/2023</p>
                                                  <p className="card-text text-orange-400">VND 671.000</p>
                                             </div>
                                        </div>
                                   </h3>

                              </div>
                              <div className='mr-4 my-2'>
                                   <h3>
                                        <div className="card border-none outline-none mr-4 my-2">
                                             <img className="card-img-top rounded-md" src="https://ik.imagekit.io/tvlk/mchitm/imageResource/template/242/vi_VN/2023/03/28/bc9859e7-f27f-3da7-8350-abf3ba5756be?tr=w-256" alt="Title" />
                                             <div className="card-body  p-0">
                                                  <h4 className="card-title mt-3 flex  items-center font-bold">TP HCM  <IoIosArrowRoundForward />  Đà Nẵng</h4>
                                                  <p className="card-text text-gray-500 font-light">09/04/2023</p>
                                                  <p className="card-text text-orange-400">VND 723.900</p>
                                             </div>
                                        </div>
                                   </h3>

                              </div>


                         </Slider>
                    </div>
               </div>
               <div className='text-center'>
                    <button className='btn font-bold text-white btn-primary' >Xem thêm ưu đãi vé máy bay</button>
               </div>
          </div>
     )
}