import pkg from 'react-icons/fa';
import { useState } from "react";

const { FaLinkedin, FaGithub, FaBars, FaHome, FaClipboard, FaTimes } = pkg;

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="flex relative mx-8 mb-24 justify-between items-center py-12 pb-6 md:mx-16 lg:mx-32">
      {/* GitHub-Linkedin logo-link */}
      <div className="flex justify-start basis-30">
        <a href="https://www.linkedin.com/in/nadav7679/">
          <FaLinkedin size={50} />
        </a>

        <a href="https://github.com/nadav7679">
          <FaGithub size={50} />
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

        <FaBars size={30} />
      </div>

      {toggled && (
        <div
          className="fixed left-0 top-0 z-40 flex h-screen
            w-full flex-col items-center justify-center gap-24 backdrop-blur-xl text-2xl font-bold"
        >
          <div className="flex flex-col gap-12 text-3xl basis-30">
            <a href="/" className="flex"> <FaHome /> &nbsp; Home</a>
            <a href="/projects" className="flex"> <FaClipboard/> &nbsp; Projects</a>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => setToggled((prevToggled) => !prevToggled)}
          >
            <FaTimes />
          </div>
        </div>
      )}
    </nav>
  );
}
