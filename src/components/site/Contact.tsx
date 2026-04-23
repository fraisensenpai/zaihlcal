import { SectionHeading } from "./SectionHeading";
import { Mail, Instagram, Phone, MapPin } from "lucide-react";

const items = [
  { icon: Mail, label: "E-posta", value: "zaihlcalistay@gmail.com", href: "mailto:zaihlcalistay@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "@zaihlcalistay", href: "https://instagram.com/zaihlcalistay" },
  { icon: Phone, label: "Telefon", value: "+90 535 224 27 76", href: "tel:+905352242776" },
  { icon: MapPin, label: "Konum", value: "Zeytinburnu Anadolu İmam Hatip Lisesi", href: "#" },
];

export const Contact = () => {
  return (
    <section id="iletisim" className="relative py-28 md:py-36 bg-gradient-cream overflow-hidden">
      <div className="container relative">
        <SectionHeading
          eyebrow="İletişim"
          title="Bize Ulaşın"
          description="Sorularınız, iş birlikleri ve detaylı bilgi için bizimle iletişime geçebilirsiniz."
        />

        <div className="mt-16 max-w-2xl mx-auto space-y-4 reveal">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/60 hover:border-accent/60 hover:shadow-soft hover:-translate-y-0.5 transition-smooth group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gradient-gold group-hover:shadow-gold transition-smooth">
                <it.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{it.label}</div>
                <div className="font-medium text-foreground truncate">{it.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
