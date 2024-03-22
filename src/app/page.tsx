"use client";
import Intro from "./introduction";
import ProfessionalSkills from "./professional-skills";
import PersonalSkills from "./personal-skills";
import About from "./about";
import ExperienceSection from "./experienceSection";
import { StaticImageData } from "next/image";
import { useState } from "react";
import ProjectModal from "./projectModal";
import InterestSection from "./interest-section";
import ProjectSection from "./project-section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [projectModalImage, setProjectModalImage] = useState<StaticImageData>();

  const handleProjectModalChange = (image: StaticImageData) => {
    setProjectModalImage(image);
    setShowModal(true);
  }

  const handleProjectModalClose = () => {
    setShowModal(false);
  }
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
          <InterestSection />
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
          <ProjectSection handleProjectModalChange={handleProjectModalChange}  />
        </div>
        <div className="w-full mb-64">
        <p className="text-center text-3xl my-10">Contact me here!</p>

            <div className="flex items-center justify-center gap-14">
            <Link href="https://github.com/Clodolt" target='_blank' className="m-4">
            <FontAwesomeIcon icon={faGithub} color="white" size="2x" className="hover:scale-125"/>
            </Link>
            <Link href="https://www.linkedin.com/in/tim-chen-1912b31a4/" target='_blank' className="m-4">
            <FontAwesomeIcon icon={faLinkedin} color="white" size="2x" className="hover:scale-125"/>
            </Link>
            <Link href="https://twitter.com/timdaltonchen" target='_blank' className="m-4">
            <FontAwesomeIcon icon={faTwitter} color="white" size="2x" className="hover:scale-125"/>
            </Link>
            <Link href="mailto:Tim.chen@outlook.de" className="m-4">
            <FontAwesomeIcon icon={faEnvelope} color="white" size="2x" className="hover:scale-125"/>
            </Link>
            </div>
          
        </div>
        {showModal && <ProjectModal image={projectModalImage} handleClose={handleProjectModalClose} />}
      </div>
    </div>
  );
}
