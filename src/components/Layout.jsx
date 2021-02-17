import React from "react";
import Head from "./Head";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
