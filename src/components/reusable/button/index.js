import React from "react";
import { Link } from "gatsby";
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
export default Button;
