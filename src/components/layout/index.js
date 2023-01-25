import React from "react";
import Header from "../header";
import Footer from "../footer";
import "../../styles/index.scss";

const Layout = ({ page, children }) => {
  return (
    <div className="App">
      <Header active={page} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
