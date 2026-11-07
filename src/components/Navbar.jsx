import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const FALLBACK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Overview", href: "/overview" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { data } = useFetch("/navigation");
  const links = data ?? FALLBACK_LINKS;

  return (
    <header className="border-b border-line bg-white">
      <nav className="flex h-20 items-center justify-between px-6 lg:h-26 lg:px-16">
        {/* Ganti dengan logo yang kamu ekspor dari Figma */}
        <span className="text-lg">Google Developer Groups</span>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map(({ label, href }) => (
            <li key={href}>
              <NavLink
                to={href}
                end={href === "/"}
                className={({ isActive }) =>
                  `block rounded-full px-5 py-3.5 text-base ${
                    isActive
                      ? "bg-brand-soft font-bold text-accent"
                      : "font-medium text-muted"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/overview"
          className="flex h-13 items-center gap-4 rounded-lg bg-brand px-6 text-white"
        >
          Find your track
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M3.33301 10H16.5655M16.5655 10C16.5655 10.32 16.443 10.64 16.1997 10.8833L11.458 15.625M16.5655 10C16.5655 9.68 16.443 9.36 16.1997 9.11667L11.458 4.375"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
      </nav>
    </header>
  );
}