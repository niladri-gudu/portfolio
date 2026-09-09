import Reveal from "@/shared/motion/Reveal";

type PageHeroProps = {
  title: string;
  description: string;
  delayStep?: number;
};

export default function PageHero({ title, description, delayStep = 0.03 }: PageHeroProps) {
  const d = (i: number) => (i + 1) * delayStep;

  return (
    <>
      <section className="flex flex-col my-8 gap-6 pt-4">
        <Reveal>
          <div className="flex flex-col items-center gap-5">
            <h1 className="flex items-center justify-center gap-6 text-6xl xl:text-7xl font-ds font-extrabold">
              <span>{title}</span>
            </h1>
            <span
              aria-hidden
              className="h-1 w-20 rounded-full bg-linear-to-r from-accent-brand/60 to-accent-brand"
            />
          </div>
        </Reveal>

        <Reveal delay={d(0)}>
          <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">
            {description}
          </p>
        </Reveal>
      </section>

      <Reveal delay={d(1)}>
        <hr className="mx-3 rounded-xl" />
      </Reveal>
    </>
  );
}
