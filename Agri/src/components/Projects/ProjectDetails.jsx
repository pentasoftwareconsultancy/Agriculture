import React from "react";
import { useParams } from "react-router-dom";
import ProjectHero from "./ProjectHero";
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";

// images
import Project3 from "../../assets/Project3.jpg";
import Project7 from "../../assets/Project7.jpg";
import Project4 from "../../assets/Project4.jpg";
import Project2 from "../../assets/Project2.jpg";
import Project5 from "../../assets/Project5.jpg";
import Project6 from "../../assets/Project6.png";

function ProjectDetails() {
  const { projectId } = useParams();

  const projectData = {
    "easy-harvesting": {
      title: "Easy Harvesting",
      image: Project3,
      description:
        "Easy Harvesting focuses on reducing manual labor by using modern harvesting tools and smart techniques. This project helps farmers save time, minimize crop damage, and improve productivity during peak harvest seasons. It also ensures faster crop collection and better post-harvest handling.",
      services: "Harvest Support",
      farmer: "Mr. Rajesh Kumar",
      duration: "2.5 Months",
      location: "Maharashtra, India",
      challenges: [
        "Dependence on manual labor",
        "Crop loss due to delays",
        "Limited modern tools",
        "Weather uncertainty",
      ],
      solutions: [
        "Automated mini-harvesters",
        "Weather alert systems",
        "Shared tool banks",
      ],
      impact:
        "30% reduction in harvest time and 15% improvement in yield recovery.",
    },

    "agriculture-farming": {
      title: "Agriculture Farming",
      image: Project7,
      description:
        "Agriculture Farming focuses on sustainable crop production using advanced farming practices. This project includes soil management, crop rotation, and smart irrigation techniques to improve yield while maintaining long-term soil fertility and environmental balance.",
      services: "Crop Management",
      farmer: "Mr. Sunil Patil",
      duration: "4 Months",
      location: "Punjab, India",
      challenges: [
        "Soil fertility decline",
        "Water misuse",
        "Climate unpredictability",
        "Sustainability balance",
      ],
      solutions: [
        "Drip irrigation",
        "Precision fertilization",
        "Climate-resilient seeds",
      ],
      impact: "40% water savings and 20% growth in annual production.",
    },

    "ecological-farming": {
      title: "Ecological Farming",
      image: Project4,
      description:
        "Ecological Farming promotes nature-friendly agricultural methods that protect biodiversity and soil health. This project reduces chemical usage and encourages eco-friendly farming practices to produce healthy crops while preserving the natural ecosystem",
      services: "Eco Farming",
      farmer: "Ms. Priya Singh",
      duration: "3.5 Months",
      location: "Kerala, India",
      challenges: [
        "Low initial yield",
        "Eco pest control limits",
        "Farmer awareness",
        "Profitability concerns",
      ],
      solutions: [
        "Bio-pesticide units",
        "Intercropping methods",
        "Farmer workshops",
      ],
      impact:
        "Complete elimination of chemical pesticides and ecosystem recovery.",
    },

    "organic-solutions": {
      title: "Organic Solutions",
      image: Project2,
      description:
        "Organic Solutions focus on chemical-free farming to produce safer and healthier food. This project emphasizes natural fertilizers, composting, and organic pest control methods to improve soil health and support sustainable agriculture",
      services: "Organic Farming",
      farmer: "Mr. Amit Desai",
      duration: "5 Months",
      location: "Gujarat, India",
      challenges: [
        "High organic input costs",
        "Pest control",
        "Slow crop cycles",
        "Market awareness",
      ],
      solutions: [
        "Vermicomposting",
        "Organic certification",
        "Direct consumer marketing",
      ],
      impact: "Certified organic status with 25% higher market value.",
    },

    "fresh-products": {
      title: "Fresh Products",
      image: Project5,
      description:
        "Fresh Products aim to deliver farm-fresh fruits and vegetables directly to consumers. This project focuses on quick harvesting, hygienic handling, and fast transportation to preserve natural taste, nutrition, and freshness",
      services: "Fresh Produce",
      farmer: "Mr. Vikram Rao",
      duration: "1.5 Months",
      location: "Karnataka, India",
      challenges: [
        "Transport freshness",
        "Cold storage limits",
        "Delivery delays",
        "Post-harvest waste",
      ],
      solutions: [
        "Portable cold storage",
        "Optimized delivery routes",
        "Eco packaging",
      ],
      impact: "Waste reduced from 25% to 5%.",
    },

    "healthy-food": {
      title: "Healthy Food",
      image: Project6,
      description:
        "Healthy Food focuses on producing nutrition-rich food using natural and safe farming methods. This project supports better immunity, balanced diets, and overall wellbeing by ensuring clean, fresh, and chemical-free food production",
      services: "Healthy Nutrition",
      farmer: "Ms. Meera Sharma",
      duration: "6 Months",
      location: "Himachal Pradesh, India",
      challenges: [
        "Nutritional consistency",
        "Chemical contamination",
        "Consumer education",
        "Affordability",
      ],
      solutions: [
        "Regular quality audits",
        "Nutrition awareness programs",
        "Local sourcing",
      ],
      impact: "Supplied healthy food to 500+ families and schools.",
    },
  };

  const data = projectData[projectId];
  if (!data) return null;

  return (
    <div>
      <ProjectHero breadcrumb={`Project / ${data.title}`} title={data.title} />

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-12">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[450px] mb-10 overflow-hidden rounded-2xl shadow-xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:w-2/3 space-y-8">

            <header>
              <p className="text-green-600 text-xs font-bold uppercase tracking-widest">
                Project Case Study
              </p>
              <h2 className="font-manrope font-extrabold text-[30px] leading-[42px] tracking-normal mt-2">
                {data.title}
              </h2>
            </header>

            <p className="font-manrope font-medium text-[16px] leading-[30px] tracking-normal text-gray-600 border-l-4 border-green-500 pl-6">
              {data.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <h3 className="font-manrope font-bold text-[20px] leading-[26px] mb-4">
                  Challenges
                </h3>
                <ul className="font-manrope font-medium text-[16px] leading-[30px] text-gray-600">
                  {data.challenges.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-6 sm:p-8 rounded-2xl">
                <h3 className="font-manrope font-bold text-[20px] leading-[26px] mb-4">
                  Solutions
                </h3>
                <ul className="font-manrope font-medium text-[16px] leading-[30px] text-gray-600">
                  {data.solutions.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PROJECT IMPACT */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <h3 className="font-manrope font-bold text-[26px] leading-[26px] text-green-700 mb-4">
                Project Impact
              </h3>
              <p className="font-manrope font-medium text-[16px] leading-[30px] text-gray-600">
                {data.impact}
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-white rounded-3xl border shadow-lg overflow-hidden">

              <div className="bg-gray-900 text-white p-5 text-center">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Project Status
                </p>
                <p className="font-semibold">Completed</p>
              </div>

              <div className="p-6 space-y-5 text-sm">
                <InfoItem icon="🛠️" label="Service" value={data.services} />
                <InfoItem icon="👨‍🌾" label="Farmer" value={data.farmer} />
                <InfoItem icon="⏳" label="Duration" value={data.duration} />
                <InfoItem icon="📍" label="Location" value={data.location} />
              </div>

              {/* ICONS */}
              <div className="p-6 border-t bg-gray-50 flex justify-center gap-4">
                <Icon><FaTwitter /></Icon>
                <Icon><FaFacebookF /></Icon>
                <Icon><FaPinterestP /></Icon>
                <Icon><FaInstagram /></Icon>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* INFO ITEM */
const InfoItem = ({ icon, label, value }) => (
  <div className="flex gap-4 items-center">
    <div className="w-10 h-10 flex items-center justify-center bg-green-50 rounded-lg text-lg">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase text-gray-400 font-bold">
        {label}
      </p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const Icon = ({ children }) => (
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-100 transition text-gray-700"
  >
    {children}
  </a>
);

export default ProjectDetails;
