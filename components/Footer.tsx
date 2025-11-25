import React from 'react';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="text-accent-500" size={24} />
              <span className="font-bold text-xl text-white">Global Health Group</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Advancing global health equity through rigorous technical consultancy, strategic planning, and implementation science.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-200 mb-4">Services</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Program Evaluation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Health Systems Strengthening</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Policy Advocacy</Link></li>
              <li><Link to="/expertise" className="hover:text-white transition-colors">Epidemiology & Surveillance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-200 mb-4">Connect</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-200 mb-4">Contact</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent-500 mt-0.5 flex-shrink-0" />
                <span>1200 Health Avenue, Suite 400<br/>Geneva, Switzerland</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent-500 flex-shrink-0" />
                <span>contact@globalhealthgroup.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent-500 flex-shrink-0" />
                <span>+41 22 555 0123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-400">
          <p>&copy; {new Date().getFullYear()} Global Health Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;