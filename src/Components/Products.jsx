import React, { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    tag: "Tips",
    title:
      "Social Security Number for International Students in the United States",
    author: "Mahesh Mareedu",
    date: "November 04, 2023",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "Universities",
    title:
      "Exploring Part-Time Job Opportunities for International Students in the United States",
    author: "Mahesh Mareedu",
    date: "November 03, 2023",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "Tips",
    title: "How to Find Student Accommodation",
    author: "Mahesh Mareedu",
    date: "November 02, 2023",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
   {
    id: 4,
    tag: "Universities",
    title:
      "Exploring Part-Time Job Opportunities for International Students in the United States",
    author: "Mahesh Mareedu",
    date: "November 03, 2023",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    tag: "Tips",
    title: "How to Find Student Accommodation",
    author: "Mahesh Mareedu",
    date: "November 02, 2023",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    tag: "Tips",
    title:
      "Social Security Number for International Students in the United States",
    author: "Mahesh Mareedu",
    date: "November 04, 2023",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
   {
    id: 1,
    tag: "Tips",
    title:
      "Social Security Number for International Students in the United States",
    author: "Mahesh Mareedu",
    date: "November 04, 2023",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "Universities",
    title:
      "Exploring Part-Time Job Opportunities for International Students in the United States",
    author: "Mahesh Mareedu",
    date: "November 03, 2023",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "Tips",
    title: "How to Find Student Accommodation",
    author: "Mahesh Mareedu",
    date: "November 02, 2023",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
];
  
function PostCard({ post,darkTheme }) {

  
  return (
 
    <div className="group">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[240px] object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="relative -mt-14 px-4">
        <div className={`${darkTheme ? "bg-gray-900":"bg-white"} rounded-2xl shadow-md p-5 space-y-4`}>
          <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
            {post.tag}
          </span>
          <h3 className={`text-sm sm:text-base font-semibold ${darkTheme ? "text-white" : "text-gray-900"} leading-snug`}>
            {post.title}
          </h3>
          <div className="flex items-center gap-2 pt-1">
            <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-semibold">
              M
            </div>
            <span className="text-sm text-purple-600 font-medium">
              {post.author}
            </span>

            <span className="text-sm text-gray-400">{post.date}</span>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default function ProductsData() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [displayedProducts,setDisplayedProducts] = useState(6);
  const [loading, setLoading] = useState(false);

  const loadHandler=() => {
    setLoading(true)
    setTimeout(() => {
      setDisplayedProducts((pre) => pre + 6);
      setLoading(false);
      
    }, 1000);
  }


  useEffect(() => {
  const updateTheme = () => {
    const theme = localStorage.getItem("theme");
    setDarkTheme(theme === "dark");
  };

  updateTheme(); 

  window.addEventListener("themeChange", updateTheme);

  return () => window.removeEventListener("themeChange", updateTheme);
}, []);
  return (
    <div className={`w-full ${darkTheme ? "bg-black":"bg-gray-100"} py-10 sm:py-14 lg:py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
             <div className={`w-1 h-9 ${darkTheme ? "bg-gray-400":"bg-purple-600"} rounded-full`} />
            <h2 className={`text-lg sm:text-xl font-semibold ${darkTheme ? "bg-black text-white":"text-gray-900"} tracking-wide`}>
              PRODUCTS POSTS
            </h2>
          </div>

          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:gap-10 gap-6 lg:gap-8 ">
          {posts && posts.length >  0 ? (
            posts.slice(0,displayedProducts).map((post) => (
              <>
            <PostCard key={post.id} post={post} darkTheme={darkTheme}  />
            
              </>
            ))
           ) : (
          <div>No authors found</div>
        
          )}
        </div>

        {displayedProducts < posts.length && (

          <div className="flex justify-center">
          <button className="text-sm font-medium p-3 rounded-md cursor-pointer  bg-purple-600 text-white transition hover:scale-105 duration-100 hover:rotate-12"
          type="button" disabled={loading} onClick={loadHandler} >
           {loading ? (
"Loading..."  
            ) : (
              "Load More"
            )}
          </button>
        </div>
        )}
      </div>
    </div>
  );
}
