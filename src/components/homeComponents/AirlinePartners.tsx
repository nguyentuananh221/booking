import React from 'react'
import Slider from 'react-slick';

type Props = {}
function SampleNextArrow(props: any) {
     const { className, style, onClick } = props;
     return (
          <div
               style={{ padding: '5px', position: 'absolute', zIndex: '222', top: '35%', right: '-20px', border: '1px solid white', borderRadius: '50%', boxShadow: 'rgba(3, 18, 26, 0.2) 0px 8px 16px', backgroundColor: 'white' }}
               className='cursor-pointer'
               onClick={onClick}
          >
               <svg width={15} height={15} viewBox="0 0 16 16" className=" r-1p6iasa"><g transform="scale(1,1)" fill="none" fillRule="evenodd"><rect width={16} height={16} /><polyline stroke="#0194f3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} points="6 3 11 8 6 13" /></g></svg>
          </div>
     );
}

function SamplePrevArrow(props: any) {
     const { className, style, onClick } = props;
     return (
          <div
               style={{ padding: '5px', position: 'absolute', zIndex: '222', top: '35%', left: '-35px', border: '1px solid white', borderRadius: '50%', boxShadow: 'rgba(3, 18, 26, 0.2) 0px 8px 16px', backgroundColor: 'white' }}
               className='cursor-pointer'
               onClick={onClick}
          >
               <svg width="15" height="15" viewBox="0 0 16 16" className=" r-1p6iasa"><g transform="scale(1,1)" fill="none" fill-rule="evenodd"><rect width="16" height="16"></rect><polyline stroke="#0194f3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="10 3 5 8 10 13"></polyline></g></svg>
          </div>
     );
}

export default function AirlinePartners({ }: Props) {
     const settings = {
          className: "center",
          // centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500,
          rows: 2,
          slidesPerRow: 2,
          nextArrow: <SampleNextArrow />
          ,
          prevArrow: <SamplePrevArrow />
     };
     return (
          <div className='mb-28 airline'>
               <div className='row'>
                    <div className="col-4 pt-3">
                         <div>
                              <p className='text-2xl font-bold mb-2'>Đối tác hàng không</p>
                              <p className='text-gray-500 text-sm font-semibold my-3'>Đối tác hàng không nội địa và quốc tế</p>
                              <p className='text-base font-medium leading-6'>Những đối tác hàng không toàn cầu sẽ chắp cánh đưa bạn đến mọi địa điểm trên thế giới.</p>

                         </div>
                    </div>
                    <div className="col-8">
                         <div className='etst'>
                              <Slider {...settings}>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568212919133-2482812716f8f0532738cb4518387a0d.png?tr=q-75,w-88" alt="1" />

                                   </div>

                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/21/1582260108949-09348d284bb3fd1675614f43ab22a6d8.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213291182-fd05076a8f71ea7f97ce37b307741c11.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213296422-f6b5db2bbfea2e7ee39bd7b2a7bb612f.png?tr=q-75,w-88" alt="1" />

                                   </div>


                                   {/* === */}
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2022/05/31/1653980299757-6784a77ebf1ee7eb39aded22846ad2ce.png?tr=q-75,w-88" alt="1" />

                                   </div>

                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620136036133-d74f19434de12f627b593e49a144ff6c.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213462655-77c3422f91cface84d1833b02dda2ebd.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213465059-3c99fbdba33fa1ca0e86b737fc99c6ba.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   {/* === */}
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2020/09/29/1601371217702-a33be2e4dcf4e85af9a3739912cc17d5.png?tr=q-75,w-88" alt="1" />

                                   </div>

                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213286490-40a57162d59a3cdfd871be63262c1153.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213560420-c046c6e8dde662c947e67249ba88cade.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620137289663-ee02f85739a0b87ce702daadf6f3c0d5.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   {/*  */}
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2021/08/09/1628503297217-f74fe9efe3c7cd6b9af924f8142c61ac.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213757871-6538d009d80f24afe25b6e4e3ed088b4.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568213762621-ccb5f1779c3e22e75aae42d4bf8ac419.png?tr=q-75,w-88" alt="1" />

                                   </div>
                                   <div className='flex items-center justify-center'>

                                        <img className='w-20 max-h-16 object-center object-contain ' src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620137555683-90b05a128324b8a83c70792e36545625.png?tr=q-75,w-88" alt="1" />

                                   </div>
                              </Slider>
                         </div>
                    </div>

               </div>

               <hr className='my-16' />
          </div>
          
     )
}