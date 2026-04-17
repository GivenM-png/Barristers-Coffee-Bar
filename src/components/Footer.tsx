import { Coffee } from "lucide-react";

const Footer = () => (
  <footer className="bg-coffee-dark py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Coffee className="w-5 h-5 text-coffee-gold" />
        <span className="font-heading text-lg font-bold text-coffee-cream">Barristers Coffee Bar</span>
      </div>
      <p className="text-coffee-cream/60 text-sm mb-2">HLH Business Park, 1 Poole St, Kimberley, 8300, South Africa</p>
      <p className="text-coffee-cream/60 text-sm">© {new Date().getFullYear()} Barristers Coffee Bar. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
