import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#komiteler", label: "Komitelerimiz" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#misyon", label: "Misyon & Vizyon" },
  { href: "#akis", label: "Akış & Mekan" },
  { href: "#iletisim", label: "İletişim" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-20">
        {/* Logo placeholder */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold transition-smooth group-hover:scale-105">
            <span className="font-serif text-xl font-bold text-primary">Z</span>
          </div>
          <div className="leading-tight hidden sm:block">
            <div className={cn("font-serif text-lg font-semibold transition-smooth", scrolled ? "text-foreground" : "text-primary-foreground")}>
              ZAİHL
            </div>
            <div className={cn("text-[10px] uppercase tracking-[0.2em] transition-smooth", scrolled ? "text-muted-foreground" : "text-primary-foreground/70")}>
              Medeniyet Çalıştayı
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-smooth relative",
                  scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-primary-foreground/90 hover:text-accent"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdfCi53yWqC0yI3WFipmYvFO6SxDdrwdCLt2SQxq0ydaOtTNg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-gold text-primary font-semibold text-sm shadow-gold hover:scale-105 transition-smooth"
        >
          Başvur
        </a>

        <button
          aria-label="Menüyü aç/kapat"
          className={cn("lg:hidden p-2 rounded-md transition-smooth", scrolled ? "text-foreground" : "text-primary-foreground")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-t border-border/60",
          open ? "max-h-[420px]" : "max-h-0"
        )}
      >
        <ul className="container flex flex-col py-4 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-md text-foreground hover:bg-secondary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfCi53yWqC0yI3WFipmYvFO6SxDdrwdCLt2SQxq0ydaOtTNg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 rounded-full bg-gradient-gold text-primary font-semibold shadow-gold"
            >
              Delege Başvurusu
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
