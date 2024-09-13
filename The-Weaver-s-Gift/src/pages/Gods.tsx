import React from 'react';
import GodCard from "../components/GodCard";
import enkiImage from "../assets/images/enki.png";

const Gods: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
