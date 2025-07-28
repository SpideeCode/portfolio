import React from 'react';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const timeline = [
    {
      year: '2020',
      type: 'education',
      title: 'IT Technician',
      description: 'Technicien en informatique Cisco / Linux / Windows Server',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: '2021-2024',
      type: 'education',
      title: 'IT Bachelor',
      description: 'Bachelier en informatique à HE Vinci',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: '2024',
      type: 'education',
      title: 'MolenGeek Coding School',
      description: 'Création de sites web et applications',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: '2024',
      type: 'work',
      title: 'Freelance & Projets',
      description: 'Développement de solutions sur mesure',
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À propos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={200} direction="left">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Développeur passionné par la création de solutions web modernes et performantes. 
                Je suis autonome, curieux et toujours à jour sur les technologies actuelles.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Spécialisé dans l'écosystème React et Laravel, je crée des applications web 
                robustes avec une attention particulière portée à l'expérience utilisateur 
                et aux performances.
              </p>
              
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Basé en Belgique</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400} direction="right">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <ScrollReveal
                    key={index}
                    delay={600 + index * 150}
                    className="relative flex items-start gap-6 group"
                  >
                    <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
                      item.type === 'education' 
                        ? 'bg-green-500' 
                        : 'bg-blue-500'
                    } shadow-lg`}>
                      {item.icon}
                    </div>
                    
                    <div className="flex-1 bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;