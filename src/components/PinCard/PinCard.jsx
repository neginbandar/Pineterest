import "./PinCard.scss";

export default function PinCard({ title, src, desc, direct }) {
  return (
    <div className="card">
      <img className="card__img" src={src} alt={title} />
      <div className="card__hover">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{desc}</p>
        <p className="card__link">{direct}</p>
      </div>
    </div>
  );
}
