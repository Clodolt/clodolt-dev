"use client";
import React, { useEffect, useState } from "react";

const occupations: string[] = [
  "Fullstack-Developer...",
  "DevOps Engineer...",
  "Student...",
  "Gamer...",
  "Hobby cook...",
];

export default function Intro() {
  const [currentOccupation, setCurrentOccupation] = useState<string>(occupations[0]);
  const [occupationIndex, setOccupationIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typing) {
      if (currentOccupation.length < occupations[occupationIndex].length) {
        timeoutId = setTimeout(() => {
          setCurrentOccupation(
            occupations[occupationIndex].substring(0, currentOccupation.length + 1)
          );
        }, 100);
      } else {
        timeoutId = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (currentOccupation.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentOccupation((current) => current.substring(0, current.length - 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setOccupationIndex((occupationIndex + 1) % occupations.length);
          setTyping(true);
        }, 100);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentOccupation, typing, occupationIndex]);

  return (
    <div>
      <h1 className="text-5xl">Hello there, I&apos;m Clodolt,</h1>
      <p className="text-5xl" aria-live="polite">{"a " + currentOccupation}</p>
      <h2 className="text-xl mt-3 font-normal">
        with a passion for coding and the newest tech.
      </h2>
    </div>
  );
}
