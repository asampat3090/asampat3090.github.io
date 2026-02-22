"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Mixtapes" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Notes" },
];

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-[101] h-36 bg-white/95 backdrop-blur-sm">
        <div className="site-container flex h-full items-center justify-between">
          <Link
            href="/"
            className="font-display text-2xl font-medium text-gray-900 transition-colors duration-200 hover:text-gray-600 sm:text-3xl"
          >
            Anand Sampat
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-display text-[16px] font-light leading-[28.8px] py-[1.6px] no-underline transition-colors duration-200 ${
                    active
                      ? "text-black [background-image:linear-gradient(rgb(0,0,0),rgb(0,0,0))] [background-position:0_calc(100%-1.6px)] [background-repeat:repeat-x] [background-size:1px_1px]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="relative flex h-10 w-10 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:hidden"
          >
            <span
              className={`absolute block h-[2px] w-7 bg-gray-900 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-7 bg-gray-900 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] bg-white transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navItems.map((item) => {
            const active = isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-[32px] font-light transition-colors duration-200 ${
                  active ? "text-black" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
