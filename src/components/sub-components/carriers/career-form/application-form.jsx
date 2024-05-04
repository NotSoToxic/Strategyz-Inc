/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";

export const Applicationform = (props) => {
  const resumeInputRef = useRef(null);
  const fileNameRef = useRef(null);

  useEffect(() => {
    const resumeInput = resumeInputRef.current;
    const fileName = fileNameRef.current;

    const handleFileChange = () => {
      const file = resumeInput.files[0];
      if (file) {
        fileName.textContent = file.name;
      } else {
        fileName.textContent = '';
      }
    };

    resumeInput.addEventListener('change', handleFileChange);

    return () => {
      resumeInput.removeEventListener('change', handleFileChange);
    };
  }, []);

  return (
    <div id="application-form">
      <h1>Application Form</h1>
      <div id="application-form-container">
        <h2>Apply for the job</h2>
        <div className="app-form-group">
          <div className="app-card">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="app-form-control"
              placeholder="Name"
              required
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="app-card">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              className="app-form-control"
              placeholder="Email"
              required
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="app-card">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="app-form-control"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className="app-form-group">
          <div className="app-card">
            <label htmlFor="jobRole">Job Role*</label>
            <input
              type="text"
              id="jobRole"
              name="jobRole"
              className="app-form-control"
              placeholder="Job Role"
              required
            />
          </div>
          <div className="app-card">
            <label htmlFor="portfolio">Your Portfolio link</label>
            <input
              type="text"
              id="portfolio"
              name="portfolio"
              className="app-form-control"
              placeholder="Portfolio link"
            />
          </div>
          <div className="app-card">
            <label>Experience Level</label>
            <div className="radio-group">
            <div className="radio-column">
              <div>
                <input
                  type="radio"
                  id="fresher"
                  name="experienceLevel"
                  value="fresher"
                  required
                />
                <label htmlFor="fresher">Fresher</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="junior"
                  name="experienceLevel"
                  value="junior"
                  required
                />
                <label htmlFor="junior">Junior</label>
              </div>
            </div>
            <div className="radio-column">
              <div>
                <input
                  type="radio"
                  id="mid"
                  name="experienceLevel"
                  value="mid"
                  required
                />
                <label htmlFor="mid">Mid-level</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="senior"
                  name="experienceLevel"
                  value="senior"
                  required
                />
                <label htmlFor="senior">Senior</label>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="app-form-group">
          <div className="app-card">
            <label htmlFor="resume">Upload Resume*</label>
            <div className="resume-upload">
              <label htmlFor="resume-input" className="upload-btn">
                <span className="upload-text">Upload</span>
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="file-input"
                accept=".pdf,.doc,.docx"
                required
                ref={resumeInputRef}
              />
              <span className="file-name" ref={fileNameRef}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};