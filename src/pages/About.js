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
          <Sectiontitle title="About Me" />
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
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  I am a front-end web developer.<br></br> I have successfully
                  completed an IT apprenticeship and have many years of
                  professional experience in IT.<br></br> I would like to change
                  my current job and go back to IT to turn my hobby into a job.
                  <br></br>
                  My goal is to work in a dynamic and professional environment
                  in which I can use and develop the knowledge I have acquired.
                </p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Full Name</b> {information.name}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Address</b> {information.address}
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>Phone</b> {information.phone}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> {information.email}
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nationality</b> {information.nationality}
                    </li>
                  )}
                  {!information.birth ? null : (
                    <li>
                      <b>Date of birth</b> {information.birth}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Languages</b> {information.language}
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
