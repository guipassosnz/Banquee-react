import { useEffect, useState } from "react";
import BaseButton from "../BaseButton/BaseButton";
import checkSvg from "./../../assets/Check.svg";
import cardsSvg from "./../../assets/cards.svg";

import "./SectionHero.css";

type CheclistItemType = {
  label: string;
};

function simulateServer() {
  return {
    data: [
      "Instant transfers",
      "Saving accounts",
      "Payment wordlwide",
      "100% mobile banking",
    ],
  };
}

function CheclistItem({ label = "" }: CheclistItemType) {
  return (
    <div className="checkmark-list">
      <img src={checkSvg} />
      <p>{label}</p>
    </div>
  );
}

function SectionHero() {
  //Sessao de variaveis
  const [checklistItems, setChecklistItems] = useState<string[]>([]);

  //Sessao de funcoes

  //Sessao de React Hooks
  useEffect(() => {
    // react hook onMount (quando o componente e montado a primeira vez)
    const serverResponse = simulateServer();

    setChecklistItems(serverResponse.data);
  }, []);

  //Sessao de template
  return (
    <section className="SectionHero hero">
      <div className="grid-start">
        <h1>
          Banking
          <br />
          starts here.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div className="checklist">
          {checklistItems.map((checklistLabel) => {
            return <CheclistItem key={checklistLabel} label={checklistLabel} />;
          })}
        </div>
        <div className="hero-buttons">
          <BaseButton label="Open Account" appearence="green" />
          <BaseButton
            label="Compare cards"
            appearence="white"
            showArrow={true}
          />
        </div>
      </div>
      <div className="cards">
        <img src={cardsSvg} alt="cards" />
      </div>
    </section>
  );
}

export default SectionHero;
