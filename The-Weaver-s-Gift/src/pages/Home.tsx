import "../assets/styles/Home.css";
import GodCard from "../components/GodCard";
import MovingHeader from "../components/MovingHeader";

const Home: React.FC = () => {
  return (
    <div className=" backgroundImage">
      <h1>This is Home page</h1>
      <GodCard
        name="Enki"
        image="https://example.com/enki.jpg"
        description="Enki is the Sumerian god of water, knowledge, mischief, crafts, and creation. He is often depicted with flowing water and fish."
      />

      <MovingHeader content="test" />
    </div>
  );
};

export default Home;
