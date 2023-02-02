import React from "react";
import { ButtonExt } from "../reusable/button";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "./index.scss";

import planetInfographic from "../../images/key-features/planet-infographic.png";
import gSierraLeonne from "../../images/organisations/g-sierra-leonne-logo.png";
import simavi from "../../images/organisations/simavi-logo.png";
import fairTrade from "../../images/organisations/fairtrade-logo.png";
import snv from "../../images/organisations/snv-logo.png";
import lifewater from "../../images/organisations/lifewater-logo.png";
import unicef from "../../images/organisations/unicef-logo.png";
import oneDrop from "../../images/organisations/one-drop-logo.png";
import idh from "../../images/organisations/idh-logo.png";
import nuffic from "../../images/organisations/nuffic-logo.png";
import Map from "../../images/map.svg";

const Overview = () => {
  const { t } = useTranslation();
  const organisationLogos = [
    { name: "Government of Sierra Leonne", logo: gSierraLeonne },
    { name: "Simavi", logo: simavi },
    { name: "Fairtrade", logo: fairTrade },
    { name: "snv", logo: snv },
    { name: "Lifewater", logo: lifewater },
    { name: "Unicef", logo: unicef },
    { name: "One Drop", logo: oneDrop },
    { name: "idh", logo: idh },
    { name: "Nuffic", logo: nuffic },
  ];

  const statistics = [
    { name: t("Data points"), count: "1.5M" },
    { name: t("Organisations"), count: "200+" },
    { name: t("Countries"), count: "70+" },
  ];
  return (
    <div className="overview">
      <section className="introduction">
        <div className="wrapper">
          <h2 className="heading">
            <Trans i18nKey="Design your survey and start collecting data today.">
              Design your survey and <span>start collecting data</span> today.
            </Trans>
          </h2>
          <p className="paragraph">
            <Trans>
              Akvo Flow can easily adapt to your data needs. Our partners
              collect and use data to drive change all over the world.
            </Trans>
          </p>
          <ButtonExt
            type="filled"
            text={t("Start for free now")}
            linkTo="https://basic.akvoflow.org"
          />
          <img src={planetInfographic} alt="3d model planet infographic" />
        </div>
      </section>

      <section className="partners">
        <h3 className="heading">
          <Trans>Trusted by hundreds of businesses, NGOs & governments</Trans>
        </h3>
        <div>
          {organisationLogos?.map((organisation, index) => (
            <img
              key={index}
              src={organisation?.logo}
              alt={organisation?.name}
              className="logo"
            />
          ))}
        </div>
      </section>
      <section className="impact">
        <h3 className="heading">
          <Trans i18nKey="Development organisations all over the world use Akvo Flow to drive impact">
            Development organisations <span>all over the world</span> use Akvo Flow to drive impact
          </Trans>
        </h3>
        <p className="paragraph">
          <Trans>
            The development sector has been progressively moving towards
            data-driven decision making and impact. With Akvo Flow, NGOs,
            governments, knowledge institutions and the private sector support
            millions of beneficiaries all over the world.
          </Trans>
        </p>
        <ButtonExt
          type="outlined"
          text={t("Get started")}
          linkTo="https://basic.akvoflow.org"
        />
        <figure>
          <Map />
        </figure>
        <div className="statistic">
          {statistics.map((stat, index) => (
            <div key={index}>
              <b>{stat.count}</b>
              <span>{stat.name}</span>
            </div>
          ))}
        </div>
        <div className="banner">
          <h3 className="heading">
            <Trans>Take your development programme to the next level</Trans>
          </h3>
          <div className="paragraph">
            <Trans>Capture reliable and timely data</Trans>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
