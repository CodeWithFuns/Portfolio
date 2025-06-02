import React from 'react';

const About = () => {
  return (
    <section
      className="py-10 px-4 w-full max-w-4xl mx-auto animate-fade-up"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-200 pb-2">
        About Me
      </h2>
      <p className="mb-4 text-lg leading-relaxed text-left transition-opacity duration-500 ease-in-out">
        I'm <span className="font-semibold text-blue-700 dark:text-blue-300">Aslam Ansari</span>, a dedicated and passionate Web Developer with a strong focus on crafting clean, 
        intuitive, and user-friendly digital experiences. I thrive on transforming complex ideas into seamless, elegant interfaces that delight users and solve real-world problems. 
        Skilled in React, I enjoy building responsive and dynamic web applications that balance functionality with aesthetics. Beyond coding, 
        I have a creative side that shines through my design work in Figma, where I bring concepts to life with thoughtful layouts and visual harmony. Additionally, 
        I’m fascinated by emerging technologies like AI-based tools and chatbots, constantly exploring innovative ways to integrate them into web projects to enhance interactivity and 
        user engagement. 
        My goal is to continuously grow as a developer while contributing to impactful projects that blend technology and creativity.
      </p>

      <div className="mb-8 text-left">
        <p><span className="font-semibold">📍 Location:</span> Birgunj, Nepal</p>
        <p><span className="font-semibold">📧 Email:</span> aslam.ansari.ku@gmail.com</p>
      </div>

      <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Qualification</h3>
      <ul className="space-y-4">
        {[
          {
            title: 'B.Sc. in Computer Science & Engineering',
            institution: 'Khulna University',
            duration: '2023 – Present',
          },
          {
            title: 'Higher Secondary Certificate (HSC)',
            institution: 'National Infotech College',
            duration: '2019 – 2021',
          },
          {
            title: 'Secondary School Certificate (SSC)',
            institution: 'Alpine Secondary School',
            duration: '2018 – 2019',
          },
        ].map((item, index) => (
          <li
            key={index}
            className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-blue-500 transition-transform duration-300 hover:scale-[1.02]"
          >
            <h4 className="text-xl font-semibold">{item.title}</h4>
            <p>{item.institution}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
