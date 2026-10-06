import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shell">
      <div className="nav">
        <span className="nav-mark">Tugas Promnet</span>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tentangsaya">Tentang Saya</Link>
          <Link to="/biodata">Biodata</Link>
          <Link to="/kontak">Kontak</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;