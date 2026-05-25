import React from 'react';
import { Target, Globe2, ArrowRight, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const timeline = [
    {
      year: 'Early Career',
      text: "Trained as a physician (MBBS, Allama Iqbal Medical College) and epidemiologist (MSc, Aga Khan University). Began fieldwork in primary health care and immunization programs across South Asia and East Africa.",
    },
    {
      year: '2000s',
      text: "Deployed to Somalia with UNICEF — spearheading integrated Child Health Days that expanded vaccination, nutrition, and health coverage in one of the world's most challenging operating environments.",
    },
    {
      year: '2010s',
      text: "Led post-conflict health recovery in Lebanon and supported polio eradication efforts in Afghanistan, developing expertise in reaching zero-dose children in fragile and conflict-affected states.",
    },
    {
      year: '2018–2023',
      text: "Served as Global Health Advisor at UNICEF Headquarters, New York. Co-led the WHO Defeating Meningitis by 2030 Roadmap and was recognized by the COVAX partnership for pandemic response leadership across 11 African countries.",
    },
    {
      year: '2025',
      text: "Founded Global Health Group — bringing three decades of UNICEF institutional knowledge and field experience directly to governments, foundations, and development agencies as an independent consultancy.",
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
            A boutique consultancy grounded in three decades of frontline experience
            at UNICEF, WHO, and Gavi — now independent and fully at your service.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-parchment-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-ink-200 shadow-sm">
            <div className="p-12 md:p-16 bg-white border-b md:border-b-0 md:border-r border-ink-200">
              <div className="w-10 h-10 flex items-center justify-center bg-forest-100 text-forest-700 mb-8">
                <Target size={20} />
              </div>
              <h2 className="font-display text-4xl font-light text-forest-900 mb-6">Our Mission</h2>
              <div className="w-8 h-px bg-gold-400 mb-8" />
              <p className="text-ink-600 font-light text-lg leading-relaxed">
                To translate decades of institutional knowledge and field experience into
                precise, actionable technical support — helping governments and global health
                organizations turn policy into measurable outcomes.
              </p>
            </div>
            <div className="p-12 md:p-16 bg-white">
              <div className="w-10 h-10 flex items-center justify-center bg-forest-100 text-forest-700 mb-8">
                <Globe2 size={20} />
              </div>
              <h2 className="font-display text-4xl font-light text-forest-900 mb-6">Our Vision</h2>
              <div className="w-8 h-px bg-gold-400 mb-8" />
              <p className="text-ink-600 font-light text-lg leading-relaxed">
                A world where every child — regardless of geography, conflict, or poverty —
                receives the vaccines and primary health services they need to survive and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER PROFILE ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-ink-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium">Our People</span>
          </div>
          <h2 className="font-display font-light text-forest-900 mb-16" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            Leadership
          </h2>

          {/* Founder — full-width featured card */}
          <div className="bg-white border border-ink-200 shadow-sm mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-1 overflow-hidden h-72 lg:h-auto">
                <img
                  src="https://picsum.photos/seed/founder1/600/700"
                  alt="Dr. Imran Mirza"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="lg:col-span-2 p-10 md:p-14 flex flex-col justify-center">
                <div className="w-6 h-px bg-gold-400 mb-6" />
                <h3 className="font-display text-4xl font-medium text-forest-900 mb-1">Dr. Imran Mirza</h3>
                <p className="text-[11px] tracking-[0.15em] uppercase text-gold-600 font-medium mb-6">
                  Founder &amp; Principal Consultant
                </p>
                <p className="text-ink-600 font-light leading-relaxed mb-6 text-lg">
                  A physician-epidemiologist with over two decades of service at UNICEF Headquarters in New York, Dr. Mirza was one of the world's leading voices on immunization systems and vaccine delivery. His field postings spanned Somalia, Afghanistan, and Lebanon — always at the intersection of humanitarian crisis and health systems thinking.
                </p>
                <p className="text-ink-600 font-light leading-relaxed mb-8">
                  He co-led the WHO's <em className="italic">Defeating Meningitis by 2030</em> Roadmap, guided COVAX pandemic response across 11 African countries, and has authored more than 25 peer-reviewed publications in <em className="italic">Lancet Global Health</em>, <em className="italic">BMJ Global Health</em>, and <em className="italic">eLife</em>. He holds an MBBS from Allama Iqbal Medical College and an MSc in Epidemiology from Aga Khan University.
                </p>
                {/* Credential chips */}
                <div className="flex flex-wrap gap-3">
                  {[
                    'UNICEF HQ — Global Health Advisor',
                    'MSc Epidemiology, Aga Khan University',
                    '25+ Peer-Reviewed Publications',
                    'WHO Meningitis 2030 Roadmap',
                    'COVAX Partnership — Pandemic Response',
                  ].map((cred) => (
                    <span key={cred} className="text-[10px] tracking-[0.1em] uppercase font-medium text-forest-700 bg-forest-50 border border-forest-200 px-3 py-1.5">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Supporting team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Dr. Aisha Nkomo',
                role: 'Senior Epidemiologist',
                bio: 'Former WHO surveillance lead for East Africa. Specializes in integrated disease surveillance, outbreak response, and DHIS2 implementation across fragile states.',
                img: 'https://picsum.photos/seed/person2/400/400',
              },
              {
                name: 'Marcus Evangelista',
                role: 'Health Systems Specialist',
                bio: 'Former World Bank health financing advisor. Expert in UHC costing, Essential Package of Health Services design, and community health worker policy frameworks.',
                img: 'https://picsum.photos/seed/person3/400/400',
              },
            ].map((member, i) => (
              <div key={i} className="group bg-white border border-ink-200 hover:border-forest-400 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="overflow-hidden h-56">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-6 h-px bg-gold-400 mb-5" />
                  <h3 className="font-display text-2xl font-medium text-forest-900 mb-1">{member.name}</h3>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-gold-600 font-medium mb-4">{member.role}</p>
                  <p className="text-ink-500 text-sm font-light leading-relaxed">{member.bio}</p>
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
            <span className="text-gold-400 text-[11px] tracking-[0.25em] uppercase font-medium">The Journey</span>
          </div>
          <h2 className="font-display font-light text-parchment-100 mb-16" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            <em className="italic">A Career</em><br />of Consequence
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-forest-700 md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 md:gap-16`}
                >
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="font-display text-4xl font-light text-gold-400 mb-3">{item.year}</div>
                    <p className="text-parchment-300 font-light leading-relaxed">{item.text}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-3 w-3 h-3 bg-gold-400 rounded-full md:-translate-x-1.5 -translate-x-1" />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS CALLOUT ─────────────────────────────────── */}
      <section className="py-20 bg-parchment-50 border-t border-parchment-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gold-400" />
                <span className="text-gold-600 text-[11px] tracking-[0.25em] uppercase font-medium">Research &amp; Thought Leadership</span>
              </div>
              <h2 className="font-display text-4xl font-light text-forest-900 mb-6">
                Evidence-Based,<br /><em className="italic">Published</em> Expertise
              </h2>
              <p className="text-ink-600 font-light leading-relaxed mb-8">
                Our founder has authored over 25 peer-reviewed papers across leading journals — including <em className="italic">Lancet Global Health</em>, <em className="italic">BMJ Global Health</em>, and <em className="italic">eLife</em> — and served as guest editor of two special issues of <em className="italic">Vaccines</em>. GHG's recommendations are not opinion; they are evidence.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Lancet Global Health', 'BMJ Global Health', 'eLife', 'Vaccines', 'Journal of Infectious Diseases'].map((j) => (
                  <span key={j} className="text-[10px] tracking-[0.1em] uppercase font-medium text-forest-700 bg-forest-50 border border-forest-200 px-3 py-1.5">
                    {j}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '25+', label: 'Peer-Reviewed Papers' },
                { num: '2', label: 'Journal Special Issues Edited' },
                { num: '50+', label: 'Countries of Field Work' },
                { num: '3', label: 'Global Roadmaps Co-Led' },
              ].map((s, i) => (
                <div key={i} className="bg-white border border-ink-200 p-8 shadow-sm">
                  <div className="font-display text-5xl font-light text-forest-900 mb-2">{s.num}</div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-ink-400 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-parchment-100 border-t border-parchment-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-forest-900 mb-6">
            Bring This Expertise to Your Work
          </h2>
          <p className="text-ink-500 font-light mb-10">
            Ready to put three decades of UNICEF-level technical knowledge to work for your organization?
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
