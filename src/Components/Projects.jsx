import React, { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    tag: "Pan Rentals Website ",
    // & Application",
    title:
      "The Pan Rentals application and website, developed by me, enable seamless equipment leasing with intuitive booking and vendor management. Built with React JS, Redux, and REST APIs for robust functionality, the project ensured a responsive user experience. Development was streamlined using GitHub, JIRA, and Visual Studio for efficient collaboration and deployment.",
    author: "Mahesh Mareedu",
    date: "November 04, 2023",
    Tools:"React js,CSS,SCSS,Bootstrap,Docker",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "DailyBytes",
    title:
      "Designed and implemented dual interfaces for users and admins with features such as scheduled content publishing, comment/reply systems, login activity graphs, and multimedia content handling.",
    author: "Mahesh Mareedu",
    Tools:"React js,CSS,Bootstrap,Docker",
    date: "December 09, 2024",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "Tiranga BookStore",
    Tools:"React js,Bootstrap,Docker",
    title:
      " Built a complete book management system including author creation, category management, and image uploads. Delivered a fully responsive and intuitive admin experience using React.js and custom CSS.",
    author: "Mahesh Mareedu",
    date: "september 02, 2025",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false);


  useEffect(() => {
  const updateTheme = () => {
    const theme = localStorage.getItem("theme");
    setDarkTheme(theme === "dark");
  };

  updateTheme(); 

  window.addEventListener("themeChange", updateTheme);

  return () => window.removeEventListener("themeChange", updateTheme);
}, []);



  const DataHandler = (m) => {
    setOpen(true);
    setData(m);
  };
  return (
    <div className={`w-full ${darkTheme ? "bg-gray-950":"bg-gray-100"} py-10 sm:py-14 lg:py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <div className={`w-1 rounded-xl h-9 ${darkTheme ? "bg-gray-400" :"bg-purple-600"}`} />
          <h2 className={`text-lg sm:text-xl font-semibold ${darkTheme ? "text-white":"text-gray-900"} uppercase tracking-wide`}>
              Projects{" "}
            </h2>
          </div>

          <div className="hover:border-b-4 hover:border-purple-600 hover:pb-2 ">
            <button className={`text-sm font-medium ${darkTheme ? "text-white":"text-gray-700"} hover:text-purple-600 transition cursor-progress`}>
              Show more
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((items,i) => (
            <div className="group" key={i}>
              <div className="relative rounded-t-xl overflow-hidden ">
                <img
                  src={items.image}
                  alt={items.title}
                  className="w-full h-[220px] sm:h-[260px]lg:h-[240px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="relative ">
                <div className={`flex flex-row ${darkTheme ? "bg-gray-600":"bg-white"} justify-between  shadow-md p-5 space-y-5`}>
                  <h3 className={`text-md sm:text-md font-semibold ${darkTheme ? "text-white":"text-purple-800"} leading-snug uppercase`}>
                    {items.tag}
                  </h3>
                  <h3
                    className={`text-sm sm:text-base font-semibold ${darkTheme ? "text-white  hover:text-purple-500" : "text-black"}  cursor-pointer`}
                    onClick={() => DataHandler(items)}
                  >
                    ReadMore
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
              <div className={`${darkTheme ? "bg-gray-900":"bg-white"} rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-fadeIn`}>
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 text-red-600  text-2xl font-semibold"
                >
                  ✕
                </button>

                <img
                  src={data?.image}
                  alt={data?.title}
                  className="w-full h-60 object-cover"
                />
                

                <div className="p-5 space-y-3">
                  <h3 className="text-purple-600 font-semibold uppercase">
                    {data?.tag}
                  </h3>
                                    <p className={`uppercase ${darkTheme ? "text-white":"text-black"}`}><strong>Tools:</strong>{data?.Tools}</p>


                  <h2 className={`text-lg  ${darkTheme ? "text-white":"text-gray-900"}`}>
                  <strong>Descrption: </strong> {data?.title}
                  </h2>

                  <p className="text-sm text-gray-500">
                    By {data?.author} • {data?.date}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
