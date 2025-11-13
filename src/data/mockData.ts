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
  },
  {
    id: '9',
    name: 'Wireless Bluetooth Earbuds',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    category: 'electronics',
    rating: 4.5,
    reviews: 423,
    description: 'True wireless earbuds with premium sound quality, touch controls, and 24-hour battery life with charging case.',
    stock: 78,
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500'],
    specifications: {
      'Battery Life': '6 hours + 18 hours case',
      'Connectivity': 'Bluetooth 5.2',
      'Water Resistance': 'IPX5',
      'Controls': 'Touch'
    }
  },
  {
    id: '10',
    name: 'Digital Calculator Scientific',
    price: 549,
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500',
    category: 'electronics',
    rating: 4.7,
    reviews: 356,
    description: 'Advanced scientific calculator with 240+ functions. Perfect for students and professionals.',
    stock: 134,
    images: ['https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500'],
    specifications: {
      'Functions': '240+',
      'Display': 'LCD 2-line',
      'Power': 'Solar + Battery',
      'Memory': '9 variables'
    }
  },
  {
    id: '11',
    name: 'Cotton T-Shirt Pack of 3',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'fashion',
    rating: 4.4,
    reviews: 267,
    description: 'Premium quality cotton t-shirts in solid colors. Comfortable fit for daily wear.',
    stock: 156,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'],
    specifications: {
      'Material': '100% Cotton',
      'Pack': '3 T-shirts',
      'Sizes': 'S to XXL',
      'Care': 'Machine Washable'
    }
  },
  {
    id: '12',
    name: 'Classic Denim Jeans',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    category: 'fashion',
    rating: 4.6,
    reviews: 389,
    description: 'Stylish denim jeans with comfortable stretch fabric. Perfect fit and durable quality.',
    stock: 98,
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=500'],
    specifications: {
      'Material': 'Denim Stretch',
      'Fit': 'Regular',
      'Sizes': '28 to 38',
      'Wash': 'Dark Blue'
    }
  },
  {
    id: '13',
    name: 'LED Table Lamp',
    price: 649,
    originalPrice: 849,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    category: 'home & garden',
    rating: 4.5,
    reviews: 234,
    description: 'Modern LED desk lamp with adjustable brightness and color temperature. Energy efficient.',
    stock: 87,
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500'],
    specifications: {
      'Power': '12W LED',
      'Brightness Levels': '5',
      'Color Modes': '3',
      'Arm': 'Adjustable'
    }
  },
  {
    id: '14',
    name: 'Decorative Wall Clock',
    price: 899,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500',
    category: 'home & garden',
    rating: 4.3,
    reviews: 178,
    description: 'Elegant wall clock with silent movement. Adds style to any room decor.',
    stock: 64,
    images: ['https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500'],
    specifications: {
      'Size': '12 inch diameter',
      'Movement': 'Silent Quartz',
      'Material': 'Plastic Frame',
      'Battery': 'AA (not included)'
    }
  },
  {
    id: '15',
    name: 'Badminton Racket Set',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500',
    category: 'sports',
    rating: 4.6,
    reviews: 312,
    description: 'Professional badminton racket set with 2 rackets, shuttlecocks, and carry bag.',
    stock: 76,
    images: ['https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500'],
    specifications: {
      'Set Includes': '2 Rackets + Shuttlecocks',
      'Material': 'Carbon Fiber',
      'Weight': '85g per racket',
      'Grip': 'Cushioned'
    }
  },
  {
    id: '16',
    name: 'Sports Water Bottle 1L',
    price: 299,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    category: 'sports',
    rating: 4.8,
    reviews: 456,
    description: 'Leak-proof sports bottle with measurement markers. BPA-free and dishwasher safe.',
    stock: 203,
    images: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500'],
    specifications: {
      'Capacity': '1 Liter',
      'Material': 'BPA-free Plastic',
      'Features': 'Leak-proof, Markers',
      'Colors': 'Multiple'
    }
  }
];
