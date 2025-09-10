import { Link } from "wouter";
import { Shield, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold font-[Montserrat]">SVINTECH</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Last Stop to Your Automation. Building secure, scalable, and smart technology solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-accent transition-colors" data-testid="link-footer-web-dev">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors" data-testid="link-footer-automation">Business Automation</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors" data-testid="link-footer-networking">Network Management</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors" data-testid="link-footer-security">Security Solutions</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors" data-testid="link-footer-servers">Server Setup</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors" data-testid="link-footer-contact">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors" data-testid="link-footer-terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span data-testid="text-email">hello@svintech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span data-testid="text-phone">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 SVINTECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}