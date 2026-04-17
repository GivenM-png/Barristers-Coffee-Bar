import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import avoImg from "@/assets/avo-german.jpg";
import cakesImg from "@/assets/cakes-display.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Specialty Coffee Images
import espressoImg from "@/assets/Specialty Coffee/Espresso_Coffee.jfif";
import doubleEspressoImg from "@/assets/Specialty Coffee/Double_espresso.jfif";
import cappuccinoImg from "@/assets/Specialty Coffee/cappuccino.jfif";
import flatWhiteImg from "@/assets/Specialty Coffee/Flat_White.jfif";
import latteImg from "@/assets/Specialty Coffee/Latte.jfif";
import mochaImg from "@/assets/Specialty Coffee/Mocha.jfif";
import icedCoffeeImg from "@/assets/Specialty Coffee/iced_coffee.jfif";
import coldBrewImg from "@/assets/Specialty Coffee/cold_brew.jfif";
import americanoImg from "@/assets/Specialty Coffee/americano.jfif";

// Cakes & Pastries Images
import chocolateCakeImg from "@/assets/Cakes & Pastries/Chocolate_Cake.jfif";
import carrotCakeImg from "@/assets/Cakes & Pastries/Carrot_Cake.jfif";
import blueberryImg from "@/assets/Cakes & Pastries/Blueberry.jfif";
import butterCroissantImg from "@/assets/Cakes & Pastries/butter_croissant.jfif";
import sconeImg from "@/assets/Cakes & Pastries/scone_with_jam.jfif";
import redVelvetImg from "@/assets/Cakes & Pastries/red_velvet_cupcake.jfif";
import appleDanishImg from "@/assets/Cakes & Pastries/apple_danish.jfif";
import painAuImg from "@/assets/Cakes & Pastries/pain_au.jfif";

// Light Meals Images
import avoGermanImg from "@/assets/Light Meals/avo_german.jfif";
import toastedSandwichImg from "@/assets/Light Meals/toasted_sandwich.jfif";
import breakfastWrapImg from "@/assets/Light Meals/BreakfastWraps.jfif";
import granolaBowlImg from "@/assets/Light Meals/granola_bowl.jfif";
import quinoaSaladImg from "@/assets/Light Meals/quinoa_salad.jfif";
import chickenWrapImg from "@/assets/Light Meals/chicken_caesa_wrap.jfif";

// Other Beverages Images
import orangeJuiceImg from "@/assets/Other Beverages/fresh_orange_juice.jfif";
import greenSmoothieImg from "@/assets/Other Beverages/green_smoothie.jfif";
import hotChocolateImg from "@/assets/Other Beverages/hot_chocolate.jfif";
import chaiLatteImg from "@/assets/Other Beverages/chai_latte.jfif";
import matchaImg from "@/assets/Other Beverages/Matcha_latte.jfif";

