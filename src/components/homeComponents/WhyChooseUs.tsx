import React from 'react'

type Props = {}

export default function WhyChooseUs({ }: Props) {
     return (
          <div className='mb-24'>
               <div className="flex flex-col gap-3">
                    <p className='text-2xl font-bold mb-2 text-center'>Tại sao nên đặt chỗ với Traveloka?</p>
                    <div className="row justify-center">
                         <div className="" style={{maxWidth:'20%'}}>
                              <div className='flex flex-col items-center'>
                                   <img className='object-contain object-center w-36 h-36' src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/17/1495008495760-d92160ea2b56fc1128cbdff93aa43774.png?tr=h-150,q-75,w-150" alt="1" />
                                   <p className='text-xl font-bold mb-4 mt-12 text-center'>Giải pháp du lịch hoàn thiện</p>
                                   <p className='text-base font-medium mb-2 text-center'>Giải pháp toàn diện - giúp bạn tìm chuyến bay và khách sạn khắp Việt Nam và Đông Nam Á một cách tiết kiệm.</p>

                              </div>
                         </div>
                         <div className="" style={{maxWidth:'20%'}}>
                              <div className='flex flex-col items-center'>
                                   <img className='object-contain object-center w-36 h-36' src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/17/1495008504598-6c1d5675c41e47eee0b27c59c07a2bbd.png?tr=h-150,q-75,w-150" alt="1" />
                                   <p className='text-xl font-bold mb-4 mt-12 text-center'>Giá rẻ mỗi ngày</p>
                                   <p className='text-base font-medium mb-2 text-center'>Giá bạn thấy là giá bạn trả! Dễ dàng so sánh khi không cần phải trả thêm chi phí ẩn!</p>

                              </div>
                         </div>
                         <div className="" style={{maxWidth:'20%'}}>
                              <div className='flex flex-col items-center'>
                                   <img className='object-contain object-center w-36 h-36' src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/17/1495008514239-c1d0a51538cd02053c9b1a6c567fe5b5.png?tr=h-150,q-75,w-150" alt="1" />
                                   <p className='text-xl font-bold mb-4 mt-12 text-center'>Phương thức thanh toán an toàn và linh hoạt</p>
                                   <p className='text-base font-medium mb-2 text-center'>Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán tại cửa hàng tiện lợi, chuyển khoản ngân hàng, thẻ tín dụng đến Internet Banking. Không tính phí giao dịch.</p>

                              </div>
                         </div>
                         
                         <div className="" style={{maxWidth:'20%'}}>
                              <div className='flex flex-col items-center'>
                                   <img className='object-contain object-center w-36 h-36' src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/17/1495008521046-3cee046bb3ddb863398300f89d83c0f9.png?tr=h-150,q-75,w-150" alt="1" />
                                   <p className='text-xl font-bold mb-4 mt-12 text-center'>Hỗ trợ khách hàng 24/7</p>
                                   <p className='text-base font-medium mb-2 text-center'>Đội ngũ nhân viên hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn trong từng bước của quá trình đặt vé.</p>

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}