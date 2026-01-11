import { PenTool } from "lucide-react";

export default function Blogs() {
    return (
        <>
            <section className="flex flex-col my-8 gap-6">
                <h1 className="flex items-center justify-center gap-4 text-6xl xl:text-7xl font-ds font-extrabold">
                    {/* <PenTool size={60} strokeWidth={2.5} /> */}
                    <span>Blogs</span>
                </h1>
                <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">Building processes and small wins found along the way.</p>
            </section>

            <hr className="border mx-3 rounded-xl" />

            <section>
                
            </section>
        </>
    )
}