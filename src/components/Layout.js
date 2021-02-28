import React from "react";
import Header from "../components/Header";

function Layout(props, { languageMenu }) {
  return (
    <div className="mi-wrapper">
      <Header languageMenu={languageMenu} />
      {props.children}
    </div>
  );
}

export default Layout;
