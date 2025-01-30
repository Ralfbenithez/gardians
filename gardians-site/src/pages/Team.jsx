import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <div>
      <Navbar />
      <section className="p-10">
        <h1 className="text-3xl font-bold">Nos Gardiens</h1>
        <p className="mt-4">Présentation des membres de l’équipe...</p>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
