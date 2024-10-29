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
          name="Anu (an)"
          image={enkiImage}
          description="Anu is the oldest god in the Mesopotamian pantheon, his domain is the vast heavens and symbolyzes supreme authority"
        />
        <GodCard
          name="Enlil"
          image={enkiImage}
          description="Enlil is the god of storms who held a sway over earth's fertility and weather "
        />
        <GodCard
          name="Ishtar"
          image={enkiImage}
          description="Ishtar embodies duality of love and war, life and death."
        />
        <GodCard
          name="Shamash"
          image={enkiImage}
          description="Also known as Utu represented sun and is seen as god of justice and fairness."
        />
        <GodCard
          name="Nanna"
          image={enkiImage}
          description="Nanna represented moon and the cyclical nature of time "
        />
        <GodCard
          name="Marduk"
          image={enkiImage}
          description="National god of Babylon who slays the primordial goddess Tiamat to create the cosmos "
        />
        <GodCard
          name="Nergal"
          image={enkiImage}
          description=" Nergal the ruler of the underworld was associated with plagues, war, and fire."
        />
        <GodCard
          name="ninhursag"
          image={enkiImage}
          description="Known as Mistress of Mountain Ranges Ninhursag was a nurturing mother figure and a goddess of the earth"
        />
        
      </div>
    </div>
  );
};

export default Gods;
