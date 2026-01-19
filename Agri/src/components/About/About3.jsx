import React from "react";
import Customer1 from "../../assets/Customer1.png";
import Customer2 from "../../assets/Customer2.png";
import Testbg from "../../assets/Testbg.png";

function About3() {
  const testimonials = [
    {
      id: 1,
      name: "Bonnie Tolbet",
      role: "Customer",
      image: Customer1,
      text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomized.",
    },
    {
      id: 2,
      name: "Sarah Albert",
      role: "Customer",
      image: Customer2,
      text: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomized.",
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-white bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${Testbg})` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h4
          className="
            mb-2
            text-[24px]
            leading-[36px]
            text-[#EEC044]
            font-['Covered_By_Your_Grace']
            font-normal
          "
        >
          Our Testimonials
        </h4>

        <h2
          className="
            mb-12
            text-[36px]
            md:text-[48px]
            leading-[44px]
            md:leading-[57.6px]
            font-[Manrope]
            font-extrabold
            text-gray-900
          "
        >
          What They Say
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                bg-white
                p-8
                rounded-lg
                shadow-sm
                flex
                flex-col
                md:flex-row
                items-center
                md:items-start
                text-left
                gap-6
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-2
                border
                border-transparent
                hover:border-gray-100
              "
            >
              {/* Customer Image */}
              <div className="w-32 h-40 md:w-40 md:h-48 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between w-full">
                <p
                  className="
                    text-[16px]
                    md:text-[18px]
                    font-[400]
                    font-[Manrope]
                    text-gray-500
                    leading-[30px]
                    md:leading-[36px]
                    mb-6
                    text-center
                    md:text-left
                  "
                >
                  "{item.text}"
                </p>

                <div className="w-full">
                  <div className="w-12 h-1 bg-[#E8C060] mb-2 opacity-50 mx-auto md:mx-0"></div>

                  <h3
                    className="
                      text-[20px]
                      font-[800]
                      font-[Manrope]
                      text-gray-900
                      leading-[26px]
                      text-center
                      md:text-right
                      md:ml-40
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      text-[16px]
                      font-[500]
                      font-[Manrope]
                      text-gray-400
                      leading-[26px]
                      text-center
                      md:text-right
                      md:ml-40
                    "
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About3;
