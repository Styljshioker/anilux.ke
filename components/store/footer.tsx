import { Mail, MapPin, Phone, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ANILUX
            </h3>
            <p className="text-muted-foreground">
              Premium anime merchandise and luxury clothing crafted in Nairobi, Kenya.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-primary hover:text-accent cursor-pointer transition" />
              <Twitter className="w-5 h-5 text-primary hover:text-accent cursor-pointer transition" />
              <Facebook className="w-5 h-5 text-primary hover:text-accent cursor-pointer transition" />
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+254 7XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>hello@anilux.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 ANILUX. All rights reserved. Made in Kenya.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
