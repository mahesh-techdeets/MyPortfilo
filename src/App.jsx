import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Slider from "./Components/Slider";
import ProductsData from "./Components/Products";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div className=" min-h-screen w-full">
        <Navbar />
        <main className="main h-full mx-auto px-20 py-6">
          <Outlet />
        </main>
        <ProductsData />
        <Projects />
        <Slider />

        <Footer />
      </div>
    </>
  );
}

export default App;
