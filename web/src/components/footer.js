import { Link } from "gatsby";
import React from "react";
import Logo from "./images/logo-line.png";
import GooglePlay from "./assets/google-play";
function Youtube(props) {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.668 10.5a2.167 2.167 0 011.509 1.549c.356 1.366.356 4.218.356 4.218s0 2.85-.356 4.218a2.167 2.167 0 01-1.51 1.549C21.338 22.4 16 22.4 16 22.4s-5.337 0-6.668-.366a2.167 2.167 0 01-1.509-1.55c-.356-1.366-.356-4.217-.356-4.217s0-2.852.356-4.218a2.167 2.167 0 011.51-1.55c1.33-.366 6.667-.366 6.667-.366s5.337 0 6.668.367zM14.4 13.866V19.2l4.267-2.667-4.267-2.666z"
        fill="#000"
      />
    </svg>
  );
}

function Instagram(props) {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7.467c-2.317 0-2.608.01-3.518.051-.908.042-1.528.186-2.07.397a4.178 4.178 0 00-1.513.984 4.19 4.19 0 00-.984 1.511c-.212.543-.356 1.163-.397 2.071-.04.91-.051 1.201-.051 3.519 0 2.317.01 2.608.051 3.518.042.908.186 1.528.397 2.07.218.562.51 1.038.984 1.512.474.475.95.767 1.511.985.543.211 1.163.355 2.072.397.91.041 1.2.051 3.518.051 2.317 0 2.607-.01 3.518-.051.908-.042 1.529-.186 2.072-.397a4.175 4.175 0 001.51-.985c.475-.474.767-.95.985-1.511.21-.543.354-1.163.397-2.071.04-.91.051-1.2.051-3.518 0-2.318-.01-2.608-.051-3.519-.043-.908-.187-1.528-.397-2.07a4.187 4.187 0 00-.985-1.512 4.17 4.17 0 00-1.51-.984c-.545-.211-1.165-.355-2.074-.397-.91-.041-1.2-.051-3.518-.051h.003zm-.765 1.537h.766c2.278 0 2.548.008 3.448.05.832.037 1.284.176 1.584.293.399.155.682.34.981.638.299.3.484.584.639.982.116.3.256.752.293 1.584.041.9.05 1.17.05 3.447s-.009 2.548-.05 3.447c-.038.832-.177 1.284-.293 1.584-.155.398-.34.682-.639.98a2.64 2.64 0 01-.98.639c-.301.117-.753.256-1.585.294-.9.04-1.17.05-3.448.05-2.279 0-2.549-.01-3.448-.05-.833-.039-1.284-.178-1.585-.294a2.644 2.644 0 01-.981-.639 2.645 2.645 0 01-.639-.98c-.117-.301-.256-.753-.294-1.585-.04-.9-.049-1.17-.049-3.448 0-2.279.008-2.548.05-3.447.037-.832.176-1.284.293-1.585.155-.398.34-.682.639-.981.298-.299.583-.484.981-.639.3-.117.752-.256 1.585-.294.787-.035 1.092-.046 2.682-.048v.002zm5.32 1.417a1.024 1.024 0 100 2.048 1.024 1.024 0 000-2.048zm-4.554 1.197a4.382 4.382 0 100 8.764 4.382 4.382 0 000-8.764zm0 1.537a2.844 2.844 0 110 5.69 2.844 2.844 0 010-5.69z"
        fill="#000"
      />
    </svg>
  );
}

const Footer = () => (
  <footer className="bg-white font-cairo border-t">
    <div className="">
      <div className="flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6  ml-16">
          <a
            className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            <img src={Logo} alt="logo" />
          </a>
          <p className="text-black my-6 opacity-75">
            لجميع التوصيات المذكورة في البرنامج التزام الزوجين
          </p>
          <div className="flex">
            <a href="/" className="ml-6">
              <Instagram />
            </a>
            <a href="/">
              <Youtube />
            </a>
          </div>
        </div>

        <div className="flex-1">
          <p className=" text-black text-lg md:mb-6 font-yasser">عن رياض عيد</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link to="/">
                <span className="hover:underline text-gray-800 text-sm mb-3">من نحن</span>
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link to="/">
                <span className="hover:underline text-gray-800 text-sm mb-3">المدونة</span>
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link to="/">
                <span className="hover:underline text-gray-800 text-sm mb-3">تواصل معنا</span>
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link to="/">
                <span className="hover:underline text-gray-800 text-sm mb-3">الصحافة والإعلام</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className=" text-black text-lg md:mb-6 font-yasser">عن البرنامج</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link to="/">
                <span className="hover:underline text-gray-800 text-sm mb-3">اسئلة شائعة</span>
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link to="/">
                <span className="hover:underline text-gray-800 text-sm mb-3">تواصل معنا</span>
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link to="/">
                <span className="hover:underline text-gray-800 text-sm mb-3">الصحافة والإعلام</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className=" text-black text-lg md:mb-6 font-yasser">تحميل التطبيق</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <p className="text-black my-6 opacity-75">
                التزم الزوجين بجميع التوصيات المذكورة في البرنامج ونسبة النجاح في هذا الامر تصل إلي
                95% في حال لدي السيدة
              </p>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="/">
                <GooglePlay />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="my-6">
      <p className="text-black">© جميع الحقوق محفوظة رياض عيد 2021</p>
    </div>
  </footer>
);

export default Footer;
