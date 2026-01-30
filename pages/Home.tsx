
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ScrollReveal, StaggerContainer } from '../components/ScrollReveal';

const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gray-50 pt-10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
              Exclusive Summer Collection
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Design That <span className="text-indigo-600">Speaks</span><br />Without a Word.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Explore our curated selection of premium products designed to elevate your daily life through minimalist aesthetics and superior craftsmanship.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link 
              to="/products" 
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 group"
            >
              Shop Collection <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Products</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-gray-500">Our most popular and newly arrived items.</p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <Link to="/products" className="text-indigo-600 font-semibold flex items-center hover:underline mt-4 md:mt-0">
                View all products <ArrowRight size={18} className="ml-1" />
              </Link>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Shop By Category</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 max-w-xl mx-auto">Find exactly what you're looking for by browsing through our specialized sections.</p>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          <ScrollReveal className="h-full" width="100%">
            <Link to="/products" className="relative group block h-full overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Electronics"/>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-1">Electronics</h3>
                <p className="text-sm opacity-90">Premium Audio & Tech</p>
              </div>
            </Link>
          </ScrollReveal>
          <div className="grid grid-rows-2 gap-6 h-full">
            <ScrollReveal width="100%">
              <Link to="/products" className="relative group block h-full overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1523381235212-d73f8a38516d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Apparel"/>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Apparel</h3>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1} width="100%">
              <Link to="/products" className="relative group block h-full overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1484101403033-57105d2b77ca?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Home Decor"/>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Home & Living</h3>
                </div>
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} width="100%">
            <Link to="/products" className="relative group block h-full overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Accessories"/>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-1">Accessories</h3>
                <p className="text-sm opacity-90">Style & Substance</p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-4">Customer Stories</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-gray-500">Real feedback from our wonderful community.</p>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <ScrollReveal key={t.id}>
                  <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                    <div className="mb-6 text-indigo-600 opacity-20">
                      <Quote size={40} />
                    </div>
                    <p className="text-gray-600 italic mb-8 flex-grow">{t.content}</p>
                    <div className="flex items-center space-x-4">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                        <p className="text-xs text-indigo-600 font-medium">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-indigo-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />
            
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Lumina Club</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
                Sign up for our newsletter and get 15% off your first purchase plus exclusive access to future drops.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                  Subscribe
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
