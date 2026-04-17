import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Coffee Street", "Cape Town, 8001", "South Africa"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 21 123 4567"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@barristerscoffee.co.za"]
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat-Sun: 8:00 AM - 5:00 PM"]
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-coffee-dark to-coffee-medium text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              We'd love to hear from you. Get in touch to learn more about our coffee or plan your visit.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have questions about our menu, want to book an event, or just want to say hello,
                  we're here to help. Drop us a line and we'll get back to you as soon as possible.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <info.icon className="w-8 h-8 text-coffee-gold mb-3" />
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Find Us</h3>
                  <div className="bg-coffee-medium/10 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-coffee-gold mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive map would go here</p>
                      <p className="text-sm text-muted-foreground">123 Coffee Street, Cape Town</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us how we can help you..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-coffee-gold text-coffee-dark hover:bg-coffee-gold/90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about Barristers Coffee Bar.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer WiFi?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Yes! We provide free high-speed WiFi for all our customers. Just ask our staff for the password.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you cater events?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We cater corporate events, weddings, and private parties. Contact us for custom menus and pricing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are you pet friendly?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Yes, we welcome well-behaved pets on our outdoor patio. Please keep them on a leash and clean up after them.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you have gluten-free options?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Yes! We offer several gluten-free pastries and can accommodate most dietary restrictions. Ask our staff for recommendations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;