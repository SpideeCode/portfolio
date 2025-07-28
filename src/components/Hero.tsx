import React, { useState, useEffect } from 'react';
import { Github, FileText, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Développeur Web Fullstack';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            Ibrahim
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Berisha
            </span>
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            React • Laravel • Tailwind • Node.js • API REST • Inertia
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-slide-up">
          <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
            <FileText size={20} />
             <a href="../../public/CV.pdf">Voir mon CV</a>
            <div className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </div>
          </button>
          
          <button className="group border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            <Github size={20} />
            <a href="https://github.com/SpideeCode/">Projets GitHub </a>
            <div className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </div>
          </button>
        </div>
        
        <div className="absolute top-4/5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className=" text-gray-400 w-8 h-8 mt-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;