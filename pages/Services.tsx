import React from 'react';
import { Syringe, BarChart3, Activity, Globe2, Users, ShieldCheck, FileText, Settings, Laptop, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      icon: <Syringe size={20} />,
      title: 'Vaccine Delivery & Cold Chain',
      desc: 'We design and optimize immunization supply chains to ensure potency from manufacturer to the last mile. Our experts conduct Effective Vaccine Management (EVM) assessments and develop improvement plans.',
      features: ['Cold Chain Equipment Optimization', 'Last-Mile Delivery Strategy', 'New Vaccine Introduction'],
    },
    {
      num: '02',
      icon: <BarChart3 size={20} />,
      title: 'Monitoring & Evaluation (M&E)',
      desc: 'Robust impact assessments and framework design for donor-funded health initiatives. We move beyond simple output tracking to measure genuine health outcomes and system improvements.',
      features: ['Data Quality Audits (DQA)', 'Impact Evaluation', 'Real-time Monitoring Dashboards'],
    },
    {
      num: '03',
      icon: <Activity size={20} />,
      title: 'Health Systems Strengthening',
      desc: 'Capacity building and policy reform to achieve Universal Health Coverage (UHC). We analyze bottlenecks in governance, financing, and workforce to propose sustainable solutions.',
      features: ['Health Financing Strategy', 'Workforce Planning', 'Supply Chain Integration'],
    },
    {
      num: '04',
      icon: <Globe2 size={20} />,
      title: 'Epidemiology & Surveillance',
      desc: 'Designing data collection systems for disease tracking and outbreak response. We help Ministries of Health transition from paper-based to digital surveillance systems (IDSR).',
      features: ['Outbreak Investigation Support', 'Seroprevalence Surveys', 'Digital Health Implementation'],
    },
    {
      num: '05',
      icon: <Users size={20} />,
      title: 'Technical Assistance',
      desc: 'Embedded expert support for Ministries of Health and implementation partners. We provide long-term advisors who work side-by-side with national counterparts.',
      features: ['Ministry Secondments', 'Grant Application Support', 'Program Management'],
    },
    {
      num: '06',
      icon: <ShieldCheck size={20} />,
      title: 'Policy & Advocacy',
      desc: 'Translating scientific evidence into actionable policy briefs for global stakeholders. We help shape the global health agenda through rigorous analysis and stakeholder engagement.',
      features: ['Policy Analysis', 'Stakeholder Mapping', 'Resource Mobilization Cases'],
    },
  ];

  const steps = [
    { icon: <FileText size={20} />, title: '01 — Assess', desc: 'Rigorous situational analysis and data review.' },
    { icon: <Settings size={20} />, title: '02 — Design', desc: 'Co-creation of context-specific strategies.' },
    { icon: <Laptop size={20} />, title: '03 — Implement', desc: 'Hands-on support for rollout and training.' },
    { icon: <BarChart3 size={20} />, title: '04 — Evaluate', desc: 'Continuous measurement and course correction.' },
  ];

  return (
    <div className="pt-20">

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <section className="relative bg-forest-950 py-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
          <span className="font-display font-bold text-forest-900 opacity-50 leading-none whitespace-nowrap" style={{ fontSize: '14vw' }}>
            Services
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-medium">What We Offer</span>
          </div>
          <h1 className="font-display font-light text-parchment-100 leading-tight" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Technical Consultancy<br /><em className="italic text-parchment-300">Services</em>
          </h1>
          <p className="text-parchment-400 text-xl font-light mt-6 max-w-2xl leading-relaxed">
            Tailored to the unique needs of development agencies, foundations, and national governments.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section className="py-24 bg-parchment-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-parchment-200">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group p-10 md:p-12 hover:bg-forest-900 transition-all duration-300 cursor-default
                  ${i % 2 === 0 ? 'md:border-r border-parchment-200' : ''}
                  ${i < 4 ? 'border-b border-parchment-200' : ''}
                `}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-6xl font-light text-parchment-200 group-hover:text-forest-700 transition-colors duration-300 leading-none">
                    {service.num}
                  </span>
                  <div className="w-9 h-9 flex items-center justify-center border border-parchment-200 group-hover:border-forest-700 text-forest-700 group-hover:text-gold-400 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-medium text-forest-900 group-hover:text-parchment-100 transition-colors duration-300 mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-ink-500 font-light text-sm leading-relaxed mb-8 group-hover:text-parchment-300 transition-colors duration-300">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm font-medium text-forest-700 group-hover:text-parchment-200 transition-colors duration-300">
                      <span className="w-1 h-1 bg-gold-400 rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE GHG APPROACH ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-forest-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-forest-800 translate-x-32 -translate-y-32 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-[11px] tracking-[0.25em] uppercase font-medium">Methodology</span>
          </div>
          <h2 className="font-display font-light text-parchment-100 mb-16" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            The GHG<br /><em className="italic">Approach</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-forest-800">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`p-10 group hover:bg-forest-800 transition-colors duration-200 ${i < 3 ? 'border-b md:border-b-0 md:border-r border-forest-800' : ''}`}
              >
                <div className="text-gold-400 mb-6">{step.icon}</div>
                <h3 className="font-display text-2xl font-medium text-parchment-100 mb-3 leading-snug">{step.title}</h3>
                <p className="text-parchment-400 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-parchment-100 border-t border-parchment-200 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-forest-900 mb-4">
            Need a Custom Technical Proposal?
          </h2>
          <p className="text-ink-500 font-light mb-10">
            Our team will scope a tailored engagement for your organization's specific context and goals.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-forest-900 text-parchment-100 px-8 py-4 text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-forest-800 transition-colors"
          >
            Contact Our Team
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
