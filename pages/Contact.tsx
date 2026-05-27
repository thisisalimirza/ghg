import React, { useState } from 'react';
import { Mail, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    orgType: 'Government / Ministry of Health',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            Every inquiry goes directly to Dr. Mirza. Describe your challenge and he will respond personally within 48 hours.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="py-24 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

            {/* Left — direct contact + context */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium">Direct Access</span>
              </div>
              <h2 className="font-display text-4xl font-light text-forest-900 mb-10">
                Reach Dr. Mirza
              </h2>

              {/* Email — primary contact */}
              <div className="bg-white border border-ink-200 shadow-sm p-8 hover:border-forest-400 transition-colors mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={15} className="text-gold-500 flex-shrink-0" />
                  <h3 className="font-display text-xl font-medium text-forest-900">Email</h3>
                </div>
                <a
                  href="mailto:contact@ghg-global.com"
                  className="text-forest-700 hover:text-forest-900 font-medium transition-colors"
                >
                  contact@ghg-global.com
                </a>
                <p className="text-ink-400 text-sm font-light mt-2">
                  Personal response from Dr. Mirza within 48 hours.
                </p>
              </div>

              {/* Based in */}
              <div className="bg-white border border-ink-200 shadow-sm p-8 hover:border-forest-400 transition-colors mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={15} className="text-gold-500 flex-shrink-0" />
                  <h3 className="font-display text-xl font-medium text-forest-900">Based in Geneva — Operating Globally</h3>
                </div>
                <p className="text-ink-500 text-sm font-light leading-relaxed">
                  GHG is headquartered in Geneva, Switzerland — within the same ecosystem as WHO, Gavi, and the Global Fund. Dr. Mirza deploys internationally for the right engagement.
                </p>
              </div>

              {/* Field presence */}
              <div className="bg-forest-900 text-parchment-200 p-8">
                <div className="font-display text-5xl font-light text-gold-400 mb-2">50+</div>
                <div className="text-xs tracking-[0.2em] uppercase text-parchment-400 mb-4">Countries of Direct Field Experience</div>
                <p className="text-sm font-light text-parchment-300 leading-relaxed">
                  Sub-Saharan Africa, South Asia, the Middle East, Southeast Asia — and wherever the work is needed.
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium">Send an Inquiry</span>
              </div>
              <h2 className="font-display text-4xl font-light text-forest-900 mb-12">
                Describe Your Challenge
              </h2>

              {submitted ? (
                <div className="border border-forest-200 bg-forest-50 p-12 flex flex-col items-center text-center gap-6">
                  <CheckCircle2 size={40} className="text-forest-600" />
                  <div>
                    <h3 className="font-display text-2xl font-medium text-forest-900 mb-3">Message Received</h3>
                    <p className="text-ink-600 font-light leading-relaxed max-w-sm">
                      Thank you, {formData.firstName || 'and thank you'}. Dr. Mirza will review your inquiry and respond personally within 48 hours.
                    </p>
                  </div>
                  <div className="w-8 h-px bg-gold-400" />
                  <p className="text-ink-400 text-sm font-light">
                    You can also reach us directly at{' '}
                    <a href="mailto:contact@ghg-global.com" className="text-forest-700 hover:text-forest-900 transition-colors">
                      contact@ghg-global.com
                    </a>
                  </p>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-900 font-light placeholder:text-ink-300 transition-colors text-sm"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-900 font-light placeholder:text-ink-300 transition-colors text-sm"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-900 font-light placeholder:text-ink-300 transition-colors text-sm"
                      placeholder="you@organization.org"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                      Organization Type
                    </label>
                    <select
                      name="orgType"
                      value={formData.orgType}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-700 font-light transition-colors text-sm appearance-none"
                    >
                      <option>Government / Ministry of Health</option>
                      <option>Non-Governmental Organization (NGO)</option>
                      <option>Multilateral Agency (UN, WHO, Gavi, etc.)</option>
                      <option>Private Sector / Philanthropy</option>
                      <option>Academic / Research Institution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase font-medium text-ink-500 mb-3">
                      Tell Us About Your Challenge
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-ink-300 focus:border-forest-600 focus:outline-none py-3 text-ink-900 font-light placeholder:text-ink-300 transition-colors text-sm resize-none"
                      placeholder="Describe your project, country context, and what kind of support you are looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 bg-forest-900 text-parchment-100 py-5 text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-forest-800 transition-colors duration-200"
                  >
                    Send Inquiry
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-ink-400 text-xs font-light text-center">
                    Or email directly:{' '}
                    <a href="mailto:contact@ghg-global.com" className="text-forest-700 hover:text-forest-900 transition-colors">
                      contact@ghg-global.com
                    </a>
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
