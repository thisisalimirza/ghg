import React from 'react';
import { Microscope, Database, HeartPulse, CheckCircle2 } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl font-bold text-brand-900 mb-6">Deep Technical Expertise</h1>
            <p className="text-xl text-slate-600">
              We don't just manage projects; we bring deep subject matter expertise to specific domains of global health.
            </p>
          </div>

          <div className="space-y-24">
            {/* Domain 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center space-x-2 text-brand-600 font-semibold mb-4 bg-brand-50 px-3 py-1 rounded-full text-sm">
                  <Microscope size={16} />
                  <span>Immunization & VPDs</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Vaccine Preventable Diseases</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our team has been instrumental in the global polio eradication effort and the introduction of HPV and Malaria vaccines in sub-Saharan Africa. We understand the nuances of cold chain logistics, micro-planning, and community mobilization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700">Zero-dose children identification strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700">Supplementary Immunization Activity (SIA) planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700">Cold Chain Equipment Optimization Platform (CCEOP) support</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 bg-slate-100 rounded-2xl h-80 overflow-hidden relative">
                 <img src="https://picsum.photos/seed/medical1/800/600" alt="Immunization" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                        <div className="text-3xl font-bold">98%</div>
                        <div className="text-sm opacity-90">Coverage reached in pilot districts</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Domain 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="bg-slate-100 rounded-2xl h-80 overflow-hidden relative">
                 <img src="https://picsum.photos/seed/digital/800/600" alt="Data Systems" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                        <div className="text-3xl font-bold">14</div>
                        <div className="text-sm opacity-90">National Data Systems Integrated</div>
                    </div>
                 </div>
              </div>
              <div>
                <div className="inline-flex items-center space-x-2 text-brand-600 font-semibold mb-4 bg-brand-50 px-3 py-1 rounded-full text-sm">
                  <Database size={16} />
                  <span>Digital Health & Data</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Health Information Systems</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Data is the backbone of decision-making. We specialize in DHIS2 configuration, interoperability standards (FHIR), and building data use cultures within Ministries of Health.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700">DHIS2 dashboard customization & training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700">Electronic Medical Records (EMR) assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700">GIS mapping for health facility accessibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Domain 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center space-x-2 text-brand-600 font-semibold mb-4 bg-brand-50 px-3 py-1 rounded-full text-sm">
                  <HeartPulse size={16} />
                  <span>PHC & UHC</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Primary Health Care</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Strengthening the first line of defense. We work on the integration of services—bringing HIV, TB, and Malaria services into routine primary care to maximize efficiency and patient outcomes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700">Community Health Worker (CHW) policy frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700">Essential Package of Health Services (EPHS) costing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-700">Quality of Care (QoC) improvement collaboratives</span>
                  </li>
                </ul>
              </div>
               <div className="order-1 lg:order-2 bg-slate-100 rounded-2xl h-80 overflow-hidden relative">
                 <img src="https://picsum.photos/seed/doctor/800/600" alt="Primary Care" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                        <div className="text-3xl font-bold">5000+</div>
                        <div className="text-sm opacity-90">Health Workers Trained</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;