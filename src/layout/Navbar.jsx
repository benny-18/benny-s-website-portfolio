import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button'
import { Switch } from "@/components/ui/switch";
import { Menu, Eclipse } from "lucide-react";

const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills & Projects', href: '#skills-projects' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-8 px-8 md:py-16 md:px-16">
            <nav className="container mx-auto flex items-center justify-between">

                {/* logo and name */}
                <div href="#" className="flex items-center gap-3">
                    <a className="size-10 text-xl font-inter font-extrabold bg-black text-background inline-flex items-center justify-center aspect-square">M</a>
                    <div className="flex md:flex-row md:gap-1 items-start flex-col">
                        <a className="text-l font-inter font-extrabold">MARVIN</a>
                        <a className="text-l font-inter font-extrabold">MASUBAY</a>
                    </div>
                </div>

                {/* navbar links */}
                <div className="flex flex-row gap-6 items-center">
                    {/* quick links */}
                    <div className="hidden md:flex gap-6">
                        {navigationLinks.map((link, index) => (
                            <a className="uppercase font-space font-black px-3 cursor-pointer hover:bg-red-400 hover:outline-2 outline-black rounded-lg p-2 block hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:active:shadow-none hover:translate-x-2px hover:translate-y-2px transition-all" href={link.href} key={index}>{link.label}</a>
                        ))}
                    </div>

                     <div className="items-center hidden md:flex gap-3">
                        <Eclipse />
                        <Switch className="bg-amber-700" />
                    </div>
                </div>

                {/* menu button if mobile */}
                <button className="flex md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="bg-teal-main" size="icon">
                                <Menu />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="bg-teal-main flex flex-col md:hidden items-end py-1 pb-2 mt-3">
                            {navigationLinks.map((link, index) => (
                                <DropdownMenuItem key={index} asChild>
                                    <a className="uppercase font-space font-black cursor-pointer bg-teal-main p-2 block" href={link.href}>{link.label}</a>
                                </DropdownMenuItem>
                            ))}
                            <div className="flex flex-row items-center gap-3 p-2 block">
                                <Eclipse />
                                <Switch className="" />
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </button>
            </nav>
        </header>
    );
};