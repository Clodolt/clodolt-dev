'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Intro from './introduction';

interface Props {
    name: string;
    image: string;
}

export default function Interest({ name, image }: Props) {
  return(
    <div className="p-4 flex flex-col items-center w-52 h-52 bg-gray-900 rounded-xl shadow-lg shadow-gray-700">
        <Image className="m-auto" src={image} alt={name} width={120} height={120}/>
        <p className="text-center text-lg mt-auto">{name}</p>

    </div>
  )
}