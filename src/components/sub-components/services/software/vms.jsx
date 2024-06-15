import React from "react";
import vmsData from "../../../../data/data.json";
import { Link } from "react-router-dom";

export const Vms = (props) => {
  const keyfeatures = vmsData.filter((item) => item.domain === "keyfeatures");
  const benefits = vmsData.filter((item) => item.domain === "benefits");
  return (
    <div id="buisnesstransformation">
      <div className="buisness-bg">
        <div className="augmentation-banner">
          <div className="overlay">
            <div className="buisness-banner-text">
              <h1>Optimize Your Vendor Relationships with Our Robust VMS</h1>
              <p className="buisness-banner-content">
                Enhance visibility, control, and efficiency in your vendor
                management processes with our comprehensive Vendor Management
                System.
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
              “A Vendor Management System (VMS) is a software solution designed
              to streamline and automate the procurement and management of
              contingent workforce and service providers. A VMS provides a
              centralized platform to manage vendor relationships, track vendor
              performance, and ensure compliance with contractual agreements. By
              utilizing a VMS, organizations can achieve greater control over
              their external workforce and procurement processes.”
            </p>
          </section>

          <section id="working">
            <h2>Essential Features for Effective Vendor Management</h2>
            <div id="working-navbar-content">
              <div className="job-container">
                {keyfeatures.map((item) => (
                  <div key={item.title} className="buisness-card">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="working">
            <h2>Why Choose Our VMS?</h2>
            <div id="working-navbar-content">
              <div className="job-container">
                {benefits.map((item) => (
                  <div key={item.title} className="buisness-card">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
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
