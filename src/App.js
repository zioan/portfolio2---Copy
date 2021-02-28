import React, { useState } from "react";
import * as Icon from "react-feather";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import AboutDe from "./pages/AboutDe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HomeDe from "./pages/HomeDe";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";
import ResumesDe from "./pages/ResumesDe";

import BootstrapSwitchButton from "bootstrap-switch-button-react";

function App() {
  const [lightMode, setLightMode] = useState(false); // Made it true to load light mode primary
  const [language, setLanguage] = useState(false); // Made it false to load English primary

  lightMode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add("light");
    } else {
      setLightMode(false);
      document.body.classList.remove("light");
    }
  };

  return (
    <BrowserRouter>
      <div className="light-mode">
        <span>
          {/* <Icon.Globe /> */}
          <BootstrapSwitchButton
            checked={language}
            onlabel="EN"
            onstyle="active"
            offlabel="DE"
            offstyle="light-mode-switch"
            style="w-50"
            onChange={setLanguage}
          />
        </span>
        <div className="fix"></div>
      </div>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      <Switch>
        {language ? (
          <Route path="/" exact>
            <Home lightMode={lightMode} languageMenu="Start" />
          </Route>
        ) : (
          <Route path="/" exact>
            <HomeDe lightMode={lightMode} setLanguageMenu="Home" />
          </Route>
        )}

        {language ? (
          <Route path="/about" component={About} />
        ) : (
          <Route path="/about" component={AboutDe} />
        )}

        {language ? (
          <Route path="/resume" component={Resumes} />
        ) : (
          <Route path="/resume" component={ResumesDe} />
        )}

        <Route path="/portfolio" component={Portfolios} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
