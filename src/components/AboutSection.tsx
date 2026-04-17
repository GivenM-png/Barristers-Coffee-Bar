import coffeeFeatured from "@/assets/coffee-featured.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={coffeeFeatured} alt="Specialty coffee with latte art" loading="lazy" width={800} height={800} className="w-full h-auto object-cover" />
        </div>
        <div>
          <p className="text-coffee-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Story</p>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Crafted With Passion</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Barristers Coffee Bar, every cup tells a story. Nestled in HLH Business Park in Kimberley, we've created a space where specialty coffee, homemade cakes, and warm hospitality come together.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our baristas are passionate about delivering the perfect brew, while our kitchen crafts irresistible pastries and cakes daily. With a 4.6-star rating, our guests keep coming back for the beautiful décor, friendly service, and of course — the coffee.
          </p>
          <div className="flex gap-8">
            {[
              { num: "4.6", label: "Star Rating" },
              { num: "100+", label: "Happy Guests Daily" },
              { num: "20+", label: "Menu Items" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">{s.num}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
