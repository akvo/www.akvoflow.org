import { graphql } from "gatsby";
import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import PricingTab from "../components/pricing/pricing-tab";
import PricingTable from "../components/pricing/pricing-table";

const Pricing = () => {
  return (
    <Layout page="pricing">
      <PricingTable />
      <PricingTab />
    </Layout>
  );
};

export default Pricing;

export const Head = () => (
  <title>
    <Trans>Pricing</Trans> - Akvo Flow
  </title>
);

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
