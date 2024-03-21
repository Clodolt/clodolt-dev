import { useEffect, useRef, useState } from "react";
import Interest from "./interest";

const interestsMap = {
    "Frontend": "/interests/React-icon.svg",
    "Backend": "/interests/Spring_Boot.svg.png",
    "DevOps": "/interests/Kubernetes-icon-color.svg",
    "Consumer tech": "/interests/gpu.png",
    "Extended reality": "/interests/vr-glasses.png",
    "Artificial intelligence": "/interests/ai.png",
  };
  

export default function InterestSection() {
    const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
    return (
    <div ref={ref} className="flex justify-center flex-wrap gap-14">
      {Object.entries(interestsMap).map(([name, image], index) => (
        <Interest key={name} name={name} image={image} isVisible={isVisible} 
        animationDelay={index * 100} />
      ))}
    </div>
  );
}