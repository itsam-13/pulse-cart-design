import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const product = products.find(p => p.id === id);

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

          <div className="flex items-center gap-4 mb-6">
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

          <div className="flex gap-4 mb-8">
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
    </div>
  );
}
