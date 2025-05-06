'use client'
import React, { useEffect, useRef, useState } from 'react';
import SkillBadge from './skill-badge';

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Node.JS",
  "React",
  "Angular",
  "Remix.run",
  "Next.js",
  "Prisma.io",
  "Vitest",
  "Jest",
  "Cypress",
  "Playwright",
  "Java",
  "Kotlin",
  "SpringBoot",
  "Hibernate",
  "JPA",
  "Junit",
  "Gradle",
  "C#",
  "ASP.NET",
  "Blazor",
  "Dapper",
  "Entity Framework",
  "NUnit",
  "Selenium",
  "Python",
  "FastAPI",
  "PyTest",
  "Pydantic",
  "Streamlit",
  "PostgresSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "Helm",
  "Azure",
  "AWS",
  "Terraform",
  "Azure OAI",
  "OpenAI",
  "LangChain",
  "LangGraph",
  "LiteLLM",
  "CrewAI",
  "Google ADK",
  "Git",
  "Github",
  "Gitlab",
  "Azure Pipelines",
  "Azure DevOps"
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