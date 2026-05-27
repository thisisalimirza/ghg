import React from 'react';
import { Mail, Globe } from 'lucide-react';
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
              <div className="text-xs tracking-[0.2em] uppercase text-gold-400 mt-1">Global Health Group</div>
            </div>
            <p className="text-parchment-400 text-sm font-light leading-relaxed">
              Advancing global health equity through rigorous technical consultancy, strategic planning, and implementation science.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400 mb-5">Services</h3>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/services" className="text-parchment-400 hover:text-parchment-100 transition-colors">Vaccine Delivery &amp; Cold Chain</Link></li>
              <li><Link to="/services" className="text-parchment-400 hover:text-parchment-100 transition-colors">Health Systems Strengthening</Link></li>
              <li><Link to="/services" className="text-parchment-400 hover:text-parchment-100 transition-colors">Policy &amp; Advocacy</Link></li>
              <li><Link to="/services" className="text-parchment-400 hover:text-parchment-100 transition-colors">Monitoring &amp; Evaluation</Link></li>
              <li><Link to="/expertise" className="text-parchment-400 hover:text-parchment-100 transition-colors">Epidemiology &amp; Surveillance</Link></li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400 mb-5">Research</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a
                  href="https://scholar.google.com/citations?user=imranmirza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parchment-400 hover:text-parchment-100 transition-colors"
                >
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dr-imran-mirza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parchment-400 hover:text-parchment-100 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=Mirza+I+%5BAuthor%5D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parchment-400 hover:text-parchment-100 transition-colors"
                >
                  PubMed Publications
                </a>
              </li>
              <li><Link to="/about" className="text-parchment-400 hover:text-parchment-100 transition-colors">About Dr. Mirza</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400 mb-5">Contact</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <Globe size={15} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-parchment-400">Geneva, Switzerland<br />Operating globally</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                <a href="mailto:contact@ghg-global.com" className="text-parchment-400 hover:text-parchment-100 transition-colors">
                  contact@ghg-global.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-parchment-600 font-light">
          <p>&copy; {new Date().getFullYear()} Global Health Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-parchment-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-parchment-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