const menuCategories = [
  {
    id: "coffee",
    title: "Specialty Coffee",
    description: "Expertly crafted coffee drinks made with premium beans",
    items: [
      { name: "Espresso", price: "R25", description: "Rich and bold single shot", image: espressoImg },
      { name: "Double Espresso", price: "R35", description: "Two shots for extra strength", image: doubleEspressoImg },
      { name: "Cappuccino", price: "R35", description: "Equal parts espresso, steamed milk, and foam", image: cappuccinoImg },
      { name: "Flat White", price: "R38", description: "Smooth espresso with velvety microfoam", image: flatWhiteImg },
      { name: "Café Latte", price: "R38", description: "Espresso with steamed milk", image: latteImg },
      { name: "Mocha", price: "R42", description: "Chocolate and espresso delight", image: mochaImg },
      { name: "Iced Coffee", price: "R40", description: "Chilled coffee over ice", image: icedCoffeeImg },
      { name: "Cold Brew", price: "R45", description: "Smooth, cold-steeped coffee", image: coldBrewImg },
      { name: "Americano", price: "R30", description: "Espresso diluted with hot water", image: americanoImg },
    ],
  },
  {
    id: "cakes",
    title: "Cakes & Pastries",
    description: "Freshly baked treats to complement your coffee",
    items: [
      { name: "Chocolate Cake Slice", price: "R45", description: "Rich chocolate cake with ganache", image: chocolateCakeImg },
      { name: "Carrot Cake Slice", price: "R42", description: "Classic carrot cake with cream cheese frosting", image: carrotCakeImg },
      { name: "Blueberry Muffin", price: "R30", description: "Fluffy muffin packed with blueberries", image: blueberryImg },
      { name: "Butter Croissant", price: "R28", description: "Flaky, buttery French pastry", image: butterCroissantImg },
      { name: "Scone with Jam & Cream", price: "R35", description: "Traditional English scone with clotted cream", image: sconeImg },
      { name: "Red Velvet Cupcake", price: "R32", description: "Moist red velvet with cream cheese frosting", image: redVelvetImg },
      { name: "Apple Danish", price: "R38", description: "Cinnamon-spiced apple filling in pastry", image: appleDanishImg },
      { name: "Pain au Chocolat", price: "R32", description: "Chocolate-filled croissant", image: painAuImg },
    ],
  },
  {
    id: "meals",
    title: "Light Meals",
    description: "Hearty yet light meals perfect for any time of day",
    items: [
      { name: "Avo German (Featured)", price: "R65", description: "Open-faced sandwich with avocado, poached egg, and herbs", featured: true, image: avoGermanImg },
      { name: "Toasted Sandwich", price: "R55", description: "Grilled cheese sandwich with tomato and herbs", image: toastedSandwichImg },
      { name: "Breakfast Wrap", price: "R58", description: "Egg, bacon, and cheese in a tortilla wrap", image: breakfastWrapImg },
      { name: "Granola Bowl", price: "R50", description: "Greek yogurt with granola and fresh berries", image: granolaBowlImg },
      { name: "Quinoa Salad", price: "R62", description: "Quinoa with roasted vegetables and feta", image: quinoaSaladImg },
      { name: "Chicken Caesar Wrap", price: "R68", description: "Grilled chicken with Caesar dressing in a wrap", image: chickenWrapImg },
    ],
  },
  {
    id: "beverages",
    title: "Other Beverages",
    description: "Refreshing drinks and specialty beverages",
    items: [
      { name: "Fresh Orange Juice", price: "R35", description: "Freshly squeezed orange juice", image: orangeJuiceImg },
      { name: "Green Smoothie", price: "R45", description: "Spinach, banana, and almond milk blend", image: greenSmoothieImg },
      { name: "Hot Chocolate", price: "R40", description: "Rich chocolate with steamed milk", image: hotChocolateImg },
      { name: "Chai Latte", price: "R42", description: "Spiced tea with steamed milk", image: chaiLatteImg },
      { name: "Matcha Latte", price: "R48", description: "Japanese green tea with milk", image: matchaImg },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  const filteredCategories = activeCategory === "all"
    ? menuCategories
    : menuCategories.filter(cat => cat.id === activeCategory);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-coffee-dark to-coffee-medium text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Discover our carefully curated selection of premium coffee, fresh pastries, and light meals
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-card border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant={activeCategory === "all" ? "default" : "outline"}
                onClick={() => setActiveCategory("all")}
                className="min-w-[120px]"
              >
                All Items
              </Button>
              {menuCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="min-w-[120px]"
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <Card key={index} className={`relative overflow-hidden flex flex-col ${item.featured ? 'ring-2 ring-coffee-gold' : ''}`}>
                      {item.featured && (
                        <Badge className="absolute top-2 right-2 bg-coffee-gold text-coffee-dark z-10">
                          Featured
                        </Badge>
                      )}
                      {/* Product Image */}
                      {item.image && (
                        <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden bg-muted">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <span>{item.name}</span>
                          <span className="text-coffee-gold font-bold">{item.price}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Featured Image for certain categories */}
                {category.id === "meals" && (
                  <div className="mt-12 max-w-4xl mx-auto">
                    <img
                      src={avoImg}
                      alt="Avo German - our featured dish"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
                {category.id === "cakes" && (
                  <div className="mt-12 max-w-4xl mx-auto">
                    <img
                      src={cakesImg}
                      alt="Fresh cakes and pastries display"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-coffee-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Visit Us Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience our menu in person at Barristers Coffee Bar
            </p>
            <Button size="lg" variant="secondary" onClick={() => navigate("/contact")}>
              Make a Reservation
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Menu;