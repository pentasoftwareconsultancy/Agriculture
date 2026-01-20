import React from "react";
import { Link } from "react-router-dom";
import { newsData } from "./NewsDetails";
import NewsBanner from "../../assets/backgroundImgService.png";


// EXACT ORDER AS PER IMAGE
const orderedSlugs = [
    "bringing-food-production-back-to-cities",
    "future-of-farming-smart-irrigation-solutions",
    "agronomy-and-relation-to-other-sciences",
    "we-grow-products-with-organic-farming",
    "quick-solution-low-milk-production-zimbabwe",
    "winter-wheat-harvest-organic-gather",
];

// TITLE LINE CONTROL (PIXEL PERFECT)
const titleLines = {

    "bringing-food-production-back-to-cities": [
        "Bringing Food",
        "Production Back To",
        "Cities",
    ],

    "future-of-farming-smart-irrigation-solutions": [
        "The Future of",
        "Farming, Smart",
        "Irrigation Solutions",
    ],

    "agronomy-and-relation-to-other-sciences": [
        "Agronomy and",
        "relation to Other",
        "Sciences",
    ],

    "we-grow-products-with-organic-farming": [
        "We grow products",
        "with the organic",
        "farming",
    ],

    "quick-solution-low-milk-production-zimbabwe": [
        "A Quick Solution to",
        "Low Milk Production",
        "in Zimbabwe",
    ],

    "winter-wheat-harvest-organic-gather": [
        "Winter wheat harvest",
        "organic gather nice",
        "moment",
    ],

};

const NewsGrid = () => {
    const orderedNews = orderedSlugs.map((slug) =>
        newsData.find((item) => item.slug === slug)
    );

    return (
        <section className="bg-white">
            {/* ===== Banner ===== */}
            <div
                className="relative h-[322px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${NewsBanner})` }}
            >
                <div className="absolute inset-0 "></div>
                <div className="relative z-10 text-center text-white">
                    <p className="text-[13px] tracking-[2px] text-white/80 uppercase mb-2">
                        Home / News Grid
                    </p>
                    <h1 className="text-white text-[48px] font-semibold">
                        News Grid
                    </h1>
                </div>
            </div>

            {/* ===== Grid ===== */}
            <div className="mx-auto py-20 w-[1170px]">
                <div className="grid grid-cols-3 gap-[30px]">
                    {orderedNews.map((news) => (
                        <Link
                            to={`/news/${news.slug}`}
                            key={news.id}
                            className="block"
                        >
                            {/* CARD */}
                            <div className="w-[370px] h-[514px] bg-white rounded-[10px] shadow-[0px_2px_14px_rgba(0,0,0,0.05)] overflow-hidden">

                                {/* IMAGE */}
                                <div className="h-[300px] relative">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover rounded-t-[10px]"
                                    />

                                    {/* DATE PILL */}
                                    <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2">
                                        <span className="bg-[#4BAF47] text-white text-[14px] px-[26px] py-[8px] rounded-full">
                                            05 July 2022
                                        </span>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="pt-[36px] px-[30px] text-center h-[214px] border-t border-[#0000000D]">

                                    {/* META */}
                                    <div className="flex justify-center items-center gap-[18px] text-[14px] text-[#7a7a7a] mb-[18px]">
                                        <span className="flex items-center gap-[6px]">
                                            <span className="w-[8px] h-[8px] bg-[#f5a623] rounded-full"></span>
                                            by Kevin Martin
                                        </span>
                                        <span className="flex items-center gap-[6px]">
                                            <span className="w-[8px] h-[8px] bg-[#f5a623] rounded-full"></span>
                                            0 Comments
                                        </span>
                                    </div>

                                    {/* TITLE – FORCED 3 LINES */}
                                    <h3 className="text-[20px] font-semibold leading-[1.4] text-[#1a1a1a]">
                                        {titleLines[news.slug]?.map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                {index < titleLines[news.slug].length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </h3>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default NewsGrid;
