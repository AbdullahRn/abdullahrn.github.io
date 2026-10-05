"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#top" aria-label="Abdullah Rahman, home">
          <span className="brand-mark">{profile.shortName}</span>
          <span className="brand-name">Abdullah Rahman</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button className="icon-button menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        <div className="container">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </div>
      </nav>
    </header>
  );
}
