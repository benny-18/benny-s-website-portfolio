import Marquee from "@/components/ui/marquee";
import Star8 from "@/components/stars/s8";
import { Button } from "@/components/ui/button";
import sisms from "@/assets/coding-projects-screenshots/sisms.png";
import { Badge } from "@/components/ui/badge";
import { Send, Github } from "lucide-react";
import petify from "@/assets/coding-projects-screenshots/petify.png";
import campuswise from "@/assets/coding-projects-screenshots/campuswise.png";
import dirtx from "@/assets/coding-projects-screenshots/dirtx-ui.png";
import ImageMarquee from "@/components/ui/imagemarquee";

const items = [
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />,
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />,
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />,
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />,
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />,
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />,
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />,
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />,
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />,
    'SKILLS & PROJECTS',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-violet-main" />
];

export const SkillsProjects = () => {
    return <section className="w-screen flex flex-col items-center">
        <Marquee className="bg-yellow-main h-20 font-heading font-light" items={items} />

        <div className="pt-10 mb-20 md:pt-20 max-w-[80vw] md:max-w-[40vw]">
            <div className="h-auto flex flex-col items-start justify-start">
                <h1 className="text-5xl md:text-7xl font-extrabold font-barlow uppercase leading-none pb-4">PROJECT<br/>HIGHLIGHTS</h1>
                <a className="text-base md:text-xl text-start font-space font-normal pb-8">
                    Key works from my undergraduate years
                </a>

                <div className="relative before:absolute before:left-15 before:top-0 before:z-[-1] before:h-full before:w-[2px] before:bg-black before:content-['']">
                     <div className="flex flex-col gap-10">

                        <Button className="bg-yellow-main w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                            <p className="font-dm text-base">
                                Throughout my four years of academic journey, I&apos;ve worked on several IT-related projects, many of which I&apos;m proud to have completed in my own way. These are some of my most memorable ones.
                            </p>
                        </Button>

                        <Button className="bg-yellow-bg w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                            <img className="my-2 rounded-sm md:rounded-base outline-2 outline-black" src={sisms} ></img>
                            <div className="flex gap-1">
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">VB.NET</Badge>
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">Guna2.UI</Badge>
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">MySQL</Badge>
                            </div>
                            <p className="font-dm text-base pb-2">
                                <span className="font-bold">LNU-IGP SISMS (Income-Generating Park Stalls Inventory & Sales Management System)</span> is a centralized management platform for the Leyte Normal University Trade Park designed to oversee products, stalls, and sales performance. The application facilitates secure user sessions for admins and owners, offering robust tools for stall profile customization and product lifecycle management.
                            </p>
                            <Button className="flex font-space bg-yellow-main mb-4">
                                <a href="https://github.com/benny-18/IGP-SISMS" target="_blank" rel="noopener noreferral" className="flex flex-row items-center gap-1">
                                    <Github />
                                    Visit repository
                                </a>
                            </Button>
                        </Button>

                        <Button className="bg-yellow-main w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                            <p className="font-dm text-base">
                                I&apos;ve grown especially interested in the process of UI planning, design, and development, particularly in our web and app development courses.
                            </p>
                        </Button>

                        <Button className="bg-yellow-bg w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                            <img className="my-2 rounded-sm md:rounded-base outline-2 outline-black" src={petify} ></img>
                            <div className="flex gap-1">
                                {/* <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">HTML/CSS</Badge> */}
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">Angular</Badge>
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">Laravel</Badge>
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">Livewire</Badge>
                            </div>
                            <p className="font-dm text-base pb-2">
                                <span className="font-bold">Petify</span> is a Laravel web application that allows users to create, edit, and export professional lost & found pet posters using a variety of templates. It features a live preview powered by Livewire, automatic thumbnail generation, and export to PNG or PDF.
                            </p>
                            <Button className="flex font-space bg-yellow-main mb-4">
                                <a href="https://github.com/benny-18/Petify" target="_blank" rel="noopener noreferral" className="flex flex-row items-center gap-1">
                                    <Github />
                                    Visit repository
                                </a>
                            </Button>
                        </Button>

                        <Button className="bg-yellow-main w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                            <p className="font-dm text-base">
                                I also explored projects involving AI, like LLMs for chatbots and CNNs for image detection systems, which I truly enjoyed learning and building with my peers.
                            </p>
                        </Button>

                        <Button className="bg-yellow-bg w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                            <img className="my-2 rounded-sm md:rounded-base outline-2 outline-black" src={campuswise} ></img>
                            <div className="flex gap-1">
                                {/* <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">HTML/CSS</Badge> */}
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">Express.js</Badge>
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">LangChain</Badge>
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">llama3.2</Badge>
                            </div>
                            <p className="font-dm text-base pb-2">
                                <span className="font-bold">LNU Campuswise</span> is a chatbot-based Student Manual system for undergraduate students of Leyte Normal University, which uses Retrieval-Augmented Generation (RAG) with Meta&apos;s llama3.2 and LangChain to answer questions from the handbook via a web interface.
                            </p>
                            <Button className="flex font-space bg-yellow-main mb-4">
                                <a href="https://github.com/benny-18/CampusWise" target="_blank" rel="noopener noreferral" className="flex flex-row items-center gap-1">
                                    <Github />
                                    Visit repository
                                </a>
                            </Button>
                        </Button>

                        <Button className="bg-yellow-bg w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                            <img className="my-2 rounded-sm md:rounded-base outline-2 outline-black" src={dirtx} ></img>
                            <div className="flex gap-1">
                                {/* <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">HTML/CSS</Badge> */}
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">Flutter</Badge>
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">YOLOv9</Badge>
                                <Badge className="text-xs font-space whitespace-break-spaces mt-2 mb-2 bg-yellow-main">Flask</Badge>
                            </div>
                            <p className="font-dm text-base pb-2">
                                <span className="font-bold">DIRTX</span> is a Flutter application that assists early detection of harmful  algal blooms (red tide) by analyzing drone images and pre-recorded images and videos using machine learning and computer-vision workflows. The app is a decision-support tool for authorized marine biologists and  environmental agencies to visualize and review possible red tide clusters.
                            </p>
                            <Button className="flex font-space bg-yellow-main mb-4">
                                <a href="https://github.com/benny-18/DIRTX" target="_blank" rel="noopener noreferral" className="flex flex-row items-center gap-1">
                                    <Github />
                                    Visit repository
                                </a>
                            </Button>
                        </Button>

                        <Button className="bg-yellow-main w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                            <p className="font-dm text-base">
                                What I enjoy most in this field is that I&apos;m always learning not just from my instructors but also from my friends, side projects, and the little interests I discover along the way. After graduation, I hope to land a job, continue working on meaningful projects and keep growing as a tech professional.                        
                            </p>
                        </Button>

                        <Button className="bg-yellow-main w-full h-auto flex flex-col items-start justify-start whitespace-normal text-left gap-0">
                            <p className="font-dm text-base">
                                While I love the logic and structure of coding, I also find immense satisfaction in pure visual creativity. I believe that exploring disciplines like graphic design, layout, and photography sharpens my aesthetic eye and makes me a more well-rounded developer focused on the entire user experience.
                            </p>
                        </Button>

                        {/* <Button className="bg-violet-main w-full h-16 flex flex-col items-center justify-center whitespace-normal text-left gap-0">
                            <p className="font-space text-xl font-bold">EXPLORE MY CREATIVE VAULT</p>
                        </Button> */}
                    </div>
                </div>
            </div>

                                    
        </div>
    </section>
};