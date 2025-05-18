import { ArrowDown, CaretRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Origin = () => {
    return (
        <div className="bg-black text-white min-h-screen relative overflow-hidden">
            <motion.div
                className="absolute bottom-20 sm:bottom-96 left-6 md:left-40 max-w-xs md:max-w-sm z-10"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="flex items-center mb-2">
                    <p className="text-gray-400 uppercase text-xs font-montserrat">02. Origem</p>
                </div>

                <div className="relative">
                    <h1 className="text-3xl md:text-3xl font-bold mb-3">Vivendo em poças</h1>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="absolute top-12 -left-28 flex flex-col justify-center items-center gap-4 pointer-events-none opacity-80">
                        <div className="border-b border-white w-10"></div>
                        <div className="border-b border-white w-5"></div>
                        <div className="border-b border-white w-10"></div>
                    </motion.div>
                </div>

                <div className="border-b border-white"></div>
                <p className="text-sm md:text-sm text-gray-200 leading-relaxed mt-3">
                    O betta foi descoberto pela primeira vez no Sudeste Asiático. Fazendo seu lar em arrozais, valas de drenagem e nas planícies quentes da região, o betta se acostumou com inundações frequentes e secas devastadoras.
                </p>

                <Link to="/facts" className="flex items-center gap-2 mt-6 sm:hidden">
                    <p className="text-sm uppercase">Próximo</p>
                    <CaretRight className="w-5 h-5" />
                </Link>
            </motion.div>

            <motion.div
                className="absolute inset-0 flex justify-center items-center grayscale-25 pointer-events-none opacity-80 sm:opacity-100"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 1.2 }}
            >
                <img
                    src="/betta-blue.jpg"
                    alt="Peixe betta preto com nadadeiras fluidas"
                    className="h-full object-contain"
                />
            </motion.div>

            <motion.div
                className="absolute top-24 sm:top-1/4 right-6 md:right-72 max-w-xs text-right z-10"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h3 className="text-lg md:text-lg font-medium mb-1">Originário da Tailândia</h3>
                <p className="text-sm md:text-sm text-gray-200 mb-4 md:mb-12">
                    O peixe betta, também conhecido como peixe de briga siamês, é nativo da Tailândia, Vietnã e Laos.
                </p>
            </motion.div>

            <motion.div
                className="absolute top-1/2 right-0 sm:left-1/4 sm:translate-x-80 transform -translate-y-1/2 scale-75 sm:scale-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <img className="opacity-35" src="/thailand-map.png" />
                <motion.div
                    className="absolute top-1/2 left-1/2 translate-x-6 translate-y-16 text-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <p className="text-gray-300 uppercase font-montserrat text-xs hidden sm:flex">Tailândia</p>
                </motion.div>
            </motion.div>

            <Link to="/facts">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.5 }}
                    className="hidden md:flex absolute left-4 bottom-8 flex-col items-center cursor-pointer"
                >
                    <p className="text-sm transform -rotate-90 mb-8 uppercase">Ver mais</p>
                    <ArrowDown className="w-6 h-6 text-white" />
                </motion.div>
            </Link>
        </div>
    );
};

export default Origin;