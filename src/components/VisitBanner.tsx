import { Coffee } from "lucide-react";

const VisitBanner = () => (
  <section className="py-16 bg-primary">
    <div className="container mx-auto px-4 text-center">
      <Coffee className="w-10 h-10 text-coffee-gold mx-auto mb-4" />
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Visit Us Today</h2>
      <p className="text-primary-foreground/80 max-w-lg mx-auto mb-6">
        Experience the warmth of Barristers Coffee Bar. Great coffee, delicious food, and unforgettable vibes await.
      </p>
      <a href="#contact" className="inline-block bg-coffee-gold text-coffee-dark font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all text-sm uppercase tracking-wider">
        Get Directions
      </a>
    </div>
  </section>
);

export default VisitBanner;
