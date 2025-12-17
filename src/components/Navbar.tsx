import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CurrencySelector from '@/components/CurrencySelector';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function Navbar() {
  const { itemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const { formatPrice } = useCurrency();
  const [monthlyBudgetUSD, setMonthlyBudgetUSD] = useState<number | null>(null);

  const categories = ['Pens & Pencils', 'Notebooks', 'Art Supplies', 'Office Supplies', 'School Bags'];

  useEffect(() => {
    const saved = localStorage.getItem('monthlyBudgetUSD');
    if (!saved) return;

    const parsed = parseFloat(saved);
    if (!Number.isNaN(parsed) && parsed > 0) {
      setMonthlyBudgetUSD(parsed);
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            PulseCart
          </Link>

          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {monthlyBudgetUSD !== null && (
              <div className="hidden sm:flex items-center gap-1 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                <Wallet className="h-3 w-3 text-primary" />
                <span className="font-medium">Limit:</span>
                <span>{formatPrice(monthlyBudgetUSD)}</span>
              </div>
            )}
            <CurrencySelector />
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {categories.map(category => (
                    <Link
                      key={category}
                      to={`/products?category=${category.toLowerCase()}`}
                      className="text-lg hover:text-primary transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 pb-3">
          {categories.map(category => (
            <Link
              key={category}
              to={`/products?category=${category.toLowerCase()}`}
              className="text-sm hover:text-primary transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Newbie discount banner */}
      <div className="bg-accent text-accent-foreground text-xs sm:text-sm">
        <div className="container mx-auto px-4 py-1">
          <div className="marquee-container">
            <div className="marquee-content flex items-center gap-8">
              <span className="font-semibold">
                New to BuyMetrics? Use coupon code <span className="underline">NEWBIE10</span> for
                10% off your first purchase!
              </span>
              <span className="font-semibold">
                Limited time offer — apply <span className="underline">NEWBIE10</span> at checkout.
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
