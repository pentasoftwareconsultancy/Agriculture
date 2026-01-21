import React from "react";
import { useState } from "react";

import { useParams, Link } from "react-router-dom";
import { FaUser, FaComment, FaSearch } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import LatestNews from "../../assets/LatestNews.png";

// images
import img1 from "../../assets/quick-solution-low-milk-zimbabwe.jpg";
import img2 from "../../assets/agronomy-other-sciences.jpg";
import img3 from "../../assets/bringing-food-production-cities.jpg";
import img4 from "../../assets/future-of-farming-irrigation.jpg";
import img5 from "../../assets/organic-farming-products.jpg";
import img6 from "../../assets/winter-wheat-harvest.jpg";
import backgroundImgService from "../../assets/backgroundImgService.png";

/* DATA */
export const newsData = [
    {
        id: 1,
        slug: "bringing-food-production-back-to-cities",
        title: "Bringing Food Production Back To Cities",
        date: "05 July 2022",
        image: img3,
        content: `Bringing Food Production Back to Cities is an important step toward creating sustainable and resilient urban environments. Rapid urbanization has increased the distance between food producers and consumers, leading to higher transportation costs, food waste, and environmental pollution. By reintroducing food production into cities through community gardens, rooftop farms, and vertical agriculture, urban areas can reduce their dependence on distant rural farms while ensuring a steady supply of fresh and healthy food for residents.

Urban food production also plays a key role in improving social and economic well-being. Community gardens and local farms encourage people to work together, strengthening social connections and promoting awareness about healthy eating habits. These initiatives can create employment opportunities, support local economies, and provide affordable produce, especially in low-income neighborhoods where access to fresh food is often limited. In this way, cities become more inclusive and self-reliant.

Additionally, bringing food production back to cities benefits the environment. Urban farming helps reduce carbon emissions by minimizing long-distance transportation and packaging. Green spaces created through urban agriculture improve air quality, manage rainwater, and reduce the urban heat island effect. By integrating food production into urban planning, cities can move toward a greener, healthier, and more sustainable future for both people and the planet.`
    },

    {
        id: 2,
        slug: "future-of-farming-smart-irrigation-solutions",
        title: "The Future of Farming, Smart Irrigation Solutions",
        date: "05 July 2022",
        image: img4,
        content: `The Future of Farming: Smart Irrigation Solutions focuses on using technology to manage water resources more efficiently in agriculture. With increasing water scarcity and unpredictable climate conditions, traditional irrigation methods often lead to excessive water use and crop stress. Smart irrigation systems use sensors, weather data, and automation to deliver the right amount of water at the right time, improving crop health while conserving valuable water resources.

These advanced irrigation solutions also help farmers reduce costs and increase productivity. By monitoring soil moisture and plant needs in real time, smart systems prevent overwatering and under-watering, leading to higher yields and healthier crops. Farmers can control irrigation remotely through mobile applications, saving labor and time while making data-driven decisions that enhance farm efficiency.

Moreover, smart irrigation plays a crucial role in promoting sustainable agriculture. Efficient water use reduces energy consumption and minimizes soil erosion and nutrient runoff, protecting the environment. As technology continues to evolve, smart irrigation solutions will become more accessible, helping farmers adapt to climate challenges and ensuring food security for future generations.`,
    },

    {
        id: 3,
        slug: "agronomy-and-relation-to-other-sciences",
        title: "Agronomy and relation to Other Sciences",
        date: "05 July 2022",
        image: img2,
        content: `Agronomy and Its Relation to Other Sciences highlights the interdisciplinary nature of modern agriculture. Agronomy is the science of crop production and soil management, and it relies heavily on knowledge from various scientific fields to improve agricultural practices. By combining biological, chemical, and physical principles, agronomy helps in understanding how crops grow and how soils can be managed to achieve higher productivity and sustainability.

Agronomy is closely related to biology and botany, as it studies plant growth, genetics, and physiology to improve crop varieties and resistance to pests and diseases. Chemistry plays an important role in understanding soil nutrients, fertilizers, and plant metabolism, while physics contributes to areas such as soil water movement, temperature, and energy balance. These scientific connections enable agronomists to design effective strategies for crop management under different environmental conditions.

In addition, agronomy is linked with environmental science, economics, and technology. Environmental science helps assess the impact of farming practices on ecosystems, while economics guides decision-making related to resource use, costs, and market demands. Advances in technology, such as precision farming and data analysis, further strengthen agronomy’s role in ensuring sustainable food production and global food security.`
    },

    {
        id: 4,
        slug: "we-grow-products-with-organic-farming",
        title: "We grow products with the organic farming",
        date: "05 July 2022",
        image: img5,
        content: `We Grow Products with Organic Farming emphasizes a natural and eco-friendly approach to agriculture that focuses on soil health, biodiversity, and sustainability. Organic farming avoids the use of synthetic fertilizers, pesticides, and genetically modified organisms, relying instead on natural processes to grow crops. This method helps maintain the balance of nature while producing food that is safe, healthy, and nutritious for consumers.

Organic farming practices such as crop rotation, composting, and the use of organic manure improve soil fertility and structure over time. Healthy soil supports strong plant growth and reduces the risk of pests and diseases naturally. By encouraging beneficial insects and microorganisms, organic farming creates a self-sustaining agricultural system that works in harmony with the environment rather than against it.

Moreover, growing products through organic farming supports long-term environmental and social benefits. It reduces water and soil pollution, lowers carbon emissions, and promotes biodiversity. Organic farming also supports farmers by reducing dependence on expensive chemical inputs and meeting the growing consumer demand for clean, responsibly produced food. Through organic farming, we contribute to a healthier planet and a more sustainable future.`
    },

    {
        id: 5,
        slug: "quick-solution-low-milk-production-zimbabwe",
        title: "A Quick Solution to Low Milk Production in Zimbabwe",
        date: "05 July 2022",
        image: img1,
        content: `Quick Solutions for Low Milk Production in Zimbabwe focus on improving dairy productivity through affordable and practical measures. One of the main causes of low milk production is poor nutrition of dairy animals, especially during dry seasons. Providing balanced feed, including improved pasture grasses, crop residues, and affordable supplements, can quickly enhance milk yield. Ensuring access to clean drinking water is equally important, as water scarcity directly reduces milk production.

Another effective solution is improving animal health and management practices. Regular vaccination, deworming, and disease control help prevent common illnesses that reduce productivity. Training farmers in proper milking techniques, housing, and hygiene can also make a significant difference. Simple improvements such as clean shelters, protection from heat stress, and proper milking schedules can lead to noticeable increases in milk output.

Additionally, strengthening farmer support systems can provide long-term benefits. Access to extension services, cooperative societies, and basic dairy technologies such as milk cooling and storage facilities helps farmers reduce losses and improve quality. Encouraging the use of locally adapted, high-yield dairy breeds through controlled breeding programs can further boost production. By combining better nutrition, animal care, and farmer support, Zimbabwe can achieve quick and sustainable improvements in milk production.`
    },

    {
        id: 6,
        slug: "winter-wheat-harvest-organic-gather",
        title: "Winter wheat harvest organic gather nice moment",
        date: "05 July 2022",
        image: img6,
        content: ` Winter Wheat Harvest in Organic Farming represents a careful balance between traditional knowledge and sustainable practices. Winter wheat is sown in the autumn and harvested in late spring or early summer, allowing the crop to benefit from winter moisture and develop strong roots. In organic systems, the harvest focuses on maintaining soil health and grain quality without the use of chemical inputs.

Organic farmers rely on natural methods such as crop rotation, green manure, and mechanical weed control to ensure a healthy winter wheat crop. Timing the harvest is crucial, as grains must reach proper maturity to achieve good yield and nutritional value. Careful monitoring of weather conditions helps farmers decide the best harvest time while minimizing losses and preserving grain quality.

The organic gathering of winter wheat also supports environmental sustainability. By avoiding synthetic chemicals, organic harvesting protects beneficial organisms and reduces soil and water pollution. The harvested wheat is valued for its purity and nutritional benefits, meeting the growing demand for organic grains. This approach not only produces healthy food but also promotes long-term agricultural sustainability.`
    },

];



