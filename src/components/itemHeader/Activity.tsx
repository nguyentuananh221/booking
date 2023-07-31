import React from 'react'
import { MdTour } from 'react-icons/md'

type Props = {}

export default function Activity({ }: Props) {
     return (
          <div>
               <div className="flex items-center mb-3">
                    <span className="mr-3"><MdTour /></span>
                    <h4>Tours</h4>
               </div>
          </div>
     )
}