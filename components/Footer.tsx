import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-parchment-200">
      {/* Top gold rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="font-display text-4xl font-semibold text-parchment-100 leading-none">GHG</span>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gold-400 mt-1">Global Health Group</div>
            </div>
            <p className="text-parchment-400 text-sm font-light leading-relaxed">
              Advancing global health equity through rigorous technical consultancy, strategic planning, and implementation science.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-400 mb-5">Services</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/services" className="text-parchment-400 hover:text-parchment-100 transition-colors">Program Evaluation</Link></li>
              <li><Link to="/services" className="text-parchment-400 hover:text-parchment-100 transition-colors">Health Systems Strengthening</Link></li>
              <li><Link to="/services" className="text-parchment-400 hover:text-parchment-100 transition-colors">Policy & Advocacy</Link></li>
              <li><Link to="/expertise" className="text-parchment-400 hover:text-parchment-100 transition-colors">Epidemiology & Surveillance</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-400 mb-5">Connect</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/about" className="text-parchment-400 hover:text-parchment-100 transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-parchment-400 hover:text-parchment-100 transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-parchment-400 hover:text-parchment-100 transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-parchment-400 hover:text-parchment-100 transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-400 mb-5">Contact</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-parchment-400">1200 Health Avenue, Suite 400<br />Geneva, Switzerland</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                <span className="text-parchment-400">contact@globalhealthgroup.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                <span className="text-parchment-400">+41 22 555 0123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-parchment-600 font-light">
          <p>&copy; {new Date().getFullYear()} Global Health Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-parchment-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-parchment-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-parchment-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
