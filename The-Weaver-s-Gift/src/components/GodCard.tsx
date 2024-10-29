import React from "react";
import "../assets/styles/GorCard.css"; // Import the custom CSS file
interface label {
  name: string;
  color: string;
}
interface GodCardProps {
  name: string;
  image: string;
  description: string;
  labels: label[];
}

const GodCard: React.FC<GodCardProps> = ({ name, image, description, labels }) => {
  return (
    <div className="card-magic max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-128 object-cover" src={image} alt={name} />
      <div className="px-6 py-4  min-h-[150px]">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6  pb-2">
        {labels.map((label, index) => (
          <span
            key={index}
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            style={{ backgroundColor: label.color }}
          >
            #{label.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GodCard;
