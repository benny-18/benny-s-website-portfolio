import Marquee from "@/components/ui/marquee";
import Star8 from "@/components/stars/s8";
import Star15 from "@/components/stars/s15";
import Star32 from "@/components/stars/s32";

import { EmailComponent } from "@/components/EmailComponent";

import { Send, Instagram, Github, Linkedin, Copy } from "lucide-react";


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from "@/components/ui/textarea";


const items = [
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />,
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />,
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />,
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />,
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />,
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />,
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />,
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />,
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />,
    'CONTACT',
    <Star8 stroke="black" strokeWidth="12" className="inline-flex h-6 w-6 text-teal-main" />
];

export const Contact = () => {
    return <section className="relative w-full h-auto overflow-x-hidden flex flex-col items-center">
        <div className="relative w-full">
            <Marquee className="bg-orange-main h-20 font-heading font-light" items={items} />

            {/* flower and medal bg elements */}
            <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
                
                <Star32 
                    stroke="black" 
                    strokeWidth="0.5" 
                    className="absolute left-0 w-auto -translate-x-1/2 -translate-y-1/2 text-teal-main animate-spin-slow h-[50vh] md:h-[70vh] top-[40%] md:top-1/2"
                />

                <Star15 
                    stroke="black" 
                    strokeWidth="0.5" 
                    className="absolute right-0 w-auto translate-x-1/2 -translate-y-1/2 text-teal-main animate-spin-slow-reverse h-[50vh] md:h-[70vh] top-[70%] md:top-1/2"
                />
            </div>

            <div className="flex w-full items-center justify-center p-10 md:p-20 mb-5">
                <div className="h-fit flex flex-col items-start justify-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold font-barlow uppercase leading-none tracking-tight pb-4">CONNECT WITH ME</h1>
                    <a className="text-base md:text-xl font-space font-normal pb-4">
                        Have a project in mind or just want to chat? I'm always open to new opportunities!
                    </a>

                    <div className="flex flex-col w-full md:flex-row mt-4 gap-8">

                        <div className="w-full md:w-full h-auto flex flex-col-reverse md:flex-col items-start justify-start p-0 m-0 text-left gap-5 md:relative">
                            
                            <Card className="w-full h-full p-0 m-0">
                                <iframe
                                    title="Map of Tacloban City"
                                    style={{scale: 1}}
                                    className="w-full md:h-full min-h-[30vh] rounded-base outline-none border-none"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125212.27237985781!2d124.88536513681844!3d11.269972495975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33087727ff2f99dd%3A0xc3fb64480f0c8751!2sTacloban%20City%2C%20Leyte!5e0!3m2!1sen!2sph!4v1768831259615!5m2!1sen!2sph"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>
                            </Card>

                            <Button variant="reverse" className="md:absolute md:bottom-0 md:right-0 md:m-4 bg-orange-main w-fit h-auto items-start justify-start whitespace-normal text-left gap-0">
                                <p className="font-dm text-sm">
                                    This developer is from Tacloban City, PH
                                </p>
                            </Button>
                        </div>

                        {/* card component for contact form; from neobrutalism.dev */}
                        <Card className="w-auto min-w-[40%] bg-yellow-main">
                            <CardHeader>
                                <CardTitle className="font-space font-black text-2xl uppercase">Contact Form</CardTitle>
                                <CardDescription className="text-base">
                                    Connect with me by answering this form.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-4">
                                        <div className="grid gap-2">
                                            <Label className="font-dm font-bold" htmlFor="name">Name</Label>
                                            <Input id="name" type="name" placeholder="Marvin Masubay" required />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label className="font-dm font-bold" htmlFor="email">Email address</Label>
                                            <Input id="email" type="email" placeholder="marvin@gmail.com" required />
                                        </div>

                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label className="font-dm font-bold" htmlFor="text">Message</Label>
                                            </div>
                                            <Textarea />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start gap-2">
                                <Button type="submit" className="w-full font-space font-black">
                                LET'S CONNECT
                                </Button>

                                <div className="flex flex-col items-start pt-3">
                                    <p className="text-sm">
                                        Or you may send an email directly to
                                    </p>

                                    {/* <a className="underline text-sm font-public gap-2 flex flex-row leading-none items-center">
                                        marvin.masubay.042005@gmail.com
                                        <Copy size="16" />
                                    </a> */}

                                    <EmailComponent />

                                </div>

                            </CardFooter>
                        </Card>
                        
                    </div>
                
                    {/* <div className="flex flex-row w-full gap-4 items-end-safe justify-between pt-8">

                        <div className="flex flex-row gap-4">
                            <Input id="email" type="email" placeholder="marvin@gmail.com" required />
                            <Button size="icon" className="bg-orange-main">
                                <Copy />
                            </Button>
                        </div>

                        <div className="flex flex-row gap-4">
                            <Button className="bg-orange-main">
                            <a href="https://github.com/benny-18/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center text-base gap-2">
                                <Github />
                                Github
                            </a>
                        </Button>
                        <Button className="bg-orange-main">
                            <a href="https://www.linkedin.com/in/marvin-masubay-a62407252/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center text-base gap-2">
                                
                                LinkedIn
                            </a>
                        </Button>
                        </div>
                    </div> */}

                </div>

            </div>
        </div>
    </section>
};