import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home"
import DocumentGuidance from "./routes/DocumentGuidance"
import Blog from "./routes/Blog"
import OfficeAvailabilty from "./routes/OfficeAvailability"
import Report from "./routes/Report"
import Login from "./routes/Login"
import Register from "./routes/Register"




function App() {
  return (
    <>
      <Router > <Routes>

        <Route path="/blog" element={<Blog />} />
        <Route path="/documentGuidance" element={<DocumentGuidance />} />
        <Route path="/" element={<Home />} />
        <Route path="/officeAvailabilty" element={<OfficeAvailabilty />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes></Router>


    </>
  );
}

export default App;
