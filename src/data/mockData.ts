import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  { id: '1', name: 'Pens & Pencils', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400', count: 156 },
  { id: '2', name: 'Notebooks', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400', count: 243 },
  { id: '3', name: 'Art Supplies', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400', count: 189 },
  { id: '4', name: 'Office Supplies', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400', count: 98 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Gel Pen Set - 12 Colors',
    price: 249,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500',
    category: 'pens & pencils',
    rating: 4.5,
    reviews: 328,
    description: 'Smooth writing gel pen set with 12 vibrant colors. Perfect for note-taking, journaling, and art projects.',
    stock: 45,
    images: ['https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500'],
    specifications: {
      'Colors': '12',
      'Tip Size': '0.7mm',
      'Ink Type': 'Gel',
      'Brand': 'WritePro'
    }
  },
  {
    id: '2',
    name: 'A4 Spiral Notebook Pack of 5',
    price: 399,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=500',
    category: 'notebooks',
    rating: 4.8,
    reviews: 512,
    description: 'High-quality ruled notebooks with 200 pages each. Durable spiral binding and thick paper.',
    stock: 67,
    images: ['https://images.unsplash.com/photo-1517842645767-c639042777db?w=500'],
    specifications: {
      'Size': 'A4',
      'Pages': '200 per notebook',
      'Paper Quality': '70 GSM',
      'Binding': 'Spiral'
    }
  },
  {
    id: '3',
    name: 'Watercolor Paint Set - 24 Colors',
    price: 599,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500',
    category: 'art supplies',
    rating: 4.6,
    reviews: 201,
    description: 'Professional watercolor paint set with 24 vibrant colors. Includes 2 brushes and mixing palette.',
    stock: 34,
    images: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500'],
    specifications: {
      'Colors': '24',
      'Type': 'Watercolor',
      'Includes': 'Brushes & Palette',
      'Grade': 'Professional'
    }
  },
  {
    id: '4',
    name: 'Graphite Pencil Set - HB to 6B',
    price: 179,
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500',
    category: 'pens & pencils',
    rating: 4.4,
    reviews: 445,
    description: 'Professional sketching pencil set with varying grades. Ideal for artists and students.',
    stock: 89,
    images: ['https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500'],
    specifications: {
      'Quantity': '12 pencils',
      'Grades': 'HB, 2B, 4B, 6B',
      'Type': 'Graphite',
      'Brand': 'ArtPro'
    }
  },
  {
    id: '5',
    name: 'Sticky Notes Combo Pack',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500',
    category: 'office supplies',
    rating: 4.7,
    reviews: 289,
    description: 'Colorful sticky notes in multiple sizes. Perfect for reminders and organization.',
    stock: 156,
    images: ['https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500'],
    specifications: {
      'Sheets': '600 total',
      'Sizes': '3 different',
      'Colors': '6 colors',
      'Adhesive': 'Repositionable'
    }
  },
  {
    id: '6',
    name: 'Premium Sketchbook A3 Size',
    price: 449,
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500',
    category: 'notebooks',
    rating: 4.9,
    reviews: 178,
    description: 'Large format sketchbook with thick acid-free paper. Perfect for all drawing media.',
    stock: 42,
    images: ['https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500'],
    specifications: {
      'Size': 'A3',
      'Pages': '100',
      'Paper': '120 GSM Acid-free',
      'Binding': 'Hardbound'
    }
  },
  {
    id: '7',
    name: 'Acrylic Paint Set - 18 Colors',
    price: 699,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
    category: 'art supplies',
    rating: 4.3,
    reviews: 134,
    description: 'Vibrant acrylic paints suitable for canvas, wood, and paper. Quick-drying formula.',
    stock: 78,
    images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500'],
    specifications: {
      'Colors': '18',
      'Volume': '12ml per tube',
      'Type': 'Acrylic',
      'Finish': 'Matte'
    }
  },
  {
    id: '8',
    name: 'School Backpack with Organizer',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'school bags',
    rating: 4.6,
    reviews: 267,
    description: 'Ergonomic school backpack with multiple compartments. Padded straps and laptop sleeve.',
    stock: 92,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'],
    specifications: {
      'Capacity': '30L',
      'Laptop Size': 'Up to 15.6"',
      'Material': 'Water-resistant',
      'Compartments': '5'
    }
  }
];
