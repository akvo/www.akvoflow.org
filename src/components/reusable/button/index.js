import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import "./index.scss";

const Button = ({ text, type, linkTo = "#", action }) => {
  return (
    <Link to={linkTo}>
      <button
        onClick={action}
        className={type === "outlined" ? "outlined" : "filled"}
      >
        {text}
      </button>
    </Link>
  );
};

const ButtonExt = ({ text, type, linkTo = "#", action }) => {
  return (
    <a href={linkTo} target="_blank">
      <button
        onClick={action}
        className={type === "outlined" ? "outlined" : "filled"}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;

export { ButtonExt };
