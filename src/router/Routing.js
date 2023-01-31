import React from "react";

import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Employees from "../components/employee/Employees";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HomePage from "../views/HomePage";

function Routing() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default Routing;
