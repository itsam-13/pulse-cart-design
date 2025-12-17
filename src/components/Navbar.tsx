import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, Wallet, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import CurrencySelector from '@/components/CurrencySelector';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function Navbar() {
  const { itemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const { formatPrice, selectedCountry } = useCurrency();
  const [monthlyBudgetUSD, setMonthlyBudgetUSD] = useState<number | null>(null);
  const [budgetInput, setBudgetInput] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = ['Pens & Pencils', 'Notebooks', 'Art Supplies', 'Office Supplies', 'School Bags'];

  useEffect(() => {
    const saved = localStorage.getItem('monthlyBudgetUSD');
    if (!saved) return;

    const parsed = parseFloat(saved);
    if (!Number.isNaN(parsed) && parsed > 0) {
      setMonthlyBudgetUSD(parsed);
      // Convert from USD to the selected currency for display
      const inSelectedCurrency = parsed * selectedCountry.conversionRate;
      setBudgetInput(inSelectedCurrency.toFixed(2));
    }
  }, [selectedCountry]);

  const handleBudgetSave = () => {
    const numeric = parseFloat(budgetInput);
    if (Number.isNaN(numeric) || numeric < 0) {
      setMonthlyBudgetUSD(null);
      localStorage.removeItem('monthlyBudgetUSD');
    } else {
      // Convert from selected currency to USD for storage
      const inUSD = numeric / selectedCountry.conversionRate;
      setMonthlyBudgetUSD(inUSD);
      localStorage.setItem('monthlyBudgetUSD', inUSD.toString());
    }
    setIsDialogOpen(false);
  };

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
            <Button
              variant="ghost"
              size="icon"
              title="Set purchase limit"
              onClick={() => setIsDialogOpen(true)}
            >
              <Settings className="h-5 w-5" />
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Set Monthly Purchase Limit</DialogTitle>
                  <DialogDescription>
                    Set a maximum budget limit for your purchases. When you reach this limit, you won't be able to complete payment.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget-input">Monthly Budget (USD)</Label>
                    <div className="flex gap-2">
                      <Input
                        id="budget-input"
                        type="number"
                        min="0"
                        step="0.01"
                        value={budgetInput}
                        onChange={(e) => setBudgetInput(e.target.value)}
                        placeholder="Enter amount in USD"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Current limit: {monthlyBudgetUSD ? formatPrice(monthlyBudgetUSD) : 'No limit set'}
                    </p>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsDialogOpen(false);
                        setBudgetInput(monthlyBudgetUSD?.toString() || '');
                      }}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleBudgetSave}>
                      Save Limit
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
