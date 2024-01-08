import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

//Outlet: uses the layout as base and changes things inside the layout accordingly, in the below example: we made the layout with header at the top and footer at the bottom 

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
