import { SectionHeading } from "./SectionHeading";
import { Target, Eye } from "lucide-react";

const items = [
  {
    icon: Target,
    eyebrow: "Misyonumuz",
    text: `Gençlerin farklı medeniyetlerin düşünce sistemlerini, kurumlarını ve toplumsal yapılarını çok yönlü biçimde inceleyebileceği bir öğrenme ve tartışma ortamı oluşturmak. Katılımcıların hukuktan eğitime, kültürden siyasete kadar çeşitli alanlarda geçmiş medeniyetlerin deneyimlerini değerlendirerek günümüz sorunlarına çözüm üretmelerini teşvik etmek. Açık fikirli, özgür ve saygılı bir tartışma ortamı sağlayarak gençlerin analiz, yorumlama ve ortak akıl geliştirme becerilerini güçlendirmek; böylece geleceğin toplumlarını şekillendirecek bilinçli ve vizyon sahibi bireylerin yetişmesine katkıda bulunmak.`,
  },
  {
    icon: Eye,
    eyebrow: "Vizyonumuz",
    text: `Geçmişten günümüze uzanan medeniyet birikimini anlayan, farklı kültür ve düşünce sistemlerini analiz edebilen; hukuktan eğitime, siyasetten toplumsal yaşama kadar birçok alanda tarihsel deneyimlerden ders çıkararak geleceğe yön verebilen bilinçli ve sorumluluk sahibi gençler yetiştirmek. Bu çalıştay, medeniyetlerin tecrübelerinden ilham alan, eleştirel düşünebilen ve geleceğin dünyasını daha adil, daha güçlü ve daha sürdürülebilir bir şekilde inşa etmeyi hedefleyen gençlerin buluşma noktası olmayı amaçlar.`,
  },
];

export const MissionVision = () => {
  return (
    <section id="misyon" className="relative py-28 md:py-36 bg-gradient-brown overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative">
        <SectionHeading
          light
          eyebrow="İlkelerimiz"
          title="Misyon & Vizyon"
          description="Çalıştayımızı şekillendiren temel ilkeler ve geleceğe dair tasavvurumuz."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-16 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <article
              key={it.eyebrow}
              className="reveal group relative p-8 md:p-10 rounded-2xl bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/8 transition-smooth"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-6 group-hover:scale-110 transition-smooth">
                <it.icon className="w-7 h-7 text-primary" />
              </div>

              <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">{it.eyebrow}</div>
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-5">
                {it.eyebrow.replace("muz", "")}
              </h3>
              <p className="text-primary-foreground/75 leading-[1.85] text-[15px]">
                {it.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
