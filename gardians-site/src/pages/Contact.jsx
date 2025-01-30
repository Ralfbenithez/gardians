import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="p-10">
        <h1 className="text-3xl font-bold">Contactez-nous</h1>
        <form className="mt-6 flex flex-col gap-4">
          <input type="text" placeholder="Nom" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <textarea placeholder="Message" className="p-2 border rounded"></textarea>
          <button className="bg-blue-500 text-white p-2 rounded">Envoyer</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

  