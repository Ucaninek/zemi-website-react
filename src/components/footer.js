import { Mastodon, Discord } from "react-bootstrap-icons";

function Footer() {
    return (
        <footer className="m-5 mt-0 rounded-b-xl py-2 px-12 bg-white text-gray-500 font-black text-xl drop-shadow-lg border-t-4 border-amber-400 flex items-center justify-center gap-3">
            <span>zemi</span>
            <span>➡</span>
            <div className="flex items-center justify-between gap-2" >
                <a href="https://discord.gg/bk3S9qD8EB" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-200">
                    <Discord className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500" />
                </a>
                <a href="https://social.linux.pizza/@zemi" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-200">
                    <Mastodon className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-200" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;