import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const transitionTimeoutRef = useRef<number | null>(null);

  const startTransition = () => {
    if (isTransitioningRef.current) return;

    isTransitioningRef.current = true;
    setIsTransitioning(true);

    transitionTimeoutRef.current = setTimeout(() => {
      window.location.href = '/about';
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        startTransition();
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      clearTimeout(timer);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const backgroundVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1.05, opacity: 0.7, transition: { duration: 1.2, ease: "easeOut" } },
    exit: { scale: 1.1, opacity: 0, filter: "blur(8px)", transition: { duration: 0.3 } }
  };

  const contentVariants = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { y: 8, opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const scrollButtonVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { y: 8, opacity: 0, transition: { duration: 0.3 } },
    hover: {
      y: [-2, 2, -2],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative mt-16">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          {!isTransitioning ? (
            <motion.div
              className="w-full h-full bg-[url('/bettas.png')] bg-center grayscale-50 bg-cover bg-no-repeat opacity-70"
              key="background"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={backgroundVariants}
            />
          ) : (
            <motion.div
              className="w-full h-full bg-[url('/bettas.png')] bg-center grayscale-50 bg-cover bg-no-repeat opacity-70 blur-sm"
              key="background-transition"
              initial={{ scale: 1.05, opacity: 0.7 }}
              animate={{ scale: 1.1, opacity: 0, filter: "blur(8px)" }}
              exit="exit"
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
      </div>

      <AnimatePresence>
        {loaded && !isTransitioning && (
          <motion.div
            className="text-center z-[20] px-6 max-w-4xl mx-auto"
            key="content"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={contentVariants}
          >
            <motion.div
              className="text-sm tracking-widest uppercase text-zinc-400 mb-3 font-medium font-montserrat"
              variants={itemVariants}
            >
              Peixe Betta Siamês
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-400"
              variants={itemVariants}
            >
              Betta splendens: morfologia e comportamento
            </motion.h1>

            <motion.p
              className="text-zinc-300/80 max-w-xl mx-auto text-lg"
              variants={itemVariants}
            >
              Descubra a beleza e os segredos destes fascinantes peixes ornamentais
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loaded && !isTransitioning && (
          <motion.div
            className="absolute bottom-12 flex flex-col items-center"
            key="scroll-button"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={scrollButtonVariants}
            whileHover="hover"
          >
            <motion.div
              className="group relative rounded-full cursor-pointer w-12 h-12 flex items-center justify-center mb-3 hover:bg-zinc-800/30 transition-all duration-300 hover:-translate-y-1"
              onClick={startTransition}
              role="button"
              aria-label="Role para baixo"
              style={{
                background: 'transparent',
                position: 'relative',
                zIndex: 10,
              }}
            >
              <div className="absolute inset-0 rounded-full p-0.5"
                style={{
                  background: 'linear-gradient(135deg, #0062ff, #00d2ff, #003366, #ffd700, #b8860b)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-animation 5s ease infinite',
                }}>
                <div className="bg-gray-900 w-full h-full rounded-full"></div>
              </div>

              <ArrowDown className="text-zinc-400 group-hover:text-white transition-colors duration-300 relative z-20" size={20} />
            </motion.div>

            <motion.div
              className="text-xs tracking-widest uppercase text-zinc-400 font-medium"
            >
              Role para baixo para explorar
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;