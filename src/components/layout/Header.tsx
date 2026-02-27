"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Phone, AlertTriangle, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Shield className="h-8 w-8 text-secondary" />
          <span className="hidden sm:inline-block tracking-tight text-primary">DSPPPPA</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Your Rights', href: '/rights' },
            { label: 'Leadership', href: '/leadership' },
            { label: 'News', href: '/news' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="px-4 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <Link href="/contact" className="hidden lg:flex items-center gap-2 text-sm font-medium text-red-600 hover:bg-red-50 px-3 py-1 rounded-md transition-colors">
            <AlertTriangle className="h-4 w-4" />
            Report Issue
          </Link>
          <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md hover:bg-red-700 transition-colors cursor-pointer">
             <Phone className="h-4 w-4" />
             <span className="hidden sm:inline">Emergency: +234</span>
             <span className="sm:hidden">+234</span>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white border-slate-200 absolute w-full left-0 top-16 shadow-lg animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col gap-4 text-base font-medium text-slate-700">
              <Link href="/home" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/services" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/rights" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Your Rights</Link>
              <Link href="/leadership" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Leadership</Link>
              <Link href="/news" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>News</Link>
              <Link href="/faq" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link href="/contact" className="p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
            <div className="pt-4 border-t border-slate-100">
               <Link href="/contact" className="flex items-center gap-2 text-sm font-medium text-red-600 p-2 hover:bg-red-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                <AlertTriangle className="h-4 w-4" />
                Report an Issue
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

