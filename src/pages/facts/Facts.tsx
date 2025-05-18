import { motion } from "framer-motion";

const Facts = () => {
    return (
        <div className="bg-black text-white min-h-screen relative overflow-hidden flex items-center py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-20">

                    <div className="relative flex justify-center items-center">
                        <motion.div
                            className="flex justify-center grayscale-25 pointer-events-none"
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            <img
                                src="/betta-albine.jpg"
                                alt="Peixe betta branco com nadadeiras fluidas"
                                className="object-contain h-full w-full"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            className="absolute top-0 bottom-0 -left-32 flex flex-col justify-center items-center gap-4 pointer-events-none opacity-80">
                            <div className="border-b border-white w-10"></div>
                            <div className="border-b border-white w-5"></div>
                            <div className="border-b border-white w-10"></div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex flex-col justify-center"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative mb-10">
                            <div>
                                <p className="text-gray-400 uppercase text-xs font-montserrat mb-3">03. FATOS</p>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Criados para lutar por séculos</h2>

                                <p className="text-gray-300 mb-8 md:max-w-sm mt-3">
                                    As pessoas perceberam como os peixes selvagens eram altamente territoriais e atacavam outros peixes que invadiam seu espaço, e começaram a organizar lutas entre os peixes como entretenimento.
                                </p>
                            </div>

                            <motion.div
                                className="flex flex-row md:flex-col gap-6 md:gap-16 mt-8 md:mt-0 md:absolute md:top-0 md:right-0"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-2 rounded-full p-0.5 bg-white">
                                        <div className="bg-black w-full h-full rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">6,5</span>
                                        </div>
                                    </div>
                                    <p className="uppercase text-xs tracking-wide">Comprimento em CM</p>
                                </div>

                                <div className="h-px bg-white w-12 mx-auto hidden sm:flex"></div>

                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-2 rounded-full p-0.5 bg-white">
                                        <div className="bg-black w-full h-full rounded-full flex items-center justify-center gap-1">
                                            <span className="text-xl font-bold text-white">2</span>
                                            <p className="font-bold text-xs uppercase">anos</p>
                                        </div>
                                    </div>
                                    <p className="uppercase text-xs tracking-wide">Expectativa de Vida</p>
                                </div>

                                <div className="h-px bg-white w-12 mx-auto hidden sm:flex"></div>

                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-2 rounded-full p-0.5 bg-gradient-to-r bg-white">
                                        <div className="bg-black w-full h-full rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">7</span>
                                        </div>
                                    </div>
                                    <p className="uppercase text-xs tracking-wide">Subespécies</p>
                                </div>

                            </motion.div>
                        </div>

                        <div className="mt-8 md:mt-24 md:ml-36">
                            <h3 className="text-xl md:text-2xl font-bold mb-3">Cores criadas por seleção</h3>
                            <p className="text-gray-300 md:max-w-xs mt-3">
                                Os Bettas selvagens são normalmente marrom ou verde-oliva, mas podem assumir cores mais intensas como sinais de agressão ou como parte de seu cortejo. Criadores desenvolveram a variedade de cores vista nos bettas de estimação hoje, desde vermelhos iridescentes até azuis pastéis, através de cuidadosa reprodução seletiva.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Facts;