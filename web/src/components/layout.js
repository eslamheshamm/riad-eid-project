import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/layout.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, onHideNav, onShowNav, showNav, siteTitle, navMenuItems } = this.props;

    return (
      <html lang="ar" dir="rtl" className="w-11/12 mx-auto font-cairo">
        <Header
          navMenuItems={navMenuItems}
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
        />
        <>{children}</>
        <Footer siteTitle={siteTitle} />
      </html>
    );
  }
}

export default Layout;
