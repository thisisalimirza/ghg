import React from 'react';
import { Microscope, Database, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const domains = [
  {
    tag: 'Immunization & VPDs',
    icon: <Microscope size={18} />,
    title: 'Vaccine Preventable Diseases',
    desc: 'Our team has been instrumental in the global polio eradication effort and the introduction of HPV and Malaria vaccines in sub-Saharan Africa. We understand the nuances of cold chain logistics, micro-planning, and community mobilization.',
    features: [
      'Zero-dose children identification strategies',
      'Supplementary Immunization Activity (SIA) planning',
      'Cold Chain Equipment Optimization Platform (CCEOP) support',
    ],
    stat: { num: '98%', label: 'Coverage reached in pilot districts' },
    img: 'https://picsum.photos/seed/medical1/800/600',
    imgAlt: 'Immunization field work',
  },
  {
    tag: 'Digital Health & Data',
    icon: <Database size={18} />,
    title: 'Health Information Systems',
    desc: 'Data is the backbone of decision-making. We specialize in DHIS2 configuration, interoperability standards (FHIR), and building data use cultures within Ministries of Health.',
    features: [
      'DHIS2 dashboard customization & training',
      'Electronic Medical Records (EMR) assessments',
      'GIS mapping for health facility accessibility',
    ],
    stat: { num: '14', label: 'National Data Systems Integrated' },
    img: 'https://picsum.photos/seed/digital/800/600',
    imgAlt: 'Digital health systems',
    reverse: true,
  },
  {
    tag: 'PHC & UHC',
    icon: <HeartPulse size={18} />,
    title: 'Primary Health Care',
    desc: 'Strengthening the first line of defense. We work on the integration of services — bringing HIV, TB, and Malaria services into routine primary care to maximize efficiency and patient outcomes.',
    features: [
      'Community Health Worker (CHW) policy frameworks',
      'Essential Package of Health Services (EPHS) costing',
      'Quality of Care (QoC) improvement collaboratives',
    ],
    stat: { num: '5,000+', label: 'Health Workers Trained' },
    img: 'https://picsum.photos/seed/doctor/800/600',
    imgAlt: 'Primary health care',
  },
];

const Expertise: React.FC = () => {
  return (
    <div className="pt-20">

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <section className="relative bg-forest-950 py-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
          <span className="font-display font-bold text-forest-900 opacity-50 leading-none whitespace-nowrap" style={{ fontSize: '11vw' }}>
            Expertise
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-[11px] tracking-[0.3em] uppercase font-medium">Subject Matter</span>
          </div>
          <h1 className="font-display font-light text-parchment-100 leading-tight" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Deep Technical<br /><em className="italic text-parchment-300">Expertise</em>
          </h1>
          <p className="text-parchment-400 text-xl font-light mt-6 max-w-2xl leading-relaxed">
            We don't just manage projects — we bring deep subject matter expertise
            to specific domains of global health.
          </p>
        </div>
      </section>

      {/* ── DOMAIN SECTIONS ──────────────────────────────────────── */}
      {domains.map((domain, i) => (
        <section
          key={i}
          className={`py-24 md:py-32 ${i % 2 === 0 ? 'bg-parchment-50' : 'bg-parchment-100'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center ${domain.reverse ? 'lg:flex lg:flex-row-reverse' : ''}`}>

              {/* Text */}
              <div className={domain.reverse ? 'lg:pl-0' : ''}>
                <div className="inline-flex items-center gap-2 text-forest-700 font-medium mb-6 bg-forest-50 border border-forest-100 px-3 py-1.5 text-[11px] tracking-[0.1em] uppercase">
                  {domain.icon}
                  <span>{domain.tag}</span>
                </div>
                <h2 className="font-display font-light text-forest-900 mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {domain.title}
                </h2>
                <div className="w-8 h-px bg-gold-400 mb-8" />
                <p className="text-ink-600 font-light leading-relaxed mb-8 text-lg">
                  {domain.desc}
                </p>
                <ul className="space-y-4">
                  {domain.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-ink-700 text-sm font-light">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={domain.img}
                  alt={domain.imgAlt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/10 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="font-display font-light text-gold-400 leading-none mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                    {domain.stat.num}
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-parchment-300">{domain.stat.label}</div>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-forest-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-500/20" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-light text-parchment-100 mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            Bring Our Expertise<br /><em className="italic text-gold-400">to Your Project</em>
          </h2>
          <p className="text-parchment-400 font-light text-lg mb-12 max-w-xl mx-auto">
            Our technical specialists are ready to be deployed anywhere in the world.
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
    </div>
  );
};

export default Expertise;
