import { SectionHeading } from "./SectionHeading";
import { BookOpen, Users, Lightbulb } from "lucide-react";

const stats = [
  { icon: Users, label: "Komite", value: "9" },
  { icon: BookOpen, label: "Gün", value: "2" },
  { icon: Lightbulb, label: "Disiplin", value: "5+" },
];

export const About = () => {
  return (
    <section id="hakkimizda" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cream" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Hakkımızda"
          title="Medeniyetin İzinde Bir Çalıştay"
        />

        <div className="max-w-4xl mx-auto mt-14 reveal">
          <div className="relative p-8 md:p-12 rounded-2xl bg-card shadow-elegant border border-border/60">
            <div className="absolute -top-4 left-8 w-16 h-1 bg-gradient-gold rounded-full" />
            <p className="text-base md:text-lg leading-[1.9] text-foreground/85 first-letter:font-serif first-letter:text-6xl first-letter:font-semibold first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1">
              Zeytinburnu Anadolu İmam Hatip Lisesi öğrencileri olarak, medeniyet
              bilincini geliştirmek ve geçmişten geleceğe uzanan bir perspektif
              oluşturmak amacıyla bu çalıştayı hayata geçirdik. Okulumuz bünyesinde
              titizlikle hazırlanan bu organizasyon, farklı alanlarda derinlemesine
              incelemeler yapılmasını sağlamak üzere 9 ayrı komiteden oluşmaktadır.
              Her bir komite; hukuk, eğitim, siyaset, kültür ve bilim gibi
              medeniyetin temel yapı taşlarını ele alarak katılımcılara çok yönlü
              bir bakış açısı sunmayı hedeflemektedir. Çalıştayımız, bilgi
              paylaşımını teşvik eden, eleştirel düşünceyi destekleyen ve
              öğrencilerin aktif katılımını esas alan yapısıyla; geçmişin
              birikiminden ilham alarak geleceğe dair nitelikli fikirler
              üretilmesine zemin hazırlamaktadır.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-xl bg-card/60 backdrop-blur border border-border/60 text-center hover:shadow-soft hover:-translate-y-1 transition-smooth"
              >
                <s.icon className="w-6 h-6 mx-auto text-accent mb-3" />
                <div className="font-serif text-3xl md:text-4xl font-semibold text-primary">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
