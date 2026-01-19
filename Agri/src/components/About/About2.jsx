import React from "react";
import Vdo from "../../assets/Vdo.mp4";
import Vegbg from "../../assets/Vegbg.png";

function About2() {
  return (
    <div>
      {/* VIDEO SECTION */}
      <div className="relative w-full h-[420px] md:h-[600px] overflow-hidden -mt-16 pt-17">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover blur-[1px]"
          src={Vdo}
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Centered text */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h2
            className="
              text-white
              text-[32px]
              sm:text-[42px]
              md:text-[60px]
              font-[800]
              font-[Manrope]
              text-center
              leading-[40px]
              sm:leading-[54px]
              md:leading-[72px]
              tracking-[-2px]
              md:tracking-[-4px]
              m-0
            "
          >
            ECO-Friendly Products can <br /> be Made from Scratch
          </h2>
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="relative bg-[#1F1E17] py-6 h-auto md:h-[184px] flex items-center">
        {/* LEFT vegetable image */}
        <div
          className="
            hidden
            lg:block
            absolute
            left-1
            top-1/2
            -translate-y-1/2
            h-[500px]
            w-[350px]
            bg-no-repeat
            bg-left
            bg-contain
            opacity-100
            pointer-events-none
          "
          style={{ backgroundImage: `url(${Vegbg})` }}
        ></div>

        {/* CENTER stats content */}
        <div className="relative w-full flex justify-center px-4">
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-x-16
              gap-y-4
              text-white
              text-[16px]
              sm:text-[18px]
              font-[500]
              font-[Manrope]
              text-center
              leading-[30px]
            "
          >
            <span>Agriculture Products</span>
            <span>Projects Completed</span>
            <span>Satisfied Clients</span>
            <span>Experts Farmers</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About2;
