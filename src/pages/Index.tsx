import Header from "@/components/Header";
import CarCarousel from "@/components/CarCarousel";
import SimpleContact from "@/components/SimpleContact";
import SimpleFooter from "@/components/SimpleFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CarCarousel />
      <SimpleContact />
      <SimpleFooter />
    </div>
  );
};

export default Index;
