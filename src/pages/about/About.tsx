import { CaretLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className=" bg-gradient-to-b from-zinc-900 to-black h-screen w-full text-white flex flex-col items-center justify-center">
            <Link to={"/"} className="absolute top-4 left-4 p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/70 transition-all duration-300 cursor-pointer">
                <CaretLeft className="text-white" />
            </Link>
            <h1>Sobre</h1>
            <p>Página em desenvolvimento 🛠</p>
        </div>
    );
}

export default About;