import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold">Bienvenue chez Gardians</h1>
        <p className="mt-4 text-lg">Votre sécurité, notre priorité.</p>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
