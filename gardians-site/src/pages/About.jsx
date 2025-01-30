import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="p-10">
        <h1 className="text-3xl font-bold">À propos de nous</h1>
        <p className="mt-4">
          Gardians est une entreprise spécialisée en sécurité et surveillance...
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
