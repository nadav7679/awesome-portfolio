import github from '/github.png'
import { useState } from 'react'

export default function Nav() {
    const [toggled, setToggled] = useState(false)
    return (
        <nav className="relative mx-8 mb-24 flex justify-between items-center py-12 pb-6 md:mx-16 lg:mx-32">
            {/* solid line */}
            <svg
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                width="250"
                height={4}
                viewBox='0 0 250 4'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
        
            >
                <path
                    d="M2 2L428 2"
                    stroke="#282828"
                    strokeWidth={2}
                    strokeLinecap="round"
                />
            </svg>
            {/* github logo-link */}
            {/* TODO - change link into a variable */}
            <div>
                <a href="https://github.com/nadav7679"> 
                    <img
                        src={github}
                        alt="GitHub/nadav7679"
                        width={70}
                    />
                </a>
            </div>
            <h1 className="text-lg font-bold" >Nadav</h1>
            {/* Hamburger */}
            <div onClick={() => setToggled((prevToggeld) => !prevToggeld)}
             className='space-y-2 cursor-pointer xl:hidde'>
                <span className="block h-0.5 w-8 bg-black"></span>
                <span className="block h-0.5 w-8 bg-black"></span>
                <span className="block h-0.5 w-8 bg-black"></span>
            </div>

            {toggled&& 
            <div className="fixed left-0 top-0  z-40 flex h-screen
            w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold">
                <div className='flex flex-col gap-12 text-lg'>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                </div>
            </div>}
        </nav>
    )
}

