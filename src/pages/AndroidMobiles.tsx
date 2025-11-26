import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import arrival5 from "@/assets/arrival-5.jpg";
import arrival6 from "@/assets/arrival-6.jpg";
import arrival7 from "@/assets/arrival-7.jpg";
import arrival8 from "@/assets/arrival-8.jpg";

const products = [
  { id: "android-1", image: arrival5, title: "Samsung Galaxy S24 Ultra", description: "Titanium Gray, 256GB", price: 129999 },
  { id: "android-2", image: arrival6, title: "Google Pixel 8 Pro", description: "Obsidian, 128GB", price: 106999 },
  { id: "android-3", image: arrival7, title: "OnePlus 12", description: "Silky Black, 256GB", price: 64999 },
  { id: "android-4", image: arrival8, title: "Xiaomi 14", description: "Jade Green, 256GB", price: 59999 },
];

const AndroidMobiles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Android Mobiles
        </h1>
        <p className="text-center text-muted-foreground mb-12">Premium Android smartphones</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AndroidMobiles;
