import React from "react";
import StorySection from "../components/StorySection";
import "../assets/styles/Story.css";

const Story = () => {
  const story = [
    {
      title: "In the Beginning",
      content:
          "In the beginning, when the earth was young and the heavens were new, there existed only chaos and darkness. In this primordial realm, there dwelled the great goddess Nammu, the Mother of All, who floated upon the waters of creation.",
    },
    {
      title: "Creation of the Universe",
      content:
          "From the depths of her being, Nammu wove the fabric of the universe, threading together the elements of earth, water, air, and fire with her divine hands. With each delicate movement of her shuttle, she spun the cosmic tapestry, bringing order to the formless void.",
    },
    {
      title: "Nammu and Enki",
      content:
          "As Nammu labored tirelessly, shaping the world with her infinite wisdom, she realized that her creation lacked harmony and balance. To remedy this, she called upon her son, Enki, the god of wisdom and crafts. Enki, hearing his mother's call, descended from the heavens and stood by her side.",
    },
    {
      title: "Weaving Wisdom",
      content:
          "With eyes as deep as the ocean and a mind as vast as the sky, he beheld the intricate patterns of the universe unfolding before him. In his hands, Enki held a spindle of gold, shimmering with divine light. With each turn of the spindle, he infused the fabric of creation with the essence of wisdom and knowledge.",
    },
    {
      title: "Harmony and Balance",
      content:
          "Together, Nammu and Enki worked in harmony, their combined efforts bringing forth the wonders of the world. Mountains rose from the earth, rivers flowed across the land, and forests teemed with life. Stars twinkled in the night sky, and the sun and moon danced in their eternal cycles.",
    },
    {
      title: "Legacy of Creation",
      content:
          "And so, through the sacred art of weaving, the goddess Nammu and her son Enki brought order and beauty to the cosmos, setting in motion the great tapestry of existence that would bind all living things together in a web of interconnectedness and harmony.",
    },
    {
      title: "Enduring Wisdom",
      content:
          "To this day, the legacy of their creation endures, reminding mortals of the divine wisdom that resides within the fabric of the universe, waiting to be unraveled by those who seek enlightenment and understanding.",
    },
  ];

  return (
      <div className="min-h-screen flex flex-col backgroundImage">
        <main className="flex-grow container mx-auto p-4">
          {story.map((section, index) => (
              <StorySection
                  key={index}
                  title={section.title}
                  content={section.content}
              />
          ))}
        </main>
      </div>
  );
};

export default Story;
