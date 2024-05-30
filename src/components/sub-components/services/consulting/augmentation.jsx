import React from "react";


export const Augmentation = (props) => {
  return (
    <div id="augmentation">
      <div className="intro-ag">
        <div className="augmentation-banner">
          <div className="overlay">
            <div className="augmentation-banner-text">
              <h1>HR and talent transformation consulting</h1>
              <p className="augmentation-banner-content">
                  Reimagine and modernize HR with AI at the core to deliver bettter business outcomes, and unlock employee and work potential
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <aside className="sidebar">
          <ul>
            <li>
              <a href="#overview" className="page-scroll">
                Overview
              </a>
            </li>
            <li>
              <a href="#working" className="page-scroll">
                Capabilities
              </a>
            </li>
            <li>
              <a href="#clients" className="page-scroll">
                Next Steps
              </a>
            </li>
          </ul>
        </aside>

        <main>
          <section id="overview">
            <h2>Overview</h2>
            <p>
              “As businesses face multiple challenges: evolving employee expectations, a global labor shortage, and a growing skills gap, HR leaders are being looked to for answers and leadership. HR leaders have a critical role in turning their organization into one that anticipates disruption and moves with agility to compete and win in uncertain times. HR organizations must evolve and adopt new ways of working between running-the-business and driving transformation initiatives. Doing so will enable them to balance strategy and execution.”
            </p>
          </section>

          <section id="working">
            <h2>Capabilities</h2>
            <p>
              We bring together all the necessary technology and services to
              help our clients solve their business problems. Bringing together
              a diverse set of voices with new technology, we collaborate
              closely, ideate freely and swiftly apply breakthrough innovations
              that drive big impact.
            </p>
          </section>

          <section id="clients">
            <h2>Next Steps</h2>
            <div className="flex-container">
              <div className="box">
                <img src="img/StrategyzInfo_logo/ibm.png" alt="IBM logo" />
                <p>IBM</p>
              </div>
              <div className="box">
                <img
                  src="img/StrategyzInfo_logo/hexawareT logo.jpeg"
                  alt="Hexaware logo"
                />
                <p>Hexaware Technologies</p>
              </div>
              <div className="box">
                <img
                  src="img/StrategyzInfo_logo/RangT logo.png"
                  alt="Rang Technologies logo"
                />
                <p>Rang Technologies</p>
              </div>
              <div className="box">
                <img
                  src="img/StrategyzInfo_logo/HarjaiC logo.png"
                  alt="Harjai Computers logo"
                />
                <p>Harjai Computers</p>
              </div>
              <div className="box">
                <img
                  src="img/StrategyzInfo_logo/fabH logo.png"
                  alt="Fab Hotels logo"
                />
                <p>FabHotels</p>
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
