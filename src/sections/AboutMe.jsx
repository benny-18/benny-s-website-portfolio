import Marquee from "@/components/ui/marquee";
import Star8 from "@/components/stars/s8";
import { Button } from "@/components/ui/button";
import Star25 from '@/components/stars/s25';
import Star22 from '@/components/stars/s22';

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
    return <section className="relative w-full overflow-x-hidden flex flex-col items-center">
        <div className="relative w-full">
            <Marquee className="bg-fuschia-main h-20 font-heading font-light" items={items} />

            {/* container for stars components ??*/}
            <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
                
                <Star25 
                    stroke="black" 
                    strokeWidth="0.5" 
                    className="absolute left-0 w-auto -translate-x-1/2 -translate-y-1/2 text-lime-main animate-spin-slow h-[65vh] top-[35%] md:top-1/2"
                />

                <Star22 
                    stroke="black" 
                    strokeWidth="0.5" 
                    className="absolute right-0 w-auto translate-x-1/2 -translate-y-1/2 text-lime-main animate-spin-slow-reverse h-[50vh] top-[70%] md:top-1/2"
                />
            </div>

            <div className="flex items-center justify-center p-10 md:p-20">
                <div className="h-fit max-w-[80vw] md:max-w-[50vw] flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold font-barlow uppercase leading-none tracking-tight pb-4">ABOUT THE DEV</h1>
                    <a className="text-base md:text-xl text-center font-space font-normal md:px-16 pb-6">
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
                        <Button className="basis-2/7 w-full bg-orange-main h-auto flex flex-col items-start justify-between whitespace-normal text-left gap-0">
                            <p className="font-dm font-black text-lg">CORE PHILOSOPHY</p>
                            <p className="font-dm text-base">
                                I value autonomy in work and believe that being able to function independently is one of the strengths I can offer to any team or company.
                            </p>
                        </Button>

                        <div className="basis-5/7 flex flex-col gap-6">

                            <div className="basis-3/5 w-full h-auto items-start justify-center whitespace-normal text-left flex flex-col md:flex-row gap-6">
                                <Button className="basis-3/5 w-full bg-teal-main h-full flex flex-col items-start justify-between whitespace-normal text-left gap-0">
                                    <p className="font-dm font-black text-lg">DOMAIN EXPERTISE</p>
                                    <p className="font-dm text-base">
                                        • Front-end Web Development <br />
                                        • Cross-Platform App Development <br />
                                        • UI/UX Planning & Implementation
                                    </p>
                                </Button>
                                    
                                <Button className="basis-2/5 bg-fuschia-main w-full h-full flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                                    <p className="font-dm font-black text-lg">CREATIVE TOOLS</p>
                                    <p className="font-dm text-base">
                                        Photoshop (Layouts) <br />
                                        Premiere Pro (Videos) <br />
                                        Figma (UI/UX design) <br />
                                    </p>
                                </Button>
                            </div>

                            <div className="basis-3/5 w-full h-full items-start justify-between whitespace-normal text-left flex flex-col md:flex-row gap-6">
                                <Button className="basis-2/5 w-full bg-rose-main h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                                    <p className="font-dm font-black text-lg">TECH STACK</p>
                                    <p className="font-dm text-base">
                                        HTML/CSS, JavaScript (ES6+), Dart, Flutter, React, Laravel, Tailwind CSS, Git, Figma
                                    </p>
                                </Button>

                                <Button className="basis-3/5 w-full h-full bg-sky-main flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                                    <p className="font-dm font-black text-lg">CURRENT FOCUS</p>
                                    <p className="font-dm text-base">
                                        Deep diving into the Vite, React, and Tailwind CSS ecosystem to build a full-stack personal website portfolio.
                                    </p>
                                </Button>
                            </div>

                        </div>
                    </div>

                    {/* TANGINANG CSS GRIDS YAN !!!! */}
                    {/* *i had to use flexbox because css grids were being stubborn af* */}
                
                </div>
            </div>

        </div>
    </section>
};