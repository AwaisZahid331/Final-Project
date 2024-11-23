import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles

const Help = () => {
  useEffect(() => {
    // Initialize AOS library
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        once: true, 
      });
    }
  }, []);

  return (
    <>
      <style>
        {`
          /* Custom Scrollbar for content section */
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background-color: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background-color: orange;
            border-radius: 10px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: darkorange;
          }

          /* Apply this style to the content container to make it scrollable */
          .scrollable-content {
            max-height: 70vh; /* Set a max-height for content */
            overflow-y: auto; /* Enable vertical scroll */
            padding-right: 10px; /* Add some space for the scrollbar */
          }
        `}
      </style>

      {/* Section: FAQ */}
      
      <div className="container-fluid" style={{ backgroundColor: "#05004e", color: "white" }}>
        <section className="p-4">
          <h3 className="text-center mb-4 pb-2 text-primary fw-bold" data-aos="zoom-in">FAQ</h3>
          <p className="text-center mb-5" data-aos="fade-up">
            <strong style={{ color: "orange" }}>Find the answers for the most frequently asked questions below</strong>
          </p>

          <div className="row "> {/* Apply 'scrollable-content' class to this div */}
            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
              <h6 className="mb-3 text-primary"><i className="bi bi-patch-question"></i> How can I access study materials like past papers or slides?</h6>
              <p>
                <strong><u>Absolutely!</u></strong> All study materials, including past papers, slides, and resources,
                are readily available for browsing and download directly from our website.
                Simply navigate to the relevant course or subject section to access the materials.
              </p>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
              <h6 className="mb-3 text-primary"><i className="bi bi-patch-question"></i> Are the study materials free to access and download?</h6>
              <p>
                <strong><u>Yes, it is</u></strong> all study materials on our website are free for access and download.
                We believe in making educational resources readily available to everyone without any charges.
              </p>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
              <h6 className="mb-3 text-primary"><i className="bi bi-patch-question"></i> Can I contribute study materials to the website?</h6>
              <p>
                <strong><u>Absolutely,</u></strong> We encourage contributions from the educational community.
                If you have study materials or resources you'd like to share,
                feel free to submit them through our dedicated submission portal.
              </p>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
              <h6 className="mb-3 text-primary"><i className="bi bi-patch-question"></i> How frequently are new study materials added to the website?</h6>
              <p>
                We strive to continually expand our collection. New study materials, including past papers, reference documents,
                and slides, are regularly added to ensure a comprehensive repository for learners.
              </p>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
              <h6 className="mb-3 text-primary"><i className="bi bi-patch-question"></i> Are there specific categories or subjects covered in the study materials?</h6>
              <p>
                <strong><u>Unfortunately no</u>.</strong> Our study materials cover a wide range of subjects and categories, including but not limited to sciences, humanities, languages, and more.
                You can explore these categories through our easy-to-navigate sections.
              </p>
            </div>

            <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
              <h6 className="mb-3 text-primary"><i className="bi bi-patch-question"></i> Can I request specific study materials that are not currently available?</h6>
              <p>
                <strong><u>Absolutely!</u></strong> If you're seeking particular study materials that are not currently on the website, feel free to send us your requests. We'll do our best to source and add them to our collection.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Help;
