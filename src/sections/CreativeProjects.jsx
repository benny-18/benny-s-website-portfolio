import ImageMarquee from "@/components/ui/imagemarquee";
import { Button } from '@/components/ui/button';
import { PencilRuler, Link, Instagram } from "lucide-react";

import creativework_001 from "@/assets/creative-projects/benny-portfolio-creativework-001.webp";
import creativework_002 from "@/assets/creative-projects/benny-portfolio-creativework-002.webp";
import creativework_003 from "@/assets/creative-projects/benny-portfolio-creativework-003.webp";
import creativework_004 from "@/assets/creative-projects/benny-portfolio-creativework-004.webp";
import creativework_005 from "@/assets/creative-projects/benny-portfolio-creativework-005.webp";
import creativework_006 from "@/assets/creative-projects/benny-portfolio-creativework-006.webp";
import creativework_007 from "@/assets/creative-projects/benny-portfolio-creativework-007.webp";
import creativework_008 from "@/assets/creative-projects/benny-portfolio-creativework-008.webp";
import creativework_009 from "@/assets/creative-projects/benny-portfolio-creativework-009.webp";
import creativework_010 from "@/assets/creative-projects/benny-portfolio-creativework-010.webp";
import creativework_011 from "@/assets/creative-projects/benny-portfolio-creativework-011.webp";
import creativework_012 from "@/assets/creative-projects/benny-portfolio-creativework-012.webp";
import creativework_013 from "@/assets/creative-projects/benny-portfolio-creativework-013.webp";
import creativework_014 from "@/assets/creative-projects/benny-portfolio-creativework-014.webp";
import creativework_015 from "@/assets/creative-projects/benny-portfolio-creativework-015.webp";
import creativework_016 from "@/assets/creative-projects/benny-portfolio-creativework-016.webp";
import creativework_017 from "@/assets/creative-projects/benny-portfolio-creativework-017.webp";
import creativework_018 from "@/assets/creative-projects/benny-portfolio-creativework-018.webp";
import creativework_019 from "@/assets/creative-projects/benny-portfolio-creativework-019.webp";
import creativework_020 from "@/assets/creative-projects/benny-portfolio-creativework-020.webp";
import creativework_021 from "@/assets/creative-projects/benny-portfolio-creativework-021.webp";
import creativework_022 from "@/assets/creative-projects/benny-portfolio-creativework-022.webp";
import creativework_023 from "@/assets/creative-projects/benny-portfolio-creativework-023.webp";
import creativework_024 from "@/assets/creative-projects/benny-portfolio-creativework-024.webp";
import creativework_025 from "@/assets/creative-projects/benny-portfolio-creativework-025.webp";
import creativework_026 from "@/assets/creative-projects/benny-portfolio-creativework-026.webp";
import creativework_027 from "@/assets/creative-projects/benny-portfolio-creativework-027.webp";
import creativework_028 from "@/assets/creative-projects/benny-portfolio-creativework-028.webp";
import creativework_029 from "@/assets/creative-projects/benny-portfolio-creativework-029.webp";
import creativework_030 from "@/assets/creative-projects/benny-portfolio-creativework-030.webp";
import creativework_031 from "@/assets/creative-projects/benny-portfolio-creativework-031.webp";
import creativework_032 from "@/assets/creative-projects/benny-portfolio-creativework-032.webp";
import creativework_033 from "@/assets/creative-projects/benny-portfolio-creativework-033.webp";
import creativework_034 from "@/assets/creative-projects/benny-portfolio-creativework-034.webp";
import creativework_035 from "@/assets/creative-projects/benny-portfolio-creativework-035.webp";
import creativework_036 from "@/assets/creative-projects/benny-portfolio-creativework-036.webp";
import creativework_037 from "@/assets/creative-projects/benny-portfolio-creativework-037.webp";
import creativework_038 from "@/assets/creative-projects/benny-portfolio-creativework-038.webp";
import creativework_039 from "@/assets/creative-projects/benny-portfolio-creativework-039.webp";
import creativework_040 from "@/assets/creative-projects/benny-portfolio-creativework-040.webp";

