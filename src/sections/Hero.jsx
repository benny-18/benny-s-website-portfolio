import { Button } from "@/components/ui/button"
import ImageCard from '@/components/ui/image-card'
import headshot from '@/assets/benny-headshot-2x.webp'
import { Badge } from "@/components/ui/badge"
import Star20 from "@/components/stars/s20";
import { Send, Instagram, Github, Linkedin } from "lucide-react";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center max-w-7xl mx-auto px-4">
            <div className="relative w-full">
                <div className="absolute inset-0 z-0 flex items-center pointer-events-none">
                    <Star20 stroke="black" strokeWidth="0.5" className="w-full h-full text-teal-main animate-spin-slow mr-30" />
                </div>
                
                <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-4 w-full">
                    <div className="basis-1/2 flex flex-col md:max-w-[50vw] items-center md:items-start justify-center">
                        <Badge className="text-sm uppercase font-space mt-2 mb-2 bg-orange-main">Available for OJT / Junior Roles</Badge>
                        <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-0 pb-2 md:pb-4">
                            <h1 className="text-6xl md:text-9xl font-extrabold font-barlow uppercase leading-none tracking-tighter">MARVIN</h1>
                            <h1 className="text-6xl md:text-9xl font-extrabold font-barlow uppercase leading-none tracking-tighter">MASUBAY</h1>
                        </div>
                        <p className="text-base md:text-xl text-center font-space md:text-start font-normal mb-4 md:mb-6">A graduating IT student, and a developer-in-progress who likes to develop solutions through code and creativity!</p>
                        
                        <div className="flex gap-3">
                            <Button className="font-space bg-teal-main">
                                <Send />
                                    Contact now
                            </Button>
                            <Button size="icon" className="bg-orange-main">
                                <Instagram />
                            </Button>
                            <Button size="icon" className="bg-orange-main">
                                <Github />
                            </Button>
                            <Button size="icon" className="bg-orange-main">
                                <Linkedin />
                            </Button>
                        </div>

                        <div className="pt-5 md:pt-8">
                            <a className="font-space font-extrabold text-lg">↓ SCROLL DOWN ↓</a>
                        </div>
                    </div>

                    <div className="basis-1/2 flex items-center justify-center">
                        <img 
                            src={headshot} 
                            alt="Benny's Headshot" 
                            className="w-[75vw] md:max-w-full max-w-md h-auto" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};