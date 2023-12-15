'use client'
import React, { useEffect, useState } from 'react';
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

export default function PersonalSkills() {
  return(
    <div className="flex flex-wrap gap-2 max-w-xl">
        {skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
        ))}

    </div>
  )
}