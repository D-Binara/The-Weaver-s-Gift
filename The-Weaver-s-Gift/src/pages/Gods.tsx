import React from "react";
import GodCard from "../components/GodCard";
import enkiImage from "../assets/images/enki.png";

const Gods: React.FC = () => {
  return (
    <div className="container mx-auto py-8 ">
      <div className="flex gap-16 justify-center flex-wrap lg:p-0 px-4 ">
        <GodCard
          name="Enki"
          image={enkiImage}
          description="Enki is the Sumerian god of water, knowledge, mischief, crafts, and creation. He is often depicted with flowing water and fish."
        />
        {/* Repeat the GodCard component for other gods as needed */}
        <GodCard
          name="Nammu - The Mother of All"
          image={enkiImage}
          description="Nammu, the great goddess of creation, floated upon the waters of the primordial realm..."
        />
        <GodCard
          name="Enki"
          image={enkiImage}
          description="Enki is the Sumerian god of water, knowledge, mischief, crafts, and creation. He is often depicted with flowing water and fish."
        />
      </div>
    </div>
  );
};

export default Gods;
