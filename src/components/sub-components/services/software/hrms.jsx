import React from "react";
import { Link } from "react-router-dom";
import hrmsData from "../../../../data/data.json";

export const Hrms = (props) => {
    return (
        <div id="Ats">
          <div className="intro-bg">
            <div className="consulting-banner">
              <div className="overlay">
                <div className="consulting-banner-text">
                  <h1>Human Resource Management System </h1>
                  <p id="consulting-para">
                  Optimize HR processes, enhance employee experience, and manage talent effectively with our advanced Human Resource Management System.{" "}
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
                  <a href="#clients" className="page-scroll">
                    Benefits
                  </a>
                </li>
              </ul>
            </aside>
    
            <main>
              <section id="overview">
                <h2>What is HRMS ?</h2>
                <p>
                  “A Human Resource Management System is an integrated
                   suite of software applications designed to manage and automate
                    various HR functions. From employee data management to
                    payroll, benefits administration, and performance evaluation,
                    an HRMS helps organizations efficiently handle all aspects
                    of human resources. By centralizing HR activities, an HRMS
                    ensures accuracy, compliance, and productivity within the HR
                    department”
                </p>
              </section>
    
              <section id="working">
                <h2>Key Features</h2>
                <p>Comprehensive Features for Modern HR Management</p>    
                <div id="working-navbar-content">
                  <div className="job-container">
                    {hrmsData.hrms.map((hrms) => (
                      <div key={hrms.domain} className="consulting-card">
                        <h4>{hrms.title}</h4>
                        <p>{hrms.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="working">
                <h2>Why Choose Our ATS ?</h2>
                <p>Powerful Features to Enhance Your Recruitment Process</p>    
                <div id="working-navbar-content">
                  <div className="job-container">
                    {hrmsData.hrmsBenefits.map((hrmsBenefits) => (
                      <div key={hrmsBenefits.domain} className="consulting-card">
                        <h4>{hrmsBenefits.title}</h4>
                        <p>{hrmsBenefits.description}</p>
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