import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import arrival1 from "@/assets/arrival-1.jpg";
import arrival2 from "@/assets/arrival-2.jpg";
import arrival3 from "@/assets/arrival-3.jpg";
import arrival4 from "@/assets/arrival-4.jpg";

const products = [
  { id: "iphone-1", image: arrival1, title: "iPhone 15 Pro Max", description: "Space Black, 256GB", price: 134900 },
  { id: "iphone-2", image: arrival2, title: "iPhone 15 Pro", description: "Blue Titanium, 128GB", price: 119900 },
  { id: "iphone-3", image: arrival3, title: "iPhone 15", description: "Pink, 128GB", price: 79900 },
  { id: "iphone-4", image: arrival4, title: "iPhone 14 Pro", description: "Deep Purple, 128GB", price: 99900 },
];

const Iphones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          iPhones Collection
        </h1>
        <p className="text-center text-muted-foreground mb-12">Latest iPhone models at best prices</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Iphones;
