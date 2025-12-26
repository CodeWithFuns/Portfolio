import React, { useEffect, useState } from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Campus Ambassador",
      description: (
        <>
          Represented multiple prestigious companies and events such as{" "}
          <strong className="font-semibold text-blue-600 dark:text-blue-300">
            Walton, English Olympiad, Lexicon-British Council, BizBattle, and CaseSpecs 2.0
          </strong>.
        </>
      ),
    },
    {
      title: "Research and Development Secretary",
      description:
        "Currently serving as the R&D Secretary of Khulna University Career Club, working to foster innovation and professional growth among members.",
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 text-left">
        {/* Heading */}
        <h2
          className={`text-3xl font-bold text-blue-400 dark:text-blue-300 mb-6 
            border-b-2 border-blue-200 pb-2
            transition-all duration-700 ease-out
            hover:text-blue-500 dark:hover:text-blue-200
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          Experience
        </h2>

        <ul className="space-y-6">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className={`group bg-blue-50 dark:bg-gray-800 p-5 rounded-lg shadow-md 
                border-l-4 border-blue-400
                transition-all duration-300 ease-out cursor-pointer
                hover:scale-[1.03] hover:shadow-xl hover:border-blue-600
                dark:hover:border-blue-300
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Title */}
              <h3
                className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2
                transition-colors duration-300
                group-hover:text-blue-900 dark:group-hover:text-blue-200"
              >
                {exp.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
