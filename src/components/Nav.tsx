import { FaHome, FaClipboard, FaTimes, FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const [toggled2, setToggled2] = useState(false);

  return (
    <nav className="flex relative mx-8 mb-12 justify-between items-center py-12 pb-6 md:mx-16 lg:mx-32">
      {/* GitHub-Linkedin logo-link */}
      <div className="flex justify-start basis-30">
        <a href="https://www.linkedin.com/in/nadav7679/">
          <FaLinkedin size={50} className="md:mb-0 h-[40px] w-[40px] md:h-[50px] md:w-[50px] ml-0 md:ml-10"/>
        </a>

        <a href="https://github.com/nadav7679">
          <FaGithub size={50} className="md:mb-0 h-[40px] w-[40px] md:h-[50px] md:w-[50px] ml-0 md:ml-10"/>
        </a>
      </div>

      <div className="basis-3/12">
        {/* solid line */}
        <h1 className="text-lg font-bold text-center">Nadav</h1>
        <hr className="h-px mt-5 bg-gray-800 border-0" />
      </div>

      {/* Hamburger */}
      <div
        onClick={() => setToggled((prevToggled) => !prevToggled)}
        className="flex space-y-2 cursor-pointer basis-30"
      >
        {/* <span className="block h-0.5 w-8 bg-black"></span>
        <span className="block h-0.5 w-8 bg-black"></span>
        <span className="block h-0.5 w-8 bg-black"></span> */}

        <FaBars size={30} className="md:mb-0 h-[40px] w-[80px] md:h-[50px] md:w-[100px] ml-0 md:ml-10"/>
      </div>

      {toggled && (
        <div
          className="fixed left-0 top-0 z-40 flex h-screen
            w-full flex-col items-center justify-center gap-24 backdrop-blur-xl text-2xl font-bold"
        >
          <div className="flex flex-col gap-12 text-3xl basis-30">
            <a href="/" className="flex"> <FaHome /> &nbsp; About</a>
            <a href="/projects/fluid-simulation" className="flex">Fluid Flow</a>
            <a href="/projects/actin-cortex" className="flex">Actin-Cortex</a>
            <a href="/projects/nickel-hydroxide" className="flex">Battery Phase Transition</a>
            <a href="/projects/feed-forward" className="flex">Feed-Forward Network</a>
            <a href="/projects/wr-chaos" className="flex">Chemical Reactions Chaos</a>
            <a href="/projects/argo" className="flex">Data Workflows</a>
            <a href="/projects/security_layer" className="flex">OICD Security</a>


            
          </div>

          <div
            className="cursor-pointer text-3xl"
            onClick={() => setToggled((prevToggled) => !prevToggled)}
          >
            <FaTimes />
          </div>
        </div>
      )}
    </nav>
  );
}
