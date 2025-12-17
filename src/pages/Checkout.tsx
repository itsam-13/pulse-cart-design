import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Check, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { toast } from '@/hooks/use-toast';
import { CreditCard, Truck } from 'lucide-react';
import type { CartItem } from '@/types/product';

// Sample coupon codes with discount percentages
const VALID_COUPONS: { [key: string]: number } = {
  'NEWBIE10': 10,
  'SAVE15': 15,
  'DISCOUNT20': 20,
  'WELCOME5': 5,
};

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [monthlyBudgetUSD, setMonthlyBudgetUSD] = useState<number | null>(null);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState('');
  
  const orderTotalWithTax = total * 1.1;
  const discountAmount = appliedCoupon ? (orderTotalWithTax * appliedCoupon.discount) / 100 : 0;
  const finalTotal = orderTotalWithTax - discountAmount;
  const isOverBudget = monthlyBudgetUSD !== null && monthlyBudgetUSD > 0 && finalTotal > monthlyBudgetUSD;

  useEffect(() => {
    const saved = localStorage.getItem('monthlyBudgetUSD');
    if (saved) {
      const parsed = parseFloat(saved);
      if (!Number.isNaN(parsed) && parsed > 0) {
        setMonthlyBudgetUSD(parsed);
      }
    }
  }, []);

  const handleApplyCoupon = () => {
    const code = couponCode.toUpperCase().trim();
    
    if (!code) {
      setCouponError('Please enter a coupon code');
      return;
    }

    if (appliedCoupon?.code === code) {
      setCouponError('This coupon is already applied');
      return;
    }

    if (VALID_COUPONS[code]) {
      setAppliedCoupon({ code, discount: VALID_COUPONS[code] });
      setCouponError('');
      setCouponCode('');
      toast({
        title: "Coupon Applied!",
        description: `You saved ${VALID_COUPONS[code]}% with code ${code}`,
      });
    } else {
      setCouponError('Invalid coupon code');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isOverBudget) {
      toast({
        title: "Order Blocked",
        description: `Your order total (${formatPrice(finalTotal)}) exceeds your monthly purchase limit (${formatPrice(monthlyBudgetUSD || 0)}).`,
        variant: "destructive",
      });
      return;
    }

    // Persist a simple buying history snapshot in localStorage (USD-based).
    try {
      const raw = localStorage.getItem('purchaseHistory');
      const parsed: {
        id: string;
        date: string;
        items: Pick<CartItem, 'id' | 'name' | 'category' | 'price' | 'quantity'>[];
        totalUSD: number;
      }[] = raw ? JSON.parse(raw) : [];

      parsed.push({
        id: `${Date.now()}`,
        date: new Date().toISOString(),
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          category: item.category,
          price: item.price,
          quantity: item.quantity,
        })),
        totalUSD: finalTotal,
      });

      localStorage.setItem('purchaseHistory', JSON.stringify(parsed));
    } catch {
      // If anything goes wrong, skip persisting history silently.
    }

    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. We'll send you a confirmation email shortly.",
    });
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" required />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isOverBudget && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Budget Exceeded</AlertTitle>
                    <AlertDescription>
                      Your order total ({formatPrice(orderTotalWithTax)}) exceeds your monthly purchase limit ({formatPrice(monthlyBudgetUSD || 0)}). Payment cannot be processed.
                    </AlertDescription>
                  </Alert>
                )}
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="flex-1 truncate">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon.discount}%)</span>
                      <span className="font-semibold">-{formatPrice(discountAmount)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                </div>

                {/* Coupon Section */}
                <div className="space-y-3 border-t pt-4">
                  <p className="text-sm font-semibold">Apply Discount Coupon</p>
                  {appliedCoupon ? (
                    <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md">
                      <Check className="h-4 w-4 text-green-600" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-green-700">{appliedCoupon.code}</p>
                        <p className="text-xs text-green-600">{appliedCoupon.discount}% discount applied</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={handleRemoveCoupon}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => {
                          setCouponCode(e.target.value);
                          setCouponError('');
                        }}
                        className="text-sm"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleApplyCoupon}
                      >
                        Apply
                      </Button>
                    </div>
                  )}
                  {couponError && (
                    <p className="text-xs text-red-600">{couponError}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Sample codes: NEWBIE10, SAVE15, DISCOUNT20, WELCOME5
                  </p>
                </div>

                <Button 
                  type="submit" 
                  variant="cart" 
                  size="lg" 
                  className="w-full"
                  disabled={isOverBudget}
                >
                  {isOverBudget ? 'Budget Limit Exceeded' : 'Place Order'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
