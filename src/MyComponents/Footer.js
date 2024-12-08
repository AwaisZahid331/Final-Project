import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3 mb-4 mb-md-0 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkE3Bnfn7ET7OqFzFof6KpaPenWVBtbNSaA&s"
              alt="University of Sargodha Logo"
              className="img-fluidd "
              style={{ maxWidth: "280px", borderRadius:"50%" }}
            />
          </div>

          {/* Contact Us Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <hr className="bg-light" />
            <address>
              <strong>University Road</strong> <br />
              Sargodha <br />
              Punjab, Pakistan 40100 <br />
              <br />
              <strong>Phone:</strong>{" "}
              <a href="tel:+924811186711" className="text-light text-decoration-none">
                048 111 867 111
              </a>
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:info@uos.edu.pk" className="text-light text-decoration-none">
                info@uos.edu.pk
              </a>
              <br />
              <strong>Admissions:</strong>{" "}
              <a href="mailto:admissions@uos.edu.pk" className="text-light text-decoration-none">
                admissions@uos.edu.pk
              </a>
            </address>
          </div>

          {/* Important Links Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Important Links</h5>
            <hr className="bg-light" />
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://uos.edu.pk/phone-directory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Phone Directory
                </a>
              </li>
              <li>
                <a
                  href="https://uos.edu.pk/tenders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Tenders
                </a>
              </li>
              <li>
                <a
                  href="https://uos.edu.pk/dress-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Dress Code
                </a>
              </li>
              <li>
                <a
                  href="https://uos.edu.pk/complaint-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  PHEC Complaint Cell
                </a>
              </li>
              <li>
                <a
                  href="https://www.politicalmap.com.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Political Map of Pakistan
                </a>
              </li>
              <li>
                <a
                  href="https://uos.edu.pk/library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Wazir Agha Library
                </a>
              </li>
            </ul>
          </div>

          {/* RTI Section */}
          <div className="col-md-3">
            <h5>RTI (Right to Information)</h5>
            <hr className="bg-light" />
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://uos.edu.pk/rti-act"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  RTI Act
                </a>
              </li>
              <li>
                <a
                  href="https://uos.edu.pk/uos-ordinance-2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  UOS Ordinance 2002
                </a>
              </li>
              <li>
                <a
                  href="https://uos.edu.pk/service-statutes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Service Statutes 2006
                </a>
              </li>
              <li>
                <a
                  href="https://uos.edu.pk/consultancy-agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Consultancy Agreement Main Campus
                </a>
              </li>
              <li>
                <a
                  href="https://uos.edu.pk/budget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Budget
                </a>
              </li>
              <li>
                <a
                  href="https://uos.edu.pk/faqs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p>
            Copyrights © All Rights Reserved 2024, University of Sargodha. Powered By{" "}
            <strong>UOS Team</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
