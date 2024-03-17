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
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <div className="margined">
                <p align = 'right'>{props.data ? props.data.paragraph : "Loading"}</p>
                <p align = 'right'>{props.data ? props.data.paragraph2 : "Loading"}</p>
                </div>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Contact Sales
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
};
