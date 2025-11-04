import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/1920/1080?grayscale&blur=2)` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          Crafting Digital Experiences That <span className="text-sky-400">Inspire</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          We build beautiful, responsive, and user-centric websites and applications that drive growth and deliver exceptional results.
        </p>
        <div className="space-x-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="#services" className="bg-sky-600 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-700 transition duration-300 ease-in-out transform hover:scale-105">
            Our Services
          </a>
          <a href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;