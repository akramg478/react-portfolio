import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { plans } from "../data";

const empty = {
  name: "",
  email: "",
  plan: "A home",
  message: "",
};

function formForPiece(piece) {
  if (!piece) return empty;
  return {
    ...empty,
    plan: "A single piece",
    message: `I'd like to specify the ${piece}.`,
  };
}

export default function Inquire() {
  const [params] = useSearchParams();
  const piece = params.get("piece");
  const [form, setForm] = useState(() => formForPiece(piece));
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [appliedPiece, setAppliedPiece] = useState(piece);

  if (piece !== appliedPiece) {
    setAppliedPiece(piece);
    setForm(formForPiece(piece));
    setSent(false);
    setError(false);
  }

  useEffect(() => {
    document.title = "Inquire — Alder Rowe";
  }, []);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const valid =
      form.name.trim() &&
      form.message.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    setError(!valid);
    if (!valid) return;
    setSent(true);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12 md:py-20">
      <div className="md:col-span-7">
        <p className="text-xs tracking-[0.22em] text-mute uppercase">Inquire</p>
        <h1 className="mt-4 font-serif text-5xl leading-[0.95] md:text-6xl">
          Tell us the room. We will answer with a specification.
        </h1>
        <p className="mt-5 max-w-lg text-ink/75">
          A drawing, a measurement, or the name of a piece is enough. We reply within two working
          days.
        </p>

        {sent ? (
          <div className="mt-10 rounded-[1.8rem] bg-night p-8 text-paper">
            <p className="text-xs tracking-[0.18em] text-paper/60 uppercase">Noted</p>
            <h2 className="mt-3 font-serif text-4xl">We would reply within two working days.</h2>
            <p className="mt-4 max-w-md text-paper/75">
              A short specification is the next step. Thursday visits are open at the workshop.
            </p>
            <button
              type="button"
              className="mt-6 text-sm underline decoration-paper/40 underline-offset-4"
              onClick={() => {
                setForm(formForPiece(piece));
                setSent(false);
                setError(false);
              }}
            >
              Write another
            </button>
          </div>
        ) : (
          <form className="mt-10 space-y-5" onSubmit={submit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                Name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={update}
                  className="mt-2 w-full rounded-2xl border border-line bg-foam px-4 py-3 outline-none focus:ring-2 focus:ring-copper"
                />
              </label>
              <label className="block text-sm">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update}
                  className="mt-2 w-full rounded-2xl border border-line bg-foam px-4 py-3 outline-none focus:ring-2 focus:ring-copper"
                />
              </label>
            </div>
            <label className="block text-sm">
              What are you planning?
              <select
                name="plan"
                value={form.plan}
                onChange={update}
                className="mt-2 w-full rounded-2xl border border-line bg-foam px-4 py-3 outline-none focus:ring-2 focus:ring-copper"
              >
                {plans.map((plan) => (
                  <option key={plan}>{plan}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              The room, in a few lines
              <textarea
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={update}
                className="mt-2 w-full resize-y rounded-2xl border border-line bg-foam px-4 py-3 outline-none focus:ring-2 focus:ring-copper"
              />
            </label>
            {error && <p className="text-sm text-copper">Add your name, a real email, and a short note.</p>}
            <button
              type="submit"
              className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition hover:bg-copper"
            >
              Send the note
            </button>
          </form>
        )}
      </div>

      <aside className="h-fit rounded-[1.8rem] bg-sand p-8 md:sticky md:top-28 md:col-span-5">
        <p className="text-xs tracking-[0.18em] text-mute uppercase">Workshop</p>
        <p className="mt-4 font-serif text-3xl">
          Refshalevej 147
          <br />
          1432 Copenhagen
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
            <dt className="text-mute">Hours</dt>
            <dd>Tue–Fri, 10–17</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
            <dt className="text-mute">Visits</dt>
            <dd>Thursdays</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
            <dt className="text-mute">Lead time</dt>
            <dd>4–8 weeks</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-mute">Mail</dt>
            <dd>studio@alderrowe.example</dd>
          </div>
        </dl>
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
          alt="A quiet interior corner with a window and a chair"
          className="mt-8 h-48 w-full rounded-2xl object-cover"
        />
      </aside>
    </div>
  );
}
