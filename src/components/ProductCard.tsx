import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description?: string;
  price: number;
}

const ProductCard = ({ id, image, title, description, price }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id, image, title, price });
    }
    toast({
      title: "Added to cart",
      description: `${quantity} × ${title} added to your cart`,
    });
    setQuantity(1);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-all duration-500 bg-blue-50/30 hover:bg-blue-100/50 border border-blue-100/50">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        <p className="text-2xl font-bold text-primary">₹{price.toLocaleString()}</p>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-primary/20 rounded-md bg-background/50">
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 md:h-9 md:w-9 hover:bg-primary/10 hover:text-primary"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <span className="w-6 md:w-12 text-center font-semibold text-sm md:text-base">{quantity}</span>
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 md:h-9 md:w-9 hover:bg-primary/10 hover:text-primary"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>

          <Button
            className="flex-1 px-2 md:px-4 bg-primary hover:bg-primary/90"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1.5 md:mr-2" />
            <span className="text-xs md:text-sm font-medium">
              <span className="md:hidden">Add</span>
              <span className="hidden md:inline">Add to Cart</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;