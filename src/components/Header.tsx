"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, siteConfig } from "@/data/institute";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-md">
      <div className="border-b border-brand-100 bg-gradient-to-r from-brand-800 via-brand-700 to-brand-900 px-4 py-1.5 text-center text-xs text-brand-50 md:text-sm">
        <span className="font-medium text-accent-300">{siteConfig.motto}</span>
        <span className="mx-2 hidden md:inline">|</span>
        <span className="hidden md:inline">Since {siteConfig.foundedYear}</span>
        <span className="mx-2 hidden md:inline">|</span>
        <span className="hidden md:inline">{siteConfig.location}</span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Expert Integrated Classes Logo"
            width={52}
            height={52}
            className="h-13 w-13 object-contain"
            priority
          />
          <div>
            <p className="font-display text-lg font-bold leading-tight text-brand-900 md:text-xl">
              Expert Integrated
            </p>
            <p className="text-xs text-stone-500 md:text-sm">Classes, Kolhar</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[200px] rounded-xl border border-stone-200 bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/admissions" className="btn-primary ml-2 !py-2 !text-xs">
            Enroll Now
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-stone-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-white px-4 py-4 lg:hidden">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-sm font-medium text-stone-700"
                  onClick={() => setAcademicsOpen(!academicsOpen)}
                >
                  {link.label}
                  <ChevronDown className={`h-4 w-4 transition ${academicsOpen ? "rotate-180" : ""}`} />
                </button>
                {academicsOpen && (
                  <div className="ml-4 border-l border-stone-200 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-stone-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-stone-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/admissions"
            className="btn-primary mt-3 w-full"
            onClick={() => setMobileOpen(false)}
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
