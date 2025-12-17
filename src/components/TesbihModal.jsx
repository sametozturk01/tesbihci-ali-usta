import { useState } from 'react';

export default function TesbihModal({ tesbih, onClose }) {
  const [zoomPos, setZoomPos] = useState('0% 0%');

  if (!tesbih) return null;

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos(`${x}% ${y}%`);
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        
        {/* ZOOM KONTEYNERI */}
        <div 
          className="modal-zoom-container"
          onMouseMove={handleMouseMove}
          style={{ 
            backgroundImage: `url(${tesbih.resim})`, 
            backgroundPosition: zoomPos 
          }}
        >
          <img src={tesbih.resim} alt={tesbih.ad} className="modal-main-img" />
        </div>

        <h2>{tesbih.ad}</h2>

        <ul>
          <li><b>Taş:</b> {tesbih.tas}</li>
          <li><b>Tane:</b> {tesbih.taneler}</li>
          <li><b>İmame:</b> {tesbih.imame}</li>
          <li><b>İşçilik:</b> {tesbih.iscilik}</li>
          <li><b>Usta:</b> {tesbih.usta}</li>
          <li><b>Kesim:</b> {tesbih.kesim}</li>
          <li><b>Fiyat:</b> {tesbih.fiyat}</li>
        </ul>

        <p style={{ color: '#333', lineHeight: '1.6', margin: '20px 0' }}>{tesbih.aciklama}</p>

        <a className="call" href="tel:+905055417842">
          📞 Hemen Bilgi Al
        </a>

        <button className="close" onClick={onClose}>
          İncelemeye Devam Et
        </button>
      </div>
    </div>
  );
}