import "./Biodata.css";
import zidni from "./assets/zidni.jpeg";

function Biodata() {
  return (
    <div className="page">
      {/* ===== Menu atas ===== */}
      <div className="shell">
        <div className="nav">
          <span className="nav-mark">Tugas Promnet</span>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#detail">Data diri</a>
            <a href="#kontak">Kontak</a>
          </div>
        </div>

        {/* ===== Bagian utama ===== */}
        <div className="hero">
          <div>
            <h1 className="rise d2">Muhammad Zidni Nurfazri</h1>

            <p className="rise d3">
              saya adalah mahasiwa program studi pendidikan ilmu komputer di Universitas Pendidikan Indonesia. Saya memiliki minat dalam pengembangan front-end, multimedia, dan content kreatif.
            </p>

            <div className="actions rise d3">
              <a className="btn btn-solid" href="#kontak">
                Call me
              </a>
              <a className="btn btn-ghost" href="#detail">
                About Me
              </a>
            </div>
          </div>

          {/* Lingkaran biru berisi foto */}
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
      </div>

      {/* ===== Data diri ===== */}
      <div className="shell">
        <div className="section" id="detail">
          <p className="section-title">Data diri</p>

          <div className="grid">
            <div>
              <p className="item-label">NIM</p>
              <p className="item-value">2502763</p>
            </div>

            <div>
              <p className="item-label">Program studi</p>
              <p className="item-value">Pendidikan Ilmu Komputer</p>
            </div>

            <div>
              <p className="item-label">Fakultas</p>
              <p className="item-value">FPMIPA</p>
            </div>

            <div>
              <p className="item-label">Tempat dan tanggal lahir</p>
              <p className="item-value">Bandung, 13 Februari 2007</p>
            </div>

            <div>
              <p className="item-label">Domisili</p>
              <p className="item-value">Cianjur, Jawa Barat</p>
            </div>

            <div>
              <p className="item-label">Hobby</p>
              <p className="item-value">Fotografi, Design Grafis</p>
            </div>
          </div>
        </div>

        {/* ===== Kontak ===== */}
        <div className="section" id="kontak">
          <div className="kontak-band">
            <h2>Terimakasih dan Salam Kenal</h2>

            <div className="kontak-list">
              <div>
                <p className="item-label">Email</p>
                <a href="mailto:zidninrfzri@gmail.com">
                  zidninrfzri@gmail.com
                </a>
              </div>

              <div>
                <p className="item-label">Telepon</p>
                <a href="tel:081234567890">0851-5078-6405</a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Footer ===== */}
        <div className="foot">
          <span>Muhammad Zidni Nurfazri — 2502763</span>
          <span>Tugas Promenet</span>
        </div>
      </div>
    </div>
  );
}

export default Biodata;