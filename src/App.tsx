import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/reset.css";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/configStore";
import { Routes, Route } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/home/Home";
import FlightTicketTemplate from "./templates/FlightTicketTemplate";
import FlightTicket from "./pages/flightTicket/FlightTicket";
import BookingInformation from "./pages/BookingInformation";
import FlightTicketReturn from "./pages/flightTicket/FlightTicketReturn";
import BookingConfirmInformation from "./pages/BookingConfirmInformation";
export const dbName = 'travelbooking_db';
export const storeName = 'dataFromHome';


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/flight" element={<FlightTicketTemplate />}>
          <Route path="" element={<FlightTicket />} />
        </Route>
        <Route path="/flightreturn" element={<FlightTicketTemplate />}>
          <Route path="" element={<FlightTicketReturn />} />
        </Route>
        <Route path="/info" element={<BookingInformation />} />
         <Route path="/confirm" element={<BookingConfirmInformation />} />
      </Routes>
    </>
  );
}

export default App;
