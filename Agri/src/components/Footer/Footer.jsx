import logo from "../../assets/logow.png";
import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#24231D] text-[#9f9f9f]">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* ===== LOGO + ABOUT ===== */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Agrios" className="h-[42px]" />
            </div>

            {/* EXACT LINE BREAK TEXT */}
            <p className="text-[14px] leading-7">
              There are many variations of passages
              <br />
              of lorem ipsum available, but the
              <br />
              majority suffered.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: "twitter", url: "https://twitter.com/" },
                { icon: "facebook-f", url: "https://www.facebook.com/" },
                { icon: "pinterest-p", url: "https://www.pinterest.com/" },
                { icon: "instagram", url: "https://www.instagram.com/" },
              ].map(({ icon, url }) => (
                <a
                  key={icon}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#2a2a22] flex items-center justify-center cursor-pointer hover:bg-green-600 transition"
                >
                  <i className={`fa-brands fa-${icon} text-white text-sm`} />
                </a>
              ))}
            </div>

          </div>



          {/* ===== EXPLORE ===== */}
          <div>
            <h3 className="text-white text-[18px] font-semibold mb-6">
              Explore
              <span className="flex items-center gap-2 mt-2">
                <span className="w-8 h-[2px] bg-green-500"></span>
                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
              </span>
            </h3>

            <ul className="space-y-3 text-[14px]">
              {[
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Our Projects", path: "/projects" },
                { label: "Meet the Farmers", path: "/" },
                { label: "Latest News", path: "/news" },
                { label: "Contact", path: "/contact" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <i className="fa-solid fa-leaf text-white-500 text-[11px] group-hover:scale-110 transition" />
                    <span className="group-hover:text-green-500 transition">
                      {label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>


          {/* ===== NEWS ===== */}
          <div>
            <h3 className="text-white text-[18px] font-semibold mb-6">
              News
              <span className="flex items-center gap-2 mt-2">
                <span className="w-8 h-[2px] bg-green-500"></span>
                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
              </span>
            </h3>

            <div className="space-y-6 text-[14px]">
              <div>
                <p className="text-white leading-6 hover:text-green-500 cursor-pointer transition">
                  Bringing Food Production
                  <br />
                  Back To Cities
                </p>
                <span className="text-yellow-500 text-[13px]">
                  July 5, 2022
                </span>
              </div>

              <div>
                <p className="text-white leading-6 hover:text-green-500 cursor-pointer transition">
                  The Future of Farming,
                  <br />
                  Smart Irrigation Solutions
                </p>
                <span className="text-yellow-500 text-[13px]">
                  July 5, 2022
                </span>
              </div>
            </div>
          </div>

          {/* ===== CONTACT ===== */}
          <div>
            <h3 className="text-white text-[18px] font-semibold mb-6">
              Contact
              <span className="flex items-center gap-2 mt-2">
                <span className="w-8 h-[2px] bg-green-500"></span>
                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
              </span>
            </h3>

            <ul className="space-y-4 text-[14px]">
              {/* PHONE */}
              <li>
                <a
                  href="tel:6668880000"
                  className="flex gap-3"
                >
                  <i className="fa-solid fa-phone text-yellow-500 mt-1" />
                  <span>666 888 0000</span>
                </a>
              </li>

              {/* EMAIL */}
              <li>
                <a
                  href="mailto:needhelp@company.com"
                  className="flex gap-3"
                >
                  <i className="fa-solid fa-envelope text-yellow-500 mt-1" />
                  <span>needhelp@company.com</span>
                </a>
              </li>

              {/* LOCATION */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=80+Brooklyn+Golden+Street+Line+New+York+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3"
                >
                  <i className="fa-solid fa-location-dot text-yellow-500 mt-1" />
                  <span>
                    80 Brooklyn Golden Street Line
                    <br />
                    New York, USA
                  </span>
                </a>
              </li>
            </ul>


            {/* Email Input */}
            <div className="flex mt-6">
              <input
                type="email"
                placeholder="Your Email Address"
                className="h-[48px] px-4 w-full bg-white text-[14px] text-gray-700 placeholder-gray-400 outline-none rounded-l-md"
              />
              <button className="w-[50px] h-[48px] bg-green-600 flex items-center justify-center rounded-r-md">
                <i className="fa-solid fa-paper-plane text-white" />
              </button>
            </div>
          </div>

        </div>
      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="w-full  h-[70px] bg-[#1F1E17]">
        <div className="max-w-[1200px] mx-auto h-full flex flex-col sm:flex-row items-center justify-between px-4 text-[13px] text-[#9f9f9f] gap-2 sm:gap-0">

          <span>© All Copyright 2024 by shawnette Themes</span>

          <div className="flex gap-3">
            <span className="hover:text-green-500 cursor-pointer transition">
              Terms of Use
            </span>
            <span>|</span>
            <span className="hover:text-green-500 cursor-pointer transition">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