const creativeWorksFirstRow = [
  creativework_021, creativework_024, creativework_027, creativework_031, creativework_034, creativework_037, creativework_040, creativework_002, creativework_004, creativework_007, creativework_010, creativework_015, creativework_018
];
const creativeWorksSecondRow = [
  creativework_022, creativework_026, creativework_029, creativework_032, creativework_036, creativework_039, creativework_003, creativework_005, creativework_008, creativework_012, creativework_014, creativework_017, creativework_020,
];
const creativeWorksThirdRow = [
  creativework_023, creativework_001, creativework_028, creativework_030, creativework_033, creativework_035, creativework_019, creativework_038, creativework_025, creativework_006, creativework_009, creativework_013, creativework_016,
];

const creativeWorksMobileFirstRow = [
  creativework_021, creativework_024, creativework_027, creativework_031, creativework_034, creativework_037, creativework_040, creativework_002, creativework_004, creativework_007, creativework_010, creativework_015, creativework_018, creativework_023, creativework_001, creativework_028, creativework_030, creativework_033, creativework_035, creativework_019,
];
const creativeWorksMobileSecondRow = [
  creativework_022, creativework_026, creativework_029, creativework_032, creativework_036, creativework_039, creativework_003, creativework_005, creativework_008, creativework_012, creativework_014, creativework_017, creativework_020, creativework_038, creativework_025, creativework_006, creativework_009, creativework_013, creativework_016, creativework_011
];

export const CreativeVault = () => {
    return <section className="h-auto md:h-auto pt-16 flex bg-dotted bg-background items-start justify-center inset-shadow-sm">
        <div className="flex flex-col items-center justify-end">
            <PencilRuler size={38}/>
            <h1 className="text-5xl md:text-7xl font-extrabold font-barlow uppercase leading-none pt-4 pb-4">CREATIVE VAULT</h1>
            <a className="text-base md:text-xl text-center font-space font-normal max-w-[70vw] pb-8 md:pb-0">
                A collection of my past designs, experiments, and visual works
            </a>

            {/* creative vault mobile uwu */}
            <div className="flex flex-row h-[125vh] pb-0 md:pb-10 md:hidden gap-2 mx-3">
                <ImageMarquee 
                    items={creativeWorksMobileFirstRow} 
                    speed="40s" 
                    vertical={true} 
                    className="w-1/2 h-full" 
                />

                <ImageMarquee 
                    items={creativeWorksMobileSecondRow} 
                    speed="40s" 
                    vertical={true}
                    reverse={true}
                    className="w-1/2 h-full" 
                />
            </div>

            {/* creative vault for desktop */}
            <div className="hidden pb-10 md:pb-10 pt-10 md:block overflow-hidden">
                <ImageMarquee 
                    className="pb-2"
                    items={creativeWorksFirstRow} 
                    speed="50s" 
                />
                <ImageMarquee 
                    className="pb-2"
                    items={creativeWorksSecondRow} 
                    speed="50s" 
                    reverse={true}
                />
                <ImageMarquee 
                    className="pb-2"
                    items={creativeWorksThirdRow} 
                    speed="50s" 
                />

                <div className="w-full flex items-center justify-center pt-10">
                    <Button asChild={true} variant="reverse" className="mb-10 text-base uppercase bg-background">
                        <a href="https://www.instagram.com/marbinezkii/" target="_blank" rel="noopener noreferral" className="items-center font-public justify-center">
                            <Instagram />
                            View Instagram account
                        </a>
                    </Button>
                </div>
            </div>

            {/* instagram button if mobile */}
            <Button asChild={true} variant="reverse" className="absolute md:hidden mb-16 text-base uppercase bg-background">
                <a href="https://www.instagram.com/marbinezkii/" target="_blank" rel="noopener noreferral" className="items-center font-public justify-center">
                    <Instagram />
                    View Instagram account
                </a>
            </Button>

        </div>
    </section>
}