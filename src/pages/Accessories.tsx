import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import arrival8 from "@/assets/arrival-8.jpg";
import arrival4 from "@/assets/arrival-4.jpg";

const products = [
  { id: "acc-1", image: arrival8, title: "Tempered Glass Screen Protector", description: "9H Hardness", price: 499 },
  { id: "acc-2", image: arrival4, title: "Power Bank 10000mAh", description: "Fast Charging", price: 1999 },
  { id: "acc-3", image: arrival8, title: "Adjustable Phone Stand", description: "Aluminum Alloy", price: 899 },
  { id: "acc-4", image: arrival4, title: "Car Mount Holder", description: "Magnetic Dashboard Mount", price: 1299 },
];

const Accessories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Mobile Accessories
        </h1>
        <p className="text-center text-muted-foreground mb-12">Everything else you need</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Accessories;
