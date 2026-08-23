"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5">
      <div className="glass mx-auto max-w-6xl rounded-full">
        <div className="flex h-[62px] items-center justify-between px-5 sm:px-7">
          <Link
            href="/"
            onClick={closeMenu}
            className="font-display text-[1.25rem] font-semibold tracking-[-0.04em] text-[#450A0A]"
            aria-label="EstateCore home"
          >
            J.K<span className="text-[#991B1B]">Estate</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-[0.72rem] font-bold uppercase tracking-[0.13em] text-[#756464] transition-colors hover:text-[#991B1B]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="button button-primary min-h-[40px] px-5 text-[0.68rem]"
            >
              Contact
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <button
            type="button"
            className="mobile-menu-button flex h-10 w-10 items-center justify-center rounded-full bg-[#450A0A] text-white md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>

        {open && (
          <div className="px-5 pb-5 md:hidden">
            <div className="mt-1 rounded-3xl bg-white/75 p-2 backdrop-blur-xl">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#523d3d] hover:bg-[#fdf2f2] hover:text-[#991B1B]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={closeMenu}
                className="button button-primary mt-2 w-full"
              >
                Contact us
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}