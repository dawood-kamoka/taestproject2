
import { Product, Testimonial } from './types';

export const CATEGORIES = ['All', 'Electronics', 'Apparel', 'Home & Living', 'Accessories'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Lumina Air Pro Headphones',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 124,
    description: 'Immersive sound experience with active noise cancellation and 40-hour battery life.',
    features: ['Noise Cancellation', 'Hi-Res Audio', 'Bluetooth 5.2']
  },
  {
    id: '2',
    name: 'Essential Cotton Hoodie',
    price: 75.00,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    reviews: 89,
    description: 'Ultra-soft organic cotton hoodie designed for everyday comfort and timeless style.',
    features: ['100% Organic Cotton', 'Pre-shrunk', 'Breathable']
  },
  {
    id: '3',
    name: 'Smart Ceramic Watch',
    price: 349.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 210,
    description: 'Elegant design meets high-tech performance with heart rate monitoring and GPS.',
    features: ['Heart Rate Monitor', 'GPS Track', 'Water Resistant']
  },
  {
    id: '4',
    name: 'Nordic Ceramic Vase Set',
    price: 45.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 56,
    description: 'Handcrafted minimalist vases that add a touch of Scandinavian elegance to your home.',
    features: ['Handcrafted', 'Minimalist', 'Durable Ceramic']
  },
  {
    id: '5',
    name: 'Silk Sleep Mask',
    price: 24.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1616164245645-8461f8876a26?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 42,
    description: 'Pure mulberry silk mask for a luxurious and restorative night\'s sleep.',
    features: ['100% Silk', 'Adjustable Strap', 'Gentle on Skin']
  },
  {
    id: '6',
    name: 'Glass Brew Coffee Maker',
    price: 89.00,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 132,
    description: 'Precision brewing for the perfect cup of coffee every single morning.',
    features: ['Borosilicate Glass', 'Reusable Filter', 'Heat Resistant']
  },
  {
    id: '7',
    name: 'Leather Weekend Bag',
    price: 185.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 77,
    description: 'Spacious and durable full-grain leather bag perfect for short getaways.',
    features: ['Full Grain Leather', 'Multiple Compartments', 'YKK Zippers']
  },
  {
    id: '8',
    name: 'Wireless Desktop Charger',
    price: 59.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1586953101559-faad66085144?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
    reviews: 154,
    description: 'Fast charging wireless dock with a sleek aluminum and fabric finish.',
    features: ['Fast Charging', 'Overheat Protection', 'Anti-Slip Base']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Designer',
    content: 'The quality of Lumina products is absolutely unmatched. Every piece I ordered exceeded expectations.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Freelancer',
    content: 'Fast shipping and beautiful packaging. The customer support team was incredibly helpful when I had questions.',
    avatar: 'https://picsum.photos/seed/michael/100/100'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Home Stylist',
    content: 'I love the minimalist aesthetic. It perfectly fits my home and my lifestyle. Highly recommended!',
    avatar: 'https://picsum.photos/seed/emily/100/100'
  }
];
