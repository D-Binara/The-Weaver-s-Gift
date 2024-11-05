import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-[#f1e9d2] py-4 text-xs">
      <div className="container mx-auto text-center space-y-2">

        {/* Mesopotamian Creation Quote */}
        <p className="italic tracking-widest mb-2">
          "From chaos, order; from wisdom, the cosmos."
        </p>

        {/* Symbolic Divider with Icon */}
        <div className="flex justify-center items-center space-x-2 text-sm font-semibold mb-2">
          <span>&#x269A;</span> {/* Ancient Mesopotamian symbol placeholder */}
          <span>The Weave of Existence</span>
          <span>&#x269A;</span>
        </div>

        {/* Copyright and Era-Specific Reference */}
        <p className="opacity-80">
          &copy; 2024 Ancient Mesopotamian Myth. All Rights Reserved | In the Era of Creation & Wisdom
        </p>
      </div>
    </footer>
  );
};

export default Footer;
