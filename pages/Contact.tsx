import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-brand-950 text-white py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-brand-200 max-w-2xl mx-auto">
              We are ready to deploy technical expertise to your project. Contact our regional hubs below.
            </p>
         </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Offices</h2>
              
              <div className="space-y-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-lg text-brand-900 mb-4 flex items-center">
                    <MapPin className="mr-2 text-accent-500" size={20} /> Geneva HQ
                  </h3>
                  <p className="text-slate-600 mb-4 pl-7">
                    1200 Health Avenue, Suite 400<br/>
                    1202 Geneva, Switzerland
                  </p>
                  <div className="pl-7 space-y-2 text-sm">
                    <div className="flex items-center text-slate-600">
                      <Phone size={16} className="mr-2" /> +41 22 555 0123
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Mail size={16} className="mr-2" /> geneva@globalhealthgroup.com
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-lg text-brand-900 mb-4 flex items-center">
                    <MapPin className="mr-2 text-accent-500" size={20} /> New York Office
                  </h3>
                  <p className="text-slate-600 mb-4 pl-7">
                    800 3rd Avenue<br/>
                    New York, NY 10022, USA
                  </p>
                  <div className="pl-7 space-y-2 text-sm">
                    <div className="flex items-center text-slate-600">
                      <Phone size={16} className="mr-2" /> +1 212 555 0199
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Mail size={16} className="mr-2" /> ny@globalhealthgroup.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Organization Type</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-slate-600">
                      <option>Government / Ministry of Health</option>
                      <option>Non-Governmental Organization (NGO)</option>
                      <option>Multilateral Agency (UN, WHO, etc)</option>
                      <option>Private Sector / Philanthropy</option>
                      <option>Academic / Research</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;