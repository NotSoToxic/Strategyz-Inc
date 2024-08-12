import React, { useState } from "react";
import Working from "../../assets/images/working.png";
import banner from "../../assets/images/strategyzinfo-banner.png";
import useSmoothScrollWithOffset from "../useSmoothScrollWithOffset"; // Adjust the import path as needed

export const Strategyzinfo = (props) => {
  const [activeTab, setActiveTab] = useState("STRATEGYZConsulting");

  useSmoothScrollWithOffset(80); // Call the hook with the desired offset value

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Strategyz_info">
      <div className="banner">
        <img src={banner} className="banner-img" alt="banner" />
      </div>

      <div className="content-wrapper">
        <aside className="sidebar">
          <ul>
            <li><a href="#overview" className="page-scroll">Overview</a></li>
            <li><a href="#working" className="page-scroll">What does STRATEGYZ do?</a></li>
            <li><a href="#clients" className="page-scroll">Our Clients</a></li>
          </ul>
        </aside>

        <main>
          <section id="overview">
            <h2>Overview</h2>
            <p>
              “Our client's systems support modern society. In making them faster, more productive, and more secure, we don't just make business work better. We make the world work better.”
            </p>
          </section>

          <section id="working">
            <h2>What does STRATEGYZ do?</h2>
            <p>
              We bring together all the necessary technology and services to help our clients solve their business problems. Bringing together a diverse set of voices with new technology, we collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive big impact.
            </p>
            <img src={Working} alt="working" />
            <nav className="working-navbar">
              <ul>
                <li>
                {/* eslint-disable-next-line */}
                  <a
                    className={activeTab === "STRATEGYZConsulting" ? "active" : ""}
                    onClick={() => handleTabClick("STRATEGYZConsulting")}
                  >
                    STRATEGYZ Consulting
                  </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a
                    className={activeTab === "technologyConsulting" ? "active" : ""}
                    onClick={() => handleTabClick("technologyConsulting")}
                  >
                    STRATEGYZ Software
                  </a>
                </li>
              </ul>
            </nav>

            {activeTab === "STRATEGYZConsulting" && (
              <div id="working-navbar-content">
                <h3>STRATEGYZ Consulting</h3>
                <p>A trusted partner to clients that delivers meaningful impact faster.</p>
                <p>
                  STRATEGYZ Consulting is the only major global consultancy that sits within a technology company. With principles grounded in open innovation, collaboration and trust, we don't just advise. We work side by side to design, build, and operate high-performing businesses—together with our clients and partners.
                </p>
                <ul>
                  <li>Business Transformation</li>
                  <li>Technology Consulting</li>
                  <li>Staff Augmentation</li>
                </ul>
              </div>
            )}

            {activeTab === "technologyConsulting" && (
              <div id="working-navbar-content">
                <h3>STRATEGYZ Software</h3>
                <p>Enables clients to leverage the full power of softwares, with strong demand for open-source innovation.</p>
                <p>Three critical imperatives will determine a smarter, and more responsive business:</p>
                <ul>
                  <li>Applicant Tracking System (ATS)</li>
                  <li>Vendor Management System (VMS)</li>
                  <li>Human Resources Management System (HRMS)</li>
                </ul>
              </div>
            )}
          </section>

          <section id="clients">
            <h2>Clients</h2>
            <div className="flex-container">
              <div className="box">
                <img src="img/StrategyzInfo_logo/ibm.png" alt="IBM logo" />
                <p>IBM</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/amazon.png" alt="Hexaware logo" />
                <p>Amazon</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/flipkart.png" alt="Rang Technologies logo" />
                <p>Flipkart</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/hexawareT logo.jpeg" alt="Harjai Computers logo" />
                <p>Hexaware Technologies</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/glenmark.png" alt="Fab Hotels logo" />
                <p>Glenmark Pharmaceuticals</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Strategyz Inc. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
