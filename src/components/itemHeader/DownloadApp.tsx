import React from 'react'

type Props = {}

export default function DownloadApp({ }: Props) {
     return (
          <div className=''>
               <div className='flex gap-3 items-center'>
                    <i className="fa fa-arrow-down text-gray-500"></i>
                    <p className='text-center font-medium leading-tight'>Quét mã QR để tải xuống</p>
               </div>
               <img className='w-full my-3' src='https://ik.imagekit.io/tvlk/image/imageResource/2021/05/20/1621505512045-e090f5237022cf86afd98eb132f19086.png?tr=h-116,q-75,w-116' alt='qr' />

          </div>
     )
}