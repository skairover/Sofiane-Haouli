import pfp from './assets/profile-picture.jpg'
import { FaGithub, FaHome, FaProjectDiagram, FaCode, FaEnvelope } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const App = () => {

  const navItems = [
  { name: 'Home', icon: <FaHome />, href: '/' },
  { name: 'Projects', icon: <FaProjectDiagram />, href: '/projects' },
  { name: 'Stack', icon: <FaCode />, href: '/stack' },
  { name: 'Contact', icon: <FaEnvelope />, href: '/contact' },
];

  return (
    <div className="flex w-screen h-screen relative overflow-hidden">
      <section className="flex flex-col items-center h-full w-48 text-white bg-[#181818] py-10">
        <p className='mb-30'>Sofiane Haouli</p>
        <hr style={{ height: '2px', borderWidth: 0, color: 'gray', backgroundColor: 'gray' }} />
        {navItems.map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            className="mb-3 w-32 h-10 text-gray-300 hover:text-white hover:bg-[#545454] transition delay-150 duration-300 ease-in-out flex gap-2 justify-start items-center px-2 rounded"
          >
            <span className="text-lg" style={{fontSize:'16px'}}>{icon}</span>
            <span>{name}</span>
          </a>
        ))}
      </section>

      {/* Profile Card */}
      <section className="flex flex-col items-left justify-center w-auto h-80 m-10 p-6 bg-[#181818] text-white rounded">
        <div className='flex'>
          <div className='px-3'>
            <h1 className="text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>Sofiane Haouli</h1>
            <h3 className="text-gray-300 text-2xl mb-3">Full-stack Web Developer</h3>
            <p className='flex items-center text-gray-300'><GrLocationPin className='text-gray-300'/>Algeria</p>
          </div>
          <div className='px-3'>
            <img src={pfp} alt="profile" className="w-32 h-auto object-cover rounded-xl" />
          </div>
        </div>
        <div className='flex mb-3'>
         <a href='https://github.com/skairover' 
            target="_blank"
            rel="noopener noreferrer"><FaGithub size='32' className='mx-3 hover:text-gray-300' />
        </a> 
        <a href='https://www.linkedin.com/in/sofiane-haouli-a6b659288/'
           target="_blank"
           rel="noopener noreferrer" >
            <FaLinkedin size='32' className='hover:text-gray-300' />
        </a>
        </div>
        <div className='flex'>
          <button className="bg-yellow-300 hover:bg-yellow-400 w-32 text-black mx-3 px-3 py-1 rounded">
            <b>let's chat</b>
          </button>
          <button className=' border border-yellow-300 hover:border-yellow-400 w-48 text-white mx-3 px-3 py-1 rounded'>
            Download CV
            </button>
        </div>
        
      </section>
      <div
        className="absolute inset-0 -z-10 bg-[length:20px_20px] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
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
