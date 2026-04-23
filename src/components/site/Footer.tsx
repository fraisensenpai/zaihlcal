import { Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-brown text-primary-foreground py-14 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container relative">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10">
                <img src="/logo.png" alt="ZAİHL Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-serif text-lg">ZAİHL</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Medeniyet Çalıştayı</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Geçmişin birikiminden ilham alarak geleceğe yön veren gençlerin
              buluşma noktası.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Hızlı Bağlantılar</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#hakkimizda" className="text-primary-foreground/80 hover:text-accent transition-smooth">Hakkımızda</a></li>
              <li><a href="#komiteler" className="text-primary-foreground/80 hover:text-accent transition-smooth">Komitelerimiz</a></li>
              <li><a href="#akis" className="text-primary-foreground/80 hover:text-accent transition-smooth">Akış & Mekan</a></li>
              <li><a href="#iletisim" className="text-primary-foreground/80 hover:text-accent transition-smooth">İletişim</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">İletişim</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail size={14} className="text-accent" /> zaihlcalistay@gmail.com
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone size={14} className="text-accent" /> +90 535 224 27 76
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Instagram size={14} className="text-accent" /> @zaihlcalistay
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} ZAİHL Medeniyet Çalıştayı. Tüm hakları saklıdır.</div>
          <div className="flex items-center gap-4">
            <div>23 – 24 Mayıs · İstanbul</div>
            <div className="hidden sm:block w-px h-3 bg-primary-foreground/20" />
            <div>FraisenSenpai tarafından ❤️ ile yapıldı</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
