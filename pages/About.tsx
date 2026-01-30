
import React from 'react';
import { ScrollReveal, StaggerContainer } from '../components/ScrollReveal';
import { Users, Globe, Zap, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">Modern Essentials.<br/><span className="text-indigo-600">Pure Aesthetics.</span></h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We started Lumina because we couldn't find products that matched our standards for both quality and minimalist design. So, we decided to build them ourselves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-20">
          <ScrollReveal className="w-full lg:w-1/2">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-2xl" alt="Our team" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600 rounded-3xl -z-10 hidden md:block" />
            </div>
          </ScrollReveal>
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-gray-500 leading-relaxed mb-6 text-lg">
                Founded in 2020, Lumina began as a small studio in Oslo. Our mission was simple: eliminate the clutter from daily life by creating essentials that are as functional as they are beautiful.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-gray-500 leading-relaxed mb-10 text-lg">
                Today, we serve a global community of designers, creators, and enthusiasts who value the details. Every product we release goes through hundreds of iterations until it reaches perfection.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-8">
              <ScrollReveal delay={0.3}>
                <div className="text-4xl font-extrabold text-indigo-600">500k+</div>
                <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mt-1">Customers</div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="text-4xl font-extrabold text-indigo-600">25+</div>
                <div className="text-sm font-bold text-gray-900 uppercase tracking-widest mt-1">Countries</div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-bold">Our Values</h2>
            </ScrollReveal>
          </div>
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { icon: <Heart/>, title: "People First", desc: "Our community drives every decision we make." },
                { icon: <Zap/>, title: "Innovation", desc: "Always seeking new ways to simplify your life." },
                { icon: <Globe/>, title: "Sustainability", desc: "Committed to eco-friendly materials and ethical production." },
                { icon: <Users/>, title: "Collaboration", desc: "Working with the world's best designers." }
              ].map((value, i) => (
                <ScrollReveal key={i}>
                  <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                      {React.cloneElement(value.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-500 text-sm">{value.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default About;
