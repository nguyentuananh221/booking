import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderFixed from '../components/HeaderFixed'
import OffCanvas from '../components/OffCanvas'

type Props = {}

export default function HomeTemplate({ }: Props) {
     return (
          <>
               <OffCanvas/>
               <Header/>
               <HeaderFixed />
               <Outlet/>
               <Footer/>
          </>
     )
}