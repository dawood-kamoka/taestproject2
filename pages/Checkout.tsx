
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, CreditCard, Truck, ShieldCheck, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, subtotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', zip: '',
    cardNum: '', exp: '', cvc: ''
  });

  const shipping = subtotal > 150 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12 }}
          className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={64} />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Order Confirmed!
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 mb-10 max-w-sm"
        >
          Thank you for your purchase. We've sent a confirmation email to {formData.email}. Your items will be with you shortly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/" className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-indigo-200 transition-all">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <Link to="/cart" className="inline-flex items-center text-gray-400 hover:text-indigo-600 transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
            <ChevronLeft size={20} /> Back to Cart
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <form onSubmit={handleSubmit} className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </div>
              <div className="space-y-4">
                <input 
                  required name="email" type="email" placeholder="Email Address" 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                  onChange={handleInputChange}
                />
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                <h2 className="text-2xl font-bold">Shipping Details</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input required name="firstName" placeholder="First Name" className="px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm" onChange={handleInputChange} />
                <input required name="lastName" placeholder="Last Name" className="px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm" onChange={handleInputChange} />
              </div>
              <input required name="address" placeholder="Address" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm mb-4" onChange={handleInputChange} />
              <div className="grid grid-cols-2 gap-4">
                <input required name="city" placeholder="City" className="px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm" onChange={handleInputChange} />
                <input required name="zip" placeholder="ZIP Code" className="px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm" onChange={handleInputChange} />
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                <h2 className="text-2xl font-bold">Payment (Mock Only)</h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-2 mb-6 text-indigo-600 font-bold text-sm">
                  <CreditCard size={20} /> Credit Card Information
                </div>
                <input required name="cardNum" placeholder="Card Number" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm mb-4" onChange={handleInputChange} />
                <div className="grid grid-cols-2 gap-4">
                  <input required name="exp" placeholder="MM/YY" className="px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm" onChange={handleInputChange} />
                  <input required name="cvc" placeholder="CVC" className="px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm" onChange={handleInputChange} />
                </div>
              </div>
            </section>

            <button type="submit" className="w-full bg-indigo-600 text-white py-6 rounded-full font-bold text-xl shadow-2xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3">
              Confirm Order — ${total.toFixed(2)}
            </button>
          </form>

          {/* Side Summary */}
          <div className="hidden lg:block">
            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 sticky top-32">
              <h2 className="text-2xl font-bold mb-10">Order Summary</h2>
              
              <div className="max-h-[300px] overflow-y-auto pr-4 mb-8 space-y-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <img src={item.product.image} className="w-16 h-16 rounded-xl object-cover shadow-sm" alt={item.product.name} />
                    <div className="flex-grow">
                      <p className="font-bold text-gray-900 text-sm">{item.product.name}</p>
                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-gray-900 text-sm">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 py-8 border-y border-gray-200 mb-8 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-bold text-indigo-600">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tax</span>
                  <span className="font-bold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-10">
                <span className="text-lg font-bold">Total Payable</span>
                <span className="text-3xl font-extrabold text-indigo-600">${total.toFixed(2)}</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <Truck size={16} className="text-indigo-600" /> Fast & Free delivery over $150
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <ShieldCheck size={16} className="text-indigo-600" /> Buyer Protection Program Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
