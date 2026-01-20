import React from "react"
import { Routes, Route } from "react-router-dom"
import Services from "../components/Services/Services.jsx"
import ServiceDetails from "../components/Services/ServiceDetails.jsx"

function ServicesPage() {
  return (
    <Routes>
      <Route path="/" element={<Services />} />
      <Route path=":serviceId" element={<ServiceDetails />} />
    </Routes>
  )
}

export default ServicesPage;
