import React from "react";
import { graphql } from "gatsby";
import KeyFeatures from "../components/key-features";
import Layout from "../components/layout";
import Overview from "../components/overview";
import PricingTab from "../components/pricing/pricing-tab";
import PricingTable from "../components/pricing/pricing-table";
import Testimonial from "../components/testimonial";
import "../styles/home.scss";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <div className="home">
        <Overview />
        <KeyFeatures />
        <PricingTab />
        <PricingTable />
        <Testimonial />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "index", "key-features", "pricing"] }
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
