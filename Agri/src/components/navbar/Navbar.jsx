import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AgriTech</Link>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-green-200 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-200 transition">About</Link></li>
          <li><Link to="/services" className="hover:text-green-200 transition">Services</Link></li>
        </ul>
        <h3>hello</h3>
      </div>
    </nav>
  )
}

export default Navbar