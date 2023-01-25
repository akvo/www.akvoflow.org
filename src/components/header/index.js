import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import DownArrow from "../../images/down-arrow.svg";
import Button from "../reusable/button";
import Dropdown from "../reusable/dropdown";
import "./index.scss";

const DISABLE_SCROLLING_CLASS = "disabled-scroll";

const languages = [
  { id: 1, value: "En", label: "En" },
  { id: 2, value: "Fr", label: "Fr" },
  { id: 3, value: "Es", label: "Es" },
];

const Header = ({ active }) => {
  const [isShownMenu, setIsShownMenu] = useState(false);

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
                Key features
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="/pricing"
                className={active === "pricing" ? `selected` : ""}
              >
                Pricing
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="/contact"
                className={active === "contact" ? "selected" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="extra-navigation">
            <Dropdown
              selectData={languages}
              Icon={DownArrow}
              className="nav-item language-select"
            />
            <a
              href="http://akvoflowsandbox.appspot.com/"
              className="nav-item login"
            >
              Log in
            </a>
            <Button type="outlined" text="Free trial" linkTo="/signup" />
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
              <Link to="/key-features">Key features</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="menu-list-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="menu-extra-navigation">
            <Button type="outlined" text="Free trial" linkTo="/signup" />
            <a
              href="http://akvoflowsandbox.appspot.com/"
              className="menu-nav-item login"
            >
              Log in
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
