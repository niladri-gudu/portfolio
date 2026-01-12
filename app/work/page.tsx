import WorkCard from "@/components/workCard/WorkCard";
import { workItems } from "@/components/data/work";

export default function WorkPage() {
  return (
    <>
      <section className="flex flex-col my-8 gap-6 pt-4">
        <h1 className="flex items-center justify-center gap-6 text-6xl xl:text-7xl font-ds font-extrabold">
          <span>Work</span>
        </h1>

        <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">
          Professional roles and teams joined along the way.
        </p>
      </section>

      <hr className="border mx-3 rounded-xl" />

      <section className="flex flex-col gap-5 pb-8">
        <h2 className="px-6 pt-5">
          All Experiences <span className="text-muted-foreground">({workItems.length})</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 px-4">
          {workItems.map((item, idx) => (
            <WorkCard
              key={`${item.company}-${idx}`}
              item={item}
              showToggle={false}
            />
          ))}
        </div>
      </section>
    </>
  );
}
