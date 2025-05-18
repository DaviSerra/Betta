import { ArrowDown, CaretRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-black min-h-screen w-full text-white overflow-hidden relative">
            <motion.div
                className="container mx-auto px-4 py-8 md:py-16"
                initial="hidden"
                animate="visible"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } }}
            >
                <div className="flex flex-col md:flex-row gap-8 relative">
                    <div className="flex flex-col justify-center max-w-3xl space-y-4 md:space-y-5 order-2 md:order-1">
                        <motion.p
                            className="text-xs font-semibold tracking-wider text-gray-400 font-montserrat uppercase"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                        >
                            01. sobre
                        </motion.p>
                        <motion.h2
                            className="text-3xl md:text-5xl font-serif mb-4 md:mb-8 relative"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                        >
                            Betta splendens

                            <motion.div
                               initial={{ scale: 0, opacity: 0 }}
                               animate={{ scale: 1, opacity: 1 }}
                               transition={{ duration: 0.3, delay: 0.5 }}
                                className="absolute top-32 bottom-0 -left-32 flex flex-col justify-center items-center gap-4 pointer-events-none opacity-80"
                            >
                                <div className="border-b border-white w-10"></div>
                                <div className="border-b border-white w-5"></div>
                                <div className="border-b border-white w-10"></div>
                            </motion.div>

                            <div className="border-b bg-white w-full mt-3"></div>
                        </motion.h2>
                        <motion.div
                            className="flex flex-col md:flex-row gap-3 md:gap-4"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                        >
                            <div className="text-4xl md:text-5xl font-serif text-gray-200">S</div>
                            <div className="text-sm leading-relaxed tracking-wider space-y-3 md:space-y-4">
                                <motion.p
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                                >
                                    iamês lutador (Betta) às vezes é simplesmente chamado de betta. Esses peixes de cores vibrantes são aqueles que você frequentemente vê nadando sozinhos em pequenos aquários em lojas de animais e tanques de cuidados. Eles são altamente agressivos e territoriais, mas impressionantemente bonitos, exibindo cores vibrantes. Embora frequentemente pareçam atordoados e fracos, eles têm uma história longa e rica.
                                </motion.p>
                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                    }}
                                >
                                    Ninguém tem certeza de há quanto tempo as pessoas mantêm bettas em cativeiro, eles têm sido criados desde os anos 1800. Os cientistas observaram como os peixes selvagens eram altamente territoriais e atacavam outros peixes que invadiam seu espaço, e começaram a organizar lutas entre os peixes. Para entretenimento. Independentemente de há quanto tempo as pessoas mantêm Bettas em cativeiro, eles têm sido companheiros fascinantes para os humanos por centenas de anos.
                                </motion.p>

                                <Link to="/origin">
                                    <motion.div
                                        className="sm:hidden flex justify-end"
                                        whileHover={{ y: [0, 10, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }}
                                        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6, ease: "easeOut" } } }}
                                    >
                                        <CaretRight className="w-6 h-6" />
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="md:w-1/2 relative flex justify-center md:justify-end grayscale-25 mb-6 md:mb-0 order-1 md:order-2">
                        <motion.img
                            src="/betta-white.jpg"
                            alt="Betta splendens"
                            className="h-auto w-full max-w-xs md:max-w-full object-contain"
                            variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } } }}
                        />
                    </div>
                </div>
                <Link to="/origin">
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
            </motion.div>
        </div>
    );
}

export default About;