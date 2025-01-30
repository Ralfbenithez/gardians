import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  { title: "Surveillance humaine", desc: "Sécurisation des lieux sensibles." },
  { title: "Sécurité événementielle", desc: "Protection lors d'événements." },
  { title: "Rondes et interventions", desc: "Patrouilles de surveillance." },
];

const Services = () => {
  return (
    <div>
      <Navbar />
      <section className="p-10">
        <h1 className="text-3xl font-bold">Nos Services</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-4 border rounded-lg shadow">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;

  