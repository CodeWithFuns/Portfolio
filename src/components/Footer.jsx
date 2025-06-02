import React from 'react';
import facebookIcon from '../assets/facebook.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import instagramIcon from '../assets/insta.jpg';

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://www.facebook.com/aslam.ansari.129887"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125 hover:drop-shadow-md duration-300"
        >
          <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/aslam-ansari-723342242/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125 hover:drop-shadow-md duration-300"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/CodeWithFuns"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125 hover:drop-shadow-md duration-300"
        >
          <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/as_lam_ansari/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125 hover:drop-shadow-md duration-300"
        >
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6 rounded" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Aslam Ansari</p>
    </footer>
  );
};

export default Footer;
