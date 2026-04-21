import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaReact ,FaDocker,FaHtml5,FaJsSquare,FaCss3Alt,FaBootstrap} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";


export default function Skills() {
    const [darkTheme,setDarkTheme] = useState(false);

    useEffect(() => {
        const updateTheme = () => {         
            const theme = localStorage.getItem("theme");
            setDarkTheme(theme === "dark");
        };
        updateTheme();

        window.addEventListener("themeChange",updateTheme);
        return () => window.removeEventListener("themeChange",updateTheme)
    },[]);

      


    const Data = [
      {icon:<FaHtml5    className='text-amber-900 '/>,color:"text-black",name:"HTML"},
      {icon:<FaCss3Alt  className='text-blue-600'/>,color:"text-black",name:"CSS"},
      {icon:<FaJsSquare  className='text-yellow-600'/>,color:"text-black",name:"Java Script"},
      {icon:<FaReact className='text-blue-400 ' />,color:"text-black ",name:"React JS"},
      {icon:<FaBootstrap   className='text-purple-950'/>,color:"text-black",name:"Bootstrap CSS"},
      {icon:<RiTailwindCssFill  className='text-blue-400'/>,color:"text-black",name:"Tailwind CSS"},
      {icon:<FaDocker className='text-blue-600'/>,color:"text-black",name:"Docker"},
      {icon:<FaGithub className="text-black " />, color: 'text-black ',name:"Git"},
      {icon:<SiSocketdotio  className='text-green-700'/>,color:"text-black",name:"Socket.io"}
    ]

  return (
    <div className={`w-full ${darkTheme ? "bg-gray-900" : "bg-white"} py-10 sm:py-14 lg:py-16`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between mb-8 sm:mb-10'>
               <div className="flex items-center gap-3">
                <div className={`w-1 rounded-xl h-9 ${darkTheme ? "bg-gray-100" : "bg-purple-600"}`}/>
                    <h2 className={`text-lg sm:text-xl font-semibold ${darkTheme ? "text-white" : "text-gray-900"} uppercase tracking-wide`}>Skiils</h2>
                </div>             
          </div>
               
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7'>
                {Data.map((s,i) => (
                    <div className={`px-5 py-6 flex flex-col  items-center mb-6 sm:mb-10 rounded-xl ${darkTheme ? "bg-gray-600" :"bg-gray-300"} gap-12 transition hover:scale-95 duration-300 shadow-xl`}>
                        <div className={`text-6xl sm:text-7xl lg:text-8xl items-center flex  justify-center  ${darkTheme ? "text-gray-500" : s.color}`} >{s.icon}</div>
                        <p className={`text-lg sm:text-xl lg:text-2xl  font-bold ${darkTheme ? "text-white" :s.color}`}>{s.name}</p>
                    </div>
                ))}

               </div>
            </div>
    </div>



  )
}
