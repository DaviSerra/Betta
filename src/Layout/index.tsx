import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { List } from "@phosphor-icons/react";

const Layout = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-gradient-to-b from-zinc-900 to-black min-h-screen w-full text-white flex flex-col">
            <nav className={`flex justify-between items-center p-6 fixed w-full z-20 transition-all duration-300 ${scrolled ? "bg-zinc-900/20 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
                <Link to={"/"} >
                    <div className="text-2xl font-bold tracking-wide text-white">
                        Betta<span className="text-zinc-400">.</span>
                    </div>
                </Link>
                <button className="p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/70 transition-all duration-300 cursor-pointer">
                    <List size={24} />
                </button>
            </nav>

            <Outlet />
        </div>
    );
};

export default Layout;