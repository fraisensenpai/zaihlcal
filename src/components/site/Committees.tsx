import { SectionHeading } from "./SectionHeading";
import { Users, Brain, BookOpen, GraduationCap, Scale, Landmark, Globe2, Sparkles, Gavel } from "lucide-react";

const committees = [
  { name: "Sosyoloji", icon: Users, desc: "Toplumsal yapılar, kurumlar ve medeniyetlerin sosyal dinamikleri üzerine derinlemesine analizler." },
  { name: "Psikoloji", icon: Brain, desc: "Birey ve toplum psikolojisi; medeniyetin insan zihni üzerindeki izleri." },
  { name: "Teoloji", icon: BookOpen, desc: "İnanç sistemlerinin medeniyetlerin kuruluşundaki rolü ve günümüze etkileri." },
  { name: "Eğitim", icon: GraduationCap, desc: "Geçmişten günümüze eğitim modelleri ve geleceğin öğrenme paradigmaları." },
  { name: "Hukuk", icon: Scale, desc: "Adalet, hukuk sistemleri ve medeniyetlerin normatif düzenleri üzerine müzakereler." },
  { name: "İslam Medeniyetleri Tarihi", icon: Landmark, desc: "İslam medeniyetinin entelektüel, kültürel ve siyasi mirası." },
  { name: "Human Rights Committee", icon: Globe2, desc: "Evrensel insan hakları, küresel sorumluluk ve uluslararası perspektif." },
  { name: "Kurgusal Komite", icon: Sparkles, desc: "Tarihsel senaryolar üzerinden yaratıcı, hızlı ve dinamik bir müzakere deneyimi." },
  { name: "Siyaset", icon: Gavel, desc: "Siyasal düşünceler, yönetim modelleri ve iktidarın toplumsal yapılar üzerindeki etkisi üzerine tartışmalar." },
];

export const Committees = () => {
  return (
    <section id="komiteler" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cream" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Komitelerimiz"
          title="Dokuz Komite, Sonsuz Perspektif"
          description="Her komite; medeniyetin farklı bir yapı taşını derinlemesine ele alıyor."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-16">
          {committees.map((c, i) => (
            <article
              key={c.name}
              className="reveal group relative p-7 rounded-2xl bg-card border border-border/60 hover:border-accent/60 hover:-translate-y-2 hover:shadow-elegant transition-smooth overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/0 group-hover:bg-accent/10 blur-2xl transition-smooth" />

              <div className="relative w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:shadow-gold transition-smooth">
                <c.icon className="w-6 h-6 text-primary group-hover:text-primary transition-smooth" />
              </div>

              <h3 className="relative font-serif text-xl font-semibold text-foreground mb-2 leading-tight">
                {c.name}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>

              <div className="relative mt-5 pt-4 border-t border-border/60 text-xs uppercase tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-smooth">
                Komite #{String(i + 1).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
