import github from "/github.png";
import { useState } from "react";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="flex relative mx-8 mb-24 justify-between items-center py-12 pb-6 md:mx-16 lg:mx-32">
      {/* github logo-link */}
      {/* TODO - change link into a variable */}
      <div>
        <a href="https://github.com/nadav7679">
          <img src={github} alt="GitHub/nadav7679" width={70} />
        </a>
      </div>

      <div className="basis-3/12">

      {/* solid line */}
        <h1 className="text-lg font-bold text-center">Nadav</h1>
        <hr className="h-px mt-5 bg-gray-800 border-0"/>

      </div>

      {/* Hamburger */}
      <div
        onClick={() => setToggled((prevToggeld) => !prevToggeld)}
        className="space-y-2 cursor-pointer "
      >
        <span className="block h-0.5 w-8 bg-black"></span>
        <span className="block h-0.5 w-8 bg-black"></span>
        <span className="block h-0.5 w-8 bg-black"></span>
      </div>

      {toggled && (
        <div
          className="fixed left-0 top-0  z-40 flex h-screen
            w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold"
        >
          <div className="flex flex-col gap-12 text-lg">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
          </div>
        </div>
      )}
    </nav>
  );
}
