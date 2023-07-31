import React from 'react'
import { BiBookmarkAltPlus } from 'react-icons/bi'
import { FaHotel } from 'react-icons/fa'

type Props = {}

export default function Place({ }: Props) {
     return (
          <div>
               <div className='flex items-center mb-3'>
                    <span className='mr-3'><FaHotel className='text-base text-blue-400' /></span>
                    <h4>Khách sạn</h4>
               </div>
               <div className="flex items-center mb-3">
                    <span className="mr-3"><BiBookmarkAltPlus/></span>
                    <h4>Combo tiết kiệm</h4>
               </div>
          </div>
     )
}