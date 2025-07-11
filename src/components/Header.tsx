import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              {" "}
              <img
                src="assets/logo.png"
                alt="Hirex Logo"
                className="h-8"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">
                <a href="https://gethirex.com/products">Products</a>
              </button>
            </div>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">
                <a href="https://gethirex.com/features">Features</a>
              </button>
            </div>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">
                <a href="https://gethirex.com/pricing">Pricing</a>
              </button>
            </div>
            <button className="text-foreground hover:text-primary transition-colors">
              <a href="https://gethirex.com/support">Support</a>
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              <a href="https://app.gethirex.com/auth/signup/">Try for free</a>
            </Button>
            <Button>
              <a href="https://gethirex.com/get-in-touch">Get a demo</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
