import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { socialMedias } from "../constants";

const links = [
    { tag: 'Index', href: '#' },
    { tag: 'Skills', href: '#skills' },
    { tag: 'Projects', href: '#projects' },
    { tag: 'Contact', href: '#contact' },
];


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const topBar = useRef();
    const botBar = useRef();
    const menuTab = useRef();
    const menuTags = useRef([]);
    const menuSocials = useRef();
    const tl = useRef();



    useEffect(() => {
        if (isOpen) {
            gsap.to(topBar.current, {
                rotate: 225,
                y: 0,
                duration: 0.7,
                ease: "power2.inOut",
            });
            gsap.to(botBar.current, {
                rotate: 135,
                y: 0,
                duration: 0.7,
                ease: "power2.inOut",
            });
            
            document.body.style.overflow = 'hidden';
        } else {
            gsap.to(topBar.current, {
                rotate: 0,
                y: 3,
                duration: 0.7,
                ease: "power2.inOut",
            });
            gsap.to(botBar.current, {
                rotate: 0,
                y: -3,
                duration: 0.7,
                ease: "power2.inOut",
            });
            document.body.style.overflowY = 'auto';

        }
    }, [isOpen]);


    return (
        <div className="relative flex  w-[100%] h-[100%] navbar">
            <div className="z-50 flex w-full justify-between items-center py-10 sm:py-5 px-10 ">
                <div className="cursor-pointer">
                    <h1 className="text-6xl logo" ><span className={isOpen ? 'text-[#161616]' : 'text-[#FEFAF7]'}>S</span><span className={isOpen ? 'text-4xl text-[#6e6e6e]' : 'hidden'}>aksham.</span></h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="smallText cursor-pointer hidden sm:flex">
                        <p className={isOpen ? 'text-[#161616]' : 'text-[#FEFAF7]'}>sakshamorig123@gmail.com</p>
                    </div>
                    <div className="bg-[#FEFAF7] text-[#161616] h-[58px] w-[58px] rounded-full flex items-center justify-center cursor-pointer menuCircle" onClick={() => setIsOpen(!isOpen)}>
                        <div className="h-full w-full flex flex-col justify-center items-center relative">
                            <div ref={topBar} className="bg-[#161616] h-[2px] w-[28px] rounded-full absolute origin-center"></div>
                            <div ref={botBar} className="bg-[#161616] h-[2px] w-[28px] rounded-full absolute origin-center"></div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div ref={menuTab} className="bg-[#FEFAF7] text-[#161616] absolute w-[100%] h-[100vh] z-10 px-10 py-5">
                    <div className="pt-36 md:pt-28">
                        <ul className="w-full h-full flex flex-col items-center justify-center">
                            {
                                links.map(({ tag, href }, index) => (
                                    <li key={tag}>
                                        <a className="text-[10vh] " href={href}>{tag}</a>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>

                    <h1 className="flex items-center justify-center pt-10 text-xl ">Socials</h1>
                    <div r className="flex flex-row items-center justify-center  gap-4">
                        {
                            socialMedias.map(({ name, href }) => (
                                <a key={name} className="text-[#161616] tracking-wide text-lg" href={href}>{name}</a>
                            ))
                        }
                    </div>
                </div>
            )}


        </div>
    )
}

export default Navbar
