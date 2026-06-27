import React from 'react'
import {
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaCss3Alt,
  FaHtml5
} from "react-icons/fa"

const Stack = () => {
  return (
 
<div className="xl:col-span-1 min-h-[300px] xl:min-h-full">
  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-6 h-full flex items-center justify-center">
    <div className="text-center text-black">
      <h3 className="text-lg font-semibold mb-4">Skills & Tech Stack</h3>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {[
          { name: 'React', icon: <FaReact /> },
          { name: 'NodeJs', icon: <FaNodeJs /> },
          { name: 'JavaScript', icon: <SiJavascript /> },
          { name: 'Python', icon: <FaPython /> },
          { name: 'CSS', icon: <FaCss3Alt /> },
          { name: 'HTML', icon: <FaHtml5 /> },
          { name: 'NextJs', icon: <SiNextdotjs />},
          { name: 'MongoDB', icon: <SiMongodb />},
          { name: 'Tailwind', icon: <SiTailwindcss />},
        ].map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-white/60 p-2 rounded transform transition-all duration-300 hover:scale-110 hover:text-yellow-700 overflow-hidden"
          >
            <div className="text-2xl">{skill.icon}</div>

            <div className="relative block h-6 overflow-hidden w-fit text-sm font-semibold">
              
                <div className="h-6 block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">{skill.name}</div>
                <div className="h-6 absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0 " aria-hidden='true'>{skill.name}</div> {/* same word for animation */}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


  )
}

export default Stack