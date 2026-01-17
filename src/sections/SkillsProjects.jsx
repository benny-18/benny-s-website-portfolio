import Marquee from "@/components/ui/marquee";
import Star8 from "@/components/stars/s8";

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
    return <section>
        <div>
            <Marquee className="bg-yellow-main h-20 font-heading font-light" items={items} />
        </div>
    </section>
};