import Marquee from "@/components/ui/marquee";
import Star8 from "@/components/stars/s8";
import Star15 from "@/components/stars/s15";
import Star32 from "@/components/stars/s32";

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
                    className="absolute left-0 w-auto -translate-x-1/2 -translate-y-1/2 text-teal-main animate-spin-slow h-[50vh] md:h-[65vh] top-[30%] md:top-1/2"
                />

                <Star15 
                    stroke="black" 
                    strokeWidth="0.5" 
                    className="absolute right-0 w-auto translate-x-1/2 -translate-y-1/2 text-teal-main animate-spin-slow-reverse h-[50vh] md:h-[65vh] top-[60%] md:top-1/2"
                />
            </div>

            <div className="flex w-full items-center justify-center p-10 md:p-20 mb-5">
                <div className="h-fit flex flex-col items-start justify-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold font-barlow uppercase leading-none tracking-tight pb-4">CONNECT WITH ME</h1>
                    <a className="text-base md:text-xl font-space font-normal pb-4">
                        Have a project in mind or just want to chat? I'm always open to new opportunities!
                    </a>

                    <div className="flex flex-col w-full md:flex-row mt-4 gap-8">
                        <div className="bg-yellow-bg w-full h-auto flex flex-col items-start justify-start p-0 m-0 text-left gap-0 relative">
                            <iframe
                                title="Tacloban City Map"
                                className="w-full h-full rounded-sm md:rounded-base outline-2 outline-black border-none"
                                src="https://maps.google.com/maps?q=Tacloban%20City%2C%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                loading="lazy"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* card component from neobrutalism.dev */}
                        <Card className="w-full w-auto min-w-[20vw] bg-yellow-main">
                            <CardHeader>
                                <CardTitle className="font-space font-black text-2xl">Contact Form</CardTitle>
                                <CardDescription className="text-base">
                                You may connect with me by answering this form.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                        <Label className="font-dm font-bold" htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="name"
                                            placeholder="Marvin Masubay"
                                            required
                                        />
                                        </div>

                                        <div className="grid gap-2">
                                        <Label className="font-dm font-bold" htmlFor="email">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="marvin@gmail.com"
                                            required
                                        />
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
                            <CardFooter className="flex-col gap-2">
                                <Button type="submit" className="w-full font-space font-black">
                                LET'S CONNECT
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                
                </div>

            </div>
        </div>
    </section>
};