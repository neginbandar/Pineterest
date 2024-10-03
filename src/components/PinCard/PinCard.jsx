import Button from "../Button/Button";
import "./PinCard.scss";
import { Link } from "react-router-dom";

export default function PinCard({ title, src, desc }) {
  //   const link1 = "https://ca.pinterest.com/pin/19914423346710722/";
  return (
    <div className="card">
      <img className="card__img" src={src} alt={title} />
      <div className="card__hover">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{desc}</p>

        <Button className={"button--save"} label={"Save"}></Button>
      </div>
      <Button className={"button--ext"} label={"Resource"}></Button>
    </div>
  );
}
