import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import arrival6 from "@/assets/arrival-6.jpg";
import arrival2 from "@/assets/arrival-2.jpg";

const products = [
  { id: "ear-1", image: arrival2, title: "AirPods Pro (2nd Gen)", description: "Active Noise Cancellation", price: 24900 },
  { id: "ear-2", image: arrival6, title: "Samsung Galaxy Buds2 Pro", description: "Hi-Fi Sound", price: 17999 },
  { id: "ear-3", image: arrival6, title: "Google Pixel Buds Pro", description: "Silent Seal", price: 18999 },
  { id: "ear-4", image: arrival2, title: "Sony WH-1000XM5", description: "Industry Leading NC", price: 29990 },
];

const Earphones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Earphones & Audio
        </h1>
        <p className="text-center text-muted-foreground mb-12">Immersive sound experience</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Earphones;
