"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  name: string;
  image: StaticImageData;
  children?: React.ReactNode;
}

export default function ProjectTile({ name, image, children}: Props) {
    return (
      <div className="p-6 flex flex-col w-96 h-96 items-center relative bg-gray-900 rounded-xl shadow-lg shadow-gray-700">
        <div className="w-full h-48 relative">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="h-12 w-24 flex items-center justify-center top-48  absolute  bg-gray-900 rounded-md font-bold">
          <p className="text-center">{name}</p>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    );
  }
