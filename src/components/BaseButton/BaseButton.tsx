import "./BaseButton.css";

type BaseButtonParams = {
  label: string;
  appearence: "green" | "flat" | "white";
};

function BaseButton({ label = "", appearence = "flat" }: BaseButtonParams) {
  const cssClass = "BaseButton " + appearence;

  return <div className={cssClass}>{label}</div>;
}

export default BaseButton;
