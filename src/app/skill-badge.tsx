'use client'
import React from 'react';

interface Props {
  name: string;
}

export default function SkillBadge({ name }: Props) {

  return (
    <div
      className="inline-flex p-2 bg-gray-900 items-center justify-center rounded-2xl border border-gray-500 shadow-md shadow-gray-700 hover:bg-slate-50 hover:text-black"
    >
      <p className="text-xs">{name}</p>
    </div>
  );
}
