import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import HeaderFixed from '../components/HeaderFixed'

type Props = {}

export default function FlightTicketTemplate({ }: Props) {
     return (
          <div>
               <Header/>
               <HeaderFixed/>
               <Outlet/>
          </div>
     )
}