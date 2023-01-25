import React from "react";
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
