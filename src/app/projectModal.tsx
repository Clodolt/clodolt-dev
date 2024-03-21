import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImageData } from "next/image"
import Image from "next/image";

interface Props {
    image: StaticImageData | undefined;
    handleClose: () => void;
}

export default function ProjectModal({image, handleClose}: Props) {

    return (
        
            <div className="fixed flex w-full h-full top-0 left-0 bg-gray-700 bg-opacity-30 justify-center items-center z-[999]" onClick={()=>{handleClose()}} >
            <div className="p-8 flex flex-col w-2/3 h-4/5 items-center relative bg-gray-900 rounded-xl shadow-lg shadow-gray-700">
              <div className="absolute flex items-center justify-center w-10 h-10 -right-4 -top-4 bg-slate-700 rounded-full hover:cursor-pointer hover:bg-white hover:text-black" onClick={()=>{handleClose()}}>
                <FontAwesomeIcon icon={faTimes} size="xl" />
              </div>
              <div className="w-full h-full relative">
                {image && (<Image src={image} alt="Tooki" layout="fill" objectFit="contain" />)}
              </div>
            </div>
          </div>
          
    )
}