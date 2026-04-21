
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import bootstrap from "../assets/Bootstrap.jpg"
import socket from "../assets/Sockets.png";
import react from "../assets/Reacts.png";
import js from "../assets/JSS.png";
import Tailwind from "../assets/Tailwindcss.png";

export default function Slider() {
  const aliens = [
    {
      name: "SOCKETS",
      img: socket,
      description:
        "A methane-based alien with plant powers and the ability to ignite flames. " +
        "Swampfire is covered with a tough, bark-like skin that makes him resistant to physical damage. " +
        "He can regenerate his body by growing new limbs from plant matter, making him nearly unstoppable in battle. " +
        "Besides offense, Swampfire uses his vines and roots for defense, trapping enemies or shielding allies. " +
        "His flames can burn even underwater, giving him a terrifying edge in combat.",
      background: "linear-gradient(135deg, #0a0f2c, #0d3b1f)",
    },
    {
      name: "TAILWINDCSS",
      img: Tailwind,
      description:
        "A giant dinosaur-like alien with immense strength and durability. " +
        "Standing over 12 feet tall, Humungousaur’s sheer size makes him a powerhouse in any fight. " +
        "He can increase his body size up to nearly 60 feet, making his strength and impact even greater. " +
        "Despite his massive build, Humungousaur is surprisingly agile and can react quickly in combat. " +
        "His thick, armor-like skin provides natural protection against most forms of attack.",
      background: "linear-gradient(135deg, #35363f, #1d4951)",
    },
    {
      name: "HTML, CSS, JAVASCRIPT",
      img: js,
      description:
        "A moth-like alien with the power of intangibility and ice breath. " +
        "Big Chill can phase through solid objects, making him nearly impossible to trap or contain. " +
        "His wings allow him to fly silently through the air, striking fear into his enemies with ghost-like movements. " +
        "He can exhale freezing winds capable of encasing opponents in solid ice within seconds. " +
        "Despite his eerie and mysterious appearance, Big Chill is a calm and strategic fighter.",
      background: "linear-gradient(135deg, #1a0f0f, #4d1a1a)",
    },
    {
      name: "REACT JS",
      img: react,
      description:
        "A small silicon-based alien capable of creating sonic clones. " +
        "Echo Echo’s primary ability is to duplicate himself, overwhelming opponents with sheer numbers. " +
        "Each clone is fully functional, allowing him to coordinate attacks or distract enemies with ease. " +
        "He can unleash powerful sonic screams that disorient foes and shatter obstacles. " +
        "Despite his small size, Echo Echo’s versatility and teamwork abilities make him one of the most resourceful aliens.",
      background: "linear-gradient(135deg, #0a0f2c, #29a2e2)",
    },
    {
      name: "BOOTSTRAP",
      img: bootstrap,
      description:
        "A small silicon-based alien capable of creating sonic clones. " +
        "Echo Echo’s primary ability is to duplicate himself, overwhelming opponents with sheer numbers. " +
        "Each clone is fully functional, allowing him to coordinate attacks or distract enemies with ease. " +
        "He can unleash powerful sonic screams that disorient foes and shatter obstacles. " +
        "Despite his small size, Echo Echo’s versatility and teamwork abilities make him one of the most resourceful aliens.",
          background: "linear-gradient(135deg, #0a0f2c, #3c2091)",

    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");


  const handlePrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + aliens.length) % aliens.length);
  };

  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % aliens.length);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden font-['Orbitron',sans-serif] text-white"
      style={{ background: aliens[index].background }}
    >

      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
                   bg-black/40 hover:bg-emerald-400 hover:text-black 
                   text-white p-4 rounded-full transition-all duration-300"
      >
        <FaChevronLeft size={28} />
      </button>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 px-6 md:px-12 lg:px-20 py-12 w-full max-w-7xl">
        
        <div className="relative w-full max-w-[380px] md:max-w-[460px] lg:max-w-[420px] aspect-square mx-auto lg:mx-0 lg:ml-36 md:ml-80">
  {aliens.map((alien, i) => {
    const offset = (i - index + aliens.length) % aliens.length;

    let x = 0;
    let y = 0;
    let scale = 1;
    let opacity = 1;
    let blur = "blur(0px)";
    let zIndex = 1;

    if (offset === 0) {
      
      x = 0;
      y = 0;
      scale = 1.25;        
      opacity = 1;
      blur = "blur(0px)";
      zIndex = 3;
    } else if (offset === 1) {
      // Right side image
      x = 110;             
      y = -45;             
      scale = 0.78;        
      opacity = 0.5;
      blur = "blur(4px)";
      zIndex = 2;
    } else if (offset === aliens.length - 1) {
      // Left side image
      x = -130;            
      y = 75;              
      scale = 0.65;
      opacity = 0.45;
      blur = "blur(8px)";
      zIndex = 2;
    } else {
      // Hidden images
      opacity = 0;
      blur = "blur(12px)";
      zIndex = 0;
    }

    return (
      <img
        key={i}
        src={alien.img}
        alt={alien.name}
        className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl transition-all duration-700 ease-out object-contain mt-9 lg:mt-16"
        style={{
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
          opacity,
          filter: blur,
          zIndex,
        }}
      />
    );
  })}
</div>

        <div className="w-full lg:w-auto max-w-lg lg:max-w-md text-center lg:text-left">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ y: direction === "next" ? -60 : 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction === "next" ? 60 : -60, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
                {aliens[index].name}
              </h1>

              <div className="text-base md:text-lg text-gray-200 leading-relaxed space-y-4">
                {aliens[index].description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
                   bg-black/40 hover:bg-emerald-400 hover:text-black 
                   text-white p-4 rounded-full transition-all duration-300"
      >
        <FaChevronRight size={28} />
      </button>
    </div>
  );
}

