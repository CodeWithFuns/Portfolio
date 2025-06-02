import React from 'react';

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "Tailwind CSS", "REACT", "FIGMA",
    "SQL", "Desktop Development", "Web Development", "Chatbot"
  ];

  return (
    <section className="py-10 animate-fade-up">
      <div className="max-w-4xl mx-auto px-4 text-left">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-200 pb-2">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-brand text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
