import { Star } from "lucide-react";

const reviews = [
  { name: "Lindi M.", text: "Absolutely loved my time there. Great atmosphere and service.", rating: 5 },
  { name: "Johan V.", text: "Beautiful, trendy, great coffee and cakes. Will definitely come back!", rating: 5 },
  { name: "Thandi K.", text: "Best coffee, beautiful decor and friendly service! A hidden gem in Kimberley.", rating: 5 },
  { name: "Sarah P.", text: "The Avo German is to die for. Cozy vibe and the staff are so welcoming.", rating: 4 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-coffee-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">What People Say</p>
        <h2 className="font-heading text-4xl font-bold text-foreground">Customer Reviews</h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < 5 ? "fill-coffee-gold text-coffee-gold" : "text-border"}`} />
            ))}
          </div>
          <span className="text-foreground font-bold text-lg">4.6</span>
          <span className="text-muted-foreground text-sm">/ 5</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-background rounded-2xl p-6 shadow-sm">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className={`w-4 h-4 ${j < r.rating ? "fill-coffee-gold text-coffee-gold" : "text-border"}`} />
              ))}
            </div>
            <p className="text-foreground italic mb-4">"{r.text}"</p>
            <p className="text-sm font-semibold text-primary">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
