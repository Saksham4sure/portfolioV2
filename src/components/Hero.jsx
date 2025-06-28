import { useState } from "react";
import { socialLinks } from "../constants";

const heroText = [
    { text: "saksham" },
    { text: "frontend developer*" },
    { text: "still figuring it out." },
]


const Hero = () => {
    const [showPhoto, setShowPhoto] = useState(false);

    const togglePhoto = () => {
        setShowPhoto(!showPhoto);
    };

    return (
        <>
            <div className="relative h-[100vw] sm:h-[400px] px-10 mt-20 md:mt-10 " onClick={togglePhoto}>
                <div className="w-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img className="h-[100vw] sm:h-[400px] object-cover w-auto " src="/photo.jpg" alt="" />
                </div>
                <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {
                        heroText.map(({ text }) => (
                            <h1 className="largeText text-center text-[13vw] md:text-7xl lg:text-8xl tracking-tight">{text}</h1>

                        ))
                    }
                </div>
                <div className="w-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
                    <img className={`h-[100vw] sm:h-[400px] object-cover w-auto ${showPhoto ? "opacity-100" : "opacity-0"} opacity-30 hover:opacity-100 transition-opacity duration-500`} src="/photo2.png" alt="" />
                </div>
            </div>
            <div className="flex items-center justify-between px-10 py-10 text-center">
                <div className="cursor-default">
                    <p className="text-xl smallText">get in touch</p>
                </div>
                <div className="flex justify-center gap-3 items-center just">
                    {
                        socialLinks.map(({ id, href }) => (
                            <a href={href}>
                                <i key={id} className={`${id} text-xl`} />
                            </a>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Hero
