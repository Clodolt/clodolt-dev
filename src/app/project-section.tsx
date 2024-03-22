import ProjectTile from "./projectTile";
import DiscordBot from "../../public/projects/Bot.gif";
import Tooki from "../../public/projects/tookiorg.gif";
import Rezept from "../../public/projects/Rezept.png";
import Portfolio from "../../public/projects/Portfolio.gif";
import { StaticImageData } from "next/image";

interface Props {
    handleProjectModalChange: (image: StaticImageData) => void;
}

export default function ProjectSection({handleProjectModalChange}: Props) {
    return (
        <div className="flex mx-auto items-center justify-evenly flex-wrap gap-8">
            <ProjectTile image={Tooki} name="Tooki.org" handleModalChange={handleProjectModalChange}>
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
            <ProjectTile image={DiscordBot} name="Bot207" handleModalChange={handleProjectModalChange}>
              <p>
                A DiscordBot tailored to my Servers needs with an advanced
                custom Music Player!
              </p>
              <p className="mt-2">
                <b>Tech-Stack:&nbsp;</b>
                <span>TypeScript, Node, DiscordJS, MongoDB</span>
              </p>
            </ProjectTile>
            <ProjectTile image={Portfolio} name="Portfolio" handleModalChange={handleProjectModalChange}>
              <p>
                The website you are currently on. To show off some of the projects I have been working on.
              </p>
              <p className="mt-2">
                <b>Tech-Stack:&nbsp;</b>
                <span>TypeScript, Node, React, Next.js, Three.js</span>
              </p>
            </ProjectTile>
            <ProjectTile image={Rezept} name="RezAppt" handleModalChange={handleProjectModalChange}>
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
    )
}