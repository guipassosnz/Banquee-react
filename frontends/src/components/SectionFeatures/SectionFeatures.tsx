import "./SectionFeatures.css";
import { useEffect, useState } from "react";

type FeatureItensType = {
  icon: string;
  title: string;
  description: string;
};

type SectionFeaturesDataType = {
  mainTitle: string;
  featureItens: FeatureItensType[];
  bannerImage: string;
};

//async / await
// https://kentcdodds.com/blog/using-fetch-with-type-script
async function requestServerData(): Promise<SectionFeaturesDataType> {
  const serverData = await fetch("http://localhost:5800/section-features", {
    method: "POST",
  });

  const jsonResponse: SectionFeaturesDataType = await serverData.json();

  return jsonResponse;
}

function InfoCard({
  icon = "",
  title = "",
  description = "",
}: FeatureItensType) {
  return (
    <div className="info-card">
      <img src={icon} />
      <h5>{title}</h5>
      <p className="inter-16px">{description}</p>
    </div>
  );
}

function SectionFeatures() {
  //variables
  const [templateData, setTemplateData] = useState<SectionFeaturesDataType>({
    mainTitle: "",
    featureItens: [],
    bannerImage: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  //functions
  async function loadTemplateData() {
    setLoading(true);
    const temp = await requestServerData();
    setLoading(false);

    setTemplateData(temp);
  }

  //react hooks

  useEffect(() => {
    loadTemplateData();
  }, []);

  //template

  if (loading === true) {
    return (
      <section className="SectionFeatures">
        <h4>Loading server data...</h4>
      </section>
    );
  }

  return (
    <section className="SectionFeatures">
      <section className="features">
        <div className="features-left">
          <h2>{templateData.mainTitle}</h2>
          <div className="info-cards-grid">
            {templateData.featureItens.map((item, index) => {
              return (
                <InfoCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
        <div className="features-right">
          <img src={templateData.bannerImage} alt="phone" />
        </div>
      </section>
    </section>
  );
}

export default SectionFeatures;
