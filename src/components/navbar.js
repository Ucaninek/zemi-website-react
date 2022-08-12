import face from '../assets/logo.png'
import { useState } from 'react';

function Navbar() {
    const [isProjectLineShown, setIsProjectLineShown] = useState(false);
    const [isTechLineShown, setIsTechLineShown] = useState(false);


    return (
        <div className="w-full sticky top-0 h-24 p-6 z-40">
            <div className="w-full bg-amber-400 h-1 z-50"></div>
            <nav className="flex items-center justify-evenly gap-1 bg-transparent backdrop-blur-lg rounded-xl rounded-t-none h-12 w-full shadow-lg pl-3 md:pl-8 pr-2">
                <span onClick={() => { window.scrollTo(0, 0) }} className="absolute left-4 md:left-16"><img src={face} className="w-14 md:w-16" alt="Logo" /></span>
                <div className="w-fit h-fit mb-2 relative">
                    <a href="#projects" className="text-lg tracking-normal hover:tracking-wide text-slate-800 md:text-xl font-medium" onMouseEnter={() => setIsProjectLineShown(true)} onMouseLeave={() => setIsProjectLineShown(false)}>projects</a>
                    <span className={(isProjectLineShown ? 'w-full' : 'w-0') + ' h-1.5 bottom-0.5 left-0 z-10 absolute bg-amber-400 opacity-80 pointer-events-none'}></span>
                </div>
                <div className="w-fit h-fit mb-2 relative">
                    <a href="#tech" className="text-lg tracking-normal hover:tracking-wide text-slate-800 md:text-xl font-medium" onMouseEnter={() => setIsTechLineShown(true)} onMouseLeave={() => setIsTechLineShown(false)}>tech i use</a>
                    <span className={(isTechLineShown ? 'w-full' : 'w-0') + ' h-1.5 bottom-0.5 left-0 z-10 absolute bg-amber-400 opacity-80 pointer-events-none'}></span>
                </div>
            </nav>
        </div >
    );
}

export default Navbar;