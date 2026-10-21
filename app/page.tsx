import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ciencia from "@/components/Ciencia";
import Laboratorio from "@/components/Laboratorio";
import Ecosistema from "@/components/Ecosistema";
import Entornos from "@/components/Entornos";
import Invernaderos from "@/components/Invernaderos";
import Productos from "@/components/Productos";
import Sede from "@/components/Sede";
import Investigacion from "@/components/Investigacion";
import Red from "@/components/Red";
import Crecer from "@/components/Crecer";
import Nosotros from "@/components/Nosotros";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ciencia />
      <Laboratorio />
      <Ecosistema />
      <Entornos />
      <Invernaderos />
      <Productos />
      <Sede />
      <Investigacion />
      <Red />
      <Crecer />
      <Nosotros />
      <Contacto />
      <Footer />
    </main>
  );
}
