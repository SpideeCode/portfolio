import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "HTML/CSS", level: 99, color: "from-blue-400 to-purple-500" },
    { name: "JavaScript", level: 90, color: "from-yellow-500 to-orange-500" },
    { name: "ReactJS/Next.js", level: 90, color: "from-green-500 to-teal-500" },
    { name: "PHP/Laravel", level: 85, color: "from-red-500 to-orange-500" },
    {name: "Bootstrap/Tailwind", level: 85, color: "from-cyan-500 to-blue-500"},
    { name: "SQL", level: 80, color: "from-blue-600 to-indigo-600" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({
    skill,
    index,
  }: {
    skill: any;
    index: number;
  }) => {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
      circumference - (skill.level / 100) * circumference;

    return (
      <div
        className="relative flex flex-col items-center group"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="relative w-48 h-48">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 200 200"
          >
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="rgba(75, 85, 99, 0.3)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke={`url(#gradient-${index})`}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={isVisible ? strokeDashoffset : circumference}
              className="transition-all duration-2000 ease-out"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient
                id={`gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  className={`stop-color-${skill.color.split(" ")[1]}`}
                />
                <stop
                  offset="100%"
                  className={`stop-color-${skill.color.split(" ")[3]}`}
                />
              </linearGradient>
            </defs>
          </svg>

          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-3xl font-bold text-white">
                {isVisible ? skill.level : 0}%
              </span>
            </div>
          </div>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies et outils que je maîtrise pour créer des applications
              web performantes
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`stagger-${Math.min(index + 1, 6)}`}
              >
                <CircularProgress skill={skill} index={index} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
