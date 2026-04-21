import React, { useEffect, useMemo, useState } from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  const [darkMode,setDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const data = localStorage.getItem("theme");
      setDarkMode(data === "dark")
    };
    updateTheme();

    window.addEventListener("themeChange", updateTheme);

  return () => window.removeEventListener("themeChange", updateTheme);

  },[])

    const reviewPlatforms = useMemo(() => [
    { name: 'Google', icon: <FaGoogle className="text-red-500" />, color: 'text-red-500',url: 'https://www.google.com' },
    { name: 'Instagram', icon: <FaInstagram className="text-pink-500" />, color: 'text-pink-500', url: 'https://www.instagram.com' },
    { name: 'Facebook', icon: <FaFacebook className="text-blue-600" />, color: 'text-blue-600', url: 'https://www.facebook.com' },
    { name: 'Twitter', icon: <FaTwitter className="text-sky-400" />, color: 'text-sky-400', url: 'https://www.twitter.com' },
    { name: 'YouTube', icon: <FaYoutube className="text-red-600" />, color: 'text-red-600',url: 'https://www.youtube.com' },

  

  ], []);


    
  return (
    <div className='bg-gray-900'>
       <footer className={`max-w-7xl mx-auto px-4 bg-gray-600"  py-9 mb-8 sm:mb-10  sm:px-6 lg:px-8`}>
          <div className='flex flex-row gap-13 items-center justify-between'>

        <p className='text-xl tracking-wider text-white'> <spam className="gap-4">Mahesh Mareedu 
          |
        </spam>
 Hakuna Matata! | Spreading Love & Laughter! ❤️
</p>
<div>


          <div className="flex flex-col items-center">
            {/* <img
              src={TD}
              // src={profile.logo}
              alt="SocialKitt Logo"
              className="h-12 w-12 mb-4"
              loading="lazy"
            /> */}
            {/* <p className={`text-center mb-4 ${darkTheme ?"text-gray-300" : "text-gray-600"} `}>
              Connect with Me
            </p> */}
            <div className="flex space-x-6">
              {reviewPlatforms.map((link) => (
                <div className='px-2 py-2 bg-black border border-gray-600 rounded-md gap-6 '>
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  >
                  {link.icon}
                </a>
                    </div>
              ))}
            </div>
           
          </div>
      
</div>
        </div>
      </footer>
<footer className="footer sm:footer-horizontal footer-center bg-gray-800 text-white p-4">
  <aside>
    <p className='text-lg'>Copyright © {new Date().getFullYear()}  | All Rights Reserved | Mahesh Mareedu
</p>
  </aside>
</footer>


      
    </div>
  )
}
