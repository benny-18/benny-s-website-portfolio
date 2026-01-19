import { Button } from "@/components/ui/button";
import { Send, Instagram, Github, Linkedin } from "lucide-react";

const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills & Projects', href: '#skills-projects' },
    { label: 'Creative Vault', href: '#creative-vault' },
    { label: 'Contact', href: '#contact' },
];

export const Footer = () => {
    return <section className="bg-teal-main w-full h-auto border-t-2">
        <div className="relative w-full flex flex-col md:flex-row gap-12 md:gap-0 justify-between">

            <div className="basis-1/3 flex flex-col items-center gap-0 md:border-r-2 border-b-2 p-10">
                <a className="text-7xl font-extrabold font-barlow uppercase leading-none tracking-tighter">MARVIN</a>
                <a className="text-7xl font-extrabold font-barlow uppercase leading-none tracking-tighter">MASUBAY</a>
                <p className="text-xl font-space text-start font-normal my-2"> Developer and designer.</p>
                <div className="flex items-center pt-2 gap-3">
                <Button asChild={true} className="font-space text-base uppercase bg-lime-main">
                    <a href="#contact">
                        <Send />
                        Contact now
                    </a>
                </Button>
                <Button size="icon" className="bg-orange-main">
                    <a href="https://github.com/benny-18/" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                </Button>
                <Button size="icon" className="bg-orange-main">
                    <a href="https://www.linkedin.com/in/marvin-masubay-a62407252/" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                    </a>
                </Button>
                </div>
            </div>

            <div className="basis-1/3 flex flex-col items-center gap-0 md:border-r-2 md:border-b-2 md:p-10">
                <a className="text-4xl font-extrabold font-barlow uppercase leading-none tracking-tighter pb-4">QUICK LINKS</a>
                {navigationLinks.map((link, index) => (
                    <a className="uppercase whitespace-normal font-space font-black px-3 cursor-pointer hover:bg-orange-main hover:outline-2 outline-black rounded-lg p-2 block hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:active:shadow-none hover:translate-x-2px hover:translate-y-2px transition-all" href={link.href} key={index}>{link.label}</a>
                ))}
            </div>

            <div className="hidden basis-1/3 md:flex flex-col gap-0 border-b-2 p-10">

            </div>
        </div>

        <div className="h-auto md:border-t-0 flex flex-col md:flex-row items-center justify-between p-12 gap-4">
            <div className="flex flex-col md:flex-row md:gap-1">
                <p className="text-center text-base font-space">© 2026 Marvin Masubay.</p>
                <p className="text-center text-base font-space">All rights reserved.</p>
            </div>

            <p className="text-center text-base font-space">Built with<img className="inline-block relative -top-[2px] mx-1" src="https://simpleicons.org/icons/vite.svg" width="20"></img>Vite,<img className="inline-block relative -top-[2px] mx-1" src="https://simpleicons.org/icons/react.svg" width="20"></img>React, and<img className="inline-block relative -top-[2px] mx-1" src="https://simpleicons.org/icons/tailwindcss.svg" width="20"></img>Tailwind CSS.</p>
        </div>
    </section>
};