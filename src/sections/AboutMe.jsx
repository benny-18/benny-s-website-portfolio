import Marquee from "@/components/ui/marquee";
import Star8 from "@/components/stars/s8";
import { Button } from "@/components/ui/button";

const items = [
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />,
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />,
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />,
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />,
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />,
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />,
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />,
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />,
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />,
    'ABOUT ME',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-lime-main" />
];

export const AboutMe = () => {
    return <section className="w-screen flex flex-col items-center">
        <Marquee className="bg-fuschia-main h-20 font-heading font-light" items={items} />

        <div className="p-10 md:p-20">
            <div className="h-fit md:max-w-[50vw] flex flex-col items-start justify-center">
                <h1 className="text-5xl md:text-7xl font-extrabold font-barlow uppercase leading-none pb-4">ABOUT THE DEV</h1>
                <a className="text-base md:text-xl text-start font-space font-normal pb-4">
                    Specializing in robust cross-platform applications with Flutter, now expanding into full-stack web architecture using React and Vite. Below is a snapshot of my technical toolkit, academic background, and development philosophy.
                </a>

                <div className="relative flex flex-col md:flex-row gap-6 pb-6">
                    <Button className="basis-3/7 bg-fuschia-main w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                        <p className="font-dm font-black text-lg">ABOUT ME</p>
                        <p className="font-dm text-base">
                            I am Marvin. I am passionate about exploring cross-platform development and modern front-end web design.
                        </p>
                    </Button>

                    <Button className="basis-2/7 w-full bg-yellow-main h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                        <p className="font-dm font-black text-lg">EDUCATION</p>
                        <p className="font-dm text-base">
                            BS Information Technology @ Leyte Normal University. Class of 2026.
                        </p>
                    </Button>

                    <Button className="basis-2/7  bg-lime-main w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                        <p className="font-dm font-black text-lg">LOCATION</p>
                        <p className="font-dm text-base">
                            Based in Tacloban City, Philippines 🇵🇭 Currently open for OJT / Junior roles
                        </p>
                    </Button>
                </div>

                <div className="relative flex flex-col md:flex-row gap-6 pb-6">
                    <Button className="basis-2/7 w-full bg-orange-main h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                        <p className="font-dm font-black text-lg">CORE PHILOSOPHY</p>
                        <p className="font-dm text-base">
                            I value autonomy in work and believe that being able to function independently is one of the strengths I can offer to any team or company.
                        </p>
                    </Button>

                    <div className="basis-5/7 flex flex-col gap-6">

                        <div className="basis-3/5 w-full h-auto items-start justify-start whitespace-normal text-left flex flex-col md:flex-row gap-6">
                            <Button className="basis-3/5 w-full bg-teal-main h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                                <p className="font-dm font-black text-lg">DOMAIN EXPERTISE</p>
                                <p className="font-dm text-base">
                                    • Front-end Web Development <br />
                                    • Cross-Platform App Development <br />
                                    • UI/UX Planning & Implementation
                                </p>
                            </Button>
                                
                            <Button className="basis-2/5 bg-fuschia-main w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                                <p className="font-dm font-black text-lg">CREATIVE TOOLS</p>
                                <p className="font-dm text-base">
                                    Photoshop (Photos, layouts) <br />
                                    Premiere Pro (Video editing) <br />
                                    Figma (UI/UX design, proto) <br />
                                </p>
                            </Button>
                        </div>

                        <div className="basis-3/5 w-full h-auto items-start justify-start whitespace-normal text-left flex flex-col md:flex-row gap-6">
                            <Button className="basis-2/5 w-full bg-rose-main h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                                <p className="font-dm font-black text-lg">TECH STACK</p>
                                <p className="font-dm text-base">
                                    HTML/CSS, JavaScript (ES6+), Dart, React, Laravel, Flutter, Tailwind CSS, Git, Figma
                                </p>
                            </Button>

                            <Button className="basis-3/5 w-full h-auto bg-sky-main flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                                <p className="font-dm font-black text-lg">CURRENT FOCUS</p>
                                <p className="font-dm text-base">
                                    Deep diving into the React & Vite ecosystem to build a full-stack website portfolio. ajshdajshdajshdkahsjdhakjsdhkasjd
                                </p>
                            </Button>
                        </div>

                    </div>
                </div>

                {/* TANGINANG CSS GRIDS YAN !!!! */}
                {/* *i had to use flexbox because css grids were being stubborn af* */}
            
            </div>
        </div>
    </section>
};