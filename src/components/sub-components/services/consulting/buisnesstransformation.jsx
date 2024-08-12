import React from "react";
import buisnessData from '../../../../data/data.json';
import { Link } from 'react-router-dom';
import useSmoothScrollWithOffset from "../../useSmoothScrollWithOffset";


export const Buisnesstransformation = (props) => {
  useSmoothScrollWithOffset(80);
    return (
        <div id="buisnesstransformation">
          <div className="buisness-bg">
            <div className="buisness-banner">
              <div className="overlay">
                <div className="buisness-banner-text">
                  <h1>
                  Strategy consulting services
                  </h1>
                  <p className="buisness-banner-content">Grow and transform your business by reimagining your corporate strategy and how you work.</p>
                </div>
              </div>
            </div>      
          </div>
          <div className="content-wrapper">
          <aside className="sidebar">
          <ul>
            <li><a href="#overview" className="page-scroll" >Overview</a></li>
            <li><a href="#working" className="page-scroll">Capabilities</a></li>
            <li><a href="#clients" className="page-scroll">Next Steps</a></li>
          </ul>
        </aside>

        <main>
          <section id="overview">
            <h2>Overview</h2>
            <p>
            With a deep understanding of emerging trends and industry disruptions, we uncover untapped potential inside your business and help deliver new levels of productivity and growth. Our strategy consulting services help you align your team around a vision, activate your data and right size roadmaps and technology investments. Our co-creative, human-centric approach helps you realize additional value from existing and emerging technologies, improve decision making and problem solving and increase competitive advantage and long-term sustainable impact.
            </p>
          </section>

          <section id="working">
            <h2>Capabilities</h2>
            
            <div id="working-navbar-content" >
                                
                                <div className="job-container">
                                    {buisnessData.buisness.map((buisness) => (
                                        <div key={buisness.domain} className="buisness-card">
                                        <h4>{buisness.title}</h4>
                                        <p>{buisness.description}</p>
                                        
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
                <p>Connect with our diverse group of Strategyz
experts that can help you make your next
big move.

</p>
                <Link to="/info">Contact Us</Link>
              </div>
              <div className="buisness-card">
                <h4>Explore career opportunities</h4>
                <p>Join our team of dedicated, innovative
people who are bringing positive change to
work and the world.

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