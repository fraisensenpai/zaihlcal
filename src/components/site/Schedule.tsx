import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { MapPin, Building2 } from "lucide-react";
import venueImg from "@/assets/venue-campus.jpg";
import { cn } from "@/lib/utils";

const day1 = [
  ["08:00 – 09:00", "Kahvaltı"],
  ["09:00 – 10:30", "Açılış Programı"],
  ["10:30 – 10:50", "Ulaşım"],
  ["10:50 – 11:50", "1. Oturum"],
  ["11:50 – 12:10", "Ara"],
  ["12:10 – 13:10", "2. Oturum"],
  ["13:10 – 14:40", "Öğle Arası"],
  ["14:40 – 15:40", "3. Oturum"],
  ["15:40 – 16:10", "Ara"],
  ["16:10 – 17:10", "4. Oturum"],
];

const day2 = [
  ["08:00 – 09:00", "Kahvaltı"],
  ["09:00 – 10:00", "1. Oturum"],
  ["10:00 – 10:30", "Ara"],
  ["10:30 – 12:00", "2. Oturum"],
  ["12:00 – 13:30", "Öğle Arası"],
  ["13:30 – 14:30", "3. Oturum"],
  ["14:30 – 15:15", "Ara"],
  ["15:15 – 16:15", "4. Oturum"],
  ["16:15 – 16:45", "Ara"],
  ["16:45 – 17:00", "Ulaşım"],
  ["17:00 – 18:00", "Kapanış Konferansı"],
];

export const Schedule = () => {
  const [day, setDay] = useState<1 | 2>(1);
  const items = day === 1 ? day1 : day2;

  return (
    <section id="akis" className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="container relative">
        <SectionHeading
          eyebrow="Akış & Mekan"
          title="İki Gün, Tek Yolculuk"
          description="Çalıştayın detaylı akış programı ve etkinlik mekânı."
        />

        {/* Venue */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16 mb-20 reveal">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
            <img
              src={venueImg}
              alt="Fatih Sultan Mehmet Üniversitesi Topkapı Kampüsü"
              loading="lazy"
              width={1600}
              height={1000}
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-smooth duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-1">Etkinlik Mekânı</div>
              <div className="font-serif text-2xl">Topkapı Kampüsü</div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Mekan</div>
            <h3 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-5">
              Fatih Sultan Mehmet Üniversitesi
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tarihi dokusu ve modern eğitim altyapısıyla İstanbul'un kalbinde,
              fikirlerin buluşacağı eşsiz bir kampüste sizi ağırlayacağız.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/60">
                <Building2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">FSM Üniversitesi</div>
                  <div className="text-sm text-muted-foreground">Topkapı Kampüsü</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/60">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">İstanbul</div>
                  <div className="text-sm text-muted-foreground">Topkapı, Fatih</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="reveal">
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-full bg-secondary border border-border/60">
              {[1, 2].map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d as 1 | 2)}
                  className={cn(
                    "px-6 md:px-8 py-2.5 rounded-full text-sm font-semibold transition-smooth",
                    day === d
                      ? "bg-gradient-brown text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {d === 1 ? "1. Gün · 23 Mayıs" : "2. Gün · 24 Mayıs"}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l-2 border-dashed border-accent/40 ml-4 space-y-2">
              {items.map(([time, label], i) => (
                <li
                  key={`${day}-${i}`}
                  className="relative pl-8 py-4 group animate-fade-in"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-smooth" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-accent/60 hover:shadow-soft transition-smooth">
                    <div className="font-mono text-sm text-accent font-semibold tracking-wide">
                      {time}
                    </div>
                    <div className="font-serif text-lg text-foreground">{label}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
