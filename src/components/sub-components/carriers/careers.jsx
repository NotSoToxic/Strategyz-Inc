/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Testimonials } from "../../landingpage/testimonials";
import JsonData from "../../../data/data.json";
import icons from "../../assets/images/banner-img.png";
import jobData from '../../../data/data.json';
import { Link } from 'react-router-dom';
import banner from "../../assets/images/career-banner.jpg";
import useSmoothScrollWithOffset from "../useSmoothScrollWithOffset";



export const Careers = (props) => {
    const [activeTab, setActiveTab] = useState("Internaljobs");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useSmoothScrollWithOffset(80);

    

    return (
        <div id="careers">
            <div className="careers-top">
                <div className="banner">
                    {/* <img src={banner} className="banner-img" alt="banner"></img> */}
                    <div className="banner-left">
                        <h3>Define your career with STRATEGYZ</h3>
                        <p>What we stand for</p>
                        <ol>
                            <li><b>Individuality:</b> At STRATEGYZ, uniqueness is not only recognized—it's celebrated.</li>
                            <li><b>Curiosity:</b> Every STRATEGYZer is led by ourjoint passion for discovety.</li>
                            <li><b>Possibility:</b> When faced with challenges, we turn problems into possibilities.</li>
                        </ol>
                    </div>
                    <div className="banner-right">
                        
                        <p>At Strategyz, we are always looking for talented individuals to join our team. We offer a wide range of career opportunities across a variety of disciplines. Whether you are an experienced professional or a recent graduate, we have a place for you.</p>
                        <div className="banner-icons">
                        <img src={icons} className="banner-icons-img"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                <aside className="sidebar">
                    <ul>
                        <li><a href="#overview" className="page-scroll">Careers @STRATEGYZ</a></li>
                        <li><a href="#working" className="page-scroll">Apply</a></li>
                        <li><a href="#testimonials" className="page-scroll">Insights</a></li>
                    </ul>
                </aside>

                <main>
                    <section id="overview">
                        <h2>Careers @STRATEGYZ</h2>
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
