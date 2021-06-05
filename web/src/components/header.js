import { Link } from "gatsby";
import React from "react";
import Logo from "./images/logo-line.png";
const Header = () => {
  return (
    <nav className=" w-full text-black font-yasser text-base">
      <div className="w-full  mx-auto flex flex-wrap items-center   justify-center lg:justify-between my-16 ">
        <div className=" flex items-center ">
          <Link id="siteTitle" to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center justify-center lg:w-auto mt-2 text-black p-4">
          <ul className="flex flex-col md:flex-row md:justify-center lg:justify-end flex-1 items-start md:items-center">
            <li className="my-1">
              <Link to="/" className="mx-2 lg:mx-6 opacity-50" activeClassName="opacity-100">
                الصفحة الرئيسية
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/about-program"
                className="mx-2 lg:mx-6 opacity-50"
                activeClassName="opacity-100"
              >
                عن البرنامج
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/interviews"
                className="mx-2 lg:mx-6 opacity-50"
                activeClassName="opacity-100"
              >
                مقابلات
              </Link>
            </li>
            <li className="my-1">
              <Link to="/press" className="mx-2 lg:mx-6 opacity-50" activeClassName="opacity-100">
                الصحافة
              </Link>
            </li>
            <li className="my-1">
              <Link to="/reviews" className="mx-2 lg:mx-6 opacity-50" activeClassName="opacity-100">
                توصيات
              </Link>
            </li>
            <li className="my-1">
              <Link to="/blog" className="mx-2 lg:mx-6 opacity-50" activeClassName="opacity-100">
                المدونة
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/ask-riad-eid"
                className="mx-2 lg:mx-6 opacity-50"
                activeClassName="opacity-100"
              >
                اسأل رياض عيد
              </Link>
            </li>
            <li className="my-1">
              <Link
                to="/contact-us"
                className="mx-2 lg:mx-6 opacity-50"
                activeClassName="opacity-100"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
