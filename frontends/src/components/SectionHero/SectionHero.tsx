import { useEffect, useState } from "react";
import BaseButton from "../BaseButton/BaseButton";
import checkSvg from "./../../assets/Check.svg";

import "./SectionHero.css";

type CheclistItemType = {
  label: string;
};

type SectionHeroDataType = {
  mainTitle: string;
  description: string;
  checklistItems: string[];
  openAccountButtonLabel: string;
  compareCardsButtonLabel: string;
  bannerImage: string;
};

//async / await
// https://kentcdodds.com/blog/using-fetch-with-type-script
async function requestServerData(): Promise<SectionHeroDataType> {
  const serverData = await fetch("http://localhost:5800/hero-banner", {
    method: "POST",
  });

  const jsonResponse: SectionHeroDataType = await serverData.json();

  return jsonResponse;
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
  const [templateData, setTemplateData] = useState<SectionHeroDataType>({
    bannerImage: "",
    checklistItems: [],
    description: "",
    mainTitle: "",
    compareCardsButtonLabel: "",
    openAccountButtonLabel: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  //Sessao de funcoes
  async function loadTemplateData() {
    setLoading(true);
    const temp = await requestServerData();
    setLoading(false);

    setTemplateData(temp);
  }

  //Sessao de React Hooks
  // react hook onMount (quando o componente e montado a primeira vez)
  useEffect(() => {
    loadTemplateData();
  }, []);

  //Sessao de template

  if (loading === true) {
    return (
      <section className="SectionHero hero">
        <h4>Loading server data...</h4>
      </section>
    );
  }

  return (
    <section className="SectionHero hero">
      <div className="grid-start">
        <h1>{templateData.mainTitle}</h1>

        <p>{templateData.description}</p>

        <div className="checklist">
          {templateData.checklistItems.map((checklistLabel) => {
            return <CheclistItem key={checklistLabel} label={checklistLabel} />;
          })}
        </div>

        <div className="hero-buttons">
          <BaseButton
            label={templateData.openAccountButtonLabel}
            appearence="green"
          />

          <BaseButton
            label={templateData.compareCardsButtonLabel}
            appearence="white"
            showArrow={true}
          />
        </div>
      </div>

      <div className="cards">
        <img src={templateData.bannerImage} alt="cards" />
      </div>
    </section>
  );
}

export default SectionHero;
