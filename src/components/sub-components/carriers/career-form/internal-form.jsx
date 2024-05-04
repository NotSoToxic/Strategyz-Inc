/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

export const InternalForm = (props) => {

    //form
  const formRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    const fields = ["name", "email", "phone", "role", "resume", "department"];
    for (const field of fields) {
      if (!formRef.current[field].value) {
        setErrorMessage("Please fill out all fields");
        return;
      }
    }
    // If all fields are filled, send the email
    emailjs
      .sendForm(
        "service_t2ujfb6","template_w2wnukt", e.target, "ZIOaFVaBQHwXz4G5N")
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Email sent successfully!");
          formRef.current.reset(); // Reset form fields
          setErrorMessage("");
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Failed to send email. Please try again later.");
          setSuccessMessage("");
        }
      );
  };
  return(
  <div id="internal-job">
  <div id="internal-form">
            <div>
              <h2>Internal Applicant Form</h2>
            </div>
            <form name="" validate onSubmit={handleSubmit} ref={formRef}>
                <div className="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder="Email"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                </div>
                <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      class="form-control"
                      placeholder="Phone Number"
                      required
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
            <div className="col-md-6">
            <div className="form-group">
              <select
                id="department"
                name="department"
                className="form-control"
                required
              >
                <option value="">Select Department</option>
                <option value="Department 1">Internal Opening</option>
                <option value="Department 2">Client opening</option>
              </select>
              <p className="help-block text-danger"></p>
            </div>
          </div>
                <div className="col-md-6">
            <div className="form-group">
              <select
                id="role"
                name="role"
                className="form-control"
                required
              >
               <option value="">-Area of Interest-</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Sales">Sales</option>
                <option value="Consulting">Consulting</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Design and UX">Design and UX</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Research">Research</option>
                <option value="Supply Chain">Supply Chain</option>
                <option value="Operations">Operations</option>
                <option value="Other">Other</option>
              </select>
              <p className="help-block text-danger"></p>
            </div>
          </div>

        <div class="col-md-6 offset-md-3">
        <div className="form-group">
          <input
            type="text"
            name="resume"
            id="resume"
            className="form-control"
            placeholder="Resume (Open Access Link)"
            required
          />
          <p className="help-block text-danger"></p>
        </div>
        </div>
        </div>
              <button type="submit" class="btn btn-lg">
                Send Message
              </button>
              {/* set css to error messages - remove this after css is set */}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
          </div>
          </div>
    )};
    
