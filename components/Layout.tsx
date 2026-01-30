
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Instagram, Twitter, Facebook, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight text-indigo-600">LUMINA</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-5">
          <button className="text-gray-600 hover:text-indigo-600 transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <Link to="/cart" className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 hover:text-indigo-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div>
        <h3 className="text-xl font-bold mb-6 text-indigo-600 uppercase tracking-wider">Lumina</h3>
        <p className="text-gray-500 leading-relaxed mb-6">
          Elevating your daily essentials through thoughtful design and uncompromising quality.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-400 hover:text-indigo-600"><Instagram size={20}/></a>
          <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-400 hover:text-indigo-600"><Twitter size={20}/></a>
          <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-400 hover:text-indigo-600"><Facebook size={20}/></a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-6">Shop</h4>
        <ul className="space-y-4 text-gray-500 text-sm">
          <li><Link to="/products" className="hover:text-indigo-600">All Products</Link></li>
          <li><Link to="/products" className="hover:text-indigo-600">New Arrivals</Link></li>
          <li><Link to="/products" className="hover:text-indigo-600">Best Sellers</Link></li>
          <li><Link to="/products" className="hover:text-indigo-600">Special Offers</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-6">Support</h4>
        <ul className="space-y-4 text-gray-500 text-sm">
          <li><Link to="/contact" className="hover:text-indigo-600">Contact Us</Link></li>
          <li><a href="#" className="hover:text-indigo-600">Shipping Policy</a></li>
          <li><a href="#" className="hover:text-indigo-600">Returns & Exchanges</a></li>
          <li><a href="#" className="hover:text-indigo-600">FAQs</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-6">Newsletter</h4>
        <p className="text-sm text-gray-500 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Your email" 
            className="bg-white border border-gray-200 px-4 py-2.5 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full text-sm"
          />
          <button className="bg-indigo-600 text-white px-4 py-2.5 rounded-r-lg hover:bg-indigo-700 transition-colors text-sm font-medium">Join</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <p>© 2024 Lumina. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
        <a href="#" className="hover:text-indigo-600">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
