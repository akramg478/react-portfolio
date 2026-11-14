import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { filters, materials, products } from "../data";

export default function Collection() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.title = "Collection — Alder Rowe";
  }, []);

  const visible = products.filter((product) => filter === "all" || product.category === filter);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-8 md:pt-20">
        <p className="text-xs tracking-[0.22em] text-mute uppercase">
          Collection · {String(products.length).padStart(2, "0")} pieces
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h1 className="max-w-xl font-serif text-5xl leading-[0.95] md:text-7xl">
            Objects for the wall, the table, the ceiling.
          </h1>
          <p className="max-w-sm text-ink/75">
            Prices are for a single piece in the standard finish. Editions are small. If a finish is
            gone, we will say so before you commit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter the collection">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === item.id ? "border-ink bg-ink text-paper" : "border-line"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-16 text-center font-serif text-3xl">Nothing in that family right now.</p>
        ) : (
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-line bg-foam">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-4">
          {materials.map((material) => (
            <div key={material.name}>
              <p className="font-serif text-2xl">{material.name}</p>
              <p className="mt-2 text-sm text-mute">{material.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
