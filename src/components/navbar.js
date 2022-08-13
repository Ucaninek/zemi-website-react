import face from '../assets/logo.png'
import { useState } from 'react';

function Navbar() {
    const [isProjectLineShown, setIsProjectLineShown] = useState(false);
    const [isTechLineShown, setIsTechLineShown] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    var darkMode = (val) => {
        var toggle = document.querySelector('#dark-mode-toggle');
        setIsDarkMode(val);
        if (val) {
            document.documentElement.classList.add('dark');
            toggle.classList.remove('translate-x-0');
            toggle.classList.add('translate-x-5');
        } else {
            document.documentElement.classList.remove('dark');
            toggle.classList.remove('translate-x-5');
            toggle.classList.add('translate-x-0');
        }
    };

    return (
        <div className="w-full sticky top-0 h-24 p-6 z-40">
            <div className="w-full bg-amber-400 h-1 z-50"></div>
            <nav className="flex items-center justify-evenly gap-1 bg-transparent backdrop-blur-lg rounded-b-xl rounded-t-none h-12 w-full drop-shadow-lg pl-3 md:pl-8 pr-2">
                <span onClick={() => { window.scrollTo(0, 0) }} className="absolute left-4 md:left-16 cursor-pointer"><img src={face} className="w-14 md:w-16" alt="Logo" /></span>
                <div className="w-fit h-fit mb-2 relative">
                    <a href="#projects" className="custom-transition text-lg tracking-normal hover:tracking-wide text-slate-800 dark:text-gray-50 md:text-xl font-medium" onMouseEnter={() => setIsProjectLineShown(true)} onMouseLeave={() => setIsProjectLineShown(false)}>projects</a>
                    <span className={(isProjectLineShown ? 'w-full' : 'w-0') + ' h-1.5 bottom-0.5 left-0 z-10 absolute bg-amber-400 opacity-80 pointer-events-none custom-transition'}></span>
                </div>
                <div className="w-fit h-fit mb-2 relative">
                    <a href="#tech" className="custom-transition text-lg tracking-normal hover:tracking-wide text-slate-800 dark:text-gray-50 md:text-xl font-medium" onMouseEnter={() => setIsTechLineShown(true)} onMouseLeave={() => setIsTechLineShown(false)}>tech i use</a>
                    <span className={(isTechLineShown ? 'w-full' : 'w-0') + ' h-1.5 bottom-0.5 left-0 z-10 absolute bg-amber-400 opacity-80 pointer-events-none custom-transition'}></span>
                </div>
                <div className="absolute right-4 md:right-16">
                    <button type="button" onClick={() => { darkMode(!isDarkMode) }} className="bg-gray-200 dark:bg-gray-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-amber-400 dark:focus:ring-offset-slate-900" role="switch" aria-checked="false">
                        <span class="sr-only">Dark Mode</span>
                        {/*<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->*/}
                        <span aria-hidden="true" id="dark-mode-toggle" className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                    </button>
                </div>
            </nav>
        </div >
    );
}

export default Navbar;