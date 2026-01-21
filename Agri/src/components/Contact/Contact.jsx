import React from 'react'
import backgroundImage from "../../assets/backgroundImgService.png";
import Contact1 from "../../assets/Contact1.png";

function Contact() {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[326px]">
        <img
          src={backgroundImage}
          className="w-full h-full object-cover"
          alt="background"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 font-manrope">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80 mb-2">
            HOME / CONTACT
          </p>
          <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] font-semibold">
            CONTACT
          </h2>
        </div>
      </div>

      {/* ================= INFO CARDS ================= */}
      <div className="w-full flex justify-center py-16 px-4">
        <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* ABOUT CARD */}
          <div className="w-full max-w-[399.98px] h-[220px] bg-[#55B84F] rounded-2xl p-8 mx-auto">
            <h3 className="font-['Covered_By_Your_Grace'] text-[30px] leading-[45px] text-white mb-4">
              About
            </h3>
            <p className="font-manrope text-[16px] leading-[30px] text-white">
              Lorem ipsum is simply free text <br />
              used by copytyping refreshing. <br />
              Neque porro est qui
            </p>
          </div>

          {/* CONTACT CARD */}
          <div className="w-full max-w-[399.98px] h-[220px] bg-[#C6D33C] rounded-2xl p-8 mx-auto">
            <h3 className="font-['Covered_By_Your_Grace'] text-[30px] leading-[45px] text-white mb-4">
              Contact
            </h3>
            <p className="font-manrope text-[16px] leading-[30px] text-white">
              +1-(246) 333-0079 <br />
              support@agrio.com <br />
              Mon - Fri: 7:00 am - 6:00 pm
            </p>
          </div>

          {/* ADDRESS CARD */}
          <div className="w-full max-w-[399.98px] h-[220px] bg-[#F2C94C] rounded-2xl p-8 mx-auto">
            <h3 className="font-['Covered_By_Your_Grace'] text-[30px] leading-[45px] text-white mb-4">
              Address
            </h3>
            <p className="font-manrope text-[16px] leading-[30px] text-white">
              66 Brooklyn Road Golden Street, <br />
              New York United States of <br />
              America
            </p>
          </div>

        </div>
      </div>

      {/* ================= MAP + FORM ================= */}
      <section className="w-full flex justify-center py-16 px-4 bg-white">
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">

          {/* MAP */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.25945751468!2d73.7923639!3d18.5936463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91b0dd95daf%3A0xa6cb6e3796a09978!2sPimple%20Saudagar%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
  className="w-full h-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>

          {/* FORM */}
          <div
            className="relative bg-[#F8F7F0] px-6 sm:px-12 lg:px-20 py-12 sm:py-16 flex flex-col justify-center"
            style={{
              backgroundImage: `url(${Contact1})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center",
              backgroundSize: "contain",
            }}
          >
            <span className="font-['Covered_By_Your_Grace'] text-[#F4A100] text-[20px] sm:text-[24px] mb-1">
              Contact Us
            </span>

            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-manrope font-bold text-gray-900 mb-4">
              Write a Message
            </h2>

            <form className="flex flex-col gap-5 max-w-[420px]">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full sm:w-1/2 px-4 py-3 rounded-md outline-none text-sm bg-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full sm:w-1/2 px-4 py-3 rounded-md outline-none text-sm bg-white"
                />
              </div>

              <textarea
                placeholder="Write a Message"
                rows="4"
                className="px-4 py-3 rounded-md outline-none text-sm resize-none bg-white"
              />

              <button
                type="submit"
                className="bg-[#55B84F] font-manrope text-white px-8 py-3 rounded-md w-fit hover:bg-green-600 transition"
              >
                Send a Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Contact
