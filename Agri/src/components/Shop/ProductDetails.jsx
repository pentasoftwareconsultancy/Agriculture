import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ServiceHero from "../Services/ServiceHero";
import backgroundImage from "../../assets/backgroundImgService.png";
import { products } from "../../data/Products";

function ProductDetails() {
  const { productId } = useParams();

  // 🔹 STATES (Always at top)
  const [qty, setQty] = useState(1);
const [reviews, setReviews] = useState(() => {
  try {
    const stored = localStorage.getItem(`reviews-${productId}`);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(`reviews-${productId}`);
    return [];
  }
});
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [rating, setRating] = useState(0);
  const [activeReview, setActiveReview] = useState(0);


  const product = products.find((p) => p.id === productId);

// useEffect(() => {
//   try {
//     const stored = localStorage.getItem(`reviews-${productId}`);
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       if (Array.isArray(parsed)) {
//         setReviews(parsed);
//       }
//     }
//   } catch {
//     console.error("Invalid review data. Resetting...");
//     localStorage.removeItem(`reviews-${productId}`);
//     setReviews([]);
//   }
// }, [productId]);

const handleDeleteReview = (indexToDelete) => {
  const updatedReviews = reviews.filter((_, i) => i !== indexToDelete);

  setReviews(updatedReviews);
  localStorage.setItem(
    `reviews-${productId}`,
    JSON.stringify(updatedReviews)
  );

  // Fix active index so slider doesn’t crash
  if (activeReview >= updatedReviews.length) {
    setActiveReview(Math.max(updatedReviews.length - 1, 0));
  }
};

  // 🔹 PRODUCT NOT FOUND
  if (!product) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold mb-2">Product not found</h2>
        <p className="text-gray-500">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  // 🔹 ADD REVIEW
  const handleAddReview = () => {
if (!reviewText.trim() || !reviewName.trim() || rating === 0) return;

    const newReview = {
      name: reviewName,
      text: reviewText,
      rating,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    setRating(0);

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(
      `reviews-${productId}`,
      JSON.stringify(updatedReviews),
    );

    setReviewText("");
    setReviewName("");
  };
  const handleNext = () => {
  setActiveReview((prev) =>
    prev === reviews.length - 1 ? 0 : prev + 1
  );
};

const handlePrev = () => {
  setActiveReview((prev) =>
    prev === 0 ? reviews.length - 1 : prev - 1
  );
};


  return (
    <div className="w-full">
      {/* HERO */}
      <ServiceHero
        title="Our Shop"
        breadcrumb={`Home / Shop / ${product.name}`}
        bgImage={backgroundImage}
      />

      {/* PRODUCT SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* PRODUCT TOP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
            {/* IMAGE */}
            <div className="bg-[#faf7ef] rounded-2xl p-12 flex justify-center overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-[340px] object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* DETAILS */}
            <div className="animate-fadeIn">
              <h2 className="text-4xl font-bold mb-3 tracking-tight">
                {product.name}
              </h2>

              <p className="text-green-600 text-xl font-semibold mb-4 flex items-center gap-2">
                {product.price}
                <span className="text-gray-400 text-sm">
                  ({reviews.length} Review{reviews.length !== 1 && "s"})
                </span>
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* QUANTITY */}
              <div className="flex items-center gap-5 mb-8">
                <span className="font-medium">Quantity</span>
                <div className="flex border rounded-lg overflow-hidden">
                  <button
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                  >
                    −
                  </button>
                  <span className="px-5 py-2 font-semibold">{qty}</span>
                  <button
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-5 mb-8">
                <button
                  className="bg-green-500 text-white px-7 py-3 rounded-lg
                hover:bg-green-600 hover:shadow-lg transition-all duration-300 active:scale-95"
                >
                  Add to Cart
                </button>

                <button
                  className="bg-yellow-400 px-7 py-3 rounded-lg
                hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 active:scale-95"
                >
                  Add to Wishlist
                </button>
              </div>

              {/* SHARE */}
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">Share:</span>
                {["facebook-f", "twitter", "linkedin-in", "pinterest-p"].map(
                  (icon) => (
                    <span
                      key={icon}
                      className="w-10 h-10 flex items-center justify-center
                      bg-gray-100 rounded-full cursor-pointer
                      hover:bg-green-500 hover:text-white transition-all"
                    >
                      <i className={`fa-brands fa-${icon}`}></i>
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl">
              {product.longDescription}
            </p>
          </div>

          {/* REVIEWS */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8">
              {reviews.length} Review{reviews.length !== 1 && "s"} for{" "}
              {product.name}
            </h3>

            {reviews.length === 0 && (
              <p className="text-gray-500 mb-8">
                No reviews yet. Be the first to review this product!
              </p>
            )}

          {reviews.length > 0 && (
  <div className="relative">

    {/* REVIEW CARD */}
    <div
      key={activeReview}
      className="flex gap-6 items-center p-6 rounded-2xl bg-[#faf7ef]
      animate-reviewFade transition-all duration-500"
    >
      {/* IMAGE / AVATAR */}
      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
        <div className="w-full h-full bg-green-500 flex items-center justify-center
        text-white text-3xl font-bold">
          {reviews[activeReview].name.charAt(0).toUpperCase()}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        {/* STARS */}
        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-lg ${
                star <= (reviews[activeReview].rating || 0)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* TEXT */}
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          “{reviews[activeReview].text}”
        </p>

        {/* NAME */}
        <div className="flex items-center justify-between">
  <p className="font-semibold text-lg">
    {reviews[activeReview].name}
  </p>

  <button
    onClick={() => handleDeleteReview(activeReview)}
    className="text-sm text-red-500 hover:text-red-600 transition"
  >
    Delete
  </button>
</div>

      </div>
    </div>

    {/* ARROWS */}
    {reviews.length > 1 && (
      <div className="absolute -top-7 right-0 -translate-y-1/2 flex gap-3">
        <button
          onClick={handlePrev}
          className="w-10 h-10 border rounded-md
          flex items-center justify-center hover:bg-gray-100 transition"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 border rounded-md
          flex items-center justify-center hover:bg-gray-100 transition"
        >
          →
        </button>
      </div>
    )}
  </div>
)}


            {/* ADD REVIEW */}
            <h3 className="text-2xl font-semibold mb-5 mt-14">Add a Review</h3>
{/* ⭐ RATE THIS PRODUCT */}
<div className="flex items-center gap-2 mb-4">
  {[1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      onClick={() => setRating(star)}
      className={`cursor-pointer text-2xl transition-transform
      ${star <= rating ? "text-yellow-400 scale-110" : "text-gray-300"}
      hover:scale-125`}
    >
      ★
    </span>
  ))}
  <span className="text-sm text-gray-500 ml-2">
    {rating ? `${rating} / 5` : "Rate this product"}
  </span>
</div>

            <textarea
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full border rounded-xl p-4 mb-4 bg-[#faf7ef]
              focus:ring-2 focus:ring-green-400 outline-none transition"
            />

            <input
              placeholder="Your Name"
              value={reviewName}
              onChange={(e) => setReviewName(e.target.value)}
              className="w-full border rounded-xl p-3 bg-[#faf7ef] mb-4
              focus:ring-2 focus:ring-green-400 outline-none transition"
            />
<button
  onClick={handleAddReview}
  disabled={rating === 0}
  className={`px-7 py-3 rounded-lg text-white transition-all duration-300
  ${
    rating === 0
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-green-500 hover:bg-green-600 hover:shadow-lg active:scale-95"
  }`}
>
  Submit Review
</button>

          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;