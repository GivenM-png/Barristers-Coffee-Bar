import avoImg from "@/assets/avo-german.jpg";
import cakesImg from "@/assets/cakes-display.jpg";

const menuCategories = [
  {
    title: "Specialty Coffee",
    items: [
      { name: "Espresso", price: "R25" },
      { name: "Cappuccino", price: "R35" },
      { name: "Flat White", price: "R38" },
      { name: "Café Latte", price: "R38" },
      { name: "Mocha", price: "R42" },
      { name: "Iced Coffee", price: "R40" },
    ],
  },
  {
    title: "Cakes & Pastries",
    items: [
      { name: "Chocolate Cake Slice", price: "R45" },
      { name: "Carrot Cake Slice", price: "R42" },
      { name: "Blueberry Muffin", price: "R30" },
      { name: "Butter Croissant", price: "R28" },
      { name: "Scone with Jam & Cream", price: "R35" },
      { name: "Red Velvet Cupcake", price: "R32" },
    ],
  },
  {
    title: "Light Meals",
    items: [
      { name: "Avo German (Featured)", price: "R65", featured: true },
      { name: "Toasted Sandwich", price: "R55" },
      { name: "Breakfast Wrap", price: "R58" },
      { name: "Granola Bowl", price: "R50" },
    ],
  },
];

const MenuSection = () => (
  <section id="menu" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-coffee-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">What We Serve</p>
        <h2 className="font-heading text-4xl font-bold text-foreground">Our Menu</h2>
      </div>

      {/* Featured product banner */}
      <div className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-lg relative">
        <img src={avoImg} alt="Avo German - our featured dish" loading="lazy" width={800} height={800} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 to-transparent flex items-end p-8">
          <div>
            <span className="bg-coffee-gold text-coffee-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Featured</span>
            <h3 className="font-heading text-2xl font-bold text-coffee-cream mt-2">Avo German</h3>
            <p className="text-coffee-cream/80 text-sm">Fresh avocado on artisan bread — a customer favourite • R65</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {menuCategories.map((cat) => (
          <div key={cat.title} className="bg-background rounded-2xl p-6 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item.name} className="flex justify-between items-center">
                  <span className={`text-sm ${item.featured ? "font-semibold text-coffee-gold" : "text-foreground"}`}>{item.name}</span>
                  <span className="text-sm font-semibold text-primary">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <img src={cakesImg} alt="Our cake and pastry display" loading="lazy" width={800} height={800} className="w-full h-64 object-cover" />
      </div>
    </div>
  </section>
);

export default MenuSection;
