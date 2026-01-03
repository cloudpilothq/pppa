import Link from 'next/link';
import { Shield, Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-white">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                 <Shield className="h-6 w-6" />
              </div>
              <span>PPPPA</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              The Official Private Public Property Protection Agency. Dedicated to safeguarding assets, ensuring public trust, and upholding property rights for all citizens.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-emerald-600 hover:text-white transition-all text-slate-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-emerald-600 hover:text-white transition-all text-slate-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-slate-900 rounded-full hover:bg-emerald-600 hover:text-white transition-all text-slate-400">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6">Department</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-2">About Agency</Link></li>
              <li><Link href="/leadership" className="hover:text-emerald-400 transition-colors flex items-center gap-2">Leadership</Link></li>
              <li><Link href="/news" className="hover:text-emerald-400 transition-colors flex items-center gap-2">Press Releases</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
             <h3 className="font-bold text-lg text-white mb-6">Services</h3>
             <ul className="space-y-4">
               <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Property Registry</Link></li>
               <li><Link href="/report" className="hover:text-emerald-400 transition-colors">Report Violation</Link></li>
               <li><Link href="/rights" className="hover:text-emerald-400 transition-colors">Legal Assistance</Link></li>
               <li><Link href="/verify" className="hover:text-emerald-400 transition-colors">Verify Title</Link></li>
             </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                <span>Block B: Federal Agency, Gwarimpa<br/>Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>+234 800 555 0199</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>contact@pppa.gov.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} PPPA. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
