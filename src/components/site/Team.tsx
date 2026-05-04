import { SectionHeading } from "./SectionHeading";

const teamMembers = [
  { name: "Elmas Koca", role: "Genel Koordinatör", image: "/ekip/Genel Koordinatör Elmas Koca.jpeg" },
  { name: "Berra Şevval Avşar", role: "Akademi Başkanı", image: "/ekip/Akademi Başkanı Berra Şevval Avşar.jpeg" },
  { name: "Zehra Taşçı", role: "Organizasyon Başkanı", image: "/ekip/Organizasyon Başkanı Zehra Taşçı.jpeg" },
  { name: "Kağan Ürün", role: "Saha Başkanı", image: "/ekip/Saha Başkanı Kağan Ürün.jpeg" },
  { name: "İpeknaz Çelik", role: "Saha Başkanı", image: "/ekip/Saha Başkanı İpeknaz Çelik.jpeg" },
  { name: "Muhammet Kakkuk", role: "Eğlence Başkanı", image: "/ekip/Eğlence Başkanı Muhammet Kakkuk.jpeg" },
  { name: "Hatice Özel", role: "Eğlence Ekibi Başkanı", image: "/ekip/Eğlence Ekibi Başkanı Hatice Özel.jpeg" },
  { name: "Ayşe Reyyan Şimbil", role: "Finans Başkanı", image: "/ekip/Finans Başkanı Ayşe Reyyan Şimbil.jpeg" },
  { name: "Eslem Zişan Altun", role: "Finans Başkanı", image: "/ekip/Finans Başkanı Eslem Zişan Altun.jpeg" },
  { name: "Rahma Musaoğlu", role: "Basın Başkanı", image: "/ekip/Basın Başkanı Rahma Musaoğlu.jpeg" },
  { name: "Enes Çomaklı", role: "Basın Başkanı", image: "/ekip/Basın başkanı Enes Çomaklı.jpeg" },
  { name: "Ayşe Üstün", role: "Medya Başkanı", image: "/ekip/Medya Başkanı Ayşe Üstün.jpeg" },
];

export const Team = () => {
  return (
    <section id="ekibimiz" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Ekibimiz"
          title="ZAIHLCAL Organizasyon Ekibi"
          description="Başarılı bir deneyim için çalışan, yenilikçi ve azimli kadromuz."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {teamMembers.map((member, i) => (
            <article
              key={member.name}
              className="reveal group relative flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/60 hover:-translate-y-2 hover:shadow-elegant transition-smooth overflow-hidden"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="relative w-32 h-32 mb-5 rounded-full overflow-hidden border-2 border-transparent group-hover:border-accent transition-smooth shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="relative font-serif text-lg font-semibold text-foreground mb-1 leading-tight">
                {member.name}
              </h3>
              <p className="relative text-sm text-accent font-medium tracking-wide">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
