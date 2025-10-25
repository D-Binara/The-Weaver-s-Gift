import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-[#f1e9d2] py-6 text-xs md:text-sm font-cinzel relative overflow-hidden">
      <div className="container mx-auto text-center space-y-3 relative z-10">
        
        {/* Glowing Divider Line */}
        <div className="h-[1px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mb-3"></div>

        {/* Mesopotamian Quote */}
        <motion.p
          className="italic tracking-widest text-amber-100/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          “From chaos, order; from wisdom, the cosmos.”
        </motion.p>

        {/* Symbolic Divider with Animated Icons */}
        <motion.div
          className="flex justify-center items-center space-x-3 text-amber-300 text-sm md:text-base font-semibold mb-2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.span
            whileHover={{ scale: 1.3, rotate: 15 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            &#x269A;
          </motion.span>
          <span className="tracking-widest text-amber-200 uppercase">
            The Weave of Existence
          </span>
          <motion.span
            whileHover={{ scale: 1.3, rotate: -15 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            &#x269A;
          </motion.span>
        </motion.div>

        {/* Copyright + Era */}
        <p className="opacity-80 text-[11px] md:text-xs tracking-wide">
          &copy; 2025 The Weaver’s Gift — All Rights Reserved |
          <span className="text-amber-200 ml-1">In the Era of Creation & Wisdom</span>
        </p>
      </div>

      {/* Soft Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,233,210,0.08)_0%,transparent_70%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </footer>
  );
};

export default Footer;
