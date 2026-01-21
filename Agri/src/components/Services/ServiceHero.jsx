import React from "react";

function ServiceHero({ title, breadcrumb, bgImage }) {
  return (
    <div
      className="
        relative
        h-[220px]
        sm:h-[260px]
        md:h-[300px]
        lg:h-[320px]
        bg-cover
        bg-center
      "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4 text-center">
        <p
          className="
            text-[10px]
            sm:text-xs
            md:text-sm
            tracking-widest
            mb-1
            sm:mb-2
            uppercase
          "
        >
          {breadcrumb}
        </p>

        <h2
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-extrabold
            
            leading-tight
          "
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default ServiceHero;
