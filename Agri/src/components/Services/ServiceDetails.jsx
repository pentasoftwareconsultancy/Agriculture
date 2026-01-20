import React from "react"
import { useParams } from "react-router-dom"
import ServiceHero from "./ServiceHero"

// Images
import backgroundImage from "../../assets/backgroundImgService.png"

// Main images
import agriMain from "../../assets/service-detail-main.png"
import organicMain from "../../assets/organic-detail-main.jpg"
import freshMain from "../../assets/fresh-vegetables-main.jpg"
import dairyMain from "../../assets/dairy-products-main.jpg"

// Benefit images
import benefitImg1 from "../../assets/service-benefit-1.png"
import benefitImg2 from "../../assets/service-benefit-2.png"

function ServiceDetails() {
  const { serviceId } = useParams()

  const serviceData = {
    agriculture: {
      title: "Agriculture Products",
      mainImg: agriMain,
      description1:
        "Our agriculture products are grown using modern farming techniques that improve crop yield while maintaining soil fertility and environmental balance.",
      description2:
        "From seed selection to harvesting, we ensure quality control at every stage to support sustainable and profitable farming.",
      benefits: [
        "High-yield crops with advanced cultivation methods",
        "Sustainable practices that protect soil health",
      ],
      info: [
        "Modern farming techniques for better yield",
        "Efficient crop management solutions",
        "Reliable harvesting and storage support",
      ],
    },

    organic: {
      title: "Organic Products",
      mainImg: organicMain,
      description1:
        "Our organic products are cultivated naturally without synthetic chemicals, ensuring pure, healthy, and nutritious food.",
      description2:
        "We follow certified organic standards that promote biodiversity, environmental safety, and long-term wellness.",
      benefits: [
        "100% chemical-free and naturally grown",
        "Safe, nutritious, and environmentally friendly",
      ],
      info: [
        "Naturally grown crops using organic methods",
        "Eco-friendly farming practices",
        "Healthy food choices for daily life",
      ],
    },

    fresh: {
      title: "Fresh Vegetables",
      mainImg: freshMain,
      description1:
        "Our fresh vegetables are harvested daily to ensure maximum freshness, taste, and nutritional value.",
      description2:
        "We focus on hygienic handling, careful packaging, and quick delivery to bring farm-fresh vegetables to your table.",
      benefits: [
        "Freshly harvested vegetables every day",
        "Rich in nutrients and natural flavor",
      ],
      info: [
        "Farm-to-table freshness guarantee",
        "Strict quality and hygiene standards",
        "Seasonal and locally sourced produce",
      ],
    },

    dairy: {
      title: "Dairy Products",
      mainImg: dairyMain,
      description1:
        "Our dairy products are sourced from healthy livestock and processed under strict quality standards.",
      description2:
        "We ensure freshness, purity, and nutritional value in every dairy product, from milk to cheese.",
      benefits: [
        "Pure and fresh dairy products",
        "Rich source of calcium and essential nutrients",
      ],
      info: [
        "High-quality milk from healthy cattle",
        "Hygienic processing and packaging",
        "Fresh and safe dairy for everyday use",
      ],
    },
  }

  const data = serviceData[serviceId]
  if (!data) return null

  return (
    <>
      {/* HERO */}
      <ServiceHero
        title={data.title}
        breadcrumb={`Home / Services / ${data.title}`}
        bgImage={backgroundImage}
      />

      {/* CONTENT */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

            {/* LEFT SIDEBAR */}
            <aside className="w-full lg:w-[280px] space-y-6">

              <div className="bg-[#faf7ef] p-6 rounded-xl">
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Agriculture Products</li>
                  <li>Organic Products</li>
                  <li>Fresh Vegetables</li>
                  <li>Dairy Products</li>
                  <li>Harvest Services</li>
                </ul>
              </div>

              <div className="bg-green-600 text-white p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm mb-4">
                  Speak with our experts for product guidance.
                </p>
                <p className="font-bold mb-4">+12 (000) 456</p>
                <button className="bg-yellow-400 text-black text-sm px-4 py-2 rounded-lg w-full">
                  Start Shopping Now
                </button>
              </div>

            </aside>

            {/* RIGHT CONTENT */}
            <main className="flex-1">

              {/* Main Image */}
              <div className="relative mb-6 sm:mb-8">
                <img
                  src={data.mainImg}
                  alt={data.title}
                  className="w-full h-[220px] sm:h-[300px] lg:h-[380px] object-cover rounded-xl"
                />
                {/* <div className="absolute bottom-4 right-4 bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center text-white">
                  🌱
                </div> */}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {data.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-5 sm:mb-6">
                {data.description1}
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 sm:mb-10">
                {data.description2}
              </p>

              {/* Benefits */}
              <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
                Our Benefits
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 sm:mb-10">
                <div>
                  <img src={benefitImg1} className="rounded-xl mb-3 w-full" />
                  <p className="text-sm text-gray-600">{data.benefits[0]}</p>
                </div>
                <div>
                  <img src={benefitImg2} className="rounded-xl mb-3 w-full" />
                  <p className="text-sm text-gray-600">{data.benefits[1]}</p>
                </div>
              </div>

              {/* Info Blocks */}
              <div className="space-y-4">
                {data.info.map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-[#faf7ef] px-5 sm:px-6 py-4 rounded-lg"
                  >
                    <p className="text-sm font-medium">{text}</p>
                    <span className="text-green-600 text-xl">›</span>
                  </div>
                ))}
              </div>

            </main>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetails
