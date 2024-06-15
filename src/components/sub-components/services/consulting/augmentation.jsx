import React from "react";
import augumentData from "../../../../data/data.json";
import { Link } from "react-router-dom";
import useSmoothScrollWithOffset from "../../useSmoothScrollWithOffset";


export const Augmentation = (props) => {
  useSmoothScrollWithOffset(80);
  return (
    <div id="buisnesstransformation">
      <div className="buisness-bg">
        <div className="augmentation-banner">
          <div className="overlay">
            <div className="buisness-banner-text">
              <h1>HR and talent transformation consulting</h1>
              <p className="buisness-banner-content">
                Reimagine and modernize HR with AI at the core to deliver
                bettter business outcomes, and unlock employee and work
                potential
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
              “As businesses face multiple challenges: evolving employee
              expectations, a global labor shortage, and a growing skills gap,
              HR leaders are being looked to for answers and leadership. HR
              leaders have a critical role in turning their organization into
              one that anticipates disruption and moves with agility to compete
              and win in uncertain times. HR organizations must evolve and adopt
              new ways of working between running-the-business and driving
              transformation initiatives. Doing so will enable them to balance
              strategy and execution.”
            </p>
          </section>

          <section id="working">
            <h2>Capabilities</h2>
            {/* <p>
              We bring together all the necessary technology and services to
              help our clients solve their business problems. Bringing together
              a diverse set of voices with new technology, we collaborate
              closely, ideate freely and swiftly apply breakthrough innovations
              that drive big impact.
            </p> */}
            <div id="working-navbar-content">
              <div className="job-container">
                {augumentData.augument.map((augument) => (
                  <div key={augumentData.domain} className="buisness-card">
                    <h4>{augument.title}</h4>
                    <p>{augument.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="clients">
            <h2>Next Steps</h2>
            <div className="job-container">
              <div className="buisness-card">
                <h4>Get Started</h4>
                <p>
                  Connect with our diverse group of Strategyz experts that can
                  help you make your next big move.
                </p>
                <Link to="/info">Contact Us</Link>
              </div>
              <div className="buisness-card">
                <h4>Explore career opportunities</h4>
                <p>
                  Join our team of dedicated, innovative people who are bringing
                  positive change to work and the world.
                </p>
                <Link to="/careers">Apply now</Link>
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
