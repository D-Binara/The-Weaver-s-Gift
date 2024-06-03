import React from 'react';

const About: React.FC = () => {
  return (
    <main>
      <div className="w-64 h-64 bg-neutral-800 group relative rounded-xl flex justify-center items-center overflow-hidden">
        <div className="w-24 h-24 bottom-8 absolute">
          <div className="w-24 h-24 absolute duration-500 shadow-2xl group-hover:[box-shadow:0px_-75px_95px_0px_#FDE047]">
            <div className="w-24 h-24 shadow-inner flex justify-center items-center">
              <span className="text-white text-center">Your Text Here</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
