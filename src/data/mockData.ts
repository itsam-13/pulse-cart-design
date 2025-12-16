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
    price: 12,
    originalPrice: 17,
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
    price: 20,
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
    price: 30,
    originalPrice: 40,
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
    price: 9,
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
    price: 7,
    originalPrice: 10,
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
    price: 22,
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
    price: 35,
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
    price: 45,
    originalPrice: 60,
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
    price: 65,
    originalPrice: 90,
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
    price: 27,
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
    price: 40,
    originalPrice: 50,
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
    price: 65,
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
    price: 32,
    originalPrice: 42,
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
    price: 45,
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
    price: 50,
    originalPrice: 65,
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
    price: 15,
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
  },
  {
    id: '17',
    name: 'Ballpoint Pen Set - Blue & Black',
    price: 5,
    image: 'https://images.unsplash.com/photo-1565022536102-c7d3e6c1b90a?w=500',
    category: 'pens & pencils',
    rating: 4.6,
    reviews: 534,
    description: 'Classic ballpoint pens in blue and black. Smooth writing experience for everyday use.',
    stock: 234,
    images: ['https://images.unsplash.com/photo-1565022536102-c7d3e6c1b90a?w=500'],
    specifications: {
      'Pack': '10 pens',
      'Colors': 'Blue, Black',
      'Tip': '0.5mm',
      'Brand': 'WriteWell'
    }
  },
  {
    id: '18',
    name: 'Mechanical Pencils Set',
    price: 8,
    originalPrice: 12,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500',
    category: 'pens & pencils',
    rating: 4.7,
    reviews: 289,
    description: 'Ergonomic mechanical pencils with lead refills. Perfect for technical drawing and writing.',
    stock: 156,
    images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500'],
    specifications: {
      'Pack': '5 pencils + refills',
      'Lead Size': '0.7mm',
      'Grip': 'Cushioned',
      'Refillable': 'Yes'
    }
  },
  {
    id: '19',
    name: 'Highlighter Marker Set - 6 Colors',
    price: 6,
    image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=500',
    category: 'pens & pencils',
    rating: 4.5,
    reviews: 412,
    description: 'Fluorescent highlighter markers in 6 vibrant colors. Perfect for study notes and organization.',
    stock: 187,
    images: ['https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=500'],
    specifications: {
      'Colors': '6',
      'Tip': 'Chisel',
      'Ink': 'Fluorescent',
      'Usage': 'Study, Office'
    }
  },
  {
    id: '20',
    name: 'A5 Hardcover Journal',
    price: 15,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500',
    category: 'notebooks',
    rating: 4.8,
    reviews: 345,
    description: 'Premium hardcover journal with dotted pages. Ideal for bullet journaling and note-taking.',
    stock: 78,
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?w=500'],
    specifications: {
      'Size': 'A5',
      'Pages': '160',
      'Paper': 'Dotted 100 GSM',
      'Cover': 'Hardcover'
    }
  },
  {
    id: '21',
    name: 'Lined Register - 200 Pages',
    price: 12,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500',
    category: 'notebooks',
    rating: 4.4,
    reviews: 456,
    description: 'Student register with quality lined pages. Durable binding for long-term use.',
    stock: 234,
    images: ['https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500'],
    specifications: {
      'Pages': '200',
      'Size': '26cm x 18cm',
      'Paper': 'Lined 70 GSM',
      'Binding': 'Thread bound'
    }
  },
  {
    id: '22',
    name: 'Sticky Note Booklet Set',
    price: 10,
    originalPrice: 14,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500',
    category: 'notebooks',
    rating: 4.6,
    reviews: 267,
    description: 'Compact sticky note booklets in assorted colors. Perfect for quick notes and reminders.',
    stock: 167,
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500'],
    specifications: {
      'Booklets': '8',
      'Sheets': '50 per booklet',
      'Sizes': 'Mixed',
      'Adhesive': 'Strong'
    }
  },
  {
    id: '23',
    name: 'Colored Pencils Set - 36 Colors',
    price: 18,
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500',
    category: 'art supplies',
    rating: 4.7,
    reviews: 389,
    description: 'Professional colored pencils with vibrant pigments. Great for coloring and shading.',
    stock: 123,
    images: ['https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500'],
    specifications: {
      'Colors': '36',
      'Lead': 'Soft',
      'Box': 'Tin case',
      'Quality': 'Artist grade'
    }
  },
  {
    id: '24',
    name: 'Canvas Board Pack - A4 Size',
    price: 25,
    originalPrice: 35,
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500',
    category: 'art supplies',
    rating: 4.5,
    reviews: 178,
    description: 'Pre-stretched canvas boards for painting. Suitable for acrylic and oil paints.',
    stock: 89,
    images: ['https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500'],
    specifications: {
      'Pack': '5 boards',
      'Size': 'A4',
      'Surface': 'Triple primed',
      'Thickness': '3mm'
    }
  },
  {
    id: '25',
    name: 'Craft Paper Sheets - A4',
    price: 8,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=500',
    category: 'art supplies',
    rating: 4.3,
    reviews: 234,
    description: 'Multi-colored craft paper sheets for art projects and DIY crafts.',
    stock: 198,
    images: ['https://images.unsplash.com/photo-1503602642458-232111445657?w=500'],
    specifications: {
      'Sheets': '50',
      'Size': 'A4',
      'Colors': '10 different',
      'Weight': '150 GSM'
    }
  },
  {
    id: '26',
    name: 'Paper Clips & Binder Clips Set',
    price: 6,
    image: 'https://images.unsplash.com/photo-1611830204272-1b5c199e1b15?w=500',
    category: 'office supplies',
    rating: 4.6,
    reviews: 312,
    description: 'Assorted paper clips and binder clips in multiple sizes for organizing documents.',
    stock: 245,
    images: ['https://images.unsplash.com/photo-1611830204272-1b5c199e1b15?w=500'],
    specifications: {
      'Paper Clips': '100',
      'Binder Clips': '30',
      'Sizes': 'Assorted',
      'Material': 'Steel'
    }
  },
  {
    id: '27',
    name: 'Desk Organizer Tray',
    price: 22,
    originalPrice: 30,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500',
    category: 'office supplies',
    rating: 4.7,
    reviews: 289,
    description: 'Multi-compartment desk organizer for pens, clips, and small office supplies.',
    stock: 87,
    images: ['https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500'],
    specifications: {
      'Compartments': '6',
      'Material': 'Plastic',
      'Size': '25x15x8 cm',
      'Color': 'Black'
    }
  },
  {
    id: '28',
    name: 'File Folders Set - A4',
    price: 10,
    image: 'https://images.unsplash.com/photo-1594116761375-d5c1e5aa35c3?w=500',
    category: 'office supplies',
    rating: 4.4,
    reviews: 423,
    description: 'Durable plastic file folders with labels. Organize your documents efficiently.',
    stock: 178,
    images: ['https://images.unsplash.com/photo-1594116761375-d5c1e5aa35c3?w=500'],
    specifications: {
      'Pack': '12 folders',
      'Size': 'A4',
      'Material': 'PP Plastic',
      'Colors': 'Assorted'
    }
  },
  {
    id: '29',
    name: 'Mini Backpack for Girls',
    price: 35,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500',
    category: 'school bags',
    rating: 4.8,
    reviews: 356,
    description: 'Cute mini backpack with adjustable straps. Perfect for school and casual outings.',
    stock: 123,
    images: ['https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500'],
    specifications: {
      'Capacity': '15L',
      'Compartments': '3',
      'Material': 'Polyester',
      'Style': 'Casual'
    }
  },
  {
    id: '30',
    name: 'Laptop Bag with Shoulder Strap',
    price: 40,
    originalPrice: 55,
    image: 'https://images.unsplash.com/photo-1588792098830-0b5f29c14ce6?w=500',
    category: 'school bags',
    rating: 4.6,
    reviews: 298,
    description: 'Professional laptop bag with padded compartment and multiple pockets.',
    stock: 89,
    images: ['https://images.unsplash.com/photo-1588792098830-0b5f29c14ce6?w=500'],
    specifications: {
      'Laptop Size': 'Up to 15.6"',
      'Compartments': '4',
      'Material': 'Waterproof',
      'Strap': 'Adjustable'
    }
  },
  {
    id: '31',
    name: 'USB Flash Drive 32GB',
    price: 18,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500',
    category: 'electronics',
    rating: 4.5,
    reviews: 467,
    description: 'High-speed USB 3.0 flash drive with 32GB storage capacity.',
    stock: 267,
    images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500'],
    specifications: {
      'Capacity': '32GB',
      'Interface': 'USB 3.0',
      'Speed': 'High-speed',
      'Compatible': 'All devices'
    }
  },
  {
    id: '32',
    name: 'Wireless Mouse',
    price: 25,
    originalPrice: 35,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: 'electronics',
    rating: 4.6,
    reviews: 389,
    description: 'Ergonomic wireless mouse with silent clicks and long battery life.',
    stock: 145,
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500'],
    specifications: {
      'Connectivity': 'Wireless 2.4GHz',
      'DPI': 'Adjustable',
      'Battery': '12 months',
      'Buttons': '6'
    }
  },
  {
    id: '33',
    name: 'Casual Sneakers',
    price: 55,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500',
    category: 'fashion',
    rating: 4.7,
    reviews: 423,
    description: 'Comfortable casual sneakers for everyday wear. Breathable and lightweight.',
    stock: 112,
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500'],
    specifications: {
      'Material': 'Canvas',
      'Sole': 'Rubber',
      'Sizes': '6 to 11',
      'Style': 'Casual'
    }
  },
  {
    id: '34',
    name: 'Baseball Cap',
    price: 12,
    originalPrice: 18,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500',
    category: 'fashion',
    rating: 4.4,
    reviews: 234,
    description: 'Classic baseball cap with adjustable strap. Perfect for outdoor activities.',
    stock: 198,
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500'],
    specifications: {
      'Material': 'Cotton',
      'Size': 'Adjustable',
      'Colors': 'Multiple',
      'Style': 'Sports'
    }
  },
  {
    id: '35',
    name: 'Indoor Plant Pot with Stand',
    price: 28,
    image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=500',
    category: 'home & garden',
    rating: 4.6,
    reviews: 276,
    description: 'Modern plant pot with wooden stand. Perfect for indoor decoration.',
    stock: 134,
    images: ['https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=500'],
    specifications: {
      'Pot Size': 'Medium',
      'Stand': 'Wooden',
      'Height': '30cm',
      'Drainage': 'Yes'
    }
  },
  {
    id: '36',
    name: 'Photo Frame Set - 6 Pieces',
    price: 20,
    originalPrice: 28,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500',
    category: 'home & garden',
    rating: 4.5,
    reviews: 312,
    description: 'Elegant photo frames in assorted sizes for wall and table display.',
    stock: 167,
    images: ['https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500'],
    specifications: {
      'Frames': '6',
      'Sizes': 'Assorted',
      'Material': 'Wood & Glass',
      'Mounting': 'Wall/Table'
    }
  },
  {
    id: '37',
    name: 'Football Size 5',
    price: 30,
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500',
    category: 'sports',
    rating: 4.7,
    reviews: 389,
    description: 'Professional quality football with durable stitching. Suitable for all surfaces.',
    stock: 156,
    images: ['https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500'],
    specifications: {
      'Size': '5',
      'Material': 'PU Leather',
      'Weight': '410-450g',
      'Age Group': '12+ years'
    }
  },
  {
    id: '38',
    name: 'Yoga Mat with Carry Bag',
    price: 22,
    originalPrice: 32,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500',
    category: 'sports',
    rating: 4.8,
    reviews: 445,
    description: 'Non-slip yoga mat with carrying bag. Perfect for yoga and exercise routines.',
    stock: 178,
    images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500'],
    specifications: {
      'Thickness': '6mm',
      'Material': 'TPE',
      'Size': '183x61cm',
      'Includes': 'Carry bag'
    }
  },
  {
    id: '39',
    name: 'Executive Rollerball Pen',
    price: 19,
    originalPrice: 25,
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500',
    category: 'pens & pencils',
    rating: 4.6,
    reviews: 192,
    description: 'Metal-body rollerball pen with smooth ink flow and gift-ready box.',
    stock: 96,
    images: ['https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500'],
    specifications: {
      'Tip Size': '0.7mm',
      'Body': 'Metal',
      'Ink': 'Black',
      'Refillable': 'Yes'
    }
  },
  {
    id: '40',
    name: 'Softcover Study Notebook Pack of 3',
    price: 14,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500',
    category: 'notebooks',
    rating: 4.7,
    reviews: 241,
    description: 'Lightweight softcover notebooks, ideal for class notes and daily planning.',
    stock: 154,
    images: ['https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500'],
    specifications: {
      'Size': 'A5',
      'Pages': '120 per notebook',
      'Paper': 'Ruled 70 GSM',
      'Pack': '3'
    }
  },
  {
    id: '41',
    name: 'Brush Pen Calligraphy Set',
    price: 24,
    originalPrice: 32,
    image: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b1b?w=500',
    category: 'art supplies',
    rating: 4.6,
    reviews: 198,
    description: 'Flexible brush pens for lettering, calligraphy, and illustration.',
    stock: 88,
    images: ['https://images.unsplash.com/photo-1520697830682-bbb6e85e2b1b?w=500'],
    specifications: {
      'Pens': '18',
      'Tip': 'Brush',
      'Ink': 'Water-based',
      'Use': 'Calligraphy, Lettering'
    }
  },
  {
    id: '42',
    name: 'Desk Mat Mousepad XL',
    price: 29,
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500',
    category: 'office supplies',
    rating: 4.8,
    reviews: 329,
    description: 'Extended desk mat for keyboard and mouse with anti-slip base.',
    stock: 137,
    images: ['https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500'],
    specifications: {
      'Size': '90 x 40 cm',
      'Material': 'Rubber + Fabric',
      'Base': 'Anti-slip',
      'Edges': 'Stitched'
    }
  },
  {
    id: '43',
    name: 'Noise Cancelling Headphones',
    price: 89,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500',
    category: 'electronics',
    rating: 4.6,
    reviews: 512,
    description: 'Over-ear wireless headphones with active noise cancelling and deep bass.',
    stock: 73,
    images: ['https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500'],
    specifications: {
      'Playback': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Charging': 'USB-C',
      'Features': 'ANC, Foldable'
    }
  },
  {
    id: '44',
    name: 'Minimalist Analog Watch',
    price: 49,
    image: 'https://images.unsplash.com/photo-1513789181297-6acb8a57fab1?w=500',
    category: 'fashion',
    rating: 4.5,
    reviews: 203,
    description: 'Slim analog wristwatch with leather strap and classic dial.',
    stock: 119,
    images: ['https://images.unsplash.com/photo-1513789181297-6acb8a57fab1?w=500'],
    specifications: {
      'Movement': 'Quartz',
      'Strap': 'Genuine Leather',
      'Water Resistance': '3 ATM',
      'Dial Size': '40mm'
    }
  },
  {
    id: '45',
    name: 'Cotton Bedsheet Set Queen Size',
    price: 59,
    originalPrice: 75,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500',
    category: 'home & garden',
    rating: 4.7,
    reviews: 287,
    description: 'Soft 100% cotton bedsheet set with two pillow covers.',
    stock: 102,
    images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500'],
    specifications: {
      'Size': 'Queen',
      'Thread Count': '300 TC',
      'Pieces': '1 Sheet + 2 Pillow Covers',
      'Pattern': 'Solid'
    }
  },
  {
    id: '46',
    name: 'Adjustable Dumbbell Pair 5kg',
    price: 39,
    image: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=500',
    category: 'sports',
    rating: 4.6,
    reviews: 254,
    description: 'Pair of adjustable dumbbells ideal for home workouts and strength training.',
    stock: 91,
    images: ['https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=500'],
    specifications: {
      'Weight': '2 x 5kg',
      'Plates': 'Detachable',
      'Grip': 'Textured',
      'Use': 'Home gym'
    }
  }
];
