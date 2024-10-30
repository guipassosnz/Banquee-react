import arrowRightSvg from "./../../assets/arrow-right.svg";

import "./BaseButton.css";

type BaseButtonParams = {
  label: string;
  appearence: "green" | "flat" | "white";
  showArrow?: boolean;
};

function BaseButton({
  label = "",
  appearence = "flat",
  showArrow = false,
}: BaseButtonParams) {
  const cssClass = "BaseButton " + appearence;

  return (
    <div className={cssClass}>
      <span>{label}</span>
      {showArrow === true ? <img src={arrowRightSvg} /> : ""}
    </div>
  );
}

export default BaseButton;
