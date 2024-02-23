import ExperienceTile, { ExperienceSpacer } from "./experience";

export default function ExperienceSection() {
    return(
        <div className="grid cols-1 flex-wrap justify-center gap-x-0 sm:gap-x-0 md:gap-x-4 lg:gap-x-24 xl: 2xl:gap-x-24">
            <ExperienceTile
              title="University of Augsburg"
              image="/unia.jpeg"
              left={false}
            >
              Currently enrolled in the B.Sc. Business Informatics program with
              a specialization in Informatics at the University of Augsburg,
              which is recognized as the leading German university for the
              degree according to CHE rankings.
            </ExperienceTile>
            <ExperienceSpacer />
            <ExperienceTile
              title="FIM Forschungsinstitut"
              image="/fim.jpg"
              left={true}
            >
              Development of a Webapp with a periodic crawler to look for new
              releases in scientific journals and notify registred scholars via
              E-mail.
            </ExperienceTile>
            <ExperienceSpacer />
            <ExperienceTile title="XITASO" image="/Xitaso.jpg" left={false}>
              Development of a Webapp for Employee and Project Management with
              word portfolio generation in collaboration with the University of
              Augsburg.
            </ExperienceTile>
            <ExperienceSpacer />
            <ExperienceTile title="WOLF" image="/baeckereiwolf.png" left={true}>
              Development of multiple internal applications in addition to
              IT-Project Management.
            </ExperienceTile>
            <ExperienceSpacer />
            <ExperienceTile
              title="MaibornWolff"
              image="/logo-mw-2x.png"
              left={false}
            >
              Multiple projects with a focus in Full-Stack Web-Development with
              a side of DevOps.
            </ExperienceTile>
          </div>
    )
}
