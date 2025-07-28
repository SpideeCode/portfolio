import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import latenceGamingImg from '../img/latenceGaming.png';
import siteNewsImg from '../img/sitenews.png';
import portfolioImg from '../img/portfolio.png';
import zarchitectureImg from '../img/zarchitecture.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Plateforme e-commerce complète avec Next.js et API REST',
      image: latenceGamingImg,
      technologies: ['NextJS', 'Redux', 'Tailwind', 'Spiwper'],
      github: 'https://github.com/SpideeCode/LatenceGaming',
      demo: '#'
    },
    {
      id: 2,
      name: 'News Media WebApp',
      description: 'Application web pour créer, gérer et liker des articles + admin.',
      image: siteNewsImg,
      technologies: ['Laravel', 'Inertia.js', 'React', 'MySQL'],
      github: 'https://github.com/SpideeCode/siteNews', 
      demo: '#' 
    },

    {
      id: 3,
      name: 'Portfolio Website',
      description: 'Site portfolio responsive avec animations modernes',
      image: portfolioImg,
      technologies: ['React', 'Tailwind'],
      github: 'https://github.com/SpideeCode/Portfolio',
      demo: 'https://portfolio-six-kappa-97.vercel.app/'
    },
    {
      id: 4,
      name: 'ZArchitecture - Site vitrine',
      description: 'Site vitrine professionnel pour un cabinet d\'architecture.',
      image: zarchitectureImg,
      technologies: ['HTML', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/SpideeCode/ZArchitect', 
      demo: 'https://www.zarchitecture.be'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Projets
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets récents qui démontrent mes compétences techniques
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={200 + index * 150}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="group bg-gray-700/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-600/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-blue-600 transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-lg text-white hover:bg-blue-600 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={800}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/SpideeCode"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Github size={20} />
              Voir tous mes projets
              <ExternalLink size={18} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;