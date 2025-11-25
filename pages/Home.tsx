import React from 'react';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-brand-950 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Technical Excellence for <span className="text-accent-400">Global Health Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              We partner with GAVI, WHO, and UNICEF to design resilient health systems and deliver data-driven strategies for the world's most pressing health challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/expertise">
                <Button size="lg" className="rounded-full w-full sm:w-auto">
                  Our Expertise
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="rounded-full border-slate-500 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS/PARTNERS LOGO STRIP */}
      <section className="bg-slate-50 py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by global leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-slate-800">WHO</span>
            <span className="text-2xl font-bold text-slate-800">unicef</span>
            <span className="text-2xl font-bold text-slate-800">Gavi</span>
            <span className="text-2xl font-bold text-slate-800">BILL & MELINDA GATES FOUNDATION</span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-900 mb-6">Bridging the Gap Between Policy and Implementation</h2>
              <div className="w-20 h-1.5 bg-accent-500 mb-8"></div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Global Health Group is a specialized consultancy firm dedicated to strengthening health systems in low- and middle-income countries. With decades of collective experience, our team provides technical assistance that is both rigorous and context-specific.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Evidence-based strategy development",
                  "Cross-sectoral partnership facilitation",
                  "Rapid response mechanisms for outbreaks"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="bg-brand-100 p-1 rounded-full text-brand-600">
                       <ShieldCheck size={16} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/about" className="text-brand-700 font-semibold hover:text-brand-900 inline-flex items-center">
                  Read our full mission <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-brand-900">
              <img 
                src="https://picsum.photos/seed/health1/800/600" 
                alt="Global Health Team Meeting" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "50+", label: "Countries Served" },
              { num: "200+", label: "Projects Completed" },
              { num: "$500M", label: "Grant Funding Secured" },
              { num: "15", label: "Years of Excellence" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">{stat.num}</div>
                <div className="text-brand-200 font-medium tracking-wide text-sm uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-brand-900 mb-6">Ready to Scale Your Impact?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team of technical consultants is ready to support your organization in achieving its global health goals.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="primary">Schedule a Consultation</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;