import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import React, { FC } from "react";

const Root: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
