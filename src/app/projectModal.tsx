import { useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image, { StaticImageData } from "next/image";

interface Props {
    image: StaticImageData | undefined;
    name: string;
    video?: string;
    handleClose: () => void;
}

export default function ProjectModal({ image, name, video, handleClose }: Props) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [handleClose]);

    return (
        <div className="fixed flex w-full h-full top-0 left-0 bg-gray-700 bg-opacity-30 justify-center items-center z-[999]" onClick={handleClose}>
            <div role="dialog" aria-modal="true" aria-label={`${name} preview`} className="p-8 flex flex-col w-2/3 h-4/5 items-center relative bg-gray-900 rounded-xl shadow-lg shadow-gray-700" onClick={(e) => e.stopPropagation()}>
              <button type="button" aria-label="Close" className="absolute flex items-center justify-center w-10 h-10 -right-4 -top-4 bg-slate-700 rounded-full hover:cursor-pointer hover:bg-white hover:text-black" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} size="xl" />
              </button>
              <div className="w-full h-full relative">
                {video ? (
                  <video src={video} poster={image?.src} autoPlay muted loop playsInline controls aria-label={name} className="absolute inset-0 w-full h-full object-contain" />
                ) : (
                  image && (<Image src={image} alt={name} fill sizes="66vw" className="object-contain" />)
                )}
              </div>
            </div>
        </div>
    )
}
