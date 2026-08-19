import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/", current: true },
  { label: "Voter Registration", href: "#", current: false },
  { label: "Candidates Profile", href: "#", current: false },
  { label: "Voting System", href: "#", current: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative bg-gray-900 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-lg font-bold text-white">AfricaPlan Foundation</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={link.current ? "page" : undefined}
                    className={
                      link.current
                        ? "rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="sr-only">View notifications</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                <path
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex size-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white outline -outline-offset-1 outline-white/10">
              AP
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="block sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.current ? "page" : undefined}
                className={
                  link.current
                    ? "block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
                    : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
