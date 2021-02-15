import axios from "axios";
import React, { useEffect, useState } from "react";
import ProgressiveImage from "react-progressive-image";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";

function About() {
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Über mich" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <ProgressiveImage
                  src={information.aboutImage}
                  placeholder="/images/about-image-placeholder.png"
                >
                  {(src) => <img src={src} alt="aboutimage" />}
                </ProgressiveImage>
                <span className="mi-about-image-icon"></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  Ich bin{" "}
                  <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  Ich bin ein autodidaktischer Front-End-Webentwickler, der
                  bereit ist, seine Karriere zu wechseln. Mit einem langen
                  Hintergrund in IT, Beruf und Hobby und einem starken
                  Lernwunsch habe ich mich entschlossen, in das Feld
                  einzusteigen. Mein Ziel ist es, in einem dynamischen und
                  professionellen Umfeld zu arbeiten, in dem ich das erworbene
                  Wissen nutzen und weiterentwickeln kann.
                </p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b className="listfix">Vollständiger Name</b>{" "}
                      {information.name}
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b className="listfix">Alter</b> {information.age} Jahre
                      alt
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b className="listfix">Handynummer</b> {information.phone}
                    </li>
                  )}
                  {!information.nationalityDe ? null : (
                    <li>
                      <b className="listfix">Staatsangehörigkeit</b>{" "}
                      {information.nationalityDe}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b className="listfix">Sprachen</b>{" "}
                      {information.languageDe}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b className="listfix">Email</b> {information.email}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b className="listfix">Adresse</b> {information.addressDe}
                    </li>
                  )}
                </ul>
                {/* <a href={information.cvfile} className="mi-button">
                  Download CV
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
