import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Pie, PieChart, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/mockData';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const { formatPrice, convertPrice, selectedCountry } = useCurrency();

  const [monthlyBudgetUSD, setMonthlyBudgetUSD] = useState<number>(0);
  const [purchaseHistory, setPurchaseHistory] = useState<
    {
      id: string;
      date: string;
      items: { id: string; name: string; category: string; price: number; quantity: number }[];
      totalUSD: number;
    }[]
  >([]);
  const [categorySpendData, setCategorySpendData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('monthlyBudgetUSD');
    if (saved) {
      const parsed = parseFloat(saved);
      if (!Number.isNaN(parsed)) {
        setMonthlyBudgetUSD(parsed);
      }
    }
  }, []);

  useEffect(() => {
    // Load simple buying history from localStorage and aggregate by category (USD-based).
    try {
      const raw = localStorage.getItem('purchaseHistory');
      if (!raw) return;

      const history: {
        id: string;
        date: string;
        items: { id: string; name: string; category: string; price: number; quantity: number }[];
        totalUSD: number;
      }[] = JSON.parse(raw);

      setPurchaseHistory(history);

      const spendByCategory = new Map<string, number>();
      history.forEach(order => {
        order.items.forEach(item => {
          const amount = item.price * item.quantity;
          spendByCategory.set(
            item.category,
            (spendByCategory.get(item.category) ?? 0) + amount,
          );
        });
      });

      const data = Array.from(spendByCategory.entries()).map(([name, value]) => ({
        name,
        value,
      }));

      setCategorySpendData(data);
    } catch {
      // Ignore malformed data
    }
  }, []);

  const handleBudgetChange = (value: string) => {
    const numeric = parseFloat(value);
    if (Number.isNaN(numeric) || numeric < 0) {
      setMonthlyBudgetUSD(0);
      localStorage.removeItem('monthlyBudgetUSD');
      return;
    }

    const valueInUSD = selectedCountry.conversionRate
      ? numeric / selectedCountry.conversionRate
      : numeric;

    setMonthlyBudgetUSD(valueInUSD);
    localStorage.setItem('monthlyBudgetUSD', valueInUSD.toString());
  };

  const budgetInSelected = monthlyBudgetUSD > 0 ? convertPrice(monthlyBudgetUSD) : 0;
  const isOverBudget = monthlyBudgetUSD > 0 && total > monthlyBudgetUSD;
  const remainingUSD = Math.max(monthlyBudgetUSD - total, 0);
  const budgetUsagePercent =
    monthlyBudgetUSD > 0 ? Math.min((total / monthlyBudgetUSD) * 100, 999) : 0;

  let budgetHealthColor = 'bg-emerald-500';
  if (budgetUsagePercent >= 90) {
    budgetHealthColor = 'bg-red-500';
  } else if (budgetUsagePercent >= 70) {
    budgetHealthColor = 'bg-yellow-400';
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/products">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  const cartProductIds = new Set(cart.map(item => item.id));
  const cartCategories = new Set(cart.map(item => item.category));

  const recommendedProducts = products
    .filter(
      product =>
        cartCategories.has(product.category) && !cartProductIds.has(product.id),
    )
    .slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground capitalize">
                      {item.category}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-lg font-bold text-primary">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Remove item from cart?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will remove <span className="font-semibold">{item.name}</span> from
                            your cart. You can always add it again later.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => removeFromCart(item.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <p className="font-bold">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-semibold">{formatPrice(total * 0.1)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary">
                    {formatPrice(total * 1.1)}
                  </span>
                </div>
              </div>

              {/* Purchase Awareness System */}
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold">Purchase Awareness</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Set a monthly budget to stay in control of your spending.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {selectedCountry.currencySymbol}
                    </span>
                    <Input
                      type="number"
                      min={0}
                      step="0.01"
                      className="h-9"
                      value={budgetInSelected ? budgetInSelected.toFixed(2) : ''}
                      onChange={e => handleBudgetChange(e.target.value)}
                      placeholder="Monthly budget"
                    />
                  </div>
                  {monthlyBudgetUSD > 0 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Budget health</span>
                        <span>{budgetUsagePercent.toFixed(0)}%</span>
                      </div>
                      <Progress
                        value={Math.min(budgetUsagePercent, 100)}
                        className="h-2 bg-muted"
                      >
                        {/* Radix progress doesn&apos;t take children, styling via className */}
                      </Progress>
                    </div>
                  )}
                </div>

                {monthlyBudgetUSD > 0 && (
                  <div className="space-y-2">
                    {isOverBudget ? (
                      <Alert variant="destructive">
                        <AlertTitle>Budget exceeded</AlertTitle>
                        <AlertDescription>
                          Your cart total is above your monthly budget by{' '}
                          <span className="font-semibold">
                            {formatPrice(total - monthlyBudgetUSD)}
                          </span>
                          . Consider removing some items or lowering quantities.
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <Alert>
                        <AlertTitle>Within budget</AlertTitle>
                        <AlertDescription>
                          You still have{' '}
                          <span className="font-semibold">
                            {formatPrice(remainingUSD)}
                          </span>{' '}
                          left in your monthly budget.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                )}
              </div>

              <Link to="/checkout">
                <Button variant="cart" size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="w-full mt-3">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {purchaseHistory.length > 0 && categorySpendData.length > 0 && monthlyBudgetUSD > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Spending insights</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Track how much of your monthly budget you&apos;ve spent in each category.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-lg font-semibold">Recent purchases</h3>
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {purchaseHistory
                    .slice(-5)
                    .reverse()
                    .map(order => {
                      const date = new Date(order.date);
                      const totalInSelected = convertPrice(order.totalUSD);
                      return (
                        <div key={order.id} className="border-b border-border pb-2 last:border-0">
                          <p className="text-xs text-muted-foreground">
                            {date.toLocaleDateString()} • Order #{order.id.slice(-4)}
                          </p>
                          <p className="text-sm font-medium">
                            {formatPrice(order.totalUSD)}
                            <span className="ml-2 text-xs text-muted-foreground">
                              (~{formatPrice(order.totalUSD)})
                            </span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1 truncate">
                            {order.items.map(item => item.name).join(', ')}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Budget by category</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Slice size shows how much of your total monthly budget each category has used so
                  far.
                </p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categorySpendData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        paddingAngle={4}
                      >
                        {categorySpendData.map((entry, index) => {
                          const colors = [
                            '#2563eb',
                            '#f97316',
                            '#22c55e',
                            '#a855f7',
                            '#ec4899',
                            '#eab308',
                          ];
                          return (
                            <Cell
                              key={entry.name}
                              fill={colors[index % colors.length]}
                              stroke="#ffffff"
                              strokeWidth={1}
                            />
                          );
                        })}
                      </Pie>
                      <Tooltip
                        formatter={(value: number, name: string) => {
                          const amountUSD = value;
                          const percentOfBudget =
                            monthlyBudgetUSD > 0
                              ? ((amountUSD / monthlyBudgetUSD) * 100).toFixed(1)
                              : '0';
                          return [
                            `${formatPrice(amountUSD)} (${percentOfBudget}% of budget)`,
                            name,
                          ];
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {recommendedProducts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Recommended for you</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Based on items in your cart and similar categories.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
