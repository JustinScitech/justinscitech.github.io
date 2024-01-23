import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaShip, FaGamepad, FaHospital, FaUser, FaChartBar } from "react-icons/fa";
import { motion} from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      label: "SPS Commerce",
      date: "Jan 2024 - April 2024",
      title: "Software Engineer Intern (Backend Team)",
      link: "https://www.spscommerce.com/",
      icon: <FaChartBar />,
      description:
        "Engineered background processing services on the company analytics platform using ASP.NET Core to automate extraction and retrieval of retailer (Amazon, Sketchers, & Walmart) data from SQL Server DBs.",
    },
    {
      label: "BCS Automation",
      date: "May 2023 - Aug. 2023",
      title: "Software Developer Intern (Virtual Reality Team)",
      link: "https://ca.linkedin.com/company/bcs-automation-ltd",
      icon: <FaShip />,
      description:
        "Developed frontend interfaces (Lua, VR) and communication protocals via RESTful APIs (ASP.NET CORE, RESTful APIs, sockets) for Canada's new HoloShip platform aimed at making a digital twin for the OOSV.",
    },
    {
      label: "Legion Studios",
      date: "Nov 2020 - Jun 2022",
      title: "Software Developer (Game Systems)",
      link: "https://www.linkedin.com/company/legionstudios/",
      icon: <FaGamepad />,
      description:
        "Developed Lua games, coordinated agile scrum standups with 10+ developers, and led the team to gain 100K+ game plays and 1000+ asset sales.",
    },
    {
      label: "HealthSmart.ai",
      date: "Jun 2021 - Aug 2021",
      title: "Software Engineer Intern (Frontend Team)",
      link: "https://healthsmart.ai",
      icon: <FaHospital />,
      description:
        "Developed a secure medical record integration prototype, built 3D patient visualization pages using React & Three.js, designed wireframes, info cards, & icons.",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(experienceData[0]);
  const bounce = {
    whileHover: { scale: 1.025, transition: { type: "ease", stiffness: 300 } },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative lg:-top-20">
      <h1 className="text-center text-6xl font-bold text-white">
        Places I've
        <span> </span>
        <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          learned
        </span>
        <span> </span>
        and
        <> </>
        <span className="gradient bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          worked.
        </span>
      </h1>

      <div className="flex justify-center">
        <p className="pt-8 text-2xl text-white text-center place-content-center max-w-4xl">
          Acquiring Industry Skills at Impactful Businesses
        </p>
      </div>


        <div className="mt-10 gradient bg-gradient-to-r from-blue-700 to-blue-900 lg:w-1/2 sm:w-full shadow-lg rounded-lg p-4 flex overflow-hidden justify-center items-center">
          <nav className="flex-none w-1/3">
            <ul className="list-none">
              {experienceData.map((item) => (
                <motion.div
                  key={item.label}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  initial="hidden"
                  animate="visible"
                  align="center"
                  {...bounce}
                >
                  <button
                    className={`mb-2 px-2 py-1 cursor-pointer flex justify-start rounded hover:bg-black ${
                      item.title === selectedTab.title ? "bg-black" : "bg-transparent"
                    }`}
                    onClick={() => setSelectedTab(item)}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{item.icon}</span>
                      <span className = "break-all sm:break-normal">{item.label}</span>
                    </div>
                    {item === selectedTab ? (
                      <motion.div
                        className="underline mt-1 bg-black rounded-full"
                        layoutId="underline"
                      />
                    ) : null}
                  </button>
                </motion.div>
              ))}
            </ul>
          </nav>

          <div className="flex-grow mt-[-8]">

              <motion.div className=""
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  opacity: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
                  y: { type: "spring", stiffness: 200, damping: 20 },
                }}
              >
                <div className="flex flex-col justify-start bg-black-200 p-2 rounded">
                  {selectedTab ? (
                    <div className="h-12 w-12 text-white">
                      {selectedTab.icon}
                    </div>
                  ) : (
                    <div className="h-12 w-12 text-white">😋</div>
                  )}
                  <h2 className="font-bold">
                    {selectedTab
                      ? selectedTab.title
                      : "Some of my past experiences"}
                  </h2>
                  <span>{selectedTab ? selectedTab.date : ""}</span>
                  <p className="font-extralight">
                    {selectedTab ? selectedTab.description : ""}
                  </p>
                </div>
              </motion.div>

          </div>
        </div>
      </div>
  );
};

export default Experience;
