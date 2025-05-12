import { useState, useEffect, useRef } from "react";
import { List, ArrowDown } from "@phosphor-icons/react";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const transitionTimeoutRef = useRef<number | null>(null);

  const startTransition = () => {
    if (isTransitioningRef.current) return;
    
    isTransitioningRef.current = true;
    setIsTransitioning(true);
    
    transitionTimeoutRef.current = setTimeout(() => {
      window.location.href = '/about';
    }, 300); // Tempo de transição
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        startTransition();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);
    
    return () => {
      clearTimeout(timer);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black min-h-screen w-full text-white flex flex-col">
      <nav className={`flex justify-between items-center p-6 fixed w-full z-20 transition-all duration-300 ${scrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
        <div className="text-2xl font-bold tracking-wide text-white">
          Betta<span className="text-zinc-400">.</span>
        </div>
        <button className="p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/70 transition-all duration-300 cursor-pointer">
          <List size={24} />
        </button>
      </nav>
      <div 
        className={`flex-1 flex flex-col items-center justify-center relative mt-16 transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className={`w-full h-full bg-[url('/bettas.png')] bg-center grayscale-50 bg-cover bg-no-repeat opacity-70 transition-all duration-1000 ease-in-out ${isTransitioning ? 'scale-110 blur-sm' : 'scale-105'}`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
        </div>
        <div className={`text-center z-10 px-6 max-w-4xl mx-auto transform transition-all duration-700 ease-out ${isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
          <div className="text-sm tracking-widest uppercase text-zinc-400 mb-3 font-medium">
            Peixe Betta Siamês
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-400">
            Betta splendens: morfologia e comportamento
          </h1>
          <p className="text-zinc-300/80 max-w-xl mx-auto text-lg">
            Descubra a beleza e os segredos destes fascinantes peixes ornamentais
          </p>
        </div>
        <div 
          className={`absolute bottom-12 flex flex-col items-center transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${isTransitioning ? 'opacity-0 translate-y-8' : ''}`}
        >
          <div
            className="group rounded-full cursor-pointer border border-zinc-500 w-12 h-12 flex items-center justify-center mb-3 hover:border-white hover:bg-zinc-800/30 transition-all duration-300 hover:-translate-y-1"
            onClick={startTransition}
            role="button"
            aria-label="Role para baixo"
            >
            <ArrowDown className="text-zinc-400 group-hover:text-white transition-colors duration-300" size={20} />
          </div>
          <div className="text-xs tracking-widest uppercase text-zinc-400 font-medium">
            Role para baixo para explorar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;