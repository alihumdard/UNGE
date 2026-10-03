import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScienceSection from "@/components/ScienceSection";
import LaboratorySection from "@/components/LaboratorySection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06141b]">

      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Nuestra Ciencia */}
      <ScienceSection />

      {/* Del Laboratorio a la Vida Real */}
      <LaboratorySection />

      {/* Nuestros Productos */}
      <ProductsSection />

    </main>
  );
}