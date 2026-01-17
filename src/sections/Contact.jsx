import Marquee from "@/components/ui/marquee";
import Star8 from "@/components/stars/s8";

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
    return <section>
        <div>
            <Marquee className="bg-orange-main h-20 font-heading font-light" items={items} />
        </div>
    </section>
};