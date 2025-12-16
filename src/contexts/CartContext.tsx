import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product } from '@/types/product';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];

    try {
      const stored = localStorage.getItem('cart');
      if (!stored) return [];
      const parsed = JSON.parse(stored) as CartItem[];
      if (!Array.isArray(parsed)) return [];
      return parsed;
    } catch {
      return [];
    }
  });

  // Persist cart to localStorage so it survives refresh.
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch {
      // Ignore storage errors (e.g., private mode or quota exceeded)
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    const hasSimilarItem = cart.some(
      item => item.category === product.category && item.id !== product.id,
    );

    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        toast({
          title: 'Cart Updated',
          description: `${product.name} quantity increased`,
        });

        if (hasSimilarItem) {
          toast({
            title: 'Similar item already in cart',
            description: `You already have similar products in your cart from the ${product.category} category.`,
          });
        }

        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast({
        title: 'Added to Cart',
        description: `${product.name} has been added to your cart`,
      });

      if (hasSimilarItem) {
        toast({
          title: 'Similar purchase detected',
          description: `You already have items from the ${product.category} category in your cart.`,
        });
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart",
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
