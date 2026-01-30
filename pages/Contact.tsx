
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from '../components/ScrollReveal';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white pb-24">
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 max-w-xl mx-auto">Have a question about an order or a product? We're here to help.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <StaggerContainer>
            <div className="space-y-6">
              {[
                { icon: <Mail />, title: "Email Us", info: "hello@dawood.com", sub: "Response in 24h" },
                { icon: <Phone />, title: "Call Us", info: "+1 (555) 000-1234", sub: "Mon-Fri 9am-6pm" },
                { icon: <MapPin />, title: "Visit Us", info: "123 Minimalism Way", sub: "Oslo, Norway" }
              ].map((item, i) => (
                <ScrollReveal key={i}>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 flex items-center gap-6">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                      {/* Fixed: cast item.icon as React.ReactElement<any> to allow 'size' property in cloneElement */}
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-indigo-600 font-medium">{item.info}</p>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{item.sub}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
              
              <ScrollReveal delay={0.3}>
                <div className="p-8 bg-indigo-600 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-6">Connect with us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white text-white hover:text-indigo-600 rounded-full flex items-center justify-center transition-all"><Instagram /></a>
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white text-white hover:text-indigo-600 rounded-full flex items-center justify-center transition-all"><Twitter /></a>
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white text-white hover:text-indigo-600 rounded-full flex items-center justify-center transition-all"><Facebook /></a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </StaggerContainer>

          {/* Contact Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-2xl shadow-gray-100/30 h-full">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-500">We'll get back to you as soon as possible.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-indigo-600 font-bold underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h2 className="text-3xl font-bold mb-10">Send a Message</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                    <input required type="text" placeholder="Inquiry about product" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                    <textarea required rows={5} placeholder="How can we help?" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-gray-50/50 resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full sm:w-auto bg-indigo-600 text-white px-12 py-5 rounded-full font-bold shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3">
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Map Placeholder */}
        <ScrollReveal delay={0.4} className="mt-20">
          <div className="h-[400px] w-full bg-gray-100 rounded-[40px] overflow-hidden relative border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover grayscale opacity-50"
              alt="Map placeholder"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center"><MapPin /></div>
                <div>
                  <h4 className="font-bold">Dawood HQ</h4>
                  <p className="text-sm text-gray-500">Visit our design studio</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;
