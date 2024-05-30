import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Info = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Send form data via EmailJS
        try {
            const templateParams = {
                name: formData.name,
                email: formData.email
            };

            await emailjs.send("service_bls8b29", "template_orhhobs", templateParams, "vl0pHnwumLTXBVgiS");
            setIsLoading(false);
            // Show download link after sending email
            document.getElementById("download-link").style.display = "block";
        } catch (error) {
            console.error("Error sending email", error);
            setIsLoading(false);
        }
    };

    return (
        <div id="info">
            <div className="heading">
            <p className="text">Please fill the following form</p>
            <p className="text2"> Download link will be available here after submission</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                {isLoading ? (
                    <button type="button" disabled>Loading...</button>
                ) : (
                    <button type="submit">Submit</button>
                )}
            </form>
            <div className="download-info">
            <a id="download-link" href="/img/Strategyz Corporate Presentation.pdf" download style={{ display: "none" }}>
                Download File
            </a>
            </div>
            <div id="logo-right">
                <p className="headline">STRATEGYZ</p>
                <p className="sub-headline">#LetsCreate</p>
                <p className="sub-headline">#StrongerTogether</p>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>
                        &copy; 2024 Strategyz Inc.
                        All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};
