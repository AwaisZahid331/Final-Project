import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <>
      <div className="container-fluid py-5" style={{ backgroundColor: "#05004e" }}>
        <div className="container">
          <h3 className="working-hours text-white text-center mb-4">
            Feel free to contact us anytime during our working days for assistance.
          </h3>
          <hr className="bg-white" />

          <div className="row">
            <div className="col-md-8">
              <form
                action="https://formspree.io/f/mqkvopnw"
                method="POST"
                className="contact-form bg-light p-4 rounded shadow"
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your e-mail"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  SEND A MESSAGE
                </button>
              </form>
            </div>

            <div className="col-md-4">
              <div className="contact-info text-white mt-4">
                {/* Row for image and text side by side */}
                <div className="d-flex align-items-center">
                  <div className="col-4">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Awais Zahid, Full Stack Developer"
                      className="img-fluid rounded-circle"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div className="col-8">
                    <h5 className="text-center">Awais Zahid</h5>
                    <p>
                      Full Stack Developer and Computer Science graduate from
                      the University of Sargodha (UOS).
                    </p>
                  </div>
                </div>
                {/* Column for address below */}
                <hr className="bg-white" />
                <div className="contact-details text-center">
                  <p>
                    <strong>Our address</strong>
                  </p>
                  <p>
                    Zamindar College and University of Sargodha Campus J32H+M49،
                    ﺑﮭﻤﺒﺮ ﺭﻭﮂ, Islam Nagar, Gujrat, Punjab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.1691270015463!2d74.0752742744777!3d32.60167599292819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f052823b7abb9%3A0x667167070447ac43!2sZamindar%20College%20and%20University%20of%20Sargodha%20Campus!5e0!3m2!1sen!2s!4v1725181757074!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map location of Zamindar College and University of Sargodha"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
