/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import careers from "../../assets/images/careers.jpg";
import { Testimonials } from "../../landingpage/testimonials";
import JsonData from "../../../data/data.json";

import jobData from '../../../data/data.json';
import { Link } from 'react-router-dom';



export const Careers = (props) => {
    const [activeTab, setActiveTab] = useState("Internaljobs");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    

    return (
        <div id="careers">
            <div className="careers-top">
                <h1>Define Your Career with Strategyz</h1>
                <div className="career-banner">
                    <div className="career-img">
                        <img src={careers} alt="" className="careersimg" />
                    </div>
                    <div className="careers-top-content">
                        <p>
                            At Strategyz, we are always looking for talented individuals to join our team. We offer a wide range of career opportunities across a variety of disciplines. Whether you are an experienced professional or a recent graduate, we have a place for you.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                <aside className="sidebar">
                    <ul>
                        <li><a href="#overview" className="page-scroll">What We Do</a></li>
                        <li><a href="#working" className="page-scroll">Apply</a></li>
                        <li><a href="#testimonials" className="page-scroll">Insights</a></li>
                    </ul>
                </aside>

                <main>
                    <section id="overview">
                        <h2>Overview</h2>
                        <p>Our curiosity runs deep. That's why we let you explore new paths at your own speed—making sure you're constantly learning. Discover the possibilities.</p>
                    </section>
                    <section id="working">
                        <h2>Apply your Skills</h2>
                        <p>Explore the areas of work where you can apply your unique skills.</p>
                        
                        <nav className="working-navbar">
                            <ul>
                                <li>
                                    <a
                                        className={activeTab === "Internaljobs" ? "active" : ""}
                                        onClick={() => handleTabClick("Internaljobs")}
                                    >
                                        Internal Openings
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className={activeTab === "Clientjobs" ? "active" : ""}
                                        onClick={() => handleTabClick("Clientjobs")}
                                    >
                                        Client Openings
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        
                        {activeTab === "Internaljobs" && (
                            <div id="working-navbar-content" >
                                <h3>Internal Openings</h3>
                                <div className="job-container">
                                    {jobData.jobs.map((job) => (
                                        <div key={job.domain} className="job-card">
                                        <h4>{job.title}</h4>
                                        <p>{job.description}</p>
                                        <Link to={`/job/${job.domain}`}>Apply now</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === "Clientjobs" && (
                            <div id="working-navbar-content">
                                <h3>Client Openings</h3>
                                <div class="job-container">
                                        
                                        {jobData.jobs.map((job) => (
                                        <div key={job.domain} className="job-card">
                                        <h4>{job.title}</h4>
                                        <p>{job.description}</p>
                                        <Link to={`/job/${job.domain}`}>Apply now</Link>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        )}
                    </section>
                    <section id="review">
                        <Testimonials data={JsonData.Testimonials} />
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
