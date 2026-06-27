import React from 'react'
import {  FaHome,
            FaProjectDiagram,
            FaCode,
            FaEnvelope,} from "react-icons/fa";

const Sidebar = () => {
     const navItems = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "Projects", icon: <FaProjectDiagram />, href: "/projects" },
    { name: "Stack", icon: <FaCode />, href: "/stack" },
    { name: "Contact", icon: <FaEnvelope />, href: "/contact" },
  ];
  return (

      <section className="w-full lg:w-48 flex flex-row lg:flex-col items-center lg:items-start text-white bg-[#181818] py-4 lg:py-10 px-4 shrink-0">
        <div className="hidden lg:block mb-8 ml-6 font-semibold">
          Sofiane Haouli
        </div>
        <hr className="hidden lg:block h-[1px] w-[150px] bg-gray-400 mb-6" />
        <div className="flex lg:flex-col gap-4 lg:gap-2 overflow-x-auto lg:overflow-visible w-full">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-[#545454] text-sm text-gray-300 hover:text-white transition whitespace-nowrap"
            >
          
              <span className="hidden lg:inline">{name}</span>
            </a>
          ))}
        </div>
      </section>
  )
}

export default Sidebar