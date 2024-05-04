/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

export const internalForm = (props) => {

    //form
  const formRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    const fields = ["name", "email", "phone", "organisation", "message"];
    for (const field of fields) {
      if (!formRef.current[field].value) {
        setErrorMessage("Please fill out all fields");
        return;
      }
    }
    // If all fields are filled, send the email
    emailjs
      .sendForm(
        "service_ab57exb","template_bskri0w", e.target, "ZIOaFVaBQHwXz4G5N")
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
  <div id="location-form">
            <div>
              <h2>Applicant Form</h2>
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
                id="role"
                name="role"
                className="form-control"
                required
              >
                <option value="">Select Role</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
                <option value="Option 6">Option 6</option>
              </select>
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="file"
            name="resume"
            id="resume"
            className="form-control"
            required
          />
          <p className="help-block text-danger"></p>
        </div>
              <button type="submit" class="btn btn-lg">
                Send Message
              </button>
              {/* set css to error messages - remove this after css is set */}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
          </div>
    };
    
