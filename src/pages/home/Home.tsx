import React, { useEffect } from 'react'
import AdsComponent from '../../components/homeComponents/AdsComponent'
import AirlinePartners from '../../components/homeComponents/AirlinePartners'
import BayEpicComponent from '../../components/homeComponents/BayEpicComponent'
import CarouselComponent from '../../components/homeComponents/CarouselComponent'
import DiscountTicket from '../../components/homeComponents/DiscountTicket'
import EpicSaleTicket from '../../components/homeComponents/EpicSaleTicket'
import HotelPartner from '../../components/homeComponents/HotelPartner'
import MainModuleComponent from '../../components/homeComponents/MainModuleComponent'
import MemberComponent from '../../components/homeComponents/MemberComponent'
import NewSpaper from '../../components/homeComponents/NewSpaper'
import WhyChooseUs from '../../components/homeComponents/WhyChooseUs'
import axios from 'axios'

type Props = {}

export default function Home({ }: Props) {

     // useEffect(() => {

     //      axios.get('http://localhost:3001/users')
     //           .then(data => {
     //                console.log('data', data.data)

     //           })

     // }, [])

     return (
          <div className=''>
               <CarouselComponent />
               <MainModuleComponent />
               <div className='containerHome'>
                    <AdsComponent />
                    <DiscountTicket />
                    <BayEpicComponent />
                    <EpicSaleTicket />
                    <AdsComponent />
                    <NewSpaper />
                    <MemberComponent />
                    <AirlinePartners />
                    <HotelPartner />
                    <WhyChooseUs />
               </div>
          </div>
     )
}