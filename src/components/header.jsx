import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro-bg">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                We're STRATEGYZ
                  <span></span>
                </h1>
                
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Contact Sales
                </a>{" "}
              </div>
            </div>
            
          </div>
          <div className="slogan">
                <p >{props.data ? props.data.paragraph : "Loading"}</p>
                <p >{props.data ? props.data.paragraph2 : "Loading"}</p>
                </div>
        </div>
      </div>
      </div>
    </header>
  );
};
