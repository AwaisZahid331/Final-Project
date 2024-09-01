import React from "react";
import "../App.css"; // Assuming App.css contains your styles

const Contact = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.1691270015463!2d74.0752742744777!3d32.60167599292819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f052823b7abb9%3A0x667167070447ac43!2sZamindar%20College%20and%20University%20of%20Sargodha%20Campus!5e0!3m2!1sen!2s!4v1725181757074!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container mt-5">
        <h3 className="working-hours">
          Feel free to contact us anytime during our working days for
          assistance.
        </h3>{" "}
        <hr />
        <br />
        <div className="row">
          <div className="col-md-8">
            {/* action="https://formspree.io/f/mqkvopnw"
            method="POST"
            className="form" */}
            <form
              action="https://formspree.io/f/mqkvopnw"
              method="POST"
              className="contact-form"
            >
              <div className="form-row">
                <div className="form-group half-width">
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group half-width">
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Your e-mail"
                    required
                  />
                </div>
              </div>
              <div className="form-group full-width">
                <input
                  type="text"
                  name="subject"
                  className="input"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group full-width">
                <textarea
                  name="message"
                  className="input"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                SEND A MESSAGE
              </button>
            </form>
          </div>
          <div className="col-md-4">
            {" "}
            <br />
            <div className="contact-info">
              <img
                src="https://via.placeholder.com/150"
                alt="Contact Person"
                className="img-fluid"
              />
              <div className="contact-info-text text-center">
                <h5>Awais Zahid</h5>
                <p className="para">
                  Full Stack Developer and Computer Science graduate from the
                  University of Sargodha (UOS).
                </p>
              </div>
            </div>
            <hr />
            <div className="contact-details">
              <p>
                <strong>Our address</strong>
              </p>
              <p>
                Zamindar College and University of Sargodha Campus J32H+M49،
                ﺑﮭﻤﺒﺮ ﺭﻭﮈ, Islam Nagar, Gujrat, Punjab
              </p>{" "}
            </div>

              {/* this is for social media */}
              



          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default Contact;
