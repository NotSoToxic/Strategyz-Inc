/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import emailjs from 'emailjs-com';

export const Applicationform = (props) => {
  const resumeInputRef = useRef(null);
  const fileNameRef = useRef(null);
  const formRef = useRef(null);

  const jobRoles = [
    "Software Engineer",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "UI/UX Designer",
    "Product Manager",
    "Project Manager",
  ];

  const departments = [
    "Client",
    "Internal"
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = 'SERVICE_ID';
    const templateId = 'TEMPLATE_ID';
    const userId = 'USER_ID';

    emailjs.sendForm(serviceId, templateId, formRef.current, userId)
      .then((result) => {
        console.log(result.text);
        // Reset form after successful submission
        formRef.current.reset();
      }, (error) => {
        console.error(error.text);
      });
  };

  return (<>
    <div id="application-form">
      <h1>Application Form</h1>
      <div id="application-form-container">
        <h2>Apply for the job</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
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
              <select
                id="jobRole"
                name="jobRole"
                className="app-form-control"
                required
              >
                <option value="">Select a job role</option>
                {jobRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div className="app-card">
              <label htmlFor="department">Department*</label>
              <select
                id="department"
                name="department"
                className="app-form-control"
                required
              >
                <option value="">Select a department</option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
            <div className="app-card">
              <label htmlFor="portfolio">Your Portfolio link</label>
              <input
                type="text"
                id="Portfolio"
                name="portfolio"
                className="app-form-control"
                placeholder="Portfolio link"
              />
            </div>
          </div>
          <div className="app-form-group side-by-side">
            <div className="app-card experience-level">
              <h3>Experience Level</h3>
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
            <div className="app-card">
              <label htmlFor="resume">Upload Resume*</label>
              <div className="resume-upload">
                <label htmlFor="resume-input" className="upload-btn">
                  <span className="upload-text">Upload</span>
                </label>
                <input
                  type="file"
                  id="resume-input"
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
          <div className="app-form-group">
            <div className="app-card full-width">
            <div className="submit-container">
                <button type="submit" className="submit-btn">
                  <span className="submit-text">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
    </div>
    <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Strategyz Inc.
              All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};