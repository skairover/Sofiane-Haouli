import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

import portrait from "../assets/portrait.png";
import cv from "../assets/cv.pdf";

const Hero = () => {
  return (
    <div
      className="relative flex h-screen w-full px-6 md:px-12 overflow-hidden"
   
    >
      {/* Subtle yellow glow behind portrait */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(255,224,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Social links — top right */}
      <header className="fixed z-50 top-6 right-8 flex gap-4">
        <a
          href="https://github.com/skairover"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-[#FFE000] transition-colors duration-200"

        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/sofiane-haouli-a6b659288/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FFE000] transition-colors duration-200"
        >
          <FaLinkedin size={22} />
        </a>
      </header>

      {/* Left — text content */}
      <div className="flex flex-col justify-center h-full w-full gap-6 z-10">

        {/* Eyebrow */}
        <p
          className="text-xs font-bold tracking-[.2em] uppercase"
          style={{ color: "#FFE000" }}
        >
          Full-Stack Web Developer
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-8xl font-bold leading-none"
          style={{ fontFamily: "tanker", color: "#FFFFFF" }}
        >
          SOFIANE
          <br />
          HAOULI
        </h1>

        {/* Meta info */}
        <div className="flex flex-col gap-2">
          <p
            className="flex items-center gap-2 text-sm"
            style={{ color: "#A3A3A3" }}
          >
            <FaLocationCrosshairs size={13} color="#FFE000" />
            Algeria, Blida
          </p>
          <p
            className="flex items-center gap-2 text-sm"
            style={{ color: "#A3A3A3" }}
          >
            <MdEmail size={14} color="#FFE000" />
            sofianehot01@gmail.com
          </p>
          <p
            className="flex items-center gap-2 text-sm"
            style={{ color: "#A3A3A3" }}
          >
            <MdPhone size={14} color="#FFE000" />
            +213780333925
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-12 h-px"
          style={{ background: "#2A2A2A" }}
        />

        {/* Buttons */}
        <div className="flex flex-row gap-3">
          {/* Hire Me */}
          <button
            className="relative group overflow-hidden font-bold text-sm px-6 py-2.5 transition-all duration-200"
            style={{
              background: "#FFE000",
              color: "#0A0A0A",
              borderRadius: "6px",
              minWidth: "7.5rem",
            }}
          >
            <span className="block h-full overflow-hidden relative">
              <span className="block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                Hire me
              </span>
              <span
                className="absolute top-0 left-0 w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                aria-hidden="true"
              >
                Hire me
              </span>
            </span>
          </button>

          {/* Download CV */}
          <a
            href={cv}
            download
            className="relative group overflow-hidden font-bold text-sm px-6 py-2.5 transition-all duration-200"
            style={{
              background: "transparent",
              border: "1px solid #FFE000",
              color: "#FFE000",
              borderRadius: "6px",
              minWidth: "7.5rem",
            }}
          >
            <span className="block h-full overflow-hidden relative">
              <span className="block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                Download CV
              </span>
              <span
                className="absolute top-0 left-0 w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
                aria-hidden="true"
              >
                Download CV
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Right — portrait */}
      <div className=" hidden md:flex justify-center items-end h-full w-full z-10">
        <img
          src={portrait}
          alt="Sofiane Haouli"
          className="object-cover object-top w-20 md:w-auto md:max-w-sm h-auto"
          style={{
            borderRadius: "8px 8px 0 0",
            maxHeight: "85vh",
            filter: "grayscale(20%)",
          }}
          draggable="false"
        />
        
      </div>
      
    </div>
  );
};

export default Hero;