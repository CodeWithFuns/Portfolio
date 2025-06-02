import React from 'react';
import profileImg from '../assets/Aslam.jpg';

const Hero = () => {
  return (
    <section
      className="text-center py-10 px-4 animate-in fade-in slide-in-from-top duration-1000 ease-in-out"
    >
      <img
        src={profileImg}
        alt="Aslam Ansari"
        className="w-64 h-64 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500 shadow-lg transition-transform duration-500 hover:scale-105"
      />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white transition-opacity duration-700">
        Aslam Ansari
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
        Web Developer, 
         AI Enthusiasts
      </p>
    </section>
  );
};

export default Hero;
