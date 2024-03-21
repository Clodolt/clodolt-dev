'use client'
import React, { useEffect, useState } from 'react';
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
  return(
    <div className="flex flex-wrap gap-2 max-w-xl">
        {skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
        ))}

    </div>
  )
}