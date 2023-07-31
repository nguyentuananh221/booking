import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious, GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { MdNavigateNext } from 'react-icons/md';

type Props = {}

function SampleNextArrow(props: any) {
     const { className, style, onClick } = props;
     return (
          <div
               className={className}
               style={{ ...style, display: "block", color: 'white' }}
               onClick={onClick}
          />
     );
}

function SamplePrevArrow(props: any) {
     const { className, style, onClick } = props;
     return (
          <div
               className={className}
               style={{ ...style, display: "block", color: 'white' }}
               onClick={onClick}
          />
     );
}
export default function CarouselComponent({ }: Props) {
     const settings = {
          dots: false,
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
          // nextArrow: <i className="fa fa-angle-right"></i>,
          // prevArrow: <i className="fa fa-angle-left"></i>
     };
     return (
          <div className='carouselHeader p-1 pb-4' >
               <div className='w-full containerHome my-0 mx-auto'>

                    <Slider {...settings}>
                         <div className='mr-4 my-1'>
                              <div className='mr-4 my-1 rounded-md overflow-hidden' >
                                   <img className='mr-4 my-1 rounded-md img-carousel' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/12/22/1671695840325-dabe663df8eba4b6c45a8dcf6c3c03a9.png?tr=h-230,q-75,w-472' alt='1' />
                              </div>
                         </div>
                         <div className='mr-4 my-1'>
                              <div className='mr-4 my-1 rounded-md overflow-hidden' >
                                   <img className='mr-4 my-1 rounded-md img-carousel' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/12/22/1671695840325-dabe663df8eba4b6c45a8dcf6c3c03a9.png?tr=h-230,q-75,w-472' alt='1' />
                              </div>
                         </div>
                         <div className="mr-4 my-1">
                              <div className='mr-4 my-1 rounded-md overflow-hidden' >
                                   <img className='mr-4 my-1 rounded-md img-carousel' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/12/22/1671695840325-dabe663df8eba4b6c45a8dcf6c3c03a9.png?tr=h-230,q-75,w-472' alt='1' />
                              </div>
                         </div>
                         <div className="mr-4 my-1">
                              <div className='mr-4 my-1 rounded-md overflow-hidden' >
                                   <img className='mr-4 my-1 rounded-md img-carousel' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/12/22/1671695840325-dabe663df8eba4b6c45a8dcf6c3c03a9.png?tr=h-230,q-75,w-472' alt='1' />
                              </div>
                         </div>
                         <div className="mr-4 my-1">
                              <div className='mr-4 my-1 rounded-md overflow-hidden' >
                                   <img className='mr-4 my-1 rounded-md img-carousel' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/12/22/1671695840325-dabe663df8eba4b6c45a8dcf6c3c03a9.png?tr=h-230,q-75,w-472' alt='1' />
                              </div>
                         </div>
                         <div className="mr-4 my-1">
                              <div className='mr-4 my-1 rounded-md overflow-hidden' >
                                   <img className='mr-4 my-1 rounded-md img-carousel' src='https://ik.imagekit.io/tvlk/image/imageResource/2022/12/22/1671695840325-dabe663df8eba4b6c45a8dcf6c3c03a9.png?tr=h-230,q-75,w-472' alt='1' />
                              </div>
                         </div>
                    </Slider>
                    <h2 className='text-center font-black text-gray-100'>Xem thêm khuyến mãi</h2>
               </div>
          </div>
     )
}