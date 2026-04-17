import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-coffee-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="font-heading text-4xl font-bold text-foreground">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-coffee-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="text-muted-foreground text-sm">HLH Business Park, 1 Poole St, Kimberley, 8300, South Africa</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-coffee-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground text-sm">087 153 3287</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-coffee-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Hours</h3>
                <p className="text-muted-foreground text-sm">Open daily — Closes at 18:30</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-coffee-gold transition-colors">
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-coffee-gold transition-colors">
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-coffee-gold transition-colors">
                <Twitter className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden shadow-md mt-4">
              <iframe
                title="Barristers Coffee Bar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.5!2d24.77!3d-28.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ0JzI0LjAiUyAyNMKwNDYnMTIuMCJF!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-sm space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-coffee-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-coffee-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-coffee-gold resize-none"
              />
            </div>
            <button type="submit" className="w-full bg-coffee-gold text-coffee-dark font-semibold py-3 rounded-lg hover:brightness-110 transition-all text-sm uppercase tracking-wider">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
