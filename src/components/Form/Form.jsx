import Button from "../Button/Button";
import "./Form.scss";

export default function Form(label, name, className, placeholder, type) {
  <form>
    <label>
      {label}
      <input
        className={className}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </label>
    <Button></Button>
  </form>;
}
