import React, { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    tag: "Pan Rentals Website & Application",
    title:
      "The Pan Rentals application and website, developed by me, enable seamless equipment leasing with intuitive booking and vendor management. Built with React JS, Redux, and REST APIs for robust functionality, the project ensured a responsive user experience. Development was streamlined using GitHub, JIRA, and Visual Studio for efficient collaboration and deployment.",
    author: "Mahesh Mareedu",
    date: "Aug 04, 2023",
     to: "December 02, 2023",
    Tools: "React js,CSS,SCSS,Bootstrap,Docker",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "DailyBytes",
    title:
      "Designed and implemented dual interfaces for users and admins with features such as scheduled content publishing, comment/reply systems, login activity graphs, and multimedia content handling.",
    author: "Mahesh Mareedu",
    Tools: "React js,CSS,Bootstrap,Docker",
    date: "jan 09, 2024",
    to: "October 02, 2024",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "Tiranga BookStore",
    Tools: "React js,Bootstrap,Docker",
    title:      "Created an intuitive platform for book management, including adding authors, updating booklistings, and categorizing books.Implemented image upload functionality for book covers and author profiles, ensuring aresponsive UI with React.js and CSS",

    author: "Mahesh Mareedu",
    date: "september 02, 2024",
     to: "March 02, 2025",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
   {
    id: 4,
    tag: "Social_Kitt",
    Tools: "React js,Tailwind CSS,Docker",
    title:"SocialKitt is a smart business engagement platform that enables businesses to collect customer reviews and social media follows using a single QR code — no app or login required for end users.Developed SocialKitt, a mobile-friendly business engagement platform featuring OTP-based passwordless login via Firebase/Twilio. Businesses can create profiles with logos, social media links, and Google Review integration. The platform generates a unique QR code that directs users to a landing page — no login required — where customers can easily leave reviews or follow social profiles. A dedicated dashboard allows businesses to manage their profile, track QR code scans, and monitor engagement.",
    date: "April 12, 2025",
     to: "October 30, 2025",
    image:
      "https://www.socialpilot.co/wp-content/uploads/2024/09/Add-a-clear-Call-to-Action-724x1024.webp",
  },
  {
    id: 5,
    tag: "Nams Bharathvas Chat Application",
    Tools: "React js,Tailwind CSS,Docker",
    title:
      " Worked as a Frontend Developer on a real-time chat application that enables users to connect, send friend requests, and communicate instantly. The platform supports live messaging, online user status, and session-based chat termination using WebSockets. Developed a responsive and dynamic user interface using React.js and implemented real-time communication features with Socket.IO. Built core chat functionalities including one-to-one messaging, live message updates without page refresh, and online/offline user status tracking. Designed and integrated a complete friend request system with send, accept, and reject features, and handled user session management including logout and chat termination. Efficiently managed UI state and real-time updates, collaborated with backend APIs for seamless data flow, and ensured cross-browser compatibility along with performance optimization",
    author: "Mahesh Mareedu",
    date: "November 02, 2025",
     to: "March 21, 2026",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJSmMYRDIb0w_RfZme-Lbz5J3jboVopXCa6tmgpZqY0TelbttfQtqAY0&s=10",
  },
 
  {
    id: 6,
    tag: "Karate Tournment Management System",
    Tools: "React js,Tailwind CSS,Docker,Node js,Express js,MongoDB",
    title:
      " This karate tournament is designed to provide athletes of different ages, belt levels, genders, and weight categories with a fair and competitive platform to showcase their skills in Kata and Kumite. The event will be conducted under defined competition rules, scoring standards, and safety guidelines to ensure a professional and secure experience for all participants.",
    date: "April 06, 2026",
     to: "",
    image:
      "https://thumbs.dreamstime.com/b/two-professional-female-karate-fighters-fighting-grand-arena-47731893.jpg",
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
    <div
      className={`w-full ${darkTheme ? "bg-gray-950" : "bg-gray-100"} py-10 sm:py-14 lg:py-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <div
              className={`w-1 rounded-xl h-9 ${darkTheme ? "bg-gray-400" : "bg-purple-600"}`}
            />
            <h2
              className={`text-lg sm:text-xl font-semibold ${darkTheme ? "text-white" : "text-gray-900"} uppercase tracking-wide`}
            >
              Projects{" "}
            </h2>
          </div>

          <div className="hover:border-b-4 hover:border-purple-600 hover:pb-2 ">
            <button
              className={`text-sm font-medium ${darkTheme ? "text-white" : "text-gray-700"} hover:text-purple-600 transition cursor-progress`}
            >
              Show more
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((items, i) => (
            <div className="group" key={i}>
              <div className="relative rounded-t-xl overflow-hidden ">
                <img
                  src={items.image}
                  alt={items.title}
                  className="w-full h-[220px] sm:h-[260px]lg:h-[240px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="relative ">
                <div
                  className={`flex flex-row ${darkTheme ? "bg-gray-600" : "bg-white"} justify-between  shadow-md p-5 space-y-5`}
                >
                  <h3
                    className={`text-md sm:text-md font-semibold ${darkTheme ? "text-white" : "text-purple-800"} leading-snug uppercase`}
                  >
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
              <div
                className={`${darkTheme ? "bg-gray-900" : "bg-white"} rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-fadeIn`}
              >
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
                  <p
                    className={`uppercase ${darkTheme ? "text-white" : "text-black"}`}
                  >
                    <strong>Tools:</strong>
                    {data?.Tools}
                  </p>

                  <h2
                    className={`text-lg  ${darkTheme ? "text-white" : "text-gray-900"}`}
                  >
                    <strong>Descrption: </strong> {data?.title}
                  </h2>

                  <p className="text-sm text-gray-500">
                    By {data?.author} • {data?.date} to {data?.date}
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
