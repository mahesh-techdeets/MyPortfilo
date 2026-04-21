"use client";

import React, { useEffect, useState } from "react";
import { Search, Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import data from "../assets/DP9.jpg";
import black from "../assets/gray.jpg";

import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    window.dispatchEvent(new Event("themeChange"));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      const hours = new Date().getHours();
      const isDark = hours > 19 || hours < 6;

      setIsDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  const youtubeChannels = ["Telugu", "Hindi", "English"];
  const telegramGroups = ["Projects", "Mobile Apps", "Web", "E-Commerce"];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <div
        className={`relative min-h-[700px] overflow-hidden ${
          isDarkMode
            ? "bg-black text-white"
            : "bg-gradient-to-b from-purple-900 to-purple-900 text-white"
        }`}
        style={{ fontFamily: "Georgia"}}
      >
        {" "}
        <nav
          className={`relative z-10 px-6 py-2 md:py-4 ${isDarkMode ? "bg-black text-white border-b-2 border-white" : "bg-purple-900"} bg-opacity-30 backdrop-blur-md shadow-xl `}
        >
          <div className="max-w-9xl mx-auto flex justify-between items-center">
            <h3 className="text-3xl ">Mahesh</h3>
            <ul className="hidden md:flex space-x-9 items-center cursor-pointer">
              <li>
                <a
                  href="/"
                  className="hover:text-purple-300 transition pb-2 hover:border-b-2 hover:border-white"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                <button
                  className="hover:text-purple-300 transition flex items-center"
                  onClick={() => toggleDropdown("youtube")}
                >
                  Youtube{" "}
                  <ChevronDown
                    className={`ml-4 h-4 w-4 transition-transform ${openDropdown === "youtube" ? "rotate-180" : ""}`}
                  />
                </button>

                <ul
                  className={`absolute left-0 mt-4 w-48 ${isDarkMode ? "bg-gray-700  " : "bg-purple-700"} rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                    transition-all duration-200 pointer-events-none group-hover:pointer-events-auto ${openDropdown === "youtube" ? "!opacity-100 !visible !pointer-events-auto" : ""}`}
                >
                  {youtubeChannels.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-purple-700 transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="relative group">
                <button
                  className="hover:text-purple-300 flex items-center transistion"
                  onClick={() => toggleDropdown("telegram")}
                >
                  Telegram{" "}
                  <ChevronDown
                    className={`transition-transform w-4 h-4 ml-4 ${openDropdown === "telegram" ? "rotate" : ""}`}
                  />
                </button>
                <ul
                  className={`absolute left-0 mt-4 w-48 ${isDarkMode ? "bg-gray-700  " : "bg-purple-800"} rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-event-none group-hover:pointer-events-auto ${openDropdown === "telegram" ? "!opacity-100 !visible !pointer-event-auto" : ""}`}
                >
                  {telegramGroups.map((items) => (
                    <li key={items}>
                      <a href="#" className="block px-4 py-2">
                        {items}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a className="hover:text-purple-300  transition">LinkedIn</a>
              </li>
              <li>
                <a className="hover:text-purple-300  transition">Instagram</a>
              </li>
            </ul>
            <div className="space-x-4 flex items-center">
              <button
                className={`p-3 md:ml-2 rounded-full ${isDarkMode ? "bg-black rounded-full hover:bg-gray-400" : "bg-purple-700"}  transition`}
                onClick={toggleTheme}
              >
                {" "}
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className={`hidden lg:block ml-2 rounded-full ${isDarkMode ? "bg-black rounded-full hover:bg-gray-400" : "bg-purple-700"} transition`}
              >
                <div className="relative max-w-12 focus-within:max-w-xs transition-[max-width] ease-in-out duration-300">
                  <input
                    className="block w-full border-none outline-none rounded-full p-[12px]  px-4 text-base placeholder:text-transparent focus:placeholder:text-gray-100"
                    placeholder="Search..."
                  />
                  <i className="absolute top-1/2 right-6 -translate-y-1/2 translate-x-1/2 pointer-events-none">
                    {" "}
                    <Search size={18} />
                  </i>
                </div>
              </button>
              <button className="md:hidden">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <a href="#" className="block py-2 hover:text-purple-200">
                    Home
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => toggleDropdown("youtube-mobile")}
                    className="w-full text-left py-2 hover:text-purple-200 flex items-center justify-between"
                  >
                    YouTube{" "}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === "youtube-mobile" ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === "youtube-mobile" && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {youtubeChannels.map((item) => (
                        <li key={item}>
                          <a href="#" className="block py-1 text-purple-200">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    onClick={() => toggleDropdown("telegram-mobile")}
                    className="w-full text-left py-2 hover:text-purple-200 flex items-center justify-between"
                  >
                    Telegram{" "}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === "telegram-mobile" ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === "telegram-mobile" && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {telegramGroups.map((item) => (
                        <li key={item}>
                          <a href="#" className="block py-1 text-purple-200">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#" className="block py-2 hover:text-purple-200">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 hover:text-purple-200">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
        <div className="relative  px-6 py-16 md:py-20 lg:py-32 sm:py-40">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8  text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Create your world with Idealige! .
              </h2>
              <p className="text-xl md:text-2xl opacity-90">
                Transform Your Dreams into Reality!
              </p>

              <div className="area">
                <ul className="circles">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <li key={i}></li>
                  ))}
                </ul>
              </div>

              <div className="relative max-w-lg">
                <input
                  type="text"
                  placeholder="e.g. projects"
                  className={`w-full px-6 py-4 border-none  rounded ${isDarkMode ? "bg-black  " : "bg-purple-700"} bg-opacity-50 placeholder-purple-200 text-white focus:outline-none focus:ring-2  ${isDarkMode ? "bg-gray-400 focus:bg-gray-400" : "focus:ring-purple-400"}`}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3   hover:bg-purple-400 transition">
                  <Search size={24} />
                </button>
              </div>
            </div>

            <div className="flex justify-center bg-transparent">
              <img
                src={isDarkMode ? black : data}
                className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto object-contain rounded-ee-full shadow-2xl bg-purple-500"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-28 md:h-36 lg:h-40"
          >
            <path
              fill={isDarkMode ? "#ffffff" : "#9333ea"}
              fillOpacity="0.4"
              d="M0,96L48,112C96,128,192,160,288,160C384,128,480,64,576,48C672,32,768,64,864,80C960,96,1056,96,1152,96C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path
              fill={isDarkMode ? "#ffffff" : "#9333ea"}
              fill-opacity="1"
              d="M0,96L48,128C96,160,192,224,288,234.7C384,245,480,203,576,154.7C672,107,768,53,864,74.7C960,96,1056,192,1152,202.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>

            <path
              fill="#f3f4f6"
              d="M0,256L120,245.3C240,235,480,213,720,202.7C960,192,1200,192,1320,192L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
