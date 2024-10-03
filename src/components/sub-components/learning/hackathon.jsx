import React from "react";
import hackathonData from "../../../data/data.json";
import { Link } from "react-router-dom";
import useSmoothScrollWithOffset from "../useSmoothScrollWithOffset";

export const Hackathon = (props) => {
  useSmoothScrollWithOffset(80);
  return (
    <div id="stratathon">
      <div className="stratathon-bg">
        <div className="stratathon-banner">
          <div className="overlay">
            <div className="stratathon-banner-text">
              <h1>Strategyz presents Stratathon</h1>
              <p className="stratathon-banner-content">
                Stratathon is a high-energy hackathon designed to bring together
                strategic minds and innovative thinkers. Join us to solve
                real-world challenges collaborate with like-minded individuals,
                and showcase your talents!
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
                {" "}
                Phases
              </a>
            </li>
            <li>
              <a href="#perks" className="page-scroll">
                Perks
              </a>
            </li>
            <li>
              <a href="#benefits" className="page-scroll">
                Benefits
              </a>
            </li>
            <li>
              <a href="#clients" className="page-scroll">
                {" "}
                Next Steps
              </a>
            </li>
          </ul>
        </aside>

        <main>
          <section id="overview">
            <h2>Objective and Scope</h2>
            <h4>Objective</h4>
            <p>
              The Objective of Stratathon is to bring together strategic minds
              and innovative thinkers to collaboratively solve real-world
              challenges. This hackathon aims to inspire creativity, enhance
              strategic and technical skills,and provide carrer development
              opportunities throungh mentorship, and networking with industry
              leaders.
            </p>
            <h4>Scope</h4>
            <p>
              Stratothon spans a comprehensive 4-months program to design to
              guide participants from the initial idea stage to the final
              project review. Throughout the event, participants will refine
              their ideas,receive expert feedback, and showcase their completed
              projects to a panel of judges, with opportunities for placement
              assistance and professional development for top-performing teams.
            </p>
          </section>

          <section id="working">
            <h2>Stratathon Phases</h2>
            <div id="working-navbar-content">
              <div className="job-container">
                {hackathonData.hackathon.map((hackathon) => (
                  <div key={hackathon.domain} className="stratathon-card">
                    <h4>{hackathon.title}</h4>
                    <h6>{hackathon.subtitle}</h6>
                    <hr></hr>
                    <p>
                      <b>{hackathon.description}</b>
                    </p>
                    <ul>
                      {hackathon.li1 && <li>{hackathon.li1}</li>}
                      {hackathon.li2 && <li>{hackathon.li2}</li>}
                      {hackathon.li3 && <li>{hackathon.li3}</li>}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Perks Starts */}
          <section id="perks">
            <h2>Perks</h2>
            <p>
              Explore the exclusive benefits and rewards you'll gain from
              participating.
            </p>
            <div className="job-container">
              <div className="stratathon-card">
                <h3>For The Top 3 Teams</h3>
                <hr></hr>
                <ul>
                  <li>
                    For First Position - <strong>INR 20,000</strong>
                  </li>
                  <li>
                    For Second Position - <strong>INR 10,000</strong>
                  </li>
                  <li>
                    For Third Position - <strong>INR 5,000</strong>
                  </li>
                </ul>
              </div>
              <div className="stratathon-card">
                <h3>For The Top 10 Teams</h3>
                <hr></hr>
                <ul>
                  <li>
                    <strong>Placement Assistance:</strong> you would be provided
                    with best in the industry, placement training and
                    assistance, opportunities to get placed with strategyz or
                    its fortune 500 clients.
                  </li>
                  <li>Professional Interview Preparation Sessions.</li>
                </ul>
              </div>
            </div>
            <div className="stratathon-card">
              <p>
                <strong>
                  For all participants, Certifications will be provided that
                  will enhance your resumes and help in building your career
                  profile.
                </strong>
              </p>
            </div>
          </section>
          {/* Perks End Here */}

          {/* Paticipation Benefits start */}
          <section id="benefits">
            <h2>Participation Benefits</h2>
            <div className="benefits-container">
              <div className="stratathon-card">
                <h3>Showcase Your Talent</h3>
                <ul>
                  <p>
                    <li>
                      Gain visibility and demonstrate your skills to a wide
                      audience.
                    </li>
                  </p>
                  <p>
                    <li>
                      Stand out by showcasing your unique approach to solving
                      real-world challenges.
                    </li>
                  </p>
                </ul>
              </div>
              <div className="stratathon-card">
                <h3>Learn from Experts</h3>
                <ul>
                  <p>
                    <li>
                      Receive valuable insights and knowledge from industry
                      professionals.
                    </li>
                  </p>
                  <p>
                    <li>
                      Participate in workshops and gain hands-on experience with
                      expert guidance.
                    </li>
                  </p>
                </ul>
              </div>
              <div className="stratathon-card">
                <h3>Win Prizes and Earn Participation Certificates</h3>
                <ul>
                  <p>
                    <li>
                      Compete for exciting rewards and receive official
                      recognition for your efforts.
                    </li>
                  </p>
                  <p>
                    <li>
                      Get a chance to secure exclusive prizes and awards for top
                      performers.
                    </li>
                  </p>
                </ul>
              </div>
              <div className="stratathon-card">
                <h3>Boost Your Career</h3>
                <ul>
                  <p>
                    <li>
                      Enhance your resume and open up new career opportunities
                      through participation.
                    </li>
                  </p>
                  <p>
                    <li>
                      Show potential employers your commitment to growth and
                      continuous learning.
                    </li>
                  </p>
                </ul>
              </div>
              <div className="stratathon-card">
                <h3>Network with Industry Leaders</h3>
                <ul>
                  <p>
                    <li>
                      Connect with key players in the industry and expand your
                      professional network.
                    </li>
                  </p>
                  <p>
                    <li>
                      Build relationships that can lead to future collaborations
                      and mentorships.
                    </li>
                  </p>
                </ul>
              </div>
            </div>
          </section>
          {/* Paticipation Benefits end */}
          <section id="clients">
            <h2>Next Steps</h2>
            <div className="job-container">
              <div className="stratathon-card">
                <h4>Get Started</h4>
                <p>
                  Don't miss out on this incredible opportunity to be a part of
                  an innovation extravaganza. Join us at Stratathon 2024 and
                  take your first step towards making a significant impact in
                  the world of strategy and innovation.
                </p>
                <Link to="/info">Contact Us</Link>
              </div>
              <div className="stratathon-card">
                <h4>Explore career opportunities</h4>
                <p>
                  Join our team of dedicated, innovative people who are bringing
                  positive change to work and the world.
                </p>
                <Link to="https://forms.office.com/r/Rnt13uqwph">
                  Apply now
                </Link>
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
