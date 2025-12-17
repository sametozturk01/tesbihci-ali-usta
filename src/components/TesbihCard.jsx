export default function TesbihCard({ tesbih, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(tesbih)}>
      <img src={tesbih.resim} alt={tesbih.ad} />
      <h3>{tesbih.ad}</h3>
      <span>{tesbih.tas}</span>
    </div>
  );
}
