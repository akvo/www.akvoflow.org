import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import { ButtonExt } from "../../components/reusable/button";
import "./style.scss";

const Contact = () => {
  return (
    <Layout page="contact">
      <div className="contact">
        <h3 className="title">Get in touch</h3>
        <ul className="contact-list">
          <li className="list-item address">
            <b>Address</b>
            <span>'s-Gravenhekje 1-A, 1011 TG Amsterdam, The Netherlands</span>
          </li>
          <li className="list-item phone">
            <b>Phone</b>
            <span>+31 20 820 0175</span>
          </li>
        </ul>
        <div className="card">
          <h4 className="card-title">
            Start collecting data <span>today</span>
          </h4>
          <ButtonExt
            type="outlined"
            text="Get started"
            linkTo="https://basic.akvoflow.org"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

export const Head = () => <title>Contact - Akvo Flow</title>;

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
