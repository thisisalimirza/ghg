import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const offices = [
  {
    city: 'Geneva HQ',
    address: '1200 Health Avenue, Suite 400\n1202 Geneva, Switzerland',
    phone: '+41 22 555 0123',
    email: 'geneva@globalhealthgroup.com',
  },
  {
    city: 'New York Office',
    address: '800 3rd Avenue\nNew York, NY 10022, USA',
    phone: '+1 212 555 0199',
    email: 'ny@globalhealthgroup.com',
  },
];

const Contact: React.FC = () => {
  return (
    <div className="pt-20">

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <section className="relative bg-forest-950 py-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
          <span className="font-display font-bold text-forest-900 opacity-50 leading-none whitespace-nowrap" style={{ fontSize: '13vw' }}>
            Contact
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-medium">Get in Touch</span>
          </div>
          <h1 className="font-display font-light text-parchment-100 leading-tight" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Work Directly<br /><em className="italic text-parchment-300">With the Expert</em>
          </h1>
          <p className="text-parchment-400 text-xl font-light mt-6 max-w-2xl leading-relaxed">
            Every inquiry goes directly to Dr. Mirza. Describe your challenge and he will respond personally to discuss whether and how GHG can help.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-24 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

            {/* Offices */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium">Our Offices</span>
              </div>
              <h2 className="font-display text-4xl font-light text-forest-900 mb-12">
                Based in Geneva
              </h2>

              <div className="space-y-8">
                {offices.map((office, i) => (
                  <div key={i} className="border border-ink-200 bg-white shadow-sm p-8 hover:border-forest-400 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <MapPin size={15} className="text-gold-500 flex-shrink-0" />
                      <h3 className="font-display text-2xl font-medium text-forest-900">{office.city}</h3>
                    </div>
                    <p className="text-ink-500 text-sm font-light leading-relaxed pl-6 mb-5 whitespace-pre-line">
                      {office.address}
                    </p>
                    <div className="pl-6 space-y-3">
                      <div className="flex items-center gap-3 text-sm font-light text-ink-500">
                        <Phone size={13} className="text-gold-500 flex-shrink-0" />
                        {office.phone}
                      </div>
                      <div className="flex items-center gap-3 text-sm font-light text-ink-500">
                        <Mail size={13} className="text-gold-500 flex-shrink-0" />
                        {office.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Field presence note */}
              <div className="mt-8 p-8 bg-forest-900 text-parchment-200">
                <div className="font-display text-5xl font-light text-gold-400 mb-2">50+</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-parchment-400 mb-4">Countries of Direct Field Experience</div>
                <p className="text-sm font-light text-parchment-300 leading-relaxed">
                  Dr. Mirza has worked across sub-Saharan Africa, South Asia, the Middle East, and Southeast Asia — and operates globally for the right engagement.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium">Send an Inquiry</span>
              </div>
              <h2 className="font-display text-4xl font-light text-forest-900 mb-12">
                Get in Touch
              </h2>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-900 font-light placeholder:text-ink-300 transition-colors text-sm"
                      placeholder="Elena"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-900 font-light placeholder:text-ink-300 transition-colors text-sm"
                      placeholder="Rossi"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-900 font-light placeholder:text-ink-300 transition-colors text-sm"
                    placeholder="you@organization.org"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                    Organization Type
                  </label>
                  <select
                    className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-700 font-light transition-colors text-sm appearance-none"
                  >
                    <option>Government / Ministry of Health</option>
                    <option>Non-Governmental Organization (NGO)</option>
                    <option>Multilateral Agency (UN, WHO, etc.)</option>
                    <option>Private Sector / Philanthropy</option>
                    <option>Academic / Research</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-900 font-light placeholder:text-ink-300 transition-colors text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 bg-forest-900 text-parchment-100 py-5 text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-forest-800 transition-colors duration-200"
                >
                  Send Inquiry
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
