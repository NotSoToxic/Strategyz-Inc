import React from "react";
import buisnessData from '../../../../data/data.json';
import { Link } from 'react-router-dom';


export const Buisnesstransformation = (props) => {
    return (
    //   <div>
    //     <h1>
    //       Comming Soon
    //     </h1>
    //   </div>
    // );

    
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
        

            {/* <h2 className="display-1 " id="b2">Transform Your Buisness with our IT Consulting</h2>
            <h1 className="display-1" id="headding">Maximize Efficency and Innovation </h1>

            <div className="sec1buttons">
            <div className="getStartedB">
            <button type="button" class="btn btn-lg" id="buisnessButton" href="#features">
              <a href="#features">Get Started</a> 
            </button>
            </div>
            <div className="learnMoreB">
            <button type="button" class="btn btn-lg" id="buisnessButton">Learn More</button>
            </div>
            </div> */}
            <div className="content-wrapper">
        <aside className="sidebar">
          <ul>
            <li><a href="#overview" className="page-scroll">Overview</a></li>
            <li><a href="#working" className="page-scroll">Capabilities</a></li>
            <li><a href="#clients" className="page-scroll">Next Steps</a></li>
          </ul>
        </aside>

        <main>
          <section id="overview">
            <h2>Overview</h2>
            <p>
            With a deep understanding of emerging trends and industry disruptions, we uncover untapped potential inside your business and help deliver new levels of productivity and growth. Our strategy consulting services help you align your team around a vision, activate your data and right size roadmaps and technology investments. Our co-creative, human-centric approach helps you realize additional value from existing and emerging technologies, improve decision making and problem solving and increase competitive advantage and long-term, sustainable impact.
            </p>
          </section>

          <section id="working">
            <h2>Capabilities</h2>
            <p>
              We bring together all the necessary technology and services to help our clients solve their business problems. Bringing together a diverse set of voices with new technology, we collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive big impact.
            </p>
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
            <div className="flex-container">
              <div className="box">
                <img src="img/StrategyzInfo_logo/ibm.png" alt="IBM logo" />
                <p>IBM</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/hexawareT logo.jpeg" alt="Hexaware logo" />
                <p>Hexaware Technologies</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/RangT logo.png" alt="Rang Technologies logo" />
                <p>Rang Technologies</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/HarjaiC logo.png" alt="Harjai Computers logo" />
                <p>Harjai Computers</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/fabH logo.png" alt="Fab Hotels logo" />
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