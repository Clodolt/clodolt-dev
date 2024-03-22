'use client'
import React, { useEffect, useRef, useState } from 'react';
import SkillBadge from './skill-badge';

const skills = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Node.Js",
    "React",
    "Angular",
    "Remix.run",
    "Next.Js",
    "Prisma.io",
    "Vitest",
    "Jest",
    "Cypress.io",
    "Playwright",
    "Java",
    "Spring Boot",
    "Hibernate",
    "Junit",
    "Gradle",
    "C#",
    "ASP.NET",
    "Blazor",
    "Dapper",
    "Entity Framework",
    "Selenium",
    "Nunit",
    "Python",
    "Django",
    "PostgresSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Azure",
    "Terraform",
    "Git",
    "Azure Pipelines",
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
    <div ref={ref} className={`flex flex-wrap gap-2 max-w-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition duration-700 ease-out`}>
      {skills.map((skill, index) => (
        <SkillBadge
          key={skill}
          name={skill}
        />
      ))}
    </div>
  );
}