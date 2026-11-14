import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects — Alder Rowe";
  }, []);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-6 md:pt-20">
        <p className="text-xs tracking-[0.22em] text-mute uppercase">Projects · 2019–2026</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] md:text-7xl">
          Rooms we were trusted to light.
        </h1>
      </section>

      <section className="mx-auto max-w-6xl space-y-20 px-5 py-12">
        {projects.map((project, index) => (
          <article key={project.title} className="grid items-center gap-8 md:grid-cols-12">
            <img
              src={project.image}
              alt={project.alt}
              className={`h-[420px] w-full rounded-[1.8rem] object-cover md:col-span-7 ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            />
            <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="text-xs tracking-[0.18em] text-copper uppercase">
                {project.place} · {project.year}
              </p>
              <h2 className="mt-3 font-serif text-4xl">{project.title}</h2>
              <p className="mt-4 leading-relaxed text-ink/80">{project.text}</p>
              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5 text-sm">
                <div>
                  <dt className="text-mute">Pieces</dt>
                  <dd className="mt-1 font-medium">{project.pieces}</dd>
                </div>
                <div>
                  <dt className="text-mute">Rooms</dt>
                  <dd className="mt-1 font-medium">{project.rooms}</dd>
                </div>
                <div>
                  <dt className="text-mute">Lead</dt>
                  <dd className="mt-1 font-medium">{project.lead}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-night text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center">
          <h2 className="max-w-lg font-serif text-4xl">Have a room that needs a calmer light?</h2>
          <Link
            to="/inquire"
            className="rounded-full bg-paper px-5 py-3 text-sm text-ink transition hover:bg-copper hover:text-paper"
          >
            Tell us about it
          </Link>
        </div>
      </section>
    </>
  );
}
