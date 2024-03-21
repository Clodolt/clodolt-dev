"use client";
import Intro from "./introduction";
import Interest from "./interest";
import ProfessionalSkills from "./professional-skills";
import PersonalSkills from "./personal-skills";
import About from "./about";
import ExperienceSection from "./experienceSection";
import Image from "next/image";
import CVApp from "../../public/projects/CVProject.gif";
import DiscordBot from "../../public/projects/Bot.gif";
import Tooki from "../../public/projects/tookiorg.gif";
import Rezept from "../../public/projects/Rezept.png";
import ProjectTile from "./projectTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
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
            <Interest name="Frontend" image="/interests/React-icon.svg" />
            <Interest name="Backend" image="/interests/Spring_Boot.svg.png" />
            <Interest
              name="DevOps"
              image="/interests/Kubernetes-icon-color.svg"
            />
            <Interest name="Consumer tech" image="/interests/gpu.png" />
            <Interest
              name="Extended reality"
              image="/interests/vr-glasses.png"
            />
            <Interest
              name="Artificial intelligence"
              image="/interests/ai.png"
            />
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
          <div className="flex mx-auto items-center justify-evenly flex-wrap gap-8">
            <ProjectTile image={Tooki} name="Tooki.org">
              <p>
                A Web Applicaton built to support players in the MMORPG Lost Ark
              </p>
              <p className="mt-2">
                <b>Tech-Stack:&nbsp;</b>
                <span>
                  JavaScript, Node, Vue.js, PHP, Laravel, Symfony, MySQL,
                  SignalR
                </span>
              </p>
            </ProjectTile>
            <ProjectTile image={DiscordBot} name="Bot207">
              <p>
                A DiscordBot tailored to my Servers needs with an advanced
                custom Music Player!
              </p>
              <p className="mt-2">
                <b>Tech-Stack:&nbsp;</b>
                <span>TypeScript, Node, DiscordJS, MongoDB</span>
              </p>
            </ProjectTile>
            <ProjectTile image={DiscordBot} name="Portfolio">
              <p>
                The website you are currently on with an API Service for some
                smaller projects.
              </p>
              <p className="mt-2">
                <b>Tech-Stack:&nbsp;</b>
                <span>TypeScript, Node, React, Next.js, Three.js</span>
              </p>
            </ProjectTile>
            <ProjectTile image={Rezept} name="RezAppt">
              <p>
                A recipe book and meal planner, using AI for meal suggestions!
                (WIP)
              </p>
              <p className="mt-2">
                <b>Tech-Stack:&nbsp;</b>
                <span>
                  TypeScript, React, Java, Spring Boot, Hibernate, PostgresSQL
                </span>
              </p>
            </ProjectTile>
          </div>
        </div>
        {showModal && (
          <div className="fixed flex w-full h-full top-0 left-0 bg-gray-700 bg-opacity-30 justify-center items-center z-[999]" onClick={() => {setShowModal(false)}} >
          <div className="p-8 flex flex-col w-2/3 h-4/5 items-center relative bg-gray-900 rounded-xl shadow-lg shadow-gray-700">
            <div className="absolute flex items-center justify-center w-10 h-10 -right-4 -top-4 bg-slate-700 rounded-full hover:cursor-pointer hover:bg-white hover:text-black">
              <FontAwesomeIcon icon={faTimes} size="xl" />
            </div>
            <div className="w-full h-full relative">
              <Image src={Tooki} alt="Tooki" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
