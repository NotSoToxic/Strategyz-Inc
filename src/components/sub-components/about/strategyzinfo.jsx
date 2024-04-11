import React, { useState} from "react";
import Working from "../../assets/images/working.png";

export const Strategyzinfo = (props) => {

    const [activeTab, setActiveTab] = useState("STRATEGYZConsulting");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const getAnimationClass = (currentTab, nextTab) => {
        if (currentTab === "STRATEGYZConsulting") {
          return "tab-content-slide-in-right";
        } else if (currentTab === "technologyConsulting") {
            return nextTab === "STRATEGYZConsulting" ? "tab-content-slide-in-left" : "tab-content-slide-in-right";
        } else if (currentTab === "staffAugmentation") {
            return "tab-content-slide-in-left";
        }
      };

    return (
        
        <div className="Strategyz_info">
      <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
              
            </div>
            
          </div>
        </div>
      </div>
       
    </div>

      <div className="content-wrapper">
        <aside className="sidebar">
          
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#working">What does STRATEGYZ do?</a></li>
            <li><a href="#clients">Our Clients</a></li>
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
                We bring together all the necessary technology and services to help our clients solve their business problems. 
                </p>
                <img src={Working} alt="working" />
                <nav className="working-navbar">
                <ul>
                <li>
                  <a
                    
                    className={activeTab === "STRATEGYZConsulting" ? "active" : ""}
                    onClick={() => handleTabClick("STRATEGYZConsulting")}
                  >
                    STRATEGYZ Consulting
                  </a>
                </li>
                <li>
                  <a
                    
                    className={activeTab === "technologyConsulting" ? "active" : ""}
                    onClick={() => handleTabClick("technologyConsulting")}
                  >
                    Technology Consulting
                  </a>
                </li>
                <li>
                  <a
                    
                    className={activeTab === "staffAugmentation" ? "active" : ""}
                    onClick={() => handleTabClick("staffAugmentation")}
                  >
                    Staff Augmentation
                  </a>
                </li>
              </ul>
            </nav>
            <div
              className={`tab-content ${getAnimationClass(activeTab, activeTab)}`}
              
            >
            {activeTab === "STRATEGYZConsulting" && (
              <div>
                <h3>STRATEGYZ Consulting</h3>
                <p>
                A trusted partner to clients that delivers meaningful impact faster.</p>
                <p>
                STARETGYZ Consulting is the only major global consultancy that sits within a technology company. With principles grounded in open innovation, collaboration and trust, don't just advise. We work side by side to design, build, and operate high-performing businesses—together with our clients and partners. 
                <ul>
                    <li>Buisness Transformation</li>
                    <li>Technology Consulting</li>
                    <li>Staff Augmentation</li>
                </ul>
                </p>
                
              </div>
            )}
            {activeTab === "technologyConsulting" && (
              <div>
                <h3>STRATEGYZ Software</h3>
                <p>
                Enables clients to leverage the full power of software's, with strong demand for open-source innovation.
                </p>
                <p>
                Three critical imperatives will determine a smarter, more responsive business: 
                <ul>
                    <li>Applicant Tracking System (ATS)</li>
                    <li>Vendor Management System (VMS)</li>
                    <li>Human Resources Management System (HRMS)</li>
                </ul>
                </p>
              </div>
            )}
            {activeTab === "staffAugmentation" && (
              <div>
                <h3>Staff Augmentation</h3>
                <p>
                  Our staff augmentation services provide you with the skilled
                  professionals you need to complement your in-house team.
                </p>
              </div>
            )}
            </div>
            </section>
            <section id="clients">
                <h2>Clients</h2>
                <p>
                Our clients include IBM, Hexaware, Harjai, Fabhotels, Frankfinn, and Tumbledry.
                </p>
            </section>
            
        </main>
      </div>
    </div>
  );
};
