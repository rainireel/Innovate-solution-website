import React, { useState, useEffect } from 'react';

const Logo: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => (
  <a href="#home" className="flex items-center space-x-2">
    <svg className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? 'text-sky-600' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Innovate</span>
  </a>
);

const NavLinks: React.FC<{isMenuOpen: boolean; isScrolled: boolean}> = ({ isMenuOpen, isScrolled }) => {
    const navItems = ['Home', 'Services', 'About', 'Contact'];
    const linkColor = isScrolled ? 'text-gray-600' : 'text-gray-200';
    const hoverColor = isScrolled ? 'hover:text-sky-600' : 'hover:text-white';
    
    return (
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0`}>
          <ul className={`flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 transition-colors duration-300 ${linkColor}`}>
            {navItems.map(item => (
                <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className={`${hoverColor} transition duration-300 ease-in-out font-medium`}>{item}</a>
                </li>
            ))}
          </ul>
          <a href="#contact" className="md:hidden lg:inline-block mt-4 md:mt-0 md:ml-8 px-6 py-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition duration-300">
            Get a Quote
          </a>
      </nav>
    );
};


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo isScrolled={isScrolled} />
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                </svg>
            </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
             <NavLinks isMenuOpen={isMenuOpen} isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;