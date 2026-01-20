import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import ProjectDetails from "../components/Projects/ProjectDetails";

function Projectpage() {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path=":projectId" element={<ProjectDetails />} />
    </Routes>
  );
}

export default Projectpage;
