const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills & Projects', href: '#skills-projects' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-15 px-15">
            <nav className="container mx-auto flex items-center justify-between">
                {/* logo and name */}
                <div href="#" className="flex items-center gap-3">
                    <a className="size-10 text-xl font-inter font-extrabold bg-black text-background inline-flex items-center justify-center aspect-square">M</a>
                    <div className=" flex items-center gap-1">
                        <a className="text-l font-inter font-extrabold">MARVIN</a>
                        <a className="text-l font-inter font-extrabold">MASUBAY</a>
                    </div>
                </div>

                {/* Navbar links */}
                <div>
                    <div className="font-space font-normal flex gap-6">
                        {navigationLinks.map((link, index) => (
                            <a className="uppercase" href={link.href} key={index}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};