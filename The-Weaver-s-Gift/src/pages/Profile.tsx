import React from "react";
import "../assets/styles/Profile.css";

const Profile: React.FC = () => {
  return (
    <main className="bodyProfile">
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full w-24 h-24 border-4 border-blue-500"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 h2Profile ">
              Ancient Wizard
            </h2>
            <p className="text-sm text-gray-600 mb-4">Master of Arcane Arts</p>
            <p className="text-gray-700 mb-4">
              A wielder of ancient spells and keeper of mystical knowledge, the
              Ancient Wizard is revered for his wisdom and powers. With a staff
              adorned in runes of forgotten languages and robes woven from
              enchanted threads, he navigates realms unseen to ordinary eyes,
              seeking to maintain the balance between light and darkness. His
              eyes, sparkling with the remnants of countless spells cast over
              centuries, hold secrets of the universe yet to be revealed.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Follow
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
