import React from "react";
import { Link } from "react-router-dom";
import atsData from "../../../../data/data.json";
import useSmoothScrollWithOffset from "../../useSmoothScrollWithOffset";

export const Ats = (props) => {
  useSmoothScrollWithOffset(80);
    return (
        <div id="Ats">
          <div className="intro-bg">
            <div className="consulting-banner">
              <div className="overlay">
                <div className="consulting-banner-text">
                  <h1>Revolutionize Your Hiring Process with Our Advanced  ATS</h1>
                  <p id="consulting-para">
                  Streamline recruitment, improve candidate experience, and hire the best talent faster with our cutting-edge Applicant Tracking System.{" "}
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
                <h2>What is ATS ?</h2>
                <p>
                  “An Applicant Tracking System (ATS) is a software solution
                   designed to help businesses manage their recruitment process 
                   more efficiently. By automating and organizing various aspects of 
                   hiring, an ATS simplifies the workflow for recruiters and HR professionals,
                   ensuring that no potential candidate is overlooked. From posting job openings
                    to screening resumes and scheduling interviews,
                     an ATS covers all bases to help you find the perfect fit for your organization”
                </p>
              </section>
    
              <section id="working">
                <h2>Key Features</h2>
                <p>Powerful Features to Enhance Your Recruitment Process</p>    
                <div id="working-navbar-content">
                  <div className="job-container">
                    {atsData.ats.map((ats) => (
                      <div key={ats.domain} className="consulting-card">
                        <h4>{ats.title}</h4>
                        <p>{ats.description}</p>
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
                    {atsData.atsBenefits.map((atsBenefits) => (
                      <div key={atsBenefits.domain} className="consulting-card">
                        <h4>{atsBenefits.title}</h4>
                        <p>{atsBenefits.description}</p>
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