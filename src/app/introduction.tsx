"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Intro() {
  let introduction: string = "a";
  let occupations: string[] = [
    "Fullstack-Developer...",
    "DevOps Engineer...",
    "Student...",
    "Gamer...",
    "Hobby cook...",
  ];
  const [currentOccupation, setCurrentOccupation] = useState<string>(
    occupations[0]
  );
  const [occupationIndex, setOccupationIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (typing) {
      if (currentOccupation.length < occupations[occupationIndex].length) {
        timeoutId = setTimeout(() => {
          setCurrentOccupation(
            occupations[occupationIndex].substring(
              0,
              currentOccupation.length + 1
            )
          );
        }, 100);
      } else {
        timeoutId = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (currentOccupation.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentOccupation((current) =>
            current.substring(0, current.length - 1)
          );
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setOccupationIndex((occupationIndex + 1) % occupations.length);
          setTyping(true);
        }, 100);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentOccupation, typing, occupationIndex, occupations]);

  return (
    <div>
      <h1 className="text-5xl">Hello there, I&apos;m Clodolt,</h1>
      <h1 className="text-5xl">{introduction + " " + currentOccupation}</h1>
      <h3 className="text-xl mt-3">
        with a passion for coding and the newest tech.
      </h3>
    </div>
  );
}
