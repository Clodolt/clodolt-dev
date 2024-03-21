'use client'
import React from 'react';

interface Props {
  name: string;
  isVisible: boolean;
  animationDelay: number;
}

export default function SkillBadge({ name, isVisible, animationDelay }: Props) {
  const style = {
    opacity: 0,
    animation: isVisible ? `fadeIn 0.5s ease forwards ${animationDelay}ms` : 'none',
  };

  return (
    <div
      className="inline-flex p-2 bg-gray-900 items-center justify-center rounded-2xl border border-gray-500 shadow-md shadow-gray-700 hover:bg-slate-50 hover:text-black"
      style={style}
    >
      <p className="text-xs">{name}</p>
    </div>
  );
}
