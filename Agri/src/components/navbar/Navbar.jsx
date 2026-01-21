import { Search, ShoppingCart } from "lucide-react";
import logo from "../../assets/logob.png";
import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div
        className="h-[40px] mx-[7.5px] hidden md:block"
        style={{ backgroundColor: "#4BAF47" }}
      >
        <div
          className="max-w-[1170px] mx-auto h-full flex items-center justify-between px-4
       text-white text-[12px] font-medium leading-[40px]"
          style={{ fontFamily: "Manrope" }}
        >
          {/* LEFT CONTENT */}
          <div className="flex items-center gap-6 -ml-[8px]">
            {/* LOCATION */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=88+Road+Brooklyn+Golden+Street+New+York"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <i className="fa-solid fa-location-dot text-[10.5px]" />
              <span>88 Road Brooklyn Golden Street, New York</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:support@agrios.com"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <i className="fa-solid fa-envelope text-[10.5px]" />
              <span>support@agrios.com</span>
            </a>
          </div>

          {/* RIGHT ICONS — NOW PERFECTLY ALIGNED */}
          <div className="flex items-center gap-[14px] -translate-x-[86px]">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter text-[10.5px]" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook text-[10.5px]" />
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-pinterest-p text-[10.5px]" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram text-[10.5px]" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="bg-white border-b border-[#FFFFFF19] sticky top-0 z-50">
        <div className="max-w-[1170px] mx-auto h-[90px] px-4">
          <div className="flex items-center h-full">
            {/* LOGO */}
            <div className="flex items-center w-[245.69px]">
              <NavLink to="/">
                <img src={logo} alt="Agrios Logo" className="h-[44px]" />
              </NavLink>
            </div>

            {/* MENU */}
            <ul className="hidden lg:flex items-center justify-center gap-8 w-[701.75px] text-[15px] font-medium">
              {/* HOME */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition ${
                      isActive
                        ? "text-[#0f172a] font-semibold "
                        : "text-gray-400 hover:text-[#0f172a] font-normal"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* ABOUT (NO DROPDOWN) */}
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-[#0f172a] font-semibold "
                        : "text-gray-400 hover:text-[#0f172a]"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              {/* SERVICES */}
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition ${
                      isActive
                        ? "text-[#0f172a] font-semibold"
                        : "text-gray-400 hover:text-[#0f172a]"
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>

              {/* PROJECTS */}
              <li>
                <NavLink
                  to="/Projects"
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition ${
                      isActive
                        ? "text-[#0f172a] font-semibold"
                        : "text-gray-400 hover:text-[#0f172a]"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>

              {/* NEWS */}
              <li>
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition ${
                      isActive
                        ? "text-[#0f172a] font-semibold"
                        : "text-gray-400 hover:text-[#0f172a]"
                    }`
                  }
                >
                  News
                </NavLink>
              </li>

              {/* SHOP */}
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition ${
                      isActive
                        ? "text-[#0f172a] font-semibold"
                        : "text-gray-400 hover:text-[#0f172a]"
                    }`
                  }
                >
                  Shop
                </NavLink>
              </li>

              {/* CONTACT (NO DROPDOWN) */}
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-[#0f172a] font-semibold"
                        : "text-gray-400 hover:text-[#0f172a]"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* DIVIDER */}
            <div className="w-[2px] h-[30px] bg-[#E5E5E5] mx-[12px]" />

            {/* SEARCH */}
            <div className="flex items-center justify-center w-[48px]">
              <NavLink to="/search">
                <Search className="w-[20px] h-[20px] text-gray-700 hover:text-[#0f172a]" />
              </NavLink>
            </div>

            {/* CART */}
            <div className="relative flex items-center justify-center w-[48px]">
              <NavLink to="/cart">
                <ShoppingCart className="w-[20px] h-[20px] text-gray-700 hover:text-[#0f172a]" />
              </NavLink>
            </div>
            {/* MOBILE MENU ICON */}
            <div
              className="lg:hidden flex items-center justify-center w-[48px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i
                className={`fa-solid ${
                  isOpen ? "fa-xmark" : "fa-bars"
                } text-xl text-gray-700 cursor-pointer`}
              />
            </div>
          </div>
        </div>
      </nav>
      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 text-[16px] font-medium">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Projects", path: "/projects" },
            { label: "News", path: "/news" },
            { label: "Shop", path: "/shop" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <li
              key={label}
              className="border-b border-gray-100 last:border-none"
            >
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3 transition ${
                    isActive
                      ? "text-green-600 font-semibold"
                      : "text-gray-800 hover:text-green-600"
                  }`
                }
              >
                <i className="fa-solid fa-leaf text-black-500 text-[12px]" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
