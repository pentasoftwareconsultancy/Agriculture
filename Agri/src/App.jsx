import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import NewsGrid from "./components/News/NewsGrid";
import NewsDetails from "./components/News/NewsDetails";

import ProductDetails from "./components/Shop/ProductDetails";

import ProjectPage from "./pages/Projectpage.jsx";


import ShopPage from "./pages/ShopPage.jsx";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Routes>
          
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            
            <Route path="/services/*" element={<ServicesPage />} />

            <Route path="/projects/*" element={<ProjectPage />} />
            
            <Route path="/news" element={<NewsGrid />} />
            <Route path="/news/:slug" element={<NewsDetails />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:productId" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
