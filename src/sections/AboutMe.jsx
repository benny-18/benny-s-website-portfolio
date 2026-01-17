import Marquee from "@/components/ui/marquee";
import Star8 from "@/components/stars/s8";

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
    return <section>
        <div>
            <Marquee className="bg-fuschia-main h-20 font-heading font-light" items={items} />
        </div>
    </section>
};