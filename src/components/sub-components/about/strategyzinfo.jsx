import React, { useState} from "react";
import Working from "../../assets/images/working.png";

export const Strategyzinfo = (props) => {

    const [activeTab, setActiveTab] = useState("STRATEGYZConsulting");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    
    
    

    return (
        
        <div className="Strategyz_info">
      {/* <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatum ipsa quam eum assumenda aliquam, fugiat ab! Voluptates, atque possimus ut eligendi perspiciatis tenetur rem exercitationem dolorum debitis itaque ducimus.</p>
              
              
            </div>
            
          </div>
        </div>
      </div>
       
    </div> */}

      <div className="content-wrapper">
        <aside className="sidebar">
          
          <ul>
            <li><a href="#overview" className="page-scroll">Overview</a></li>
            <li><a href="#working" className="page-scroll">What does STRATEGYZ do?</a></li>
            <li><a href="#clients" className="page-scroll">Our Clients</a></li>
          </ul>
        </aside>

        <main >
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
                    STRATEGYZ Software
                  </a>
                </li>
                {/* <li>
                  <a
                    
                    className={activeTab === "staffAugmentation" ? "active" : ""}
                    onClick={() => handleTabClick("staffAugmentation")}
                  >
                    Staff Augmentation
                  </a>
                </li> */}
              </ul>
            </nav>
            
            {activeTab === "STRATEGYZConsulting" && (
              <div id="working-navbar-content">
                <h3>STRATEGYZ Consulting</h3>
                <p>
                A trusted partner to clients that delivers meaningful impact faster.</p>
                <p>
                STARETGYZ Consulting is the only major global consultancy that sits within a technology company. With principles grounded in open innovation, collaboration and trust, don't just advise. We work side by side to design, build, and operate high-performing businesses—together with our clients and partners. </p>
                <ul>
                    <li>Buisness Transformation</li>
                    <li>Technology Consulting</li>
                    <li>Staff Augmentation</li>
                </ul>
                
                
              </div>
            )}
            {activeTab === "technologyConsulting" && (
              <div id="working-navbar-content">
                <h3>STRATEGYZ Software</h3>
                <p>
                Enables clients to leverage the full power of software's, with strong demand for open-source innovation.
                </p>
                <p>
                Three critical imperatives will determine a smarter, more responsive business: </p>
                <ul>
                    <li>Applicant Tracking System (ATS)</li>
                    <li>Vendor Management System (VMS)</li>
                    <li>Human Resources Management System (HRMS)</li>
                </ul>
                
              </div>
            )}
            {/* {activeTab === "staffAugmentation" && (
              <div id="working-navbar-content">
                <h3>Staff Augmentation</h3>
                <p>
                  Our staff augmentation services provide you with the skilled
                  professionals you need to complement your in-house team.
                </p>
              </div>
            )} */}
            
            </section>
            <section id="clients">
                <h2>Clients</h2>
                  <div class="flex-container">
                    <div class="box">
                      <img src="img/ibm.png" alt="ibm logo"></img>
                    </div>
                    <div class="box">
                      <img src="img/ibm.png" alt="ibm logo"></img>
                    </div>
                    <div class="box">
                      <img src="img/ibm.png" alt="ibm logo"></img>
                    </div>
                    <div class="box">
                      <img src="img/ibm.png" alt="ibm logo"></img>
                    </div>
                    <div class="box">
                      <img src="img/ibm.png" alt="ibm logo"></img>
                    </div>
                    <div class="box">
                      <img src="img/ibm.png" alt="ibm logo"></img>
                    </div>
                    <div class="box">
                      <img src="img/ibm.png" alt="ibm logo"></img>
                    </div>
                    <div class="box">
                      <img src="img/ibm.png" alt="ibm logo"></img>
                    </div>
                    <div class="box">
                      <img src="img/ibm.png" alt="ibm logo"></img>
                    </div>
                    
                  </div>
                <p>
                Our clients include IBM, Hexaware, Harjai, Fabhotels, Frankfinn, and Tumbledry. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto voluptatum alias, molestias repellat distinctio nostrum dolore accusantium inventore id ipsum ullam. Consequatur id consequuntur nihil saepe facere amet nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt delectus dolores consectetur quo, doloribus blanditiis consequatur aliquid iste architecto fugit placeat vel explicabo ipsa quasi, accusantium, nostrum beatae eaque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati deserunt dolorem autem doloremque, odio delectus, id dicta quod dolores cum ut architecto distinctio assumenda nam, fugit mollitia blanditiis aliquid doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eveniet earum amet magni velit, quis, voluptatibus maxime numquam magnam voluptatum fugit expedita alias odit molestiae illum delectus aliquid, dicta adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem inventore quos, velit omnis illo labore dolorum nostrum rerum veniam architecto non. Odit, similique vero reiciendis velit alias a inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis sunt necessitatibus voluptas commodi esse fugit in, alias dolorum suscipit aliquid, enim est officia obcaecati iste delectus dolorem, provident soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum fugit ratione saepe velit, minima tempore animi quas odit ipsum eos distinctio dolorum vero maiores est laudantium alias magnam eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam numquam dolore, eveniet eius vero animi iusto adipisci? Nesciunt ut, officia repellendus animi, eum voluptatibus temporibus molestiae itaque hic incidunt doloremque.
                </p>
            </section>
            
        </main>
      </div>
    </div>
  );
};
