import zidni from "../assets/zidni.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="hero">
      <div>
        <h1 className="rise d2">Muhammad Zidni Nurfazri</h1>

        <p className="rise d3">
          saya adalah mahasiswa program studi pendidikan ilmu komputer
          di Universitas Pendidikan Indonesia. Saya memiliki minat dalam
          pengembangan front-end, multimedia, dan content kreatif.
        </p>

        <div className="actions rise d3">
          <Link className="btn btn-solid" to="/kontak">
            Call me
          </Link>

          <Link className="btn btn-ghost" to="/tentangsaya">
            About Me
          </Link>
        </div>
      </div>

      <div className="orb-frame rise d2">
        <div className="orb-ring"></div>
        <div className="orb"></div>

        <img
          src={zidni}
          alt="Foto Muhammad Zidni Nurfazri"
          className="orb-photo"
        />
      </div>
    </div>
  );
};

export default Header;