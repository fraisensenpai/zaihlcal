import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Mail, Instagram, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const items = [
  { icon: Mail, label: "E-posta", value: "zaihlcalistay@gmail.com", href: "mailto:zaihlcalistay@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "@zaihlcalistay", href: "https://instagram.com/zaihlcalistay" },
  { icon: Phone, label: "Telefon", value: "+90 535 224 27 76", href: "tel:+905352242776" },
  { icon: MapPin, label: "Konum", value: "Zeytinburnu Anadolu İmam Hatip Lisesi", href: "#" },
];

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesajınız alındı",
      description: "En kısa sürede size dönüş yapacağız. Teşekkürler!",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="iletisim" className="relative py-28 md:py-36 bg-gradient-cream overflow-hidden">
      <div className="container relative">
        <SectionHeading
          eyebrow="İletişim"
          title="Bize Ulaşın"
          description="Sorularınız, iş birlikleri ve detaylı bilgi için bizimle iletişime geçebilirsiniz."
        />

        <div className="grid lg:grid-cols-5 gap-8 mt-16 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4 reveal">
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

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 p-8 md:p-10 rounded-2xl bg-card border border-border/60 shadow-elegant reveal"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Adınız
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-smooth text-foreground"
                  placeholder="Ad Soyad"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-smooth text-foreground"
                  placeholder="ornek@mail.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Mesajınız
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-smooth text-foreground resize-none"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-brown text-primary-foreground font-semibold hover:scale-[1.02] hover:shadow-elegant transition-smooth group"
            >
              Mesajı Gönder
              <Send size={16} className="group-hover:translate-x-1 transition-smooth" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
