import { useState } from "react";
import { tesbihler } from "./data/tesbihler";
import TesbihCard from "./components/TesbihCard";
import TesbihModal from "./components/TesbihModal";
import "./index.css";

export default function App() {
  const [selectedTesbih, setSelectedTesbih] = useState(null);
  // 1. Arama terimi için state ekledik
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Arama filtresi: İsim veya kategoriye göre filtreleme yapar
  const filteredTesbihler = tesbihler.filter((t) =>
    t.ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (t.kategori && t.kategori.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="app-wrapper">
      {/* HERO SECTION */}
      <header className="hero">
        <img src="/logo.png" alt="Logo" className="logo" />
        <p>El emeği, göz nuru tesbihler</p>
      </header>

      {/* ARAMA BÖLÜMÜ - Galerinin hemen üstü */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="Malzeme veya model ara... (Örn: Kehribar)" 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          {searchTerm && (
            <p className="search-feedback">
              <strong>"{searchTerm}"</strong> için {filteredTesbihler.length} sonuç bulundu.
            </p>
          )}
        </div>
      </section>

      {/* GALERİ - Artık filtrelenmiş listeyi (filteredTesbihler) dönüyoruz */}
      <main className="gallery">
        {filteredTesbihler.length > 0 ? (
          filteredTesbihler.map((t) => (
            <TesbihCard key={t.id} tesbih={t} onSelect={setSelectedTesbih} />
          ))
        ) : (
          <div className="no-results">
            <p>Aradığınız kriterde bir tesbih bulunamadı.</p>
          </div>
        )}
      </main>

       {/* ÜRÜN KARTLARININ ALTINDAKİ HAKKIMIZDA BÖLÜMÜ */}
      <section className="about-bottom-section">
     <div className="about-container">
      <div className="contact-intro"> 
      <span className="contact-label">HİKAYEMİZ</span>
      <h2>Ustalıkla İşlenen 40 Yıl</h2>
      <p>Her bir tesbih tanesinde dededen toruna aktarılan bir geleneğin ve sabrın izi var.</p>
    </div>

    <div className="contact-info-centered"> {/* İletişimdeki kart yapısını kullanıyoruz */}
      <div className="info-card">
        <div className="info-icon">⚒️</div>
        <h3>Atölye Ruhu</h3>
        <p>Eski usul kuru torna yöntemiyle, taşın ve ağacın karakterini bozmadan, kalem işçiliğiyle her taneyi tek tek formuna kavuşturuyoruz.</p>
      </div>

      <div className="info-card">
        <div className="info-icon">🔍</div>
        <h3>Ekspertiz Garantisi</h3>
        <p>Kullandığımız tüm malzemeler; damla kehribardan kuka meyvesine kadar %100 doğallık ve orijinallik garantisi altındadır.</p>
      </div>

      <div className="info-card">
        <div className="info-icon">🤝</div>
        <h3>Usta Sözü</h3>
        <p>Sadece satış yapmıyoruz; aldığınız her eserin ip değişimi ve parlatma gibi bakımlarını atölyemizde ömür boyu gerçekleştiriyoruz.</p>
      </div>
      </div>
      </div>
     </section>

      {/* İLETİŞİM ALANI */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-intro">
            <span className="contact-label">İLETİŞİM</span>
            <h2>Özel Tasarım ve Danışmanlık</h2>
            <p>El emeği tesbihlerimiz hakkında detaylı bilgi almak veya atölyemizi ziyaret etmek için bizimle iletişime geçin.</p>
          </div>

          <div className="contact-info-centered">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Atölye Adresimiz</h3>
              <p>Alacaatlı Mahallesi 4834. Cadde 2.Etap Toki Karşısı TOKİ AVM 2.Kat No: 10<br/>Çankaya / Ankara</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Telefon & WhatsApp</h3>
              <p>+90 (505) 541 78 42</p>
              <a href="tel:+905055417842" className="inline-call-btn">Hemen Ara</a>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Çalışma Saatleri</h3>
              <p>Pazartesi - Cumartesi<br/>09:00 - 19:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* YUKARI ÇIK BUTONU */}
      <button 
      className="scroll-to-top" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
      {/* Modern V şeklinde yukarı oku (SVG) */}
     <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      >
       <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
      </button>
      {/* FOOTER */}
      <footer className="site-footer-new">
        <div className="footer-content">
          <p>© 2026 Tesbihçi Ali Usta • El Sanatları Atölyesi • Tüm Hakları Saklıdır</p>
          <p className="footer-tagline">Geleneksel Ustalık, Modern Dokunuş</p>
          <p className="credit">
          Development by <a href="https://ozturksoft.net" target="_blank" rel="noreferrer">Ozturksoft</a>
        </p>
        </div>
      </footer>

      {/* MODAL */}
      <TesbihModal tesbih={selectedTesbih} onClose={() => setSelectedTesbih(null)} />
    </div>
  );
}