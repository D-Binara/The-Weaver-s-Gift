import { motion } from "framer-motion";
import MovingHeader from "../components/MovingHeader";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center 
                    overflow-hidden ] 
                    bg-cover bg-center bg-fixed text-amber-100 font-cinzel backgroundImage">
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-10"></div>

      {/* Header */}
      <div className="z-20">
        <MovingHeader content="The Tapestry of Creation: Ancient Mesopotamian Myths" />
      </div>

      {/* Description */}
      <motion.p
        className="z-20 mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-amber-100/90 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        In the beginning, there was only darkness and water. From the depths, the goddess Nammu
        wove the first threads of creation, birthing light, wisdom, and the world as we know it.
      </motion.p>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[2px] h-[2px] bg-amber-200 rounded-full opacity-70 blur-[1px]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, -50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
