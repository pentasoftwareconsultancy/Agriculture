import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AgriTech</h3>
            <p className="text-gray-400">Empowering farmers with modern agricultural solutions.</p>
          </div>gytyty
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@agritech.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 AgriTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer