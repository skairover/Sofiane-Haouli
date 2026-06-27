import TrackMint from "./assets/TrackMint.png";
import PSMS from "./assets/PSMS.png";
import Sidebar from "./sections/Sidebar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";
import Background from "./sections/Background";
import "./app.css";

const App = () => {
  return (
    <div className="">
      <main className="flex flex-col">
        <Hero />
        {/* Divider */}
        <div className="w-full h-px" style={{ background: "#787878" }} />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Background />
    </div>
  );
};

export default App;
