import React from "react";
import KeyFeatures from "../components/key-features";
import Layout from "../components/layout";
import Overview from "../components/overview";
import PricingTab from "../components/pricing/pricing-tab";
import PricingTable from "../components/pricing/pricing-table";
import Subscribe from "../components/subscribe";
import Testimonial from "../components/testimonial";
import "../styles/home.scss";

const IndexPage = () => {
  return (
    <Layout>
      <div className="home">
        <Overview />
        <KeyFeatures />
        <PricingTab />
        <PricingTable />
        <Testimonial />
        <Subscribe />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Akvo Flow</title>;
