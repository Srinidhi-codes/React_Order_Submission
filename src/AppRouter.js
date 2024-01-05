import React from 'react'
import { Route, Routes } from "react-router-dom";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import OrderService from './components/OrderService';

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/orders-service" element={<OrderService/>} /> 
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default AppRouter