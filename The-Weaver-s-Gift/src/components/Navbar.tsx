import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link to="/">The-WEAVER-S-GIFT</Link>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:justify-between text-white md:space-x-8">
            <li className="my-2 md:my-0">
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="/story" className="hover:text-gray-400">Story</Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="/gods" className="hover:text-gray-400">Gods</Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="/contributors" className="hover:text-gray-400">Contributors</Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="/profile" className="hover:text-gray-400">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
