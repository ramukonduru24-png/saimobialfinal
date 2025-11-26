import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import arrival3 from "@/assets/arrival-3.jpg";
import arrival1 from "@/assets/arrival-1.jpg";

const products = [
  { id: "case-1", image: arrival3, title: "Silicone Case for iPhone 15", description: "Soft Touch Finish", price: 4900 },
  { id: "case-2", image: arrival1, title: "Leather Case for S24 Ultra", description: "Premium Leather", price: 5900 },
  { id: "case-3", image: arrival3, title: "Clear MagSafe Case", description: "Anti-Yellowing", price: 3500 },
  { id: "case-4", image: arrival1, title: "Rugged Armor Case", description: "Military Grade Protection", price: 2500 },
];

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Cases & Pouches
        </h1>
        <p className="text-center text-muted-foreground mb-12">Protect your device in style</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Cases;
