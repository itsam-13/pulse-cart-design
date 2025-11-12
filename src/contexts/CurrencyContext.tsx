import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Country {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  conversionRate: number; // Rate relative to USD
}

export const countries: Country[] = [
  { code: 'US', name: 'United States', currency: 'USD', currencySymbol: '$', conversionRate: 1 },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', currencySymbol: '£', conversionRate: 0.79 },
  { code: 'EU', name: 'European Union', currency: 'EUR', currencySymbol: '€', conversionRate: 0.92 },
  { code: 'CA', name: 'Canada', currency: 'CAD', currencySymbol: 'C$', conversionRate: 1.36 },
  { code: 'AU', name: 'Australia', currency: 'AUD', currencySymbol: 'A$', conversionRate: 1.53 },
  { code: 'JP', name: 'Japan', currency: 'JPY', currencySymbol: '¥', conversionRate: 149.5 },
  { code: 'IN', name: 'India', currency: 'INR', currencySymbol: '₹', conversionRate: 83.2 },
  { code: 'CN', name: 'China', currency: 'CNY', currencySymbol: '¥', conversionRate: 7.24 },
  { code: 'BR', name: 'Brazil', currency: 'BRL', currencySymbol: 'R$', conversionRate: 4.98 },
  { code: 'MX', name: 'Mexico', currency: 'MXN', currencySymbol: 'MX$', conversionRate: 17.1 },
];

interface CurrencyContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  formatPrice: (priceInUSD: number) => string;
  convertPrice: (priceInUSD: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(() => {
    const saved = localStorage.getItem('selectedCountry');
    if (saved) {
      const savedCountry = JSON.parse(saved);
      return countries.find(c => c.code === savedCountry.code) || countries[0];
    }
    return countries[0]; // Default to US
  });

  useEffect(() => {
    localStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
  }, [selectedCountry]);

  const convertPrice = (priceInUSD: number): number => {
    return priceInUSD * selectedCountry.conversionRate;
  };

  const formatPrice = (priceInUSD: number): string => {
    const convertedPrice = convertPrice(priceInUSD);
    
    // Format based on currency
    if (selectedCountry.currency === 'JPY') {
      // Japanese Yen doesn't use decimal places
      return `${selectedCountry.currencySymbol}${Math.round(convertedPrice).toLocaleString()}`;
    }
    
    return `${selectedCountry.currencySymbol}${convertedPrice.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{ selectedCountry, setSelectedCountry, formatPrice, convertPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
}
