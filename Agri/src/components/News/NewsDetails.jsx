import React from "react";
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
        content: `
Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.

Urban food production has become increasingly important in modern cities. By integrating farming practices into urban environments, cities can reduce dependency on long supply chains and improve access to fresh, locally grown food. Rooftop gardens, community farms, and vertical agriculture are transforming unused spaces into productive green zones.

Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Urban agriculture helps communities reconnect with food sources while promoting sustainability and environmental responsibility.
`

    },

    {
        id: 2,
        slug: "future-of-farming-smart-irrigation-solutions",
        title: "The Future of Farming, Smart Irrigation Solutions",
        date: "05 July 2022",
        image: img4,
        content: `
Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
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
into unchanged.
    `,
    },

    {
        id: 3,
        slug: "agronomy-and-relation-to-other-sciences",
        title: "Agronomy and relation to Other Sciences",
        date: "05 July 2022",
        image: img2,
        content: `
Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.

Agronomy plays a vital role in connecting agriculture with multiple scientific disciplines such as soil science, biology, chemistry, and environmental science. Through this integration, agronomists are able to improve crop yield, soil health, and long-term sustainability. Scientific research supports better decision-making in modern farming systems.

Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Agronomy remains a cornerstone of food security and sustainable agricultural development.
`

    },

    {
        id: 4,
        slug: "we-grow-products-with-organic-farming",
        title: "We grow products with the organic farming",
        date: "05 July 2022",
        image: img5,
        content: `
Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.

Organic farming emphasizes natural processes, biodiversity, and soil health to produce nutritious food without synthetic chemicals. Farmers rely on composting, crop rotation, and biological pest control to maintain ecological balance. These methods help preserve the environment while ensuring food safety.

Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Organic agriculture not only protects ecosystems but also supports healthier lifestyles and sustainable farming communities.
`

    },

    {
        id: 5,
        slug: "quick-solution-low-milk-production-zimbabwe",
        title: "A Quick Solution to Low Milk Production in Zimbabwe",
        date: "05 July 2022",
        image: img1,
        content: `
Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.

Low milk production remains a challenge for many dairy farmers in Zimbabwe. Factors such as poor nutrition, limited veterinary care, and outdated farming methods contribute to reduced yields. By adopting modern dairy management practices, farmers can significantly improve milk output.

Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Sustainable dairy farming solutions empower local farmers, improve livelihoods, and strengthen the agricultural economy.
`

    },

    {
        id: 6,
        slug: "winter-wheat-harvest-organic-gather",
        title: "Winter wheat harvest organic gather nice moment",
        date: "05 July 2022",
        image: img6,
        content: `
Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.

Winter wheat harvest represents one of the most rewarding moments for farmers. Months of careful planning, soil preparation, and crop management culminate in a successful harvest. Organic wheat farming ensures that crops are grown using environmentally friendly practices.

Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. These harvest moments celebrate dedication, sustainability, and the timeless relationship between farmers and the land.
`

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
                <div className="flex gap-[30px]">

                    {/* ===== LEFT CONTENT (770px) ===== */}
                    <div className="w-[770px]">
                        {/* Image */}
                        <div className="relative mb-6">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-[421px] object-cover rounded-[10px]"
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
                            className="text-[#878680] text-[16px] font-medium leading-[30px] mb-10"
                            style={{ width: "765px" }}
                        >
                            {news.content
                                .trim()
                                .split("\n\n")
                                .map((para, index) => (
                                    <p key={index} className="mb-6 last:mb-0">
                                        {para}
                                    </p>
                                ))}
                        </div>

                        {/* ===== TAGS + SOCIAL ===== */}
                        <div
                            className="flex items-center justify-between border-t pt-8 mb-10"
                            style={{ width: "770px" }}
                        >
                            {/* Tags */}
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-extrabold text-[#1F1E17]">
                                    Tags
                                </span>

                                <span className="bg-[#4BAF47] text-white text-[12px] px-4 py-1 rounded-full">
                                    Harvest
                                </span>
                                <span className="bg-[#4BAF47] text-white text-[12px] px-4 py-1 rounded-full">
                                    Vegetables
                                </span>
                            </div>

                            {/* Social icons */}
                            <div className="flex gap-3">
                                {/* Twitter */}
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-[#F7F6F1] flex items-center justify-center text-[#1F1E17] hover:bg-[#4BAF47] hover:text-white transition cursor-pointer"
                                >
                                    <FaTwitter size={14} />
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-[#F7F6F1] flex items-center justify-center text-[#1F1E17] hover:bg-[#4BAF47] hover:text-white transition cursor-pointer"
                                >
                                    <FaFacebookF size={14} />
                                </a>

                                {/* Pinterest */}
                                <a
                                    href="https://pinterest.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-[#F7F6F1] flex items-center justify-center text-[#1F1E17] hover:bg-[#4BAF47] hover:text-white transition cursor-pointer"
                                >
                                    <FaPinterestP size={14} />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-[#F7F6F1] flex items-center justify-center text-[#1F1E17] hover:bg-[#4BAF47] hover:text-white transition cursor-pointer"
                                >
                                    <FaLinkedinIn size={14} />
                                </a>
                            </div>


                        </div>

                        {/* ===== RELATED POSTS ===== */}
                        <div className="grid grid-cols-2 gap-[30px] mb-14" style={{ width: "770px" }}>
                            <div className="bg-[#F8F7F0] rounded-[10px] p-6">
                                <p className="font-extrabold text-[#1F1E17] leading-[26px]">
                                    Agronomy and relation to<br />Other Sciences
                                </p>
                            </div>

                            <div className="bg-[#F8F7F0] rounded-[10px] p-6">
                                <p className="font-extrabold text-[#1F1E17] leading-[26px]">
                                    Bringing Food Production<br />Back To Cities
                                </p>
                            </div>
                        </div>

                        {/* ===== LEAVE A COMMENT ===== */}
                        <div style={{ width: "770px" }}>
                            <h3 className="text-[26px] font-extrabold text-[#1F1E17] mb-2">
                                Leave a Comment
                            </h3>

                            <label className="flex items-center gap-2 text-[14px] text-[#878680] mb-6">
                                <input type="checkbox" />
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="h-[56px] rounded-[10px] px-4 bg-[#F8F7F0] outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="h-[56px] rounded-[10px] px-4 bg-[#F8F7F0] outline-none"
                                />
                            </div>

                            <textarea
                                placeholder="Write Comment"
                                className="w-full h-[200px] rounded-[10px] px-4 py-4 bg-[#F8F7F0] outline-none mb-6 resize-none"
                            />

                            <button className="bg-[#4BAF47] text-white px-10 py-4 rounded-[10px]">
                                Post Comment
                            </button>
                        </div>

                    </div>

                    {/* ===== RIGHT SIDEBAR (370px) ===== */}
                    {/* ===== RIGHT SIDEBAR ===== */}
                    <aside className="w-[370px] min-h-[1844.72px] space-y-[30px]">

                        {/* Search */}
                        {/* ===== Search ===== */}
                        <div className="w-[370px] h-[86px] bg-[#F4C23D] rounded-[10px] flex items-center px-6">
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="flex-1 bg-transparent outline-none text-white placeholder-white text-[14px]"
                            />
                            <FaSearch className="text-white text-[18px]" />
                        </div>


                        {/* ===== Latest Posts ===== */}
                        <div className="w-[370px] h-[453.36px] bg-[#F7F6F1] rounded-[10px] p-6">
                            <h4 className="text-[18px] font-extrabold text-[#1F1E17] mb-5">
                                Latest Posts
                            </h4>

                            {newsData.slice(0, 3).map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/news/${item.slug}`}
                                    className="flex gap-4 mb-5 last:mb-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-[70px] h-[70px] object-cover rounded-[8px]"
                                    />

                                    <div>
                                        <p className="text-[12px] text-[#878680] mb-1">
                                            by Kevin Martin
                                        </p>
                                        <p className="text-[14px] font-medium leading-[20px] text-[#1F1E17]">
                                            {item.title}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* ===== Categories ===== */}
                        <div className="w-[370px] h-[396px] bg-[#F7F6F1] rounded-[10px] p-6">
                            <h4 className="text-[18px] font-extrabold text-[#1F1E17] mb-5">
                                Categories
                            </h4>

                            <ul className="space-y-3 text-[14px] text-[#878680]">
                                <li>Agriculture</li>
                                <li>Farm</li>
                                <li>Farming</li>
                                <li>Fresh Vegetables</li>
                                <li>Harvest</li>
                                <li>Organic Food</li>
                            </ul>
                        </div>


                        {/* ===== Tags ===== */}
                        <div className="w-[370px] h-[276px] bg-[#F7F6F1] rounded-[10px] p-6">
                            <h4 className="text-[18px] font-extrabold text-[#1F1E17] mb-5">
                                Tags
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {["Agriculture", "Farming", "Harvest", "Organic", "Vegetables"].map(
                                    (tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-white border border-[#E5E5E5] rounded-full text-[13px] text-[#1F1E17]"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>



                    </aside>
                </div>
            </div>
        </section>
    );
};

export default NewsDetails;
