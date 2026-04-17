import heroImg from "@/assets/hero-coffee.jpg";
import interiorImg from "@/assets/gallery-interior.jpg";
import baristaImg from "@/assets/gallery-barista.jpg";
import coffeeFeatured from "@/assets/coffee-featured.jpg";
import cakesImg from "@/assets/cakes-display.jpg";
import avoImg from "@/assets/avo-german.jpg";

const images = [
  { src: heroImg, alt: "Coffee shop interior with latte" },
  { src: interiorImg, alt: "Cozy reading corner" },
  { src: baristaImg, alt: "Barista making latte art" },
  { src: coffeeFeatured, alt: "Specialty coffee" },
  { src: cakesImg, alt: "Cakes and pastries" },
  { src: avoImg, alt: "Avo German dish" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-coffee-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Take a Look</p>
        <h2 className="font-heading text-4xl font-bold text-foreground">Our Gallery</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
