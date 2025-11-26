import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Iphones from "./pages/Iphones";
import AndroidMobiles from "./pages/AndroidMobiles";
import Cases from "./pages/Cases";
import Chargers from "./pages/Chargers";
import Earphones from "./pages/Earphones";
import Accessories from "./pages/Accessories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/iphones" element={<Iphones />} />
            <Route path="/android" element={<AndroidMobiles />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/chargers" element={<Chargers />} />
            <Route path="/audio" element={<Earphones />} />
            <Route path="/accessories" element={<Accessories />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
