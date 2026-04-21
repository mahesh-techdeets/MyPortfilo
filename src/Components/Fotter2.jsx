import React, { useEffect, useMemo, useState } from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa6';

export default function Fotter2() {
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
    
          
    
    
          const reviewPlatforms = useMemo(() => [
            { name: 'Google', icon: <FaGoogle className="text-red-500" />, color: 'text-red-500',url: 'https://www.google.com' },
            { name: 'Instagram', icon: <FaInstagram className="text-pink-500" />, color: 'text-pink-500', url: 'https://www.instagram.com' },
            { name: 'Facebook', icon: <FaFacebook className="text-blue-600" />, color: 'text-blue-600', url: 'https://www.facebook.com' },
            { name: 'Twitter', icon: <FaTwitter className="text-sky-400" />, color: 'text-sky-400', url: 'https://www.twitter.com' },
            { name: 'YouTube', icon: <FaYoutube className="text-red-600" />, color: 'text-red-600',url: 'https://www.youtube.com' },
        
          
        
          ], []);
    
  return (
    <div className={`${darkTheme ? "bg-gray-800" :"bg-purple-900"}`}>

    
     <footer className={`max-w-7xl mx-auto px-4 bg-gray-600"  py-9  sm:px-6 lg:px-8`}>
          <div className='flex flex-row gap-13 items-center justify-between'>

        <p className='text-2xl tracking-wider text-center font-bold text-white'> <spam className="gap-4 text-lg font-bold">Get Notified About the Latest and Exciting Information
        </spam><br />
Follow to Our Newsletter!
</p>
<div>


          <div className="flex flex-col items-center bg-transparent">
           
            <div className="flex space-x-6">
             <div className="join bg-transparent ">
  <div >
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.9"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="mail@site.com" required  />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn bg-purple-800 text-white  border-none">Submit</button>
</div>
            </div>
           
          </div>
      
</div>
        </div>
      </footer>
    </div>
  )
}
