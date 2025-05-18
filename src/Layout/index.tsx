import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const Layout = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: "/", label: "00. Início" },
        { path: "/about", label: "01. Sobre" },
        { path: "/origin", label: "02. Origem" },
        { path: "/facts", label: "03. Fatos" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsNavOpen(false);
    }, [location]);

    return (
        <div className="bg-gradient-to-b from-zinc-900 to-black min-h-screen w-full text-white flex flex-col z-[70]">
            <nav className={`flex justify-between items-center p-6 fixed w-full z-40 transition-all duration-300 ${scrolled ? "bg-zinc-900/20 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
                <Link to={"/"}>
                    <div className="text-2xl font-bold tracking-wide text-white">
                        Betta<span className="text-zinc-400">.</span>
                    </div>
                </Link>
                <button 
                    className="p-2 rounded-full hover:bg-zinc-700/70 transition-all duration-300 cursor-pointer "
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    {isNavOpen ? <X size={24} /> : <List size={24} />}
                </button>
            </nav>

            <AnimatePresence>
                {isNavOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md z-30"
                    >
                        <motion.div 
                            className="h-full w-full flex flex-col justify-center items-end pr-16"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 50, opacity: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link 
                                        to={link.path}
                                        className={`block text-lg font-medium py-3 hover:text-white transition-colors ${location.pathname === link.path ? "text-white border-r-2 border-white pr-4" : "text-zinc-400 pr-6"}`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Outlet />
        </div>
    );
};

export default Layout;