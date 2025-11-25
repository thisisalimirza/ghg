import React from 'react';
import { Users, Target, History, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Global Health Group</h1>
          <p className="text-xl text-brand-100 max-w-2xl">
            We are a collective of epidemiologists, policy strategists, and health economists dedicated to solving the most complex challenges in global health.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-accent-100 text-accent-600 rounded-lg">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-bold text-brand-900">Our Mission</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide world-class technical assistance that empowers governments and international organizations to build resilient, equitable, and sustainable health systems.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-brand-100 text-brand-600 rounded-lg">
                  <Globe2 size={24} />
                </div>
                <h2 className="text-2xl font-bold text-brand-900">Our Vision</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                A world where geographic location and economic status do not determine a person's access to life-saving healthcare and preventive services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Our Leadership</h2>
            <p className="text-slate-600">Guided by decades of experience at top-tier global institutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Elena Rossi",
                role: "Managing Director",
                bio: "Former WHO Director of Health Systems with 20+ years of experience in sub-Saharan Africa.",
                img: "https://picsum.photos/seed/person1/400/400"
              },
              {
                name: "James K. Mwangi",
                role: "Head of Epidemiology",
                bio: "Lead architect for national surveillance systems in 5 countries. PhD from Johns Hopkins.",
                img: "https://picsum.photos/seed/person2/400/400"
              },
              {
                name: "Sarah Chen",
                role: "Policy & Strategy Lead",
                bio: "Strategic advisor to the Gates Foundation on vaccine delivery innovation.",
                img: "https://picsum.photos/seed/person3/400/400"
              }
            ].map((leader, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <img src={leader.img} alt={leader.name} className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-900">{leader.name}</h3>
                  <p className="text-accent-600 font-medium text-sm mb-4">{leader.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="p-4 bg-brand-900 inline-block rounded-2xl mb-6">
                <History className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-brand-900 mb-4">Our History</h2>
            </div>
            <div className="md:w-2/3 border-l-4 border-brand-100 pl-8 space-y-8">
              <div>
                <h4 className="font-bold text-brand-800 text-lg">2008</h4>
                <p className="text-slate-600">Founded in Geneva to support GAVI's initial health systems strengthening funding rounds.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-800 text-lg">2014</h4>
                <p className="text-slate-600">Expanded operations to support Ebola response in West Africa, establishing our reputation for rapid deployment.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-800 text-lg">2020</h4>
                <p className="text-slate-600">Lead technical consultants for COVAX readiness assessments in 15 countries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;