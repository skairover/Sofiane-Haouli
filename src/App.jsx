import React, { useState, useRef } from 'react'; 
import { FaGithub, FaHome, FaProjectDiagram, FaCode, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";

const App = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    
    setIsDragging(true);
    const rect = cardRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardWidth = cardRef.current?.offsetWidth || 400;
    const cardHeight = cardRef.current?.offsetHeight || 300;
    
    const newX = e.clientX - containerRect.left - dragStart.x;
    const newY = e.clientY - containerRect.top - dragStart.y;
    
    // Boundary checking within container
    const maxX = containerRect.width - cardWidth;
    const maxY = containerRect.height - cardHeight;
    
    setDragPos({
      x: Math.max(0, Math.min(maxX, newX)),
      y: Math.max(0, Math.min(maxY, newY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const navItems = [
    { name: 'Home', icon: <FaHome />, href: '/' },
    { name: 'Projects', icon: <FaProjectDiagram />, href: '/projects' },
    { name: 'Stack', icon: <FaCode />, href: '/stack' },
    { name: 'Contact', icon: <FaEnvelope />, href: '/contact' },
  ];

  // Mock profile picture using a placeholder
  const TrackMint = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop";
  const pfp = "https://avatar.iran.liara.run/public/37"
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-black relative">
      
      {/* Sidebar */}
      <section className="w-full lg:w-48 flex flex-row lg:flex-col items-center lg:items-start text-white bg-[#181818] py-4 lg:py-10 px-4 shrink-0">
        <div className="hidden lg:block mb-8 ml-6 font-semibold">Sofiane Haouli</div>
        <hr className="hidden lg:block h-[1px] w-[150px] bg-gray-400 mb-6" />
        <div className="flex lg:flex-col gap-4 lg:gap-2 overflow-x-auto lg:overflow-visible w-full">
          {navItems.map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-[#545454] text-sm text-gray-300 hover:text-white transition whitespace-nowrap"
            >
              <span className="text-lg">{icon}</span>
              <span className="hidden lg:inline">{name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-6 overflow-hidden relative">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 h-full max-w-full">
          
          {/* Left Column - Profile and Projects */}
          <div className="xl:col-span-3 flex flex-col gap-4 min-w-0">
            
            {/* Profile Card Container */}
            <div 
              ref={containerRef}
              className="relative min-h-[320px] w-[60%] bg-gray-900/20 rounded-lg border border-gray-700/20 overflow-hidden"
            >
              <div
                ref={cardRef}
                onMouseDown={handleMouseDown}
                className={`absolute flex flex-col justify-between bg-[#181818] h-full text-white rounded-lg p-6 shadow-lg w-full  ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none transition-shadow hover:shadow-xl`}
                style={{
                  transform: `translate(${dragPos.x}px, ${dragPos.y}px)`,
                  zIndex: isDragging ? 50 : 10
                }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex-1 text-center sm:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                      Sofiane Haouli
                    </h1>
                    <h3 className="text-gray-300 text-lg md:text-xl mb-3">
                      Full-stack Web Developer
                    </h3>
                    <p className="flex items-center justify-center sm:justify-start text-gray-300">
                      <GrLocationPin className="mr-1" />
                      Algeria
                    </p>
                  </div>
                  <img 
                    src={pfp} 
                    alt="profile" 
                    className="w-20  md:w-24 md:h-24 object-cover rounded-xl shrink-0 pointer-events-none" 
                    draggable="false"
                  />
                </div>

                <div className="flex justify-center sm:justify-start mt-4 gap-4">
                  <a 
                    href="https://github.com/skairover" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/sofiane-haouli-a6b659288/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row mt-4 gap-3">
                  <button 
                    className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded font-bold transition-colors text-sm"
                  >
                    Let's Chat
                  </button>
                  <button 
                    className="border border-yellow-300 hover:border-yellow-400 hover:bg-yellow-300 hover:text-black text-white px-4 py-2 rounded transition-all text-sm"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
            
            {/* Projects Section */}
            <div className="bg-[#181818] text-white rounded-lg p-6 flex-1">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-1">Projects</h2>
              <hr className="h-[1px] w-full bg-gray-400 mb-6" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <article className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-4 hover:shadow-green-300 hover:shadow-[0_0_10px] transition-shadow duration-300">
                  <img 
                    className="rounded-lg mb-4 w-full h-32 object-cover" 
                    src={TrackMint} 
                    alt="TrackMint Project" 
                  />
                  <a target='_blanck' href='https://trackmint.vercel.app' className="text-lg font-semibold mb-1 hover:underline">TrackMint</a>
                  <p className="text-gray-300 text-sm">Expense Tracker App</p>
                </article>

                {/* Additional project cards for demo */}
                <article className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-4 hover:shadow-blue-300 hover:shadow-[0_0_10px] transition-shadow duration-300">
                  <div className="rounded-lg mb-4 w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">Coming Soon</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Project Two</h3>
                  <p className="text-gray-300 text-sm">Web Application</p>
                </article>

                <article className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-4 hover:shadow-purple-300 hover:shadow-[0_0_10px] transition-shadow duration-300">
                  <div className="rounded-lg mb-4 w-full h-32 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <span className="text-white font-bold">Coming Soon</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Project Three</h3>
                  <p className="text-gray-300 text-sm">Mobile App</p>
                </article>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Content */}
          <div className="xl:col-span-1 min-h-[300px] xl:min-h-full">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-lg font-semibold mb-4">Skills & Tech Stack</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['React', 'Node.js', 'JavaScript', 'Python', 'CSS', 'HTML'].map((skill) => (
                    <span key={skill} className="bg-white/20 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Background Grids */}
      <div
        className="fixed inset-0 -z-10 bg-[length:20px_20px] pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: 'black',
          maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
        }}
      />
    </div>
  );
};

export default App;