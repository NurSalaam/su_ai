import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import React, { FC } from "react";
import Footer from "./Footer/footer";

const Root: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
