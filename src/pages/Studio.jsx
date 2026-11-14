import { useEffect } from "react";
import { people } from "../data";

const will = [
  "Specify a piece to an existing drawing.",
  "Adjust a drop length or a finish for a real room.",
  "Repair anything we have made, including the first year.",
];

const willNot = [
  "A logo stamped on someone else's lamp.",
  "A finish we cannot repair in ten years.",
  "A rush that skips the paper model.",
];

export default function Studio() {
  useEffect(() => {
    document.title = "Studio — Alder Rowe";
  }, []);

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-14 pb-8 md:grid-cols-12 md:pt-20">
        <div className="md:col-span-7">
          <p className="text-xs tracking-[0.22em] text-mute uppercase">The studio</p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] md:text-7xl">
            A small bench. A long warranty of care.
          </h1>
        </div>
        <p className="self-end text-lg leading-relaxed text-ink/80 md:col-span-5">
          Alder Rowe started in 2014 when Ida Voss left a larger lighting office to make fewer
          things, more slowly. The workshop still fits in one room on Refshalevej. That is a choice.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
          alt="A bright workshop interior with high windows"
          className="h-[420px] w-full rounded-[2rem] object-cover md:h-[520px]"
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-px bg-line px-5 py-12 sm:grid-cols-3">
        <div className="bg-paper p-6">
          <p className="font-serif text-5xl">48</p>
          <p className="mt-2 text-sm text-mute">Pieces in the current edition</p>
        </div>
        <div className="bg-paper p-6">
          <p className="font-serif text-5xl">12</p>
          <p className="mt-2 text-sm text-mute">Countries we have shipped to</p>
        </div>
        <div className="bg-paper p-6">
          <p className="font-serif text-5xl">1</p>
          <p className="mt-2 text-sm text-mute">Workshop. We do not outsource the finish.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[1.8rem] bg-sand p-8">
            <h2 className="font-serif text-3xl">What we will do</h2>
            <ul className="mt-5 space-y-3 text-ink/80">
              {will.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.8rem] border border-line p-8">
            <h2 className="font-serif text-3xl">What we will not do</h2>
            <ul className="mt-5 space-y-3 text-ink/80">
              {willNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs tracking-[0.22em] text-mute uppercase">People</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">Three, on purpose.</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {people.map((person) => (
            <figure key={person.name}>
              <img
                src={person.image}
                alt={person.alt}
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
              />
              <figcaption className="mt-4">
                <p className="font-serif text-2xl">{person.name}</p>
                <p className="text-sm text-mute">{person.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
