"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  image: string;
  left: boolean;
}

export default function ExperienceTile({
  title,
  children,
  image,
  left,
}: Props) {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full max-w-4xl gap-4 px-4">
        {left ? (
          <div className="flex flex-col md:mr-5 order-2 md:order-1 text-center md:text-left">
            <p className="text-xl font-bold">{title}</p>
            <div className="text-sm">{children}</div>
          </div>
        ) : (
          <div className="hidden md:block order-1"></div>
        )}

        <div className="flex justify-center order-1 md:order-2">
          <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white overflow-hidden shadow-slate-600 shadow-lg">
            <Image 
              src={image} 
              width={125} 
              height={125} 
              alt={title}
              className="object-contain p-2" 
            />
          </div>
        </div>

        {!left && (
          <div className="flex flex-col md:ml-5 order-2 md:order-3 text-center md:text-left">
            <p className="text-xl font-bold">{title}</p>
            <div className="text-sm">{children}</div>
          </div>
        )}
        {left && <div className="hidden md:block order-3"></div>}
      </div>
    </div>
  );
}

export function ExperienceSpacer() {
  return (
    <div className="flex justify-center w-full max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full items-center">
        <div className="hidden md:block"></div>
        <div className="flex justify-center">
          <div className="w-1 md:w-2 h-16 md:h-24 bg-white"></div>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </div>
  );
}
