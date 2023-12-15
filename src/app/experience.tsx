"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  image: string;
  left: boolean;
}

export default function ExperienceTile({ title, children, image, left }: Props) {
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-3 items-center w-full max-w-4xl">
          {left ? (
            // Text on the Left
            <div className="flex flex-col mr-5">
              <p className='text-xl font-bold'>{title}</p>
              <p className="text-sm">{children}</p>
            </div>
          ) : (
            // Placeholder div for centering when text is on the right
            <div></div>
          )}
  
          {/* Circle and Image */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-40 h-40 rounded-full bg-white overflow-hidden">
              <Image src={image} width={125} height={125} alt={title} />
            </div>
          </div>
  
          {!left && (
            // Text on the Right
            <div className="flex flex-col ml-5">
              <p className='text-xl font-bold'>{title}</p>
              <p className="text-sm">{children}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  
