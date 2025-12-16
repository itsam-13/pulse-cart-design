import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield, Bell } from 'lucide-react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const product = products.find(p => p.id === id);
  const [hasPriceAlert, setHasPriceAlert] = useState(false);
  const [showPriceDropAlert, setShowPriceDropAlert] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  const alertStorageKey = `priceAlert-${product.id}`;

  useEffect(() => {
    const saved = localStorage.getItem(alertStorageKey);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as { price: number };
      if (typeof parsed.price === 'number') {
        setHasPriceAlert(true);
        if (product.price < parsed.price) {
          setShowPriceDropAlert(true);
          // Update stored alert to the new (lower) price so the alert doesn't repeat infinitely
          localStorage.setItem(alertStorageKey, JSON.stringify({ price: product.price }));
        }
      }
    } catch {
      // Ignore invalid data
    }
  }, [alertStorageKey, product.price]);

  const handleSetPriceAlert = () => {
    localStorage.setItem(alertStorageKey, JSON.stringify({ price: product.price }));
    setHasPriceAlert(true);
    setShowPriceDropAlert(false);
  };

  const priceHistory = [
    { month: 'Jan', price: product.price * 1.1 },
    { month: 'Feb', price: product.price * 1.05 },
    { month: 'Mar', price: product.price * 0.98 },
    { month: 'Apr', price: product.price * 1.02 },
    { month: 'May', price: product.price * 0.95 },
    { month: 'Jun', price: product.price },
  ];

  const prices = priceHistory.map(point => point.price);
  const lowestPrice = Math.min(...prices);
  const highestPrice = Math.max(...prices);
  const currentPrice = prices[prices.length - 1];
  const previousPrice = prices[prices.length - 2] ?? currentPrice;
  const isRising = currentPrice >= previousPrice;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="aspect-square overflow-hidden rounded-lg bg-secondary mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <Badge className="mb-2 capitalize">{product.category}</Badge>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-accent text-accent'
                      : 'fill-muted text-muted'
                  }`}
                />
              ))}
              <span className="ml-2 font-semibold">{product.rating}</span>
            </div>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {product.originalPrice && (
              <Badge variant="destructive">
                Save {formatPrice(product.originalPrice - product.price)}
              </Badge>
            )}
          </div>

          {hasPriceAlert && !showPriceDropAlert && (
            <p className="text-xs text-muted-foreground mb-3">
              Price alert set. We&apos;ll highlight this page if the price drops below your saved
              price.
            </p>
          )}

          {showPriceDropAlert && (
            <div className="mb-4">
              <Alert>
                <AlertTitle>Good news! Price dropped</AlertTitle>
                <AlertDescription>
                  This item is now cheaper than when you set your alert. Current price is{' '}
                  <span className="font-semibold">{formatPrice(product.price)}</span>.
                </AlertDescription>
              </Alert>
            </div>
          )}

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="mb-6">
            <p className="text-sm mb-2">
              <span className="font-semibold">Availability: </span>
              {product.stock > 0 ? (
                <span className="text-green-600">In Stock ({product.stock} available)</span>
              ) : (
                <span className="text-destructive">Out of Stock</span>
              )}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              variant="cart"
              size="lg"
              className="flex-1"
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              variant={hasPriceAlert ? 'secondary' : 'outline'}
              size="lg"
              type="button"
              onClick={handleSetPriceAlert}
            >
              <Bell className="mr-2 h-5 w-5" />
              {hasPriceAlert ? 'Price alert on' : 'Notify me if price drops'}
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="h-5 w-5 text-primary" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Shield className="h-5 w-5 text-primary" />
              <span>2-year warranty included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Specifications</h2>
            {product.specifications && (
              <dl className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <dt className="font-semibold">{key}:</dt>
                    <dd className="text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-accent text-accent'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{product.rating} out of 5</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on {product.reviews} reviews
              </p>
              <Separator />
              <p className="text-muted-foreground text-sm">
                Customer reviews help you choose the right products. Be the first to review this item!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Price Intelligence */}
      <div className="mt-12">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-2">Price Intelligence</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Smart price insights based on recent trends for this product.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <ChartContainer
                  className="h-64 w-full"
                  config={{
                    price: {
                      label: 'Price',
                      color: 'hsl(var(--primary))',
                    },
                  }}
                >
                  <LineChart data={priceHistory} margin={{ left: 12, right: 12, top: 12, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={value => formatPrice(Number(value)).replace(/[^0-9.,]/g, '')}
                    />
                    <ChartTooltip content={<ChartTooltipContent labelKey="month" />} />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="var(--color-price)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase text-muted-foreground mb-1">Lowest price</p>
                  <p className="text-lg font-semibold">{formatPrice(lowestPrice)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground mb-1">Highest price</p>
                  <p className="text-lg font-semibold">{formatPrice(highestPrice)}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground mb-1">Current trend</p>
                  <p className="text-sm font-medium">
                    {isRising ? '⬆️ Rising' : '⬇️ Falling'}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs uppercase text-muted-foreground mb-1">Smart suggestion</p>
                  <p className="text-sm text-muted-foreground">
                    {isRising
                      ? 'Based on past trends, price may continue to rise. Buying soon could lock in a better deal.'
                      : 'Based on past trends, price may drop soon. Waiting a bit could save you money.'}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
