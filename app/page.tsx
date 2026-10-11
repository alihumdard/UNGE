import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ciencia from "@/components/Ciencia";
import Laboratorio from "@/components/Laboratorio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ciencia />
      <Laboratorio />
      <Footer />
    </main>
  );
}
