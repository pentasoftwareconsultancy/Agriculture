import { Search, ShoppingCart } from "lucide-react";
import logo from "../../assets/logob.png";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-green-600 text-white text-[13px]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">

          {/* Left text block */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 h-[40px] pl-[15px] leading-[40px]">
              <i className="fa-solid fa-location-dot text-[12px]" />
              <span>88 Road Brooklyn Golden Street, New York</span>
            </div>

            <div className="flex items-center gap-2 h-[40px] leading-[40px]">
              <i className="fa-solid fa-envelope text-[12px]" />
              <span>support@agrios.com</span>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4 pr-[15px] h-[40px]">
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-facebook-f" />
            <i className="fa-brands fa-pinterest-p" />
            <i className="fa-brands fa-instagram" />
          </div>


        </div>
      </div>


      {/* ================= MAIN NAVBAR ================= */}
      <nav className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-[96px]">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Agrios Logo"
                className="h-[44px]"
              />

            </div>

            {/* Menu */}
            <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800">
              <li className="hover:text-green-600 cursor-pointer">Home</li>
              <li className="hover:text-green-600 cursor-pointer">About</li>
              <li className="hover:text-green-600 cursor-pointer">Services</li>
              <li className="hover:text-green-600 cursor-pointer">Projects</li>
              <li className="hover:text-green-600 cursor-pointer">News</li>
              <li className="hover:text-green-600 cursor-pointer">Shop</li>
              <li className="hover:text-green-600 cursor-pointer">Contact</li>
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-6 relative">
              <Search className="w-[22px] h-[22px] text-gray-800 cursor-pointer" />

              <div className="relative">
                <ShoppingCart className="w-[22px] h-[22px] text-gray-800 cursor-pointer" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-600 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
