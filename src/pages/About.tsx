import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Users, Award, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Head Barista & Owner",
    description: "With over 10 years of experience in specialty coffee, Sarah founded Barristers to bring exceptional coffee culture to our community.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Mike Chen",
    role: "Master Roaster",
    description: "Mike oversees our coffee sourcing and roasting process, ensuring every bean meets our high standards.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Emma Rodriguez",
    role: "Pastry Chef",
    description: "Emma creates our delicious baked goods using traditional techniques and the finest ingredients.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "David Thompson",
    role: "Operations Manager",
    description: "David ensures smooth operations and maintains our commitment to excellent customer service.",
    image: "/api/placeholder/300/300"
  }
];

const values = [
  {
    icon: Coffee,
    title: "Quality Coffee",
    description: "We source only the finest beans and roast them to perfection in our own facility."
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We're proud to be a gathering place for our local community and coffee enthusiasts."
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description: "Every drink and pastry is crafted with care and attention to detail."
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "We prioritize ethical sourcing and environmentally friendly practices."
  }
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-coffee-dark to-coffee-medium text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-5xl font-bold mb-4">About Barristers</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Where passion for coffee meets community spirit. We're more than just a coffee shop – we're your neighborhood gathering place.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2018, Barristers Coffee Bar began as a dream to create a space where coffee lovers could enjoy exceptional brews in a warm, welcoming environment. Our founder, Sarah Johnson, brought her decade of experience in specialty coffee to create something special.
                  </p>
                  <p className="text-muted-foreground">
                    What started as a small corner café has grown into a beloved community hub, known for our expertly crafted drinks, fresh pastries, and genuine hospitality.
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-4">
                    We take pride in sourcing our beans directly from sustainable farms around the world, roasting them in small batches to ensure maximum freshness and flavor. Our commitment to quality extends to every aspect of our operation, from the beans we select to the smiles we share.
                  </p>
                  <p className="text-muted-foreground">
                    Today, Barristers continues to be a place where friends meet, ideas are shared, and memories are made – one perfect cup at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from sourcing our beans to serving our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <value.icon className="w-12 h-12 text-coffee-gold mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate individuals behind your favorite coffee experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-coffee-medium rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-coffee-cream" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coffee Sourcing */}
        <section className="py-16 bg-coffee-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-6">Our Coffee Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-coffee-gold">Sourcing</h3>
                  <p className="opacity-90">
                    We partner directly with farmers in Ethiopia, Colombia, and Guatemala to ensure fair prices and sustainable practices.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-coffee-gold">Roasting</h3>
                  <p className="opacity-90">
                    Our small-batch roasting process brings out the unique flavors and aromas of each coffee origin.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-coffee-gold">Serving</h3>
                  <p className="opacity-90">
                    Every cup is brewed with care, using traditional methods and modern techniques to deliver perfection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Visit Us Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the Barristers difference. Come taste our carefully crafted coffee and meet our passionate team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/menu" className="inline-flex items-center justify-center px-6 py-3 bg-coffee-gold text-coffee-dark font-semibold rounded-lg hover:bg-coffee-gold/90 transition-colors">
                View Our Menu
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-coffee-gold text-coffee-gold font-semibold rounded-lg hover:bg-coffee-gold hover:text-coffee-dark transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;