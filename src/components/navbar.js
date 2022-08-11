import face from '../assets/logo.png'

function Navbar() {
    return (
        <div className="w-full sticky top-0 h-24 p-6 z-50">
            <nav className="flex items-center justify-between gap-1 mb-16 bg-transparent backdrop-blur-lg rounded-xl h-12 w-full shadow-lg pl-3 md:pl-8 pr-2">
                <a href="#top"><img src={face} className="w-16" alt="Logo" /></a>
                <div>
                    <a href="#top" className="p-1 rounded-md border-2 font-[consolas]  border-amber-400">./home</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;