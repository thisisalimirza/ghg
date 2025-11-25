import React from 'react';
import { Syringe, BarChart3, Activity, Globe2, Users, ShieldCheck, FileText, Settings, Laptop } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Syringe size={32} />,
      title: "Vaccine Delivery & Cold Chain",
      desc: "We design and optimize immunization supply chains to ensure potency from manufacturer to the last mile. Our experts conduct Effective Vaccine Management (EVM) assessments and develop improvement plans.",
      features: ["Cold Chain Equipment Optimization", "Last-Mile Delivery Strategy", "New Vaccine Introduction"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Monitoring & Evaluation (M&E)",
      desc: "Robust impact assessments and framework design for donor-funded health initiatives. We move beyond simple output tracking to measure genuine health outcomes and system improvements.",
      features: ["Data Quality Audits (DQA)", "Impact Evaluation", "Real-time Monitoring Dashboards"]
    },
    {
      icon: <Activity size={32} />,
      title: "Health Systems Strengthening",
      desc: "Capacity building and policy reform to achieve Universal Health Coverage (UHC). We analyze bottlenecks in governance, financing, and workforce to propose sustainable solutions.",
      features: ["Health Financing Strategy", "Workforce Planning", "Supply Chain Integration"]
    },
    {
      icon: <Globe2 size={32} />,
      title: "Epidemiology & Surveillance",
      desc: "Designing data collection systems for disease tracking and outbreak response. We help Ministries of Health transition from paper-based to digital surveillance systems (IDSR).",
      features: ["Outbreak Investigation Support", "Seroprevalence Surveys", "Digital Health Implementation"]
    },
    {
      icon: <Users size={32} />,
      title: "Technical Assistance",
      desc: "Embedded expert support for Ministries of Health and implementation partners. We provide long-term advisors who work side-by-side with national counterparts.",
      features: ["Ministry Secondments", "Grant Application Support", "Program Management"]
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Policy & Advocacy",
      desc: "Translating scientific evidence into actionable policy briefs for global stakeholders. We help shape the global health agenda through rigorous analysis and stakeholder engagement.",
      features: ["Policy Analysis", "Stakeholder Mapping", "Resource Mobilization Cases"]
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-brand-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-brand-900 mb-6">Technical Consultancy Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our services are tailored to the unique needs of development agencies, foundations, and national governments.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm font-medium text-brand-700">
                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The GHG Approach</h2>
            <p className="text-brand-200">How we deliver consistent quality across diverse environments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FileText/>, title: "1. Assess", desc: "Rigorous situational analysis and data review." },
              { icon: <Settings/>, title: "2. Design", desc: "Co-creation of context-specific strategies." },
              { icon: <Laptop/>, title: "3. Implement", desc: "Hands-on support for rollout and training." },
              { icon: <BarChart3/>, title: "4. Evaluate", desc: "Continuous measurement and course correction." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-800 rounded-full flex items-center justify-center mb-6 text-accent-400">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-brand-200 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white text-center">
         <div className="max-w-7xl mx-auto px-4">
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Need a custom technical proposal?</h2>
             <Link to="/contact">
               <Button size="lg">Contact Our Team</Button>
             </Link>
         </div>
      </section>
    </div>
  );
};

export default Services;