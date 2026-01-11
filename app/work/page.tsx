import WorkCard from "@/components/workCard/WorkCard";
import { Briefcase } from "lucide-react";

export default function Work() {
    return (
        <>
            <section className="flex flex-col my-8 gap-6">
                <h1 className="flex items-center justify-center gap-6 text-6xl xl:text-7xl font-ds font-extrabold">
                    {/* <Briefcase size={60} strokeWidth={2.5} /> */}
                    <span>Work</span>
                </h1>
                <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">Professional roles and teams joined along the way.</p>
            </section>

            <hr className="border mx-3 rounded-xl" />

            <section className="flex flex-col gap-5 pb-8">
                <h2 className="px-6 pt-5 text-xl">
                    All Experiences {" "}
                    <span>(5)</span>
                </h2>
                <div className="grid grid-cols-1 gap-5 px-4">
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                </div>
            </section>
        </>
    )
}