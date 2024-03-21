import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  name: string;
  image: StaticImageData;
  children?: React.ReactNode;
  handleModalChange: (image: StaticImageData) => void;
}

export default function ProjectTile({ name, image, children, handleModalChange }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`p-6 flex flex-col w-96 h-96 items-center relative bg-gray-900 rounded-xl shadow-lg shadow-gray-700 hover:cursor-pointer hover:scale-105 transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition duration-700 ease-out`}
      onClick={() => {
        handleModalChange(image);
      }}
    >
      <div className="w-full h-48 relative">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="h-12 w-24 flex items-center justify-center top-48 absolute bg-gray-900 rounded-md font-bold">
        <p className="text-center">{name}</p>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
