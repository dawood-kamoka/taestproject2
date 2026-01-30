
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShoppingCart, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ScrollReveal, StaggerContainer } from '../components/ScrollReveal';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const shipping = subtotal > 150 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8 bg-white">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-8">
          <ShoppingBag size={48} />
        </div>
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-4">Your cart is empty</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-gray-500 max-w-sm mb-10 leading-relaxed">
            Looks like you haven't added anything to your cart yet. Explore our latest products and find something you love.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link to="/products" className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-indigo-200 transition-all">
            Continue Shopping
          </Link>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24 pt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Your Shopping Cart</h1>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items */}
          <div className="flex-grow">
            <StaggerContainer>
              <div className="space-y-8">
                {cart.map((item) => (
                  <ScrollReveal key={item.product.id} width="100%">
                    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                      <Link to={`/product/${item.product.id}`} className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </Link>
                      
                      <div className="flex-grow text-center sm:text-left">
                        <Link to={`/product/${item.product.id}`} className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-400 mb-2">{item.product.category}</p>
                        <p className="text-lg font-bold text-indigo-600">${item.product.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm">
                        <button 
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-bold text-gray-800 min-w-[40px] text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-center sm:text-right min-w-[100px]">
                        <p className="text-lg font-bold text-gray-900 mb-1">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-400 hover:text-red-600 transition-colors text-xs font-bold uppercase tracking-widest"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </StaggerContainer>
            
            <ScrollReveal delay={0.3}>
              <Link to="/products" className="inline-flex items-center text-indigo-600 font-bold mt-12 hover:underline">
                <ArrowRight size={18} className="mr-2 rotate-180" /> Continue Shopping
              </Link>
            </ScrollReveal>
          </div>

          {/* Order Summary */}
          <ScrollReveal delay={0.4} className="w-full lg:w-96">
            <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 sticky top-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="font-bold text-gray-900">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 mb-10 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-2xl font-extrabold text-indigo-600">${total.toFixed(2)}</span>
              </div>

              <Link 
                to="/checkout" 
                className="block w-full text-center bg-indigo-600 text-white py-5 rounded-full font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all"
              >
                Proceed to Checkout
              </Link>
              
              {/* Added Shield icon to fix 'Cannot find name Shield' error */}
              <p className="text-center text-[10px] text-gray-400 mt-6 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <Shield size={12} /> Secure encrypted checkout
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Cart;
