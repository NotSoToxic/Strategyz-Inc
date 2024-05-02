import React from "react";
import careers from "../../assets/images/careers.jpg";

export const Careers = (props) => {
    return (
        <div id="careers">
            
            <div className="careers-top">
            <h1>
                Define Your Career with Strategyz
            </h1>
            <div className="career-banner">
            <div className="career-img">
            <img src={careers} alt="" className="careersimg"></img>
            </div>
            <div className="careers-top-content">
                <p>
                At Strategyz, we are always looking for talented individuals to join our team. We offer a wide range of career opportunities across a variety of disciplines. Whether you are an experienced professional or a recent graduate, we have a place for you. 
                </p>
            </div>
            </div>
            </div>
        </div>
    );
};