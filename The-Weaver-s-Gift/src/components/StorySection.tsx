import React from 'react';

type StorySectionProps = {
    title: string;
    content: string;
  };
  

  const StorySection: React.FC<StorySectionProps> = ({ title, content }) =>  {
  return (
    <section className="p-6 my-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-lg">{content}</p>
    </section>
  );
};

export default StorySection;
