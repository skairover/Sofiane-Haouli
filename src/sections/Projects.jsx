import React from "react";
import TrackMint from "../assets/TrackMint.png";
import PSMS from "../assets/PSMS.png";

const Projects = () => {
  const projects = [
    {
      imgsrc: TrackMint,
      link: "https://trackmint.vercel.app",
      name: "TrackMint",
      subtitle: "Expenses Tracker App",
      description:
        "TrackMint is a personal finance web application designed to make expense management simple and insightful. Built using MongoDB, Express.js, React, and Node.js, it allows users to securely create an account, log in, and manage their financial transactions. Users can categorize income and expenses, monitor their balance in real time, and gain a clear understanding of their spending habits through interactive charts and summaries.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      imgsrc: PSMS,
      link: "https://pharmaflow-psms.vercel.app",
      name: "Pharmaflow",
      subtitle: "Pharmaceutical Supply Management System",
      description:
        "PharmaFlow is a full-stack pharmacy management application designed to simplify the daily workflow of pharmacies. It enables staff to manage medicine inventory, monitor stock availability, process sales, organize prescriptions, and maintain supplier information from a centralized dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Dashboard"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 md:py-32 w-full"
    
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-bold tracking-[.2em] uppercase mb-4"
            style={{ color: "#FFE000" }}
          >
            My Work
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-bold"
            style={{ color: "#FFFFFF" }}
          >
            Projects
          </h2>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "#111111",
                border: "1px solid #2A2A2A",
                borderLeft: "3px solid #FFE000",
                borderRadius: "8px",
              }}
            >
              {/* Image — alternates side on even/odd */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={` overflow-hidden flex items-center px-4 ${index % 2 === 1 ? "md:order-2" : ""}`}
           
              >
                <img
                  src={project.imgsrc}
                  alt={`${project.name} screenshot`}
                  className="w-full h-full object-contain transition-opacity duration-200 hover:opacity-70"
                  style={{ minHeight: "220px", maxHeight: "300px" }}
                />
              </a>

              {/* Content */}
              <div
                className={`flex flex-col justify-center p-8 gap-4 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                {/* Number label */}
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#FFE000" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-2xl font-bold transition-colors duration-200"
                    style={{ color: "#FFFFFF" }}
                    onMouseEnter={(e) => (e.target.style.color = "#FFE000")}
                    onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                  >
                    {project.name}
                  </a>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "#A3A3A3" }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#D4D4D4" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1"
                      style={{
                        background: "#1E1E1E",
                        border: "1px solid #2A2A2A",
                        color: "#A3A3A3",
                        borderRadius: "4px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-1 transition-colors duration-200"
                  style={{ color: "#FFE000" }}
                  onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.target.style.color = "#FFE000")}
                >
                  View Live
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;