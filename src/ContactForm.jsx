import React, { useState } from "react";
import "./contactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "", // Corrected the variable name
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you can add your form submission logic
  };

  return (
    <div className="background">
        <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>

        <div className="form-row">
          <div className="form-group">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>
        <div>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>Query Type:</label>
          <div className="form-row">
            {" "}
            {/* Fixed the typo from 'di' to 'div' */}
            <div className="radio-option">
              <label>
                <input
                  type="radio"
                  name="queryType" // Corrected the name to match the state variable
                  value="General Enquiry"
                  checked={formData.queryType === "General Enquiry"}
                  onChange={handleChange}
                />
                General Enquiry{" "}
                {/* Changed the label text to match the value */}
              </label>
            </div>
            <div className="radio-option">
              <label>
                <input
                  type="radio"
                  name="queryType" // Corrected the name to match the state variable
                  value="Support Request"
                  checked={formData.queryType === "Support Request"}
                  onChange={handleChange}
                />
                Support Request
              </label>
            </div>
          </div>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
