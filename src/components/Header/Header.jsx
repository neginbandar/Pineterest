import logo from "../../assets/logo.svg";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="pinterest-logo" />
    </div>
  );
}
