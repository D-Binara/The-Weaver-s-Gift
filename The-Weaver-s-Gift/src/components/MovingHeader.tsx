import "../assets/styles/MovingHeader.css";

interface GodCardProps {
  content: string;
}
const MovingHeader: React.FC<GodCardProps> = ({ content }) => {
  return (
    <div className="movingHeader">
      <span className="text-xl">{content}</span>
    </div>
  );
};

export default MovingHeader;
