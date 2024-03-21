'use client'
import React, { useEffect, useRef, useState } from 'react';
import SkillBadge from './skill-badge';

const skills = [
    "Vue.Js",
    "Nuxt.Js",
    "Redux",
    "PHP",
    "Laravel",
    "Symfony",
    "MariaDB",
    "MySQL",
    "Redis",
    "Tensorflow",
    "Pytorch",
    "Github Actions",
    "Gitlab CI",
    "Linux",
    "Wine",
    "Fresh.Js",
    "Three.Js",
    "OpenAI API",
    "Stable Difussion",
    "Midjourney"
];

export default function ProfessionalSkills() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="flex flex-wrap gap-2 max-w-xl">
      {skills.map((skill, index) => (
        <SkillBadge
          key={skill}
          name={skill}
          isVisible={isVisible} 
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
}