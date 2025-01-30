import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <section className="p-10">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-4">Les dernières actualités sur la sécurité...</p>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
