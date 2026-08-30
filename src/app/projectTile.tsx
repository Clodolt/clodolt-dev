import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  name: string;
  image: StaticImageData;
  video?: string;
  children?: React.ReactNode;
  handleModalChange: (image: StaticImageData, name: string, video?: string) => void;
}

export default function ProjectTile({ name, image, video, children, handleModalChange }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      ref={ref}
      aria-label={`Open preview of ${name}`}
      className={`p-6 flex flex-col w-96 h-96 items-center relative text-left bg-gray-900 rounded-xl shadow-lg shadow-gray-700 hover:cursor-pointer hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition duration-700 ease-out`}
      onClick={() => handleModalChange(image, name, video)}
    >
      <div className="w-full h-48 relative">
        {video ? (
          <video src={video} poster={image.src} autoPlay muted loop playsInline preload="none" aria-label={name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <Image src={image} alt={name} fill sizes="384px" className="object-cover" />
        )}
      </div>
      <div className="h-12 w-24 flex items-center justify-center top-48 absolute bg-gray-900 rounded-md font-bold">
        <p className="text-center">{name}</p>
      </div>
      <div className="mt-8">{children}</div>
    </button>
  );
}
