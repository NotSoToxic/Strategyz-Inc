import React from "react";
import consultingData from "../../../../data/data.json";
import { Link } from "react-router-dom";
export const Consulting = (props) => {
  return (
    <div id="consulting">
      <div className="intro-bg">
        <div className="consulting-banner">
          <div className="overlay">
            <div className="consulting-banner-text">
              <h1>Technology Consulting Services</h1>
              <p id="consulting-para">
                Discover how forward-thinking IT companies are using Technology
                consulting to manage IT autonomously{" "}
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
              “STRATEGYZ Consulting delivers high-quality and innovative IT
              solutions to meet our client’s business needs, including hybrid
              cloud management services with technology solutions that enable
              their business objectives and accelerate the cloud journey,
              unleashing the full potential of their technology investments.”
            </p>
          </section>

          <section id="working">
            <h2>Capabilities</h2>
            {/* <p>
              We bring together all the necessary technology and services to help our clients solve their business problems. Bringing together a diverse set of voices with new technology, we collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive big impact.
            </p> */}

            <div id="working-navbar-content">
              <div className="job-container">
                {consultingData.consulting.map((consulting) => (
                  <div key={consulting.domain} className="consulting-card">
                    <h4>{consulting.title}</h4>
                    <p>{consulting.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="clients">
            <h2>Next Steps</h2>
            <div className="job-container">
              <div className="consulting-card">
                <h4>Get Started</h4>
                <p>
                  Connect with our diverse group of Strategyz experts that can
                  help you make your next big move.
                </p>
                <Link to="/info">Contact Us</Link>
              </div>
              <div className="consulting-card">
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
