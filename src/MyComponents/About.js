import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <>
  

    
      {/* Video Background Section */}
      <div className="video-bg-container" >
        <video autoPlay muted loop className="bg-video">
          <source
            src="https://cdn.pixabay.com/video/2020/09/08/49375-459436752_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="content text-center" data-aos="fade-up" >
          <h1 className="display-4 mb-4">Our Mission</h1>
          <p className="lead">
            Our website aims to make education accessible and empowering,
            providing support to individuals on their learning journeys. We
            believe that everyone deserves access to high-quality education, and
            thus, our mission is to offer resources and guidance that are
            accessible to all. We aspire to build a vibrant learning community
            where members can share their experiences, support each other, and
            strive to innovate in the field of education. Our goal is to create
            a positive global impact in education by connecting diverse
            audiences and establishing an inclusive and comprehensive learning
            platform.
          </p>
        </div>
      </div>
      {/* Content Section */}
      <div className="section-1" style={{backgroundColor:"#05004e"}}>
      <div className="container content-section" >
        <div className="row">
          {/* Image Column */}
          <div
            className="col-md-6 image-column"
            data-aos="fade-right" // AOS animation effect
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/11/20/09/08/books-1842306_960_720.jpg"
              className="img-fluid"
              alt="Building Image"
            />
          </div>

          {/* Content Column */}
          <div className="col-md-6" data-aos="fade-left">
            {" "}
            {/* AOS animation */}
            <br />
            <br /> <br />
            <div>
              <h1 style={{color:"rgb(255, 140, 0)", textAlign:"center"}}>How we do it?</h1>
              <p>
                The Student Resource HUB provides easy access to educational
                materials with secure authentication, efficient resource
                management, and personalized search. Our platform includes a
                chatbot, career guidance, quizzes, and a feedback system to
                enhance learning. Users can upload and contribute resources,
                ensuring quality through moderation. We continuously update the
                platform to meet students' evolving needs and support their
                academic success.
              </p>
              <br />

              <ul>
                <li>
                  User Authentication: Secure account management and access
                  control.
                </li>
                <li>
                  Resource Management: Organizing and updating educational
                  materials.
                </li>
                <li>
                  Search and Recommendation: Personalized search and content
                  suggestions.
                </li>
                <li>
                  Feedback and Ratings: Collecting user feedback for ongoing
                  improvement.
                </li>
                <li>
                  Uploading: Users can contribute and moderate educational
                  materials.
                </li>
              </ul>
            </div>
            <div className="mt-4" >
              <h3 style={{color:"rgb(255, 140, 0)"}}>Why we do it?</h3>
              <p>
                Our mission is to make education accessible and empowering for
                everyone. Our platform offers diverse resources and tools to
                support student learning and academic growth, aiming to
                positively impact education globally. We are dedicated to
                enhancing the academic experience by providing an inclusive,
                user-friendly platform that connects students with valuable
                resources. We focus on continuous improvement and user feedback
                to create an engaging and effective learning environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container" >
        <div className="container my-5">
          <div
            className="row mission-section align-items-center"
            data-aos="zoom-in"
          >
            <div className="col-md-6">
              <div className="mission-content">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-activity"></i>
                  <h2 className="ms-2 mission-heading">
                    Our Mission of Cultivating Creativity!!
                  </h2>
                </div>
                <p className="mission-text">
                  Empowering creativity by fostering an environment where bold
                  ideas thrive and transformative solutions are born. Nurturing
                  talent to drive meaningful progress and success.
                </p>
                {/* <button className="custom-btn mt-3">Learn More</button> */}
              </div>
            </div>
            <div className="col-md-6 mission-image text-center">
              <img
                src="https://cdn.pixabay.com/photo/2018/09/17/12/46/business-idea-3683781_1280.jpg"
                alt="Mission Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default About;
