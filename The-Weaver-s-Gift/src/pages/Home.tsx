import "../assets/styles/Home.css";
import GodCard from "../components/GodCard";
import MovingHeader from "../components/MovingHeader";

const Home: React.FC = () => {
  return (
    <div className=" backgroundImage">
      <MovingHeader content="The Tapestry of Creation: Ancient Mesopotamian Myths" />
    </div>
  );
};

export default Home;
