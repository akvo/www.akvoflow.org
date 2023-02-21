import { graphql } from "gatsby";
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import PricingTab from "../components/pricing/pricing-tab";
import PricingTable from "../components/pricing/pricing-table";
import Seo from "../components/seo";

const Pricing = () => {
  return (
    <Layout page="pricing">
      <PricingTable />
      <PricingTab />
    </Layout>
  );
};

export default Pricing;

export const Head = () => {
  const { t } = useTranslation();
  return <Seo title={t("Pricing")} />;
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "pricing"] }, language: { eq: $language } }
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
