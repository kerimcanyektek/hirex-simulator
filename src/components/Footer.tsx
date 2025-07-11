
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="public\assets/logo.png" 
                alt="Hirex Logo" 
                className="h-8"
              />
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Simplify recruitment this Thursday with Hirex.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 Stars on G2</span>
            </div>
          </div>

          {/* Product */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Hirex ATS</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Hirex Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Hirex AI</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Pricing</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">AI Recruitment</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">HR Tools</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Assessment Tests</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Candidate Scorecards</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Post to Best Job Boards</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Candidate Video Interviews</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Glossary</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Email Templates</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">HR Checklists</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Interview Questions Generator</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Compare</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Status</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Terms of Service</a></li>
            </ul>
            
            {/* Company moved under Legal */}
            <div className="mt-8">
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Contact Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Partnership Program</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm max-w-[100px] break-words block">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© 2025 Hirex HR, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
