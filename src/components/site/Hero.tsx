import heroImg from "@/assets/hero-civilization.jpg";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Antik medeniyetlerin sinematik kompozisyonu"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105 animate-fade-in-slow"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground/90 text-xs uppercase tracking-[0.25em] mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-shimmer" />
            23 – 24 Mayıs · İstanbul
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground leading-[1.05] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Geçmişin <span className="text-gradient-gold italic">Bilgeliği</span>,
            <br />
            Geleceğin <span className="text-gradient-gold italic">Vizyonu</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            ZAİHL Medeniyet Çalıştayı, gençleri tarihin derinliklerinden ilham alan
            akademik bir tartışma ortamında buluşturuyor. 9 komite, iki dolu gün,
            sınırsız fikir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfCi53yWqC0yI3WFipmYvFO6SxDdrwdCLt2SQxq0ydaOtTNg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary font-semibold shadow-gold hover:scale-[1.03] transition-smooth"
            >
              Delege Başvurusu
              <ArrowRight size={18} className="transition-smooth group-hover:translate-x-1" />
            </a>
            <a
              href="https://forms.gle/122LUEyW42YFQ8wMA"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-primary-foreground/40 text-primary-foreground bg-primary-foreground/5 backdrop-blur-md font-semibold hover:bg-primary-foreground/15 transition-smooth"
            >
              Delegasyon Başvurusu
              <ArrowRight size={18} className="transition-smooth group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-primary-foreground/80 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-accent" />
              <span>23 – 24 Mayıs 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              <span>FSM Üniversitesi, Topkapı Kampüsü</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-xs tracking-[0.3em] uppercase animate-shimmer">
        Keşfet
      </div>
    </section>
  );
};
