import React from 'react';
import { Target, Globe2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2008',
      text: 'Founded in Geneva to support GAVI's initial health systems strengthening funding rounds.',
    },
    {
      year: '2014',
      text: 'Expanded operations to support Ebola response in West Africa, establishing our reputation for rapid deployment.',
    },
    {
      year: '2020',
      text: 'Lead technical consultants for COVAX readiness assessments in 15 countries.',
    },
    {
      year: '2024',
      text: 'Active in 50+ countries, supporting Ministries of Health across sub-Saharan Africa, South Asia, and Southeast Asia.',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Elena Rossi',
      role: 'Managing Director',
      bio: 'Former WHO Director of Health Systems with 20+ years of experience in sub-Saharan Africa.',
      img: 'https://picsum.photos/seed/person1/400/400',
    },
    {
      name: 'James K. Mwangi',
      role: 'Head of Epidemiology',
      bio: 'Lead architect for national surveillance systems in 5 countries. PhD from Johns Hopkins.',
      img: 'https://picsum.photos/seed/person2/400/400',
    },
    {
      name: 'Sarah Chen',
      role: 'Policy & Strategy Lead',
      bio: 'Strategic advisor to the Gates Foundation on vaccine delivery innovation.',
      img: 'https://picsum.photos/seed/person3/400/400',
    },
  ];

  return (
    <div className="pt-20">

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <section className="relative bg-forest-950 py-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
          <span className="font-display font-bold text-forest-900 opacity-50 leading-none" style={{ fontSize: '18vw' }}>
            About
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-medium">Our Story</span>
          </div>
          <h1 className="font-display font-light text-parchment-100 leading-tight animate-fade-up" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Global Health Group
          </h1>
          <p className="text-parchment-400 text-xl font-light mt-6 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
            A collective of epidemiologists, policy strategists, and health economists
            dedicated to solving the most complex challenges in global health.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-parchment-200">
            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-parchment-200">
              <div className="w-10 h-10 flex items-center justify-center bg-forest-50 text-forest-700 mb-8">
                <Target size={20} />
              </div>
              <h2 className="font-display text-4xl font-light text-forest-900 mb-6">Our Mission</h2>
              <div className="w-8 h-px bg-gold-400 mb-8" />
              <p className="text-ink-600 font-light text-lg leading-relaxed">
                To provide world-class technical assistance that empowers governments and
                international organizations to build resilient, equitable, and sustainable
                health systems.
              </p>
            </div>
            <div className="p-12 md:p-16">
              <div className="w-10 h-10 flex items-center justify-center bg-forest-50 text-forest-700 mb-8">
                <Globe2 size={20} />
              </div>
              <h2 className="font-display text-4xl font-light text-forest-900 mb-6">Our Vision</h2>
              <div className="w-8 h-px bg-gold-400 mb-8" />
              <p className="text-ink-600 font-light text-lg leading-relaxed">
                A world where geographic location and economic status do not determine a
                person's access to life-saving healthcare and preventive services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium">Our People</span>
          </div>
          <h2 className="font-display font-light text-forest-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            Leadership
          </h2>
          <p className="text-ink-500 font-light mb-16 max-w-xl">
            Guided by decades of experience at top-tier global institutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (
              <div key={i} className="group bg-parchment-50 border border-parchment-200 hover:border-forest-300 transition-all duration-300">
                <div className="overflow-hidden h-72">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-6 h-px bg-gold-400 mb-5" />
                  <h3 className="font-display text-2xl font-medium text-forest-900 mb-1">{leader.name}</h3>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-gold-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-ink-500 text-sm font-light leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORY TIMELINE ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-forest-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full border border-forest-800 translate-x-36 -translate-y-36 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-[11px] tracking-[0.25em] uppercase font-medium">Our History</span>
          </div>
          <h2 className="font-display font-light text-parchment-100 mb-16" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            <em className="italic">A Track Record</em><br />of Impact
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-forest-700 md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 md:gap-16`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="font-display text-5xl font-light text-gold-400 mb-3">{item.year}</div>
                    <p className="text-parchment-300 font-light leading-relaxed">{item.text}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 top-3 w-3 h-3 bg-gold-400 rounded-full md:-translate-x-1.5 -translate-x-1" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-parchment-50 border-t border-parchment-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-forest-900 mb-6">
            Work With Our Team
          </h2>
          <p className="text-ink-500 font-light mb-10">
            Ready to bring our expertise to your global health initiative?
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-forest-900 text-parchment-100 px-8 py-4 text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-forest-800 transition-colors"
          >
            Get in Touch
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
