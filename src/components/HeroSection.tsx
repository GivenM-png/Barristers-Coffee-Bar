import heroImg from "@/assets/hero-coffee.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Barristers Coffee Bar interior" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-coffee-dark/60" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
      <p className="text-coffee-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">Welcome to</p>
      <h1 className="font-heading text-5xl md:text-7xl font-bold text-coffee-cream leading-tight mb-6">
        Where Great Coffee Meets Great Company
      </h1>
      <p className="text-coffee-cream/80 text-lg md:text-xl mb-8 font-body max-w-xl mx-auto">
        Specialty coffee, delicious cakes & pastries in the heart of Kimberley, South Africa.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact" className="inline-block bg-coffee-gold text-coffee-dark font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all text-sm uppercase tracking-wider">
          Visit Us
        </a>
        <a href="#menu" className="inline-block border-2 border-coffee-cream/50 text-coffee-cream font-semibold px-8 py-3 rounded-lg hover:bg-coffee-cream/10 transition-all text-sm uppercase tracking-wider">
          View Menu
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
