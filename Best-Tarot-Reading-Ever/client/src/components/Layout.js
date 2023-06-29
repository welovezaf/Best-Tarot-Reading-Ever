import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <div className="app-body">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
