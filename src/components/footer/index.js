import React from "react";
import RoundedArrow from "../../images/rounded-arrow.svg";
import Dropdown from "../reusable/dropdown";
import "./index.scss";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const languageNames = {
  en: "English",
  fr: "French",
  es: "Espagnol",
};

const Footer = () => {
  const { language, languages, originalPath, t } = useI18next();
  const languageOptions = languages.map((lng) => ({
    id: lng,
    value: lng,
    label: (
      <Link to={originalPath} language={lng}>
        {languageNames[lng]}
      </Link>
    ),
  }));

  return (
    <footer className="footer">
      <div>
        <div className="wrapper">
          <h1 className="flow-logo">
            <Link to="/">Akvoflow</Link>
          </h1>

          <div className="navigation-container">
            <div className="navigation-section">
              <div className="title">{t("Pages")}</div>
              <ul className="navigation-list">
                <li className="list-item">
                  <Link to="/key-features">{t("Key features")}</Link>
                </li>
                <li className="list-item">
                  <Link to="/pricing">{t("Pricing")}</Link>
                </li>
                <li className="list-item">
                  <Link to="/contact">{t("Contact")}</Link>
                </li>
              </ul>
            </div>

            <div className="navigation-section">
              <div className="title">{t("General")}</div>
              <ul className="navigation-list">
                <li className="list-item">
                  <a href="https://flowsupport.akvo.org/" name="support">
                    {t("Support")}
                  </a>
                </li>
                <li className="list-item">
                  <a
                    href="/akvo-saas-terms-of-service-final-september 2018.pdf"
                    target="_self"
                    name="term-of-service"
                  >
                    {t("Terms of Service")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="navigation-section">
              <div className="title">{t("Useful info")}</div>
              <ul className="navigation-list">
                <li className="list-item">
                  {t("Chamber of Commerce (KvK) number")}: 27327087
                </li>
                <li className="list-item">
                  {t("VAT number")}: NL 819794727 B01
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Dropdown
          selectData={languageOptions}
          className="language-select"
          Icon={RoundedArrow}
          textToDisplay={languageNames[language]}
        />
        <div className="copyright-wrapper">
          <small>© {new Date().getFullYear()} AkvoFlow</small>
          <small>
            {t("Powered by") + " "}
            <a href="https://akvo.org/" name="akvo">
              Akvo.org
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
