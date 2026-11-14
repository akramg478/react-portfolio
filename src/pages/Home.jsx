import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { clients, products, rooms, steps } from "../data";

export default function Home() {
  useEffect(() => {
    document.title = "Alder Rowe — Light, drawn slowly";
  }, []);

  const featured = products.filter((product) => product.featured);
  const [lead, ...side] = rooms;

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-14 pb-16 md:grid-cols-12 md:pt-20">
        <div className="md:col-span-7">
          <p className="text-xs tracking-[0.22em] text-mute uppercase">Copenhagen · est. 2014</p>
          <h1 className="mt-5 font-serif text-6xl leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
            Light,
            <br />
            <span className="text-copper italic">drawn</span> slowly.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/80">
            Small-batch luminaires, cast and finished by hand. Architects specify them. Homes keep
            them for decades.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/collection"
              className="rounded-full bg-ink px-5 py-3 text-sm text-paper transition hover:bg-copper"
            >
              View the collection
            </Link>
            <Link
              to="/studio"
              className="text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-copper"
            >
              The studio
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <figure className="relative">
            <img
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=80"
              alt="A brass table lamp glowing in a quiet room"
              className="h-[460px] w-full rounded-[2rem] object-cover md:h-[540px]"
            />
            <figcaption className="absolute right-4 bottom-4 left-4 rounded-2xl bg-paper/92 p-4 backdrop-blur-sm">
              <p className="font-serif text-xl">Arc Sconce 180</p>
              <p className="text-sm text-mute">Brushed brass · numbered edition · €420</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-3 px-5 py-5 text-sm text-mute">
          <span className="text-xs tracking-[0.18em] text-ink uppercase">Specified by</span>
          {clients.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-mute uppercase">Selected rooms</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Where the pieces live.</h2>
          </div>
          <Link
            to="/projects"
            className="hidden text-sm underline decoration-line underline-offset-4 hover:decoration-copper md:inline"
          >
            All projects
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <Link to="/projects" className={`group relative ${lead.className}`}>
            <img
              src={lead.image}
              alt={lead.alt}
              className={`${lead.imageClass} w-full rounded-[1.8rem] object-cover transition duration-700 group-hover:scale-[1.02]`}
            />
            <span className="absolute bottom-5 left-5 rounded-full bg-paper px-4 py-2 text-sm">
              {lead.title}
            </span>
          </Link>
          <div className="grid gap-4 md:col-span-5">
            {side.map((room) => (
              <Link key={room.title} to="/projects" className="group relative">
                <img
                  src={room.image}
                  alt={room.alt}
                  className={`${room.imageClass} w-full rounded-[1.8rem] object-cover`}
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-paper px-4 py-2 text-sm">
                  {room.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foam">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs tracking-[0.22em] text-mute uppercase">How a piece is made</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl md:text-5xl">Four steps. No catalogue rush.</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number} className="border-t border-line pt-5">
                <p className="font-serif text-3xl text-copper">{step.number}</p>
                <h3 className="mt-3 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-mute uppercase">From the bench</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Three to start with.</h2>
          </div>
          <Link
            to="/collection"
            className="text-sm underline decoration-line underline-offset-4 hover:decoration-copper"
          >
            Full collection
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.name} product={product} compact />
          ))}
        </div>
      </section>

      <section className="bg-night text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:items-end">
          <blockquote className="md:col-span-8">
            <p className="font-serif text-4xl leading-[1.15] italic md:text-5xl">
              “We would rather make twelve lamps carefully than a catalogue of hundreds.”
            </p>
          </blockquote>
          <p className="text-sm text-paper/70 md:col-span-4 md:text-right">
            Ida Voss
            <br />
            Design, Alder Rowe
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.22em] text-mute uppercase">Visit</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">The workshop is open on Thursdays.</h2>
          <p className="mt-5 max-w-md text-ink/80">
            Refshalevej 147, Copenhagen. Come for a fitting, or send a plan and we will answer with
            a specification.
          </p>
          <Link
            to="/inquire"
            className="mt-8 inline-block rounded-full bg-copper px-5 py-3 text-sm text-paper transition hover:bg-ink"
          >
            Start an inquiry
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1400&q=80"
          alt="A workbench with tools and warm wood"
          className="h-80 w-full rounded-[1.8rem] object-cover"
        />
      </section>
    </>
  );
}
