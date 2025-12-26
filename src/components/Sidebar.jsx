import React from 'react';
import profileImg from '../assets/profile.jpg';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Awards & Achievements', href: '#awards' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Overlay to close sidebar on mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
        aria-hidden="true"
      />

      <aside
        className={`
          fixed top-0 left-0 h-full w-48 bg-gray-900 text-white flex flex-col items-center py-8
          transform transition-transform duration-300 ease-in-out z-40
          md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <img
          src={profileImg}
          alt="Aslam Ansari"
          className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg transition-transform duration-500 hover:scale-105"
        />
        <div className="text-center mb-10 transition-opacity duration-500 hover:opacity-90">
          <h1 className="text-xl font-bold">Aslam Ansari</h1>
          <p className="text-sm text-gray-400">Khulna University</p>
        </div>
        <nav className="flex flex-col gap-6 text-lg font-medium items-center text-center">
        {navItems.map(item => (
         <a
          key={item.href}
          href={item.href}
          className="text-center w-full hover:text-blue-400 hover:scale-105 transition-all duration-300 transform"
          onClick={toggleSidebar}
        >
      {item.label}
    </a>
  ))}
</nav>

      </aside>
    </>
  );
};

export default Sidebar;
