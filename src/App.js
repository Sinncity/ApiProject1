import React from "react";
import Date from "./components/Date";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Fiber from "./Pages/Fiber";
// import { ParallaxScroll } from "./components/ParallaxScroll";
import Quote from "./components/Quote";
import Time from "./components/Time";
import Weather from "./components/Weather";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Weather />
      <Header />
      <Time />
      <Date />
      <Quote />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Fiber" element={<Fiber />} />
          <Route path="Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
      {/* <ParallaxScroll /> */}
      <Footer />
    </>
  );
}
