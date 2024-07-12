import React from "react";
import vmsData from "../../../../data/data.json";
import { Link } from "react-router-dom";
import useSmoothScrollWithOffset from "../../useSmoothScrollWithOffset";

export const Vms = (props) => {
  useSmoothScrollWithOffset(80);
  return (
    <div id="Vms">
          <div className="intro-bg">
            <div className="consulting-banner">
              <div className="overlay">
                <div className="consulting-banner-text">
                  <h1>Optimize Your Vendor Relationships with Our Robust VMS</h1>
                  <p id="consulting-para">
                  Enhance visibility, control, and efficiency in your vendor management processes with our comprehensive Vendor Management System.
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
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#working" className="page-scroll">
                    Key Features
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="page-scroll">
                    Benefits
                  </a>
                </li>
              </ul>
            </aside>
    
            <main>
              <section id="overview">
                <h2>Vendor Management System </h2>
                <p>
                  “A Vendor Management System (VMS) is a software solution designed to streamline and automate the procurement and management of contingent workforce and service providers. A VMS provides a centralized platform to manage vendor relationships, track vendor performance, and ensure compliance with contractual agreements. By utilizing a VMS, organizations can achieve greater control over their external workforce and procurement processes.”
                </p>
              </section>
    
              <section id="working">
                <h2>Key Features</h2>
                <p>Essential Features for Effective Vendor Management</p>    
                <div id="working-navbar-content">
                  <div className="job-container">
                    {vmsData.vms.map((vms) => (
                      <div key={vms.domain} className="consulting-card">
                        <h4>{vms.title}</h4>
                        <p>{vms.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="benefits">
                <h2>Why Choose Our VMS ?</h2>
                <p>Benefits of Effective Vendor Management</p>    
                <div id="working-navbar-content">
                  <div className="job-container">
                    {vmsData.vmsBenefits.map((vmsBenefits) => (
                      <div key={vmsBenefits.domain} className="consulting-card">
                        <h4>{vmsBenefits.title}</h4>
                        <p>{vmsBenefits.description}</p>
                      </div>
                    ))}
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
