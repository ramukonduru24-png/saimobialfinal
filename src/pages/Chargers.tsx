import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import arrival7 from "@/assets/arrival-7.jpg";
import arrival5 from "@/assets/arrival-5.jpg";

const products = [
  { id: "chg-1", image: arrival7, title: "20W USB-C Power Adapter", description: "Fast Charging", price: 1900 },
  { id: "chg-2", image: arrival5, title: "MagSafe Charger", description: "Wireless Charging", price: 4500 },
  { id: "chg-3", image: arrival7, title: "45W Fast Charger", description: "For Samsung & Android", price: 2999 },
  { id: "chg-4", image: arrival5, title: "Wireless Charging Pad", description: "Universal Compatibility", price: 3500 },
];

const Chargers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Chargers & Adapters
        </h1>
        <p className="text-center text-muted-foreground mb-12">Power up your devices</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Chargers;
