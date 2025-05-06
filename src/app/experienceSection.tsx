import { useEffect, useRef, useState } from "react";
import ExperienceTile, { ExperienceSpacer } from "./experience";

export default function ExperienceSection() {
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

    return(
        <div ref={ref} className={`flex flex-col items-center gap-y-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition duration-700 ease-out`}>
            <ExperienceTile
              title="University of Augsburg"
              image="/unia.jpeg"
              left={false}
            >
              <p className="font-bold">10/2019 - Now</p>
              <ul className="list-disc mt-2 text-justify tracking-tighter">
                <li>Enrolled in the B.Sc. Business Informatics program</li>
                <li className="mt-2">Specialization in computer science</li>
              </ul>
            </ExperienceTile>
            <ExperienceSpacer />
            <ExperienceTile
              title="FIM Forschungsinstitut"
              image="/fim.jpg"
              left={true}
            >
              <p className="font-bold">05/2020 - 09/2020</p>
              <ul className="list-disc mt-2 text-justify tracking-tighter">
                <li>Development of a Webcrawler Webapp to support scholars in collaboration with the University</li>
                <li className="mt-2">Python, JavaScript, Django, Bootstrap, Scrapy, MariaDB</li>
              </ul>
            </ExperienceTile>
            <ExperienceSpacer />
            <ExperienceTile title="XITASO" image="/Xitaso.jpg" left={false}>
            <p className="font-bold">04/2021 - 08/2021</p>
              <ul className="list-disc mt-2 text-justify tracking-tighter">
                <li>Development of a Webapp for Employee and Project Management in collaboration with the University</li>
                <li className="mt-2">C#, Microsoft SQL Server, JavaScript, ASP.NET, Docker, Blazor, Microsoft Azure</li>
              </ul>
            </ExperienceTile>
            <ExperienceSpacer />
            <ExperienceTile title="WOLF" image="/baeckereiwolf.png" left={true}>
            <p className="font-bold">10/2020 - 09/2022</p>
              <ul className="list-disc mt-2 text-justify tracking-tighter">
                <li>Development of multiple internal applications in addition to
              IT-Project Management.</li>
                <li className="mt-2">PHP, TypeScript, Raspberry Pi, MySQL, Symfony React, Next.js, PostgreSQL, Material-UI, and Cypress.io</li>
              </ul>
            </ExperienceTile>
            <ExperienceSpacer />
            <ExperienceTile
              title="MaibornWolff"
              image="/logo-mw-2x.png"
              left={false}
            >
              <p className="font-bold">09/2022 - Now</p>
              <ul className="list-disc mt-2 text-justify tracking-tighter">
                <li>Multiple projects with a focus in Full-Stack Web-Development, AI and DevOps. Developed a DevOps AI Bot. Currently working in a project for BMW</li>
                <li className="mt-2">Java, Kotlin, Spring Boot, MongoDB, TypeScript, Angular, Python, Langchain, Docker, Kubernetes, JUnit, React, Remix, Prisma, PostgreSQL, Azure DevOps</li>
              </ul>
            </ExperienceTile>
          </div>
    )
}
