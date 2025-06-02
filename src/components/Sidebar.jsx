import React from 'react';
import profileImg from '../assets/profile.jpg';

const Sidebar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-48 bg-gray-900 text-white flex flex-col items-center py-8 
                     animate-in slide-in-from-left duration-1000 ease-in-out">
      <img
        src={profileImg}
        alt="Aslam Ansari"
        className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg transition-transform duration-500 hover:scale-105"
      />
      <div className="text-center mb-10 transition-opacity duration-500 hover:opacity-90">
        <h1 className="text-xl font-bold">Aslam Ansari</h1>
        <p className="text-sm text-gray-400">Khulna University</p>
      </div>
      <nav className="flex flex-col gap-6 text-lg font-medium">
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-blue-400 hover:scale-105 transition-all duration-300 transform"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
