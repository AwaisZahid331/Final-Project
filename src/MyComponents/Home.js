import React from "react";
import "../App.css"; // Assuming you have some custom styles here
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="black-background">
        {" "}
        <br />
        <br />
        <div className="container text-white mt-4">
          <div className="row align-items-center">
            {/* Image on the left with glow effect */}
            <div className="col-md-6 text-center mb-4">
              <div className="shadow-background">
                <img
                  src="https://cdn.pixabay.com/photo/2024/02/09/15/22/ai-generated-8563260_1280.jpg"
                  alt="University Resources"
                  className="img-fluid rounded main-image glow-effect zoom-animation" // Updated class here
                />
              </div>
            </div>
            {/* Text on the right */}
            <div className="col-md-6">
              <h2 className="text-center hlo">
                Boost Your Studies with <span style={{color:"rgb(255,140,0)"}}>Student Resource Hub</span>
              </h2>
              <p className="text-justify">
                Discover a world of educational resources designed specifically
                for university students. Our platform offers an extensive
                collection of notes, PDFs, and specialized courses to help you
                excel in your studies.
              </p>
              <p className="text-justify">
                Whether you're looking to access the best study materials,
                upload your own notes, or interact with a smart chatbot for
                quick assistance, we provide all the tools you need for a
                successful academic journey.
              </p>
              <p className="text-justify">
                With exclusive content for UOS students and a user-friendly
                interface, our website is your ultimate partner in achieving
                your educational goals. Join us today and take your learning
                experience to the next level!
              </p>
              <div className="text-center">
                <NavLink to="/about">
                  {" "}
                  <button className="snn">Explore More</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>{" "}
        <hr />
        <br />
   

        <div class="container text-center py-5">
          <h2 class="mb-5">How It Works</h2>
          <div class="row">
            <div class="col-md-3">
              <div class="icon-container">
                <i class="bi bi-person-plus"></i>
              </div>
              <h4 class="mt-3">Sign Up</h4>
              <p>
                Montes vivamus curae quisque et primis pretium nullam. Congue
                dis convalis eget ipsum cubilia ante.
              </p>
            </div>
            <div class="col-md-3">
              <div class="icon-container">
                <i class="bi bi-pc-display-horizontal"></i>
              </div>
              <h4 class="mt-3">Get Access</h4>
              <p>Access to question bank of over 2000 questions.</p>
            </div>
            <div class="col-md-3">
              <div class="icon-container">
                <i class="bi bi-patch-question"></i>
              </div>
              <h4 class="mt-3">Practice Questions</h4>
              <p>
                Prepare for the MLA exam in multiple modes of revision and track
                your progress with your personalised dashboard.
              </p>
            </div>
            <div class="col-md-3">
              <div class="icon-container">
                <i class="bi bi-clipboard-check-fill"></i>
              </div>
              <h4 class="mt-3">Get Result</h4>
              <p>
                Compare your results with your peers with advanced analytics.
              </p>
            </div>
          </div>{" "}
          <br />
        </div>
      </div>

      {/* this is for  */}

      <section class="testimonial-section text-center">
        <div class="container">
            <h2 class="mb-4">What Our Students Are Saying</h2>
            <p class="mb-5">Hear directly from our students about their experiences and journeys at our university.</p>
            <div class="row">
                <div class="col-md-6">
                    <div class="card testimonial-card">
                        <div class="card-body">
                            <p>This university has provided me with the best learning experience. The faculty and resources are outstanding!"</p>
                            <p class="testimonial-author">Student</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card testimonial-card">
                        <div class="card-body">
                            <p>The diverse student community and opportunities for personal growth have made my time here unforgettable."</p>
                            <p class="testimonial-author">Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  );
};

export default Home;
