import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const pages = [
  { to: "/collection", label: "Collection" },
  { to: "/projects", label: "Projects" },
  { to: "/studio", label: "Studio" },
];

function navClass({ isActive }) {
  return isActive ? "text-ink" : "text-ink/70 transition hover:text-ink";
}

export default function Layout() {
  const { pathname } = useLocation();
  const [menuPath, setMenuPath] = useState(null);
  const open = menuPath === pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      {pathname === "/" && (
        <div className="bg-ink text-paper">
          <p className="mx-auto max-w-6xl px-5 py-2 text-center text-xs tracking-[0.18em] text-paper/80 uppercase">
            Spring specification list is open · Ships from Copenhagen
          </p>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-serif text-[1.7rem] leading-none tracking-tight">
            Alder Rowe
          </Link>
          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Primary">
            {pages.map((page) => (
              <NavLink key={page.to} to={page.to} className={navClass}>
                {page.label}
              </NavLink>
            ))}
            <NavLink
              to="/inquire"
              className="rounded-full bg-ink px-4 py-2 text-paper transition hover:bg-copper"
            >
              Inquire
            </NavLink>
          </nav>
          <button
            type="button"
            className="rounded-full border border-line px-3 py-1.5 text-sm md:hidden"
            aria-expanded={open}
            onClick={() => setMenuPath(open ? null : pathname)}
          >
            Menu
          </button>
        </div>
        {open && (
          <nav className="border-t border-line px-5 py-4 text-sm md:hidden" aria-label="Mobile">
            {pages.map((page) => (
              <NavLink key={page.to} to={page.to} className="block py-2">
                {page.label}
              </NavLink>
            ))}
            <NavLink
              to="/inquire"
              className="mt-2 block rounded-full bg-ink px-4 py-2 text-center text-paper"
            >
              Inquire
            </NavLink>
          </nav>
        )}
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-3xl">Alder Rowe</p>
            <p className="mt-3 max-w-sm text-sm text-mute">
              Lighting objects for rooms that are meant to be lived in. Designed and finished in
              Copenhagen.
            </p>
          </div>
          <div className="text-sm">
            <p className="text-xs tracking-[0.18em] text-mute uppercase">Pages</p>
            {pages.map((page, index) => (
              <Link
                key={page.to}
                to={page.to}
                className={`${index === 0 ? "mt-3" : "mt-2"} block hover:text-copper`}
              >
                {page.label}
              </Link>
            ))}
            <Link to="/inquire" className="mt-2 block hover:text-copper">
              Inquire
            </Link>
          </div>
          <div className="text-sm">
            <p className="text-xs tracking-[0.18em] text-mute uppercase">Workshop</p>
            <p className="mt-3">Refshalevej 147</p>
            <p>1432 Copenhagen</p>
            <p className="mt-2 text-mute">Tue–Fri, 10–17</p>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 pb-8 text-xs text-mute">
          <p>© 2026 Alder Rowe</p>
          <p>Brass · Oak · Opal glass</p>
        </div>
      </footer>
    </div>
  );
}
