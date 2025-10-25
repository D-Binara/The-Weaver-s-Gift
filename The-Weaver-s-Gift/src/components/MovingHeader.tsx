import { motion } from "framer-motion";

interface MovingHeaderProps {
  content: string;
}

const MovingHeader: React.FC<MovingHeaderProps> = ({ content }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h1
        className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 
                   text-3xl md:text-5xl font-cinzel uppercase tracking-widest drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]"
        animate={{
          textShadow: [
            "0px 0px 5px #fcd34d",
            "0px 0px 15px #fbbf24",
            "0px 0px 5px #fcd34d",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      >
        {content}
      </motion.h1>
    </motion.div>
  );
};

export default MovingHeader;
