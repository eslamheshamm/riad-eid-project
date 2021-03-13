import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/layout.css";

const Layout = ({ children, siteTitle }) => {
  return (
    <html lang="ar" dir="rtl" className="w-10/12 mx-auto font-cairo">
      <Header siteTitle={siteTitle} />
      <main>{children}</main>
      <Footer siteTitle={siteTitle} />
    </html>
  );
};

export default Layout;
