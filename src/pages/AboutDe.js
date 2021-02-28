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
                  Ich bin ein Front-End-Webentwickler.
                  <br></br>
                  Ich habe eine IT- Berufsausbildung erfolgreich absolviert und
                  konnte langjährige Berufserfahrung in der IT sammeln.
                  <br></br>
                  Ich würde gerne meinen derzeitigen Beruf wechseln und zurück
                  in die IT gehen um mein Hobby zum Beruf zu machen.
                  <br></br>
                  Mein Ziel ist es, in einem dynamischen und professionellen
                  Umfeld zu arbeiten, indem ich das erworbene Wissen nutzen und
                  weiterentwickeln kann.
                </p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b className="listfix">Name</b> {information.name}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b className="listfix">Adresse</b> {information.addressDe}
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b className="listfix">Handynummer</b>{" "}
                      {information.phoneDe}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b className="listfix">Email</b> {information.email}
                    </li>
                  )}
                  {!information.nationalityDe ? null : (
                    <li>
                      <b className="listfix">Staatsangehörigkeit</b>{" "}
                      {information.nationalityDe}
                    </li>
                  )}
                  {!information.birthDe ? null : (
                    <li>
                      <b className="listfix">Geburtsdaten</b>{" "}
                      {information.birthDe}
                    </li>
                  )}

                  {!information.language ? null : (
                    <li>
                      <b className="listfix">Sprachen</b>{" "}
                      {information.languageDe}
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
