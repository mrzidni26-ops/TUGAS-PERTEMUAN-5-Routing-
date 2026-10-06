import Header from "../components/Header";
import BiodataSection from "../components/Biodata";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";

import "../Biodata.css";

const Home = () => {
  return (
    <>
      <div className="shell">
        <Header />
      </div>

      <div className="shell">
        <BiodataSection />
        <ContactSection />
      </div>
    </>

  );
};

export default Home;