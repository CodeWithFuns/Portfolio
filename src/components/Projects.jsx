import React, { useState } from 'react';
import movie1 from '../assets/projects/movie1.png';
import movie2 from '../assets/projects/movie2.png';
import movie3 from '../assets/projects/movie3.png';
import movie4 from '../assets/projects/movie4.png';
import chatbot1 from '../assets/projects/chatbot1.jpg';
import chatbot2 from '../assets/projects/chatbot2.jpg';
import quiz1 from '../assets/projects/quiz1.png';
import quiz2 from '../assets/projects/quiz2.png';
import calc1 from '../assets/projects/calc1.png';
import calc2 from '../assets/projects/calc2.png';

const projects = [
  {
    name: "Movie Recommender App",
    link: "https://github.com/CodeWithFuns/MovieRecommendarApp",
    images: [movie1, movie2, movie3, movie4],
  },
  {
    name: "Bangla Chatbot",
    link: "#",
    images: [chatbot1, chatbot2],
  },
  {
    name: "Interactive Quiz",
    link: "https://codewithfuns.github.io/Interactive_Quiz/",
    images: [quiz1, quiz2],
  },
  {
    name: "Basic Calculator",
    link: "https://codewithfuns.github.io/Basic_Calculator/",
    images: [calc1, calc2],
  },
];

const Projects = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imgSrc) => {
    setPopupImage(imgSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 text-left">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-200 pb-2">
          Projects
        </h2>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <a
                href={project.link}
                className="text-2xl font-semibold text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
              <div className="mt-4 flex flex-wrap gap-4">
                {project.images.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`${project.name} screenshot ${imgIndex + 1}`}
                    onClick={() => openPopup(imgSrc)}
                    className="w-48 h-32 rounded-lg object-cover border border-gray-300 dark:border-gray-700 cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <img
            src={popupImage}
            alt="Project Full View"
            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
