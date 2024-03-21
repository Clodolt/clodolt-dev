'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Intro from './introduction';

interface Props {
    name: string;
    image: string;
    isVisible: boolean;
    animationDelay: number;
}

export default function Interest({ name, image, isVisible, animationDelay }: Props) {
  const style = {
    opacity: 0,
    animation: isVisible ? `fadeIn 0.5s ease forwards ${animationDelay}ms` : 'none',
  };
  return(
    <div className="p-4 flex flex-col items-center w-52 h-52 bg-gray-900 rounded-xl shadow-lg shadow-gray-700 shdaow" style={style}>
        <Image className="m-auto" src={image} alt={name} width={120} height={120}/>
        <p className="text-center text-lg mt-auto">{name}</p>

    </div>
  )
}