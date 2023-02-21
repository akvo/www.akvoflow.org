import React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../../components/layout";
import { ButtonExt } from "../../components/reusable/button";
import "./style.scss";
import dataMonitoring from "../../images/key-features/data-monitoring.png";
import devices from "../../images/key-features/devices.png";
import userManagement from "../../images/key-features/user-management.png";
import dataExport from "../../images/key-features/data-export.png";
import planetInfographic from "../../images/key-features/bordered-planet-infographic.png";
import webform from "../../images/key-features/webform.png";
import support from "../../images/key-features/support.png";
import Seo from "../../components/seo";

const KeyFeatures = () => {
  const { t } = useTranslation();
  const keyFeatures = [
    {
      title: t("Data monitoring (multiple forms within a survey)"),
      description: t(
        "Does your organisation carry out baseline to endline surveys? Use this feature to track change over time for specific data points."
      ),
      image: dataMonitoring,
    },
    {
      title: t("Devices"),
      description: t(
        "Connect your enumerators’ devices within your online workspace and create groups and assignments for specific surveys and within a specific timeframe."
      ),
      image: devices,
    },
    {
      title: t("User management"),
      description: t(
        "Add users with different roles and permissions to your instance. Manage users by enabling or disabling access to certain features of the platform."
      ),
      image: userManagement,
    },
    {
      title: t("Data exports"),
      description: t(
        "Export your data in various formats to conduct data cleaning, data analysis, geoshape, survey viewing, and more."
      ),
      image: dataExport,
    },
    {
      title: t("Data point submissions"),
      description: t(
        "Once you have created and assigned your surveys, get enumerators out in the field to collect data and submit the data points. Data points will be stored in your instance and can be accessed, edited, and exported directly from your instance."
      ),
      image: planetInfographic,
    },
    {
      title: t("Webforms"),
      description: t(
        "Distribute surveys without the need of enumerators with our webform feature. You can crowdsource data, and reduce your data collection costs in this way. Webforms are also a great option for contexts or scenarios where field data collection might be hampered."
      ),
      image: webform,
    },
    {
      title: t("PowerBI integration"),
      description: t(
        "Connect your Flow data directly to Power BI through an API that will allow you to update your dashboards with the click of a button."
      ),
      image: planetInfographic,
    },
    {
      title: t("Help desk and support (in EN, ES, FR)"),
      description: t(
        "Our support team is there to assist you on any issues you might encounter with Flow. Simply report your issue through our ticketing system via our support email and it will be answered within 24 hours or less, depending on your subscription level. Be sure to check out our step guides, as well as our support online space,  which already contain many of the answers to the issues you might encounter."
      ),
      image: support,
    },
  ];
  return (
    <Layout page="key-features">
      <div className="key-features-page">
        <div className="key-feature-intro">
          <h2 className="heading">
            <Trans i18nKey="Our features allow you to go from data collection to decision making.">
              Our features allow you to go
              <span>from data collection to decision making.</span>
            </Trans>
          </h2>
          <p className="paragraph">
            <Trans>
              Collect data effectively and efficiently using Flow’s features,
              including monitoring, webforms, export formats, and system support
              in various languages.
            </Trans>
          </p>
        </div>
        <ul className="features-list">
          {keyFeatures.map((feature, index) => {
            return (
              <li key={index} className="list-item">
                <div className="details">
                  <h3 className="title">{feature.title}</h3>
                  <p className="paragraph">{feature.description}</p>
                  <ButtonExt
                    type="outlined"
                    text={t("Get started")}
                    linkTo="https://basic.akvoflow.org"
                  />
                </div>
                <img src={feature.image} alt={feature.title} />
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default KeyFeatures;

export const Head = () => {
  const { t } = useTranslation();
  return <Seo title={t("Key features")} />;
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "key-features"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
