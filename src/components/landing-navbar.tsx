"use client";

import { Button } from './ui/button';
import { Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {BrandLogo} from "@site/src/components/brand-logo";
import Link from "@docusaurus/Link";

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          
          {/* Mobile Hamburger - Left */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>

          <BrandLogo />
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground ml-[200px]">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
              <span>macOS, Win, Linux</span>
            </div>
            
            <Button size="sm" className="gap-2 hidden md:flex" asChild>
              <a 
                href="https://github.com/Cosmo-mcp/cosmocp-desktop/releases"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-background"
              >
                <Download className="h-4 w-4 text-background" />
                Get Cosmo Studio
              </a>
            </Button>

            {/* Mobile Download Icon */}
            <Button size="icon" variant="ghost" className="md:hidden" asChild>
              <a 
                href="https://github.com/Cosmo-mcp/cosmocp-desktop/releases"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                <span className="sr-only">Download</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-[70] h-full w-3/4 border-r bg-background p-6 shadow-lg sm:max-w-sm md:hidden"
            >
              <div className="flex flex-col gap-6 h-full">
                <div className="flex items-center justify-between">
                  <BrandLogo />
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <div className="flex flex-col gap-4">
                  <a href="#features" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">Features</a>
                  <a href="https://docs.cosmocp.com" target='_blank' onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">Docs</a>
                  <a href="#faq" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Theme</span>
                    {/*<ThemeToggle />*/}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>v1.0.0</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>macOS, Win, Linux</span>
                  </div>
                  <Button className="w-full gap-2" asChild>
                    <a 
                      href="https://github.com/Cosmo-mcp/cosmocp-desktop/releases"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Download className="h-4 w-4" />
                      Get Cosmo Studio
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
