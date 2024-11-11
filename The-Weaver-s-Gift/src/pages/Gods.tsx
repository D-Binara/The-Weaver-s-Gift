import React from "react";
import GodCard from "../components/GodCard";
import enkiImage from "../assets/images/enki.png";
import eliImage from "../assets/images/Enlilith.png";
import ninsulImage from "../assets/images/Ninsul.png";
import isaImage from "../assets/images/Ishara.png"
import zaratuImage from "../assets/images/zaratu.png"
import lahamuImage from "../assets/images/lahamu.png"
import anukharImage from "../assets/images/Anukhar.png"
import nammu from "../assets/images/Nammu,.png"
import elaraImage from "../assets/images/Elara.png";

const Gods: React.FC = () => {
  return (
    <div className="container mx-auto py-8 ">
      <div className="flex gap-16 justify-center flex-wrap lg:p-0 px-4 ">
        <GodCard
          name="Enki"
          image={enkiImage}
          description="Enki is the Sumerian god of water, knowledge, mischief, crafts, and creation. He is often depicted with flowing water and fish."
          labels={[
            { name: "mythology", color: "#3b82f6" },
            { name: "ancient", color: "#10b981" },
            { name: "wisdom", color: "#818cf8" },
            { name: "water", color: "#60a5fa" },
          ]}
        />
        <GodCard
          name="Nammu"
          image={nammu}
          description="Nammu, the Mother of All, is the primordial goddess of creation and the source from which all life and the cosmos emerged. She nurtures the realms of existence with her boundless essence, embodying the ancient foundation of all creation."
          labels={[
            { name: "ancient", color: "#10b981" },
            { name: "creation", color: "#d97706" },
            { name: "life-source", color: "#fbbf24" },
            { name: "primordial", color: "#a78bfa" },
          ]}
        />
       <GodCard
          name="Lilith - Goddess of Winds and Storms"
          image={eliImage}
          description="The tempestuous goddess of winds and storms, embodying the duality of destruction and creation."
          labels={[
            { name: "legend", color: "#ef4444" },
            { name: "wind-force", color: "#60a5fa" },
            { name: "tempest", color: "#3b82f6" },
            { name: "power", color: "#f87171" },
          ]}
        />
        <GodCard
          name="Ninsul - God of Healing and Renewal"
          image={ninsulImage}
          description="The compassionate god of healing and renewal, known for restoring vitality and mending both physical and spiritual wounds."
          labels={[
            { name: "ancient", color: "#10b981" },
            { name: "healing", color: "#34d399"},
            { name: "restoration", color: "#6ee7b7"},
            { name: "compassion", color: "#facc15"},
          ]}
        />
        <GodCard 
          name="Ishara - Goddess of Truth and Justice"
          image={isaImage}
          description="The revered goddess of truth and justice, guiding mortals with clarity and a steadfast sense of morality."
          labels={[
            { name: "mythology", color: "#3b82f6" },
            { name: "truth", color: "#4b5563"},
            { name: "clarity", color: "#f97316"},
            { name: "justice", color: "#dc7633" },
          ]}
        />
        <GodCard
          name="Zaratu - God of Agriculture and Fertility"
          image={zaratuImage}
          description="The nurturing god of agriculture and fertility, ensuring the land’s abundance and the prosperity of all who tend it."
          labels={[
            { name: "legend", color: "#ef4444" },
            { name: "agriculture", color: "#84cc16" },
            { name: "fertility", color: "#a3e635" },
            { name: "harvest", color: "#34d399" },
          ]}
        />
        <GodCard
          name="Lahamu - God of Shadows and Secrets"
          image={lahamuImage}
          description="The enigmatic god of shadows and secrets, guiding mortals through hidden paths and unveiling mysteries of the unknown."
          labels={[
            { name: "ancient", color: "#10b981" },
            { name: "mystery", color: "#6b7280" },
            { name: "secrets", color: "#4b5563" },
            { name: "insight", color: "#8b5cf6" },
          ]}
        />
        <GodCard 
          name="Anu-Khar, God of Cosmos and Time"
          image={anukharImage}
          description="The wise god of the cosmos and time, weaving the fabric of existence and guiding the flow of moments in the universe."
          labels={[
            { name: "mythology", color: "#3b82f6" },
            { name: "cosmos", color: "#60a5fa" },
            { name: "eternity", color: "#818cf8" },
            { name: "wisdom", color: "#fbbf24" },
          ]}
        />
        <GodCard 
          name="Elara, the Weaver of Dreams"
          image={elaraImage} 
          description="Elara is the mystical weaver of dreams, who brings the stories of the night to life in intricate patterns. Her threads connect visions, memories, and fantasies."
          labels={[
            { name: "mythology", color: "#3b82f6" },
            { name: "dreams", color: "#60a5fa" },
            { name: "creativity", color: "#818cf8" },
            { name: "mysticism", color: "#fbbf24" }
          ]}
        />
      </div>
    </div>
  );
};

export default Gods;
