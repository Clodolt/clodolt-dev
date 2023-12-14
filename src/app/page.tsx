"use client";
import React, { useEffect, useState } from "react";
import Intro from "./introduction";
import Interest from "./interest";

export default function Home() {
  return (
    <div className="p-2.5">
      <div className="relative flex w-full items-center  h-screen">
        <div className="z-10 mb-8 ml-6 mt-4 text-left sm:mb-20 sm:ml-24 sm:mt-[20vh]">
          <Intro />
        </div>
      </div>
      <div className="px-14">
        <div className="w-full mb-64">
          <p className="text-center text-3xl my-10">Current obesessions</p>
          <div className="flex justify-center flex-wrap gap-14">
            <Interest name="Frontend" image="/React-icon.svg" />
            <Interest name="Backend" image="/Spring_Boot.svg.png" />
            <Interest name="DevOps" image="/Kubernetes-icon-color.svg" />
            <Interest name="Consumer tech" image="/gpu.png" />
            <Interest name="Extended reality" image="/vr-glasses.png" />
            <Interest name="Artificial intelligence" image="/ai.png" />
          </div>
          <p className="text-center my-10">and much more!</p>
        </div>
        <div className="w-full mb-64">
          <p className="text-center text-3xl my-10">Skills</p>
        </div>
      </div>
    </div>
  );
}
