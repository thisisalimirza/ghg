import React from 'react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-forest-950 min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
          <span className="font-display font-bold text-[22vw] text-forest-900 leading-none opacity-60">
            GHG
          </span>
        </div>
        {/* Top gold gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-40 z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10 animate-fade-in">
              <span className="w-8 h-px bg-gold-400" />
              <span className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-medium">
                Technical Consultancy · Est. 2008
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-light text-parchment-100 leading-[0.93] mb-10 animate-fade-up"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', animationDelay: '0.1s' }}
            >
              Technical<br />
              <em className="italic text-parchment-300">Excellence</em><br />
              <span className="text-gold-400">for Global</span><br />
              Health Impact
            </h1>

            {/* Subtext */}
            <p
              className="text-parchment-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-14 animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              Founded by a former UNICEF Global Health Advisor with 20+ years of field work
              across Somalia, Afghanistan, and Lebanon — GHG translates institutional
              knowledge into precise, implementable solutions for governments and global health partners.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/expertise"
                className="group inline-flex items-center gap-3 bg-gold-400 text-forest-950 px-8 py-4 text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-gold-300 transition-colors duration-200"
              >
                Our Expertise
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border border-parchment-600 text-parchment-200 px-8 py-4 text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-white/5 transition-colors duration-200"
              >
                Work With Dr. Mirza
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-10 left-6 lg:left-8 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <ArrowDownRight size={14} className="text-gold-400" />
            <span className="text-parchment-500 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          </div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────────── */}
      <section className="bg-parchment-100 py-14 border-b border-parchment-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-[10px] font-medium text-ink-400 tracking-[0.3em] uppercase mb-10">
            Career Built Across Leading Global Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {['WHO', 'UNICEF', 'Gavi', 'Bill & Melinda Gates Foundation', 'Africa CDC'].map((partner) => (
              <span
                key={partner}
                className="font-display text-xl md:text-2xl font-medium text-ink-300 hover:text-forest-700 transition-colors duration-300 cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-start">

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium">Who We Are</span>
              </div>
              <h2 className="font-display font-light text-forest-900 leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
                Bridging Policy<br />
                <em className="italic">&amp; Implementation</em>
              </h2>
              <p className="text-ink-600 text-lg font-light leading-relaxed mb-10">
                Global Health Group brings over two decades of frontline UNICEF experience to the world's most complex immunization and health systems challenges. Founded by a former Global Health Advisor at UNICEF Headquarters, our work is grounded in field reality — from post-conflict Somalia to fragile-state Afghanistan to policy corridors in Geneva and New York.
              </p>

              <div className="space-y-0 mb-10">
                {[
                  'Vaccine delivery & immunization systems',
                  'Policy translation from evidence to action',
                  'Rapid response in fragile and conflict-affected states',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-ink-200">
                    <span className="w-2 h-2 bg-gold-400 rounded-full flex-shrink-0" />
                    <span className="text-ink-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-forest-800 text-[11px] tracking-[0.15em] uppercase font-medium hover:text-forest-600 transition-colors"
              >
                Read Our Mission
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative pt-8 lg:pt-0">
              <div className="relative h-[480px] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/health1/800/600"
                  alt="Global Health Team"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="font-display text-7xl font-light text-gold-400">20+</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-parchment-300 mt-1">Years at UNICEF</div>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-2 md:-right-6 bg-forest-900 text-parchment-100 p-8 w-44 md:w-52 shadow-xl">
                <div className="font-display text-5xl font-light text-gold-400">50+</div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-parchment-400 mt-2">Countries of Field Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="py-24 bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full border border-forest-800 translate-x-40 -translate-y-40" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-forest-800 -translate-x-48 translate-y-48" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { num: '50+',  label: 'Countries of Field Operation' },
              { num: '25+',  label: 'Peer-Reviewed Publications' },
              { num: '20+',  label: 'Years at UNICEF' },
              { num: '3',    label: 'Global Health Roadmaps Co-Led' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`py-12 px-6 md:px-10 text-center border-forest-800
                  ${i < 3 ? 'md:border-r' : ''}
                  ${i % 2 === 0 && i < 2 ? 'border-r' : ''}
                  ${i < 2 ? 'border-b md:border-b-0' : ''}
                `}
              >
                <div className="font-display font-light text-gold-400 mb-3" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                  {stat.num}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-medium text-parchment-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium">What We Do</span>
              </div>
              <h2 className="font-display font-light text-forest-900 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
                Our Core<br /><em className="italic">Services</em>
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-forest-800 text-[11px] tracking-[0.15em] uppercase font-medium hover:text-forest-600 transition-colors self-end"
            >
              View All Services
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-ink-200 shadow-sm">
            {[
              {
                num: '01',
                title: 'Vaccine Delivery & Cold Chain',
                desc: 'Optimizing immunization supply chains from manufacturer to the last mile, ensuring potency across every touchpoint.',
              },
              {
                num: '02',
                title: 'Health Systems Strengthening',
                desc: 'Capacity building and policy reform to achieve Universal Health Coverage — addressing governance, financing, and workforce gaps.',
              },
              {
                num: '03',
                title: 'Monitoring & Evaluation',
                desc: 'Robust impact assessments that move beyond output tracking to measure genuine health outcomes and system improvements.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`p-10 bg-white group hover:bg-forest-900 transition-all duration-300 cursor-default ${i < 2 ? 'border-b md:border-b-0 md:border-r border-ink-200' : ''}`}
              >
                <div className="font-display text-7xl font-light text-parchment-200 group-hover:text-forest-700 transition-colors duration-300 mb-8 leading-none">
                  {service.num}
                </div>
                <h3 className="font-display text-2xl font-medium text-forest-900 group-hover:text-parchment-100 transition-colors duration-300 mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-ink-500 text-sm font-light leading-relaxed group-hover:text-parchment-300 transition-colors duration-300">
                  {service.desc}
                </p>
                <div className="mt-10 w-8 h-px bg-gold-400 group-hover:w-16 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-32 bg-forest-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
          <span className="font-display font-bold text-forest-900 opacity-25 whitespace-nowrap" style={{ fontSize: '18vw' }}>
            Impact
          </span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-medium">Ready to Begin</span>
            <span className="w-8 h-px bg-gold-400" />
          </div>
          <h2
            className="font-display font-light text-parchment-100 mb-8 leading-tight"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Ready to Scale<br />
            <em className="italic text-gold-400">Your Impact?</em>
          </h2>
          <p className="text-parchment-400 text-lg font-light mb-14 max-w-2xl mx-auto">
            Our team of technical consultants is ready to support your organization
            in achieving its global health goals.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-gold-400 text-forest-950 px-10 py-5 text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-gold-300 transition-colors duration-200"
          >
            Schedule a Consultation
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