const NewsDetails = () => {
    const { slug } = useParams();
    const news = newsData.find((item) => item.slug === slug);


    if (!news) {
        return <div className="text-center py-20">News not found</div>;
    }

    return (
        <section>
            {/* ===== Banner ===== */}
            <div
                className="relative h-[326px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${backgroundImgService})` }}
            >
                <div className="absolute inset-0 "></div>
                <div className="relative z-10 text-center">
                    <p className="text-[13px] tracking-[2px] text-white/80 uppercase mb-2">
                        Home / LATEST NEWS
                    </p>
                    <h1 className="text-white text-[48px] font-semibold">
                        LATEST NEWS
                    </h1>

                </div>
            </div>

            {/* ===== Layout ===== */}
            <div className="max-w-[1170px] mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row gap-[30px]">


                    {/* ===== LEFT CONTENT (770px) ===== */}
                    <div className="w-full lg:w-[770px]">

                        {/* Image */}
                        <div className="relative mb-6">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full max-h-[421px] object-cover rounded-[10px]"
                            />
                            <span className="absolute bottom-4 left-4 bg-[#4BAF47] text-white text-[14px] px-4 py-2 rounded-full">
                                {news.date}
                            </span>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-6 text-[14px] text-[#878680] mb-4">
                            <span className="flex items-center gap-2">
                                <FaUser className="text-[#F4A300]" />
                                by Kevin Martin
                            </span>
                            <span className="flex items-center gap-2">
                                <FaComment className="text-[#F4A300]" />0 Comments
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-[30px] leading-[42px] font-extrabold text-[#1F1E17] mb-4">
                            {news.title}
                        </h2>

                        {/* Content */}
                        <div
                            className="
    text-[#878680]
    text-[14px] md:text-[16px]
    font-medium
    leading-[24px] md:leading-[30px]
    mb-10
    w-full max-w-[765px]
  "
                        >
                            {news.content
                                .trim()
                                .split("\n\n")
                                .map((para, index) => (
                                    <p key={index} className="mb-5 md:mb-6 last:mb-0">
                                        {para}
                                    </p>
                                ))}
                        </div>


                        {/* ===== TAGS + SOCIAL ===== */}
                        <div
                            className="w-[770px] h-[101px] flex flex-col md:flex-row
gap-4 md:items-center md:justify-between

             border-t border-[#ECE7E2] px-0"
                        >

                            {/* Tags */}
                            <div className="flex items-center gap-[16px]">
                                <span className="text-[18px] leading-[40px] font-extrabold text-[#1F1E17]">
                                    Tags
                                </span>

                                <Link
                                    to="/news?tag=harvest"
                                    className="h-[40px] px-[24px] bg-[#4BAF47] text-white
                 rounded-[10px] flex items-center justify-center
                 text-[14px] font-semibold hover:bg-[#3e9f3a] transition"
                                >
                                    Harvest
                                </Link>

                                <Link
                                    to="/news?tag=vegetables"
                                    className="h-[40px] px-[24px] bg-[#4BAF47] text-white
                 rounded-[10px] flex items-center justify-center
                 text-[14px] font-semibold hover:bg-[#3e9f3a] transition"
                                >
                                    Vegetables
                                </Link>
                            </div>

                            {/* Social icons */}
                            <div className="flex gap-[10px]">
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[40px] h-[40px] rounded-full bg-[#F7F6F1]
                 flex items-center justify-center
                 text-[#1F1E17] hover:bg-[#4BAF47] hover:text-white
                 transition"
                                >
                                    <FaTwitter size={14} />
                                </a>

                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[40px] h-[40px] rounded-full bg-[#F7F6F1]
                 flex items-center justify-center
                 text-[#1F1E17] hover:bg-[#4BAF47] hover:text-white
                 transition"
                                >
                                    <FaFacebookF size={14} />
                                </a>

                                <a
                                    href="https://pinterest.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[40px] h-[40px] rounded-full bg-[#F7F6F1]
                 flex items-center justify-center
                 text-[#1F1E17] hover:bg-[#4BAF47] hover:text-white
                 transition"
                                >
                                    <FaPinterestP size={14} />
                                </a>

                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[40px] h-[40px] rounded-full bg-[#F7F6F1]
                 flex items-center justify-center
                 text-[#1F1E17] hover:bg-[#4BAF47] hover:text-white
                 transition"
                                >
                                    <FaLinkedinIn size={14} />
                                </a>
                            </div>
                        </div>


                        {/* ===== RELATED POSTS ===== */}
                        <div className="grid grid-cols-1 md:grid-cols-2
gap-[30px] w-full lg:w-[770px]
 gap-[30px] mb-14 ">

                            <Link
                                to="/news/agronomy-and-relation-to-other-sciences"
                                className="w-[370px] h-[169.47px] bg-[#F8F7F0] rounded-[10px]
               pt-[51.13px] pl-[50px]
               hover:bg-[#EDEBE2] transition"
                            >
                                <p className="text-[20px] leading-[32.74px] font-extrabold text-[#1F1E17]">
                                    Agronomy and relation to<br />Other Sciences
                                </p>
                            </Link>

                            <Link
                                to="/news/bringing-food-production-back-to-cities"
                                className="w-[370px] h-[169.47px] bg-[#F8F7F0] rounded-[10px]
               pt-[51.13px] pl-[50px]
               hover:bg-[#EDEBE2] transition"
                            >
                                <p className="text-[20px] leading-[32.74px] font-extrabold text-[#1F1E17]">
                                    Bringing Food Production<br />Back To Cities
                                </p>
                            </Link>

                        </div>



                        {/* ===== LEAVE A COMMENT ===== */}
                        <div className="w-[770px]">

                            {/* Title */}
                            <h3 className="text-[26px] leading-[32.5px] font-extrabold text-[#1F1E17] mb-[20px]">
                                Leave a Comment
                            </h3>

                            <div className="grid grid-cols-[18px_1fr] gap-x-[10px] mb-[24px] w-full">
                                <input
                                    id="save-info"
                                    type="checkbox"
                                    className="mt-[6px] accent-[#4BAF47] cursor-pointer"
                                />

                                <label
                                    htmlFor="save-info"
                                    className="
      text-[14px] md:text-[16px]
      leading-[22px] md:leading-[30px]
      font-medium text-[#878680]
      cursor-pointer
      break-words
      w-full
    "
                                >
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>








                            {/* Inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2
 gap-[30px] mb-[30px]">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-[370px] h-[56.75px]
                 rounded-[10px] px-[20px]
                 bg-[#F8F7F0] border border-[#F8F7F0]
                 outline-none text-[16px] text-[#878680]"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-[370px] h-[56.75px]
                 rounded-[10px] px-[20px]
                 bg-[#F8F7F0] border border-[#F8F7F0]
                 outline-none text-[16px] text-[#878680]"
                                />
                            </div>

                            {/* Textarea */}
                            <textarea
                                placeholder="Write Comment"
                                className="w-[770px] h-[200px]
               rounded-[10px] px-[20px] py-[20px]
               bg-[#F8F7F0] border border-[#F8F7F0]
               outline-none text-[16px] text-[#878680]
               resize-none mb-[30px]"
                            />

                            {/* Button */}
                            <button
                                className="w-[220.83px] h-[60.5px]
               bg-[#4BAF47] rounded-[10px]
               text-white text-[16px] font-semibold
               hover:bg-[#3e9f3a] transition"
                            >
                                Post Comment
                            </button>
                        </div>


                    </div>

                    {/* ===== RIGHT SIDEBAR (370px) ===== */}

                    <aside className="w-full lg:w-[370px] min-h-[1844.72px] space-y-[30px]">

                        {/* Search */}
                        {/* ===== Search ===== */}
                        <div className="w-[370px] h-[86px] bg-[#F4C23D] rounded-[10px] flex items-center px-6">
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="flex-1 bg-transparent outline-none text-white placeholder-white text-[20px]"
                            />
                            <FaSearch className="text-white text-[35px]" />
                        </div>


                        {/* ===== Latest Posts ===== */}
                        <div className="w-[370px] bg-[#F7F6F1] rounded-[12px] p-6">
                            <h4 className="text-[18px] font-extrabold text-[#1F1E17] mb-6">
                                Latest Posts
                            </h4>

                            {newsData.slice(0, 3).map((item) => {
                                const isActive = slug === item.slug;

                                return (
                                    <Link
                                        key={item.id}
                                        to={`/news/${item.slug}`}
                                        className={`flex items-start gap-4 p-3 rounded-[10px] mb-4 last:mb-0
          transition-all duration-200
          ${isActive
                                                ? "bg-white shadow-sm"
                                                : "bg-transparent hover:bg-white/60"
                                            }`}
                                    >
                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-[70px] h-[70px] rounded-[10px] object-cover flex-shrink-0"
                                        />

                                        {/* Content */}
                                        <div className="flex flex-col gap-1">
                                            {/* Author */}
                                            <div className="flex items-center gap-2 text-[#878680] text-[14px] leading-[20px]">
                                                <FaUser className="text-[#F2B21B] text-[12px]" />

                                                <span className="font-medium">by Kevin Martin</span>
                                            </div>

                                            {/* Title */}
                                            <p className="text-[14px] font-extrabold leading-[26px] text-[#1F1E17]">
                                                {item.title}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>




                        {/* ===== Categories ===== */}
                        <div className="w-[370px] h-[396px] bg-[#F8F7F0] rounded-[10px] 
                pt-[40px] pb-[40px] pl-[50px] pr-[50px]">

                            <h4 className="text-[20px] leading-[27px] font-extrabold text-[#1F1E17] mb-[24px]">
                                Categories
                            </h4>

                            <ul className="text-[16px] leading-[47px] font-medium text-[#878680]">
                                {[
                                    "Agriculture",
                                    "Farm",
                                    "Farming",
                                    "Fresh Vegetables",
                                    "Harvest",
                                    "Organic Food",
                                ].map((cat) => (
                                    <li key={cat}>
                                        <Link
                                            to={`/news?category=${cat.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="hover:text-[#1F1E17] transition"
                                        >
                                            {cat}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>






                        {/* ===== Tags ===== */}
                        <div className="w-[370px] h-[276px] bg-[#F8F7F0] rounded-[10px]
                pt-[40px] pl-[50px] pr-[50px]">

                            <h4 className="text-[20px] leading-[30px] font-extrabold text-[#1F1E17] mb-[21px]">
                                Tags
                            </h4>

                            <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
                                {["Agriculture", "Farming", "Harvest", "Organic", "Vegetables"].map((tag) => (
                                    <Link
                                        key={tag}
                                        to={`/news?tag=${tag.toLowerCase()}`}
                                        className="h-[40px] px-[24px] bg-white rounded-[10px]
                   flex items-center justify-center
                   text-[14px] font-semibold text-[#1F1E17]
                   hover:bg-[#4BAF47] hover:text-white
                   transition"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>






                    </aside>
                </div>
            </div>
        </section>
    );
};

export default NewsDetails;
