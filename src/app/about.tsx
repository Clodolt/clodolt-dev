import Image from "next/image";
import portrait from "../../public/portrait.png";

export default function About() {
  return (
    <div className="grid grid-cols-2">
      <div className="max-w-lg mr-0 ml-auto">
        <p className="text-justify font-bold">Nice to meet you...</p>
        <p>
          Ever since my first console - the GameCube - when I was just a
          toddler, I have been fascinated by technology. Be it occupying the
          family PC the whole day since I was 6, or building my first own PC
          when I was 12, I have always known that I want to be close to tech in
          the future.
        </p>
        <p className="mt-2 text-justify">
          The first proper contact with programming was when I tried to code my
          own Minecraft Plugin with the age of 14 (which was a disaster). Just
          trying to figure out Java and fix my plugin late into the night made
          me realize that I want to do this for a living, so here I am today.
        </p>
      </div>
      <div className="relative justify-center text-center ml-12">
        <div className="absolute w-56 h-56 rounded-full ml-8 opacity-90 from-gray-700 to-white bg-gradient-to-bl"></div>
        <Image
          src={portrait}
          alt="portrait of me"
          className="rounded-full w-56 relative z-10"
        />
      </div>
    </div>
  );
}
