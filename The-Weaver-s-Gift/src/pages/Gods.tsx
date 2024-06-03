import GodCard from "../components/GodCard";
import enkiImage from "../assets/images/enki.png";

const Gods: React.FC = () => {
  return (
    <div>
      <GodCard
        name="Enki"
        image={enkiImage}
        description="Enki is the Sumerian god of water, knowledge, mischief, crafts, and creation. He is often depicted with flowing water and fish."
      />
    </div>
  );
};

export default Gods;
