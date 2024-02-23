import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import OrderItems from "../pages/OrderItems";
import AddContainer from "../pages/AddContainer";

function Router_app() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderitems" element={<OrderItems />} />
          <Route path="/addcontainer" element={<AddContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router_app;
