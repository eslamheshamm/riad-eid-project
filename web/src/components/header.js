import { Link } from "gatsby";
import React from "react";
import Logo from "./images/logo-line.png";
const Header = () => {
  let buttonColor = {
    backgroundColor: "#25D366"
  };

  return (
    <nav className=" w-full text-black font-yasser text-base">
      <div className="w-full  mx-auto flex flex-wrap items-center   justify-center lg:justify-between mt-0 py-16 ">
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
            <li className="my-1 hidden md:block">
              <a
                href="http://bit.ly/3aH6YWw"
                rel="noreferrer"
                target="_blank"
                className=" text py-4 px-6 text-xl rounded-3xl flex "
                style={buttonColor}
              >
                <Whatsapp className="flex-grow-0" />

                <span className="mr-3"> تواصل معنا</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

function Whatsapp(props) {
  return (
    <svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M8.886 7.202c.183.004.386.014.579.443.128.285.343.81.519 1.238.137.332.249.606.277.662.064.128.104.276.02.448l-.028.059a1.43 1.43 0 01-.23.37 9.386 9.386 0 00-.143.17c-.085.103-.17.205-.242.278-.129.128-.262.266-.114.522.149.256.668 1.098 1.435 1.777a6.634 6.634 0 001.903 1.2l.17.075c.257.128.41.109.558-.064.149-.172.643-.748.817-1.004.168-.256.34-.217.578-.128.238.088 1.504.709 1.761.837l.143.07c.179.085.3.143.352.23.064.108.064.62-.148 1.221-.218.6-1.267 1.177-1.742 1.221l-.135.015c-.436.053-.988.12-2.956-.655-2.426-.954-4.027-3.32-4.35-3.798l-.053-.077-.006-.007c-.147-.197-1.048-1.403-1.048-2.646 0-1.19.587-1.81.854-2.093a7.15 7.15 0 00.047-.05.95.95 0 01.687-.32c.173 0 .347 0 .495.006z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.184 21.363a.4.4 0 00.487.493l4.607-1.203a10 10 0 004.76 1.206h.004c5.486 0 9.958-4.446 9.958-9.911a9.828 9.828 0 00-2.914-7.011 9.916 9.916 0 00-7.044-2.905c-5.486 0-9.958 4.446-9.958 9.911 0 1.739.458 3.447 1.33 4.953l-1.23 4.467zm2.677-4.068a1.5 1.5 0 00-.148-1.15 8.377 8.377 0 01-1.129-4.202c0-4.63 3.793-8.411 8.458-8.411 2.27 0 4.388.877 5.986 2.468a8.328 8.328 0 012.472 5.948c0 4.63-3.793 8.411-8.458 8.411h-.005a8.5 8.5 0 01-4.044-1.025 1.5 1.5 0 00-1.094-.132l-2.762.721.724-2.628z"
        fill="#000"
      />
    </svg>
  );
}
