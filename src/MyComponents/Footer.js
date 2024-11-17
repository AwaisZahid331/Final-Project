import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section">
          <img
            src="
           https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkE3Bnfn7ET7OqFzFof6KpaPenWVBtbNSaA&s
            " 
            alt="University of Sargodha Logo"
            className="footer-logo"
            style={{width:"auto", borderRadius:"15px", marginLeft:"30px"}}
          />
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <hr className="footer-underline" />
          <strong>
            University Road <br />
            Sargodha <br />
            Punjab, Pakistan 40100
          </strong>
          <strong>
            <strong>Phone:</strong> 
            <a href="tel:+924811186711"> 048 111 867 111</a> <br />
            <strong>Email:</strong> 
            <a href="mailto:info@uos.edu.pk">info@uos.edu.pk</a> <br />
            <strong>Admissions:</strong> 
            <a href="mailto:admissions@uos.edu.pk">admissions@uos.edu.pk</a>
          </strong>
        </div>

        {/* Important Links Section */}
        <div className="footer-section">
          <h4>Important Links</h4>
          <hr className="footer-underline" />
          <ul>
            <li><a href="https://uos.edu.pk/phone-directory" target="_blank" rel="noopener noreferrer">Phone Directory</a></li>
            <li><a href="https://uos.edu.pk/tenders" target="_blank" rel="noopener noreferrer">Tenders</a></li>
            <li><a href="https://uos.edu.pk/dress-code" target="_blank" rel="noopener noreferrer">Dress Code</a></li>
            <li><a href="https://uos.edu.pk/complaint-cell" target="_blank" rel="noopener noreferrer">PHEC Complaint Cell</a></li>
            <li><a href="https://www.politicalmap.com.pk/" target="_blank" rel="noopener noreferrer">Political Map of Pakistan</a></li>
            <li><a href="https://uos.edu.pk/library" target="_blank" rel="noopener noreferrer">Wazir Agha Library</a></li>
          </ul>
        </div>

        {/* RTI Section */}
        <div className="footer-section">
          <h4>RTI (Right to Information)</h4>
          <hr className="footer-underline" />
          <ul>
            <li><a href="https://uos.edu.pk/rti-act" target="_blank" rel="noopener noreferrer">RTI Act</a></li>
            <li><a href="https://uos.edu.pk/uos-ordinance-2002" target="_blank" rel="noopener noreferrer">UOS Ordinance 2002</a></li>
            <li><a href="https://uos.edu.pk/service-statutes" target="_blank" rel="noopener noreferrer">Service Statutes 2006</a></li>
            <li><a href="https://uos.edu.pk/consultancy-agreement" target="_blank" rel="noopener noreferrer">Consultancy Agreement Main Campus</a></li>
            <li><a href="https://uos.edu.pk/budget" target="_blank" rel="noopener noreferrer">Budget</a></li>
            <li><a href="https://uos.edu.pk/faqs" target="_blank" rel="noopener noreferrer">FAQs</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        Copyrights © All Rights Reserved 2024, University of Sargodha. Powered
        By <strong>UOS Team</strong>.
      </div>
    </footer>
  );
};

export default Footer;
