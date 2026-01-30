
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Shield, Truck, RefreshCw, ShoppingCart, Minus, Plus, ChevronLeft } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { ScrollReveal, StaggerContainer } from '../components/ScrollReveal';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Original');
  
  const product = PRODUCTS.find((p) => p.id === id);
  const relatedProducts = PRODUCTS.filter((p) => p.category === product?.category && p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <Link to="/products" className="bg-indigo-600 text-white px-8 py-3 rounded-full">Back to Shop</Link>
      </div>
    );
  }

  const colors = ['Original', 'Space Gray', 'Arctic White', 'Deep Black'];

  return (
    <div className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-indigo-600 transition-colors mb-12 text-sm font-medium">
          <ChevronLeft size={20} className="mr-1" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Image */}
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-[600px] object-cover" />
            </div>
          </ScrollReveal>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <div className="mb-2 flex items-center gap-4">
                <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold">{product.rating}</span>
                  <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-indigo-600 mb-8">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 leading-relaxed mb-10 text-lg">
                {product.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Choose Variant</h3>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-2.5 rounded-full border text-sm transition-all duration-300 ${
                        selectedColor === color 
                          ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg' 
                          : 'border-gray-200 text-gray-600 hover:border-indigo-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-6 font-bold text-gray-800 min-w-[60px] text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="flex-grow flex items-center justify-center gap-3 bg-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 w-full sm:w-auto"
                >
                  <ShoppingCart size={22} />
                  Add to Cart
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-green-50 text-green-600 rounded-full"><Truck size={20} /></div>
                  <div className="text-xs">
                    <p className="font-bold">Free Shipping</p>
                    <p className="text-gray-400">On all orders over $150</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-full"><RefreshCw size={20} /></div>
                  <div className="text-xs">
                    <p className="font-bold">30-Day Returns</p>
                    <p className="text-gray-400">Hassle-free exchanges</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-50 text-purple-600 rounded-full"><Shield size={20} /></div>
                  <div className="text-xs">
                    <p className="font-bold">Secure Warranty</p>
                    <p className="text-gray-400">2-year limited warranty</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Feature List */}
        <div className="mb-24 py-16 bg-gray-50 rounded-[40px] px-8 md:px-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">Product Features</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {product.features.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 font-bold text-xl mb-6">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{feature}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Designed with high precision to meet the highest standards of our customers and provide unique experience.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-12">Related Products</h2>
            </ScrollReveal>
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </StaggerContainer>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
