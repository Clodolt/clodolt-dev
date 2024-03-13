"use client";
import Intro from "./introduction";
import Interest from "./interest";
import ProfessionalSkills from "./professional-skills";
import PersonalSkills from "./personal-skills";
import About from "./about";
import ExperienceSection from "./experienceSection";
import Image from "next/image";
import CVApp from "../../public/CV.gif";

export default function Home() {
  return (
    <div className="p-2.5">
      <div className="relative flex w-full items-center h-screen">
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
          <div className="flex justify-center flex-wrap gap-14">
            <div>
              <p className="text-center text-2xl mt-10 mb-2">Professional</p>
              <p className="text-center mb-10">
                Skills I have used in a professional context
              </p>
              <ProfessionalSkills />
            </div>
            <div>
              <p className="text-center text-2xl mt-10 mb-2">Personal</p>
              <p className="text-center mb-10">
                Skills I have only used in hobby projects
              </p>
              <PersonalSkills />
            </div>
          </div>
        </div>
        <div className="w-full mb-64">
          <p className="text-center text-3xl my-10">Education and Career</p>
          <ExperienceSection />
        </div>
        <div className="w-full mb-64">
          <div className="grid grid-cols-1">
            <About />
          </div>
        </div>
        <div className="w-full mb-64">
          <p className="text-center text-3xl my-10">Personal Projects</p>
          <div className="grid grid-cols-1">
            <div className="p-4 flex flex-col items-center w-96 h-64 bg-gray-900 rounded-xl shadow-lg shadow-gray-700">
              <Image className="m-auto" src={CVApp} alt="CV App" />
              <p className="text-center text-lg mt-auto">CV App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
