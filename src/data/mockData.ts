import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  { id: '1', name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400', count: 156 },
  { id: '2', name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400', count: 243 },
  { id: '3', name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400', count: 189 },
  { id: '4', name: 'Sports', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400', count: 98 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'electronics',
    rating: 4.5,
    reviews: 328,
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality.',
    stock: 45,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Warranty': '2 years'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'electronics',
    rating: 4.8,
    reviews: 512,
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    stock: 67,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart Rate, GPS, Accelerometer'
    }
  },
  {
    id: '3',
    name: 'Premium Leather Backpack',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'fashion',
    rating: 4.6,
    reviews: 201,
    description: 'Handcrafted leather backpack with laptop compartment and multiple pockets.',
    stock: 34,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'],
    specifications: {
      'Material': 'Genuine Leather',
      'Laptop Size': 'Up to 15"',
      'Dimensions': '45x30x15cm',
      'Weight': '1.2kg'
    }
  },
  {
    id: '4',
    name: 'Minimalist Running Shoes',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'sports',
    rating: 4.4,
    reviews: 445,
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper.',
    stock: 89,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'],
    specifications: {
      'Weight': '220g',
      'Drop': '8mm',
      'Upper': 'Breathable Mesh',
      'Sole': 'Rubber'
    }
  },
  {
    id: '5',
    name: 'Portable Bluetooth Speaker',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    category: 'electronics',
    rating: 4.7,
    reviews: 289,
    description: 'Waterproof portable speaker with 360° sound and 12-hour battery life.',
    stock: 156,
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'],
    specifications: {
      'Battery': '12 hours',
      'Water Resistance': 'IPX7',
      'Connectivity': 'Bluetooth 5.0',
      'Power Output': '20W'
    }
  },
  {
    id: '6',
    name: 'Designer Sunglasses',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
    category: 'fashion',
    rating: 4.9,
    reviews: 178,
    description: 'Stylish sunglasses with UV400 protection and polarized lenses.',
    stock: 42,
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500'],
    specifications: {
      'UV Protection': 'UV400',
      'Lens': 'Polarized',
      'Frame Material': 'Acetate',
      'Case Included': 'Yes'
    }
  },
  {
    id: '7',
    name: 'Ceramic Plant Pot Set',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500',
    category: 'home & garden',
    rating: 4.3,
    reviews: 134,
    description: 'Set of 3 handmade ceramic plant pots with drainage holes and saucers.',
    stock: 78,
    images: ['https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500'],
    specifications: {
      'Set Includes': '3 pots',
      'Sizes': 'Small, Medium, Large',
      'Material': 'Ceramic',
      'Drainage': 'Yes'
    }
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    category: 'sports',
    rating: 4.6,
    reviews: 267,
    description: 'Eco-friendly yoga mat with excellent grip and cushioning.',
    stock: 92,
    images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500'],
    specifications: {
      'Thickness': '6mm',
      'Material': 'TPE',
      'Dimensions': '183x61cm',
      'Weight': '1kg'
    }
  }
];
