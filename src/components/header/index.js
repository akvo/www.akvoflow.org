import React, { useEffect, useState } from "react";
import DownArrow from "../../images/down-arrow.svg";
import { ButtonExt } from "../reusable/button";
import Dropdown from "../reusable/dropdown";
import "./index.scss";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const DISABLE_SCROLLING_CLASS = "disabled-scroll";

const Header = ({ active }) => {
  const [isShownMenu, setIsShownMenu] = useState(false);
  const { language, languages, originalPath, t } = useI18next();
  const languageOptions = languages.map((lng) => ({
    id: lng,
    value: lng,
    label: (
      <Link to={originalPath} language={lng}>
        {lng}
      </Link>
    ),
  }));

  useEffect(() => {
    const { innerWidth } = window;
    const body = document.querySelector("body");
    if (isShownMenu && innerWidth < 601) {
      body.classList.add(DISABLE_SCROLLING_CLASS);
    } else {
      body.classList.remove(DISABLE_SCROLLING_CLASS);
    }
  }, [isShownMenu]);

  return (
    <div className="header-wrapper">
      <header className="header">
        <h1 className="flow-logo">
          <Link to="/">Akvoflow</Link>
        </h1>

        <nav className="navigation">
          <ul className="navigation-list">
            <li className="list-item">
              <Link
                to="/key-features"
                className={active === "key-features" ? "selected" : ""}
              >
                {t("Key features")}
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="/pricing"
                className={active === "pricing" ? `selected` : ""}
              >
                {t("Pricing")}
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="/contact"
                className={active === "contact" ? "selected" : ""}
              >
                {t("Contact")}
              </Link>
            </li>
          </ul>
          <div className="extra-navigation">
            <Dropdown
              textToDisplay={language}
              selectData={languageOptions}
              Icon={DownArrow}
              className="nav-item language-select"
            />
            <ButtonExt
              type="outlined"
              text={t("Free trial")}
              linkTo="https://basic.akvoflow.org"
            />
          </div>
        </nav>

        <button
          className={
            isShownMenu
              ? `toggle-menu-button closed-menu`
              : `toggle-menu-button opened-menu`
          }
          onClick={() => setIsShownMenu(!isShownMenu)}
        >
          {isShownMenu ? "close" : "open"}
        </button>
      </header>

      <div
        className={isShownMenu ? `menu-wrapper visible` : `menu-wrapper hide`}
      >
        <nav className="menu-navigation">
          <ul className="menu-navigation-list">
            <li className="menu-list-item">
              <Link to="/key-features">{t("Key features")}</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/pricing">{t("Pricing")}</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/contact">{t("Contact")}</Link>
            </li>
          </ul>

          <div className="menu-extra-navigation">
            <ButtonExt
              type="outlined"
              text={t("Free trial")}
              linkTo="https://basic.akvoflow.org"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
