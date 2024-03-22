import { useEffect, useRef, useState } from "react";
import Interest from "./interest";
  

export default function InterestSection() {
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
        <div ref={ref} className={`flex justify-center flex-wrap gap-14 transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition duration-700 ease-out`}>
            <Interest name="Frontend" image="/interests/React-icon.svg" />
            <Interest name="Backend" image="/interests/Spring_Boot.svg.png" />
            <Interest
              name="DevOps"
              image="/interests/Kubernetes-icon-color.svg"
            />
            <Interest name="Consumer Tech" image="/interests/gpu.png" />
            <Interest
              name="Extended Reality"
              image="/interests/vr-glasses.png"
            />
            <Interest
              name="Artificial Intelligence"
              image="/interests/ai.png"
            />
          </div>
    )
  }
