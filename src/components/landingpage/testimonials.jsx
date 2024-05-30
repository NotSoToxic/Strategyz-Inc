import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="testimonial-section">
        <div className="section-title text-center testimonial-title">
          <h2>Team Insights</h2>
        </div>
        <div className="testimonial-group">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="team-section ">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-meta">
                      <p className="review-name"> {d.name}</p></div>
                    <div className="testimonial-content"><p> "{d.text}"</p> </div>
                    
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
