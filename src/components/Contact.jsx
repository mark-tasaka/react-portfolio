import React, { useState } from 'react';
import Header from './inc/Header';
import './css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <Header activePage="contact" />

      <main>
        <section className="contact-content">
          <div className="contact-header">
            <h1>Contact</h1>
          </div>
          
          <div className="contact-description">
            <p>
              An aspiring full-stack developer and BCIT Computer Systems Technology Graduate, with a 
              passion for graphics design. An experienced GitHub developer, with over 200 unique 
              GitHub repositories created; designed with PHP, jQuery, JavaScript, JSON, Java, C#, C++, 
              HTML5 and CSS3. A well-balanced educational background, with a BA from Simon Fraser 
              University, supplemented with the completion of six academic programs at BCIT: Graphic 
              Design Associate Certificate, Computer Systems Technology Diploma, Computer Systems 
              Certificate, Applied Web Design Associate Certificate, Applied Agile Development 
              Associate Certificate, and Applied Software Development Associate Certificate.
            </p>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email Address..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message..."
                  rows="6"
                  required
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="back-to-top">
          <a href="#">
            <span className="arrow">↑</span>
            <span>Back to Top</span>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Contact;