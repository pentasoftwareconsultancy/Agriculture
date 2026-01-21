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
        content: `Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    Urban food production has become increasingly important in modern cities. By integrating farming practices into urban environments, cities can reduce dependency on long supply chains and improve access to fresh, locally grown food. Rooftop gardens, community farms, and vertical agriculture are transforming unused spaces into productive green zones.
                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Urban agriculture helps communities reconnect with food sources while promoting sustainability and environmental responsibility.`
    },

    {
        id: 2,
        slug: "future-of-farming-smart-irrigation-solutions",
        title: "The Future of Farming, Smart Irrigation Solutions",
        date: "05 July 2022",
        image: img4,
        content: `Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
                    passages of Lorem Ipsum available, but the majority have alteration in some injected or words which
                    don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                    sure there isn’t anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.

                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type simen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting.

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry’s standard dummy text ever since the when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into unchanged.`,
    },

    {
        id: 3,
        slug: "agronomy-and-relation-to-other-sciences",
        title: "Agronomy and relation to Other Sciences",
        date: "05 July 2022",
        image: img2,
        content: `Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
                    Agronomy plays a vital role in connecting agriculture with multiple scientific disciplines such as soil science, biology, chemistry, and environmental science. Through this integration, agronomists are able to improve crop yield, soil health, and long-term sustainability. Scientific research supports better decision-making in modern farming systems.
                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Agronomy remains a cornerstone of food security and sustainable agricultural development.`
    },

    {
        id: 4,
        slug: "we-grow-products-with-organic-farming",
        title: "We grow products with the organic farming",
        date: "05 July 2022",
        image: img5,
        content: `Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
                    Organic farming emphasizes natural processes, biodiversity, and soil health to produce nutritious food without synthetic chemicals. Farmers rely on composting, crop rotation, and biological pest control to maintain ecological balance. These methods help preserve the environment while ensuring food safety.
                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Organic agriculture not only protects ecosystems but also supports healthier lifestyles and sustainable farming communities.`
    },

    {
        id: 5,
        slug: "quick-solution-low-milk-production-zimbabwe",
        title: "A Quick Solution to Low Milk Production in Zimbabwe",
        date: "05 July 2022",
        image: img1,
        content: `Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
                    Low milk production remains a challenge for many dairy farmers in Zimbabwe. Factors such as poor nutrition, limited veterinary care, and outdated farming methods contribute to reduced yields. By adopting modern dairy management practices, farmers can significantly improve milk output.
                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Sustainable dairy farming solutions empower local farmers, improve livelihoods, and strengthen the agricultural economy.`
    },

    {
        id: 6,
        slug: "winter-wheat-harvest-organic-gather",
        title: "Winter wheat harvest organic gather nice moment",
        date: "05 July 2022",
        image: img6,
        content: `Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
                Winter wheat harvest represents one of the most rewarding moments for farmers. Months of careful planning, soil preparation, and crop management culminate in a successful harvest. Organic wheat farming ensures that crops are grown using environmentally friendly practices.
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. These harvest moments celebrate dedication, sustainability, and the timeless relationship between farmers and the land.`
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
