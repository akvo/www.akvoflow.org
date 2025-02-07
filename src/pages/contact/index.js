import { graphql } from "gatsby";
import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../../components/layout";
import { ButtonExt } from "../../components/reusable/button";
import "./style.scss";
import Seo from "../../components/seo";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Layout page="contact">
      <div className="contact">
        <h3 className="title">
          <Trans>Get in touch</Trans>
        </h3>
        <ul className="contact-list">
          <li className="list-item address">
            <b>
              <Trans>Address</Trans>
            </b>
            <span>Mindspace Dam, Nieuwezijds Voorburgwal 162, 1012 SJ Amsterdam, The Netherlands</span>
          </li>
          <li className="list-item phone">
            <b>
              <Trans>Phone</Trans>
            </b>
            <span>+31 20 820 0175</span>
          </li>
        </ul>
        <div className="card">
          <h4 className="card-title">
            <Trans i18nKey="Start collecting data today">
              Start collecting data <span>today</span>
            </Trans>
          </h4>
          <ButtonExt
            type="outlined"
            text={t("Get started")}
            linkTo="https://basic.akvoflow.org"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

export const Head = () => {
  const { t } = useTranslation();
  return <Seo title={t("Contact")} />;
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "contact"] }, language: { eq: $language } }
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
