import ProjectCard from "@/components/projectCard/ProjectCard"
import { FolderCode } from "lucide-react"

export default function Projects() {
    return (
        <>
            <section className="flex flex-col my-8 gap-6">
                <h1 className="flex items-center justify-center gap-4 text-6xl xl:text-7xl font-ds font-extrabold">
                    {/* <FolderCode size={60} strokeWidth={2.5} /> */}
                    <span>Projects</span>
                </h1>
                <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">Things built and products shipped to the world.</p>
            </section>

            <hr className="border mx-3 rounded-xl" />

            <section className="flex flex-col gap-5 pb-8">
                <h2 className="px-6 pt-5 text-xl">
                    All Projects {" "}
                    <span>(10)</span>
                </h2>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-4">
                    <ProjectCard title="Project One" description="A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools" />
                    <ProjectCard title="Project Two" description="Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success" />
                    <ProjectCard title="Project Three" description="Real-time music streaming platform with synchronized playback, live chat, and social listening features" />
                    <ProjectCard title="Project Four" description="Innovative dating platform featuring anonymous questions and authentic connections - currently in development" />
                    <ProjectCard title="Project Five" description="Personal challenge tracker for completing 500 DSA problems, earning ₹300,000, and improving fitness within 6 months" />
                </div>
            </section>
        </>
    )
}