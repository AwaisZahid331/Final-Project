import React, { useState, useEffect } from "react";
import "../App.css"; // Assuming you have custom styles here
import { NavLink } from "react-router-dom";
import Loader from "./loader"; // Import the loader component
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import ReactFullpage from 'react-fullpage'; // Import React Fullpage

const Home = () => {
  const [loading, setLoading] = useState(true); // State to manage loader visibility
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
    });

    const hasSeenLoader = localStorage.getItem("hasSeenLoader");

    if (hasSeenLoader) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasSeenLoader", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  // Dynamic Greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      setGreeting("Good Morning! Start your day with the best study tips.");
    } else if (hour >= 13 && hour < 18) {
      setGreeting("Good Afternoon! Keep up the good work.");
    } else if (hour >= 19 && hour <= 23) {
      setGreeting("Good Evening! Take a break and refresh yourself.");
    } else {
      setGreeting("Good Evening! Take a break and refresh yourself.");
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ReactFullpage
      scrollingSpeed={1000} /* Options here */
      sectionsColor={['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']}
      anchors={['firstPage', 'secondPage', 'thirdPage', 'fourthPage']}
      menu='#myMenu'
      navigation
      navigationPosition='right'
      navigationTooltips={['First', 'Second', 'Third', 'Fourth']}
      showActiveTooltip
      controlArrows={false}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage">
            <div className="section black-background fade-in">
              <div className="container">
                <h2 className="hloo" data-aos="fade-up">{greeting}</h2>
              </div>

              <div className="container text-white mt-4 slide-up">
                <div className="row align-items-center">
                  {/* Image on the left with zoom effect */}
                  <div className="col-md-6 text-center mb-4">
                    <div className="shadow-background">
                      <img
                        src="https://media.gettyimages.com/id/1426606515/video/library-background-learning-books-and-studying-at-school-university-and-college-for-exam-test.jpg?s=480x480&k=20&c=xt-UdIJSoNWWbN-o1LsvegZbGWQWFDN1zl0wMU_X49E="
                        alt="University Resources"
                        className="img-fluid rounded main-image zoom-effect"
                        data-aos="zoom-in"
                      />
                    </div>
                  </div>
                  {/* Text on the right with fade-in effect */}
                  <div className="col-md-6 fade-in">
                    <h2 className="text-center hlo glow-text" data-aos="fade-up">
                      Boost Your Studies with{" "}
                      <span style={{ color: "rgb(255,140,0)" }}>
                        Student Resource Hub
                      </span>
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
                        <button className="snn pulse-button">Explore More</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <br />

              <div className="container text-center py-5 slide-up">
                <h2 className="mb-5 fade-in">How It Works</h2>
                <div className="row">
                  <div className="col-md-3 zoom-on-hover">
                    <div className="icon-container">
                      <i className="bi bi-person-plus"></i>
                    </div>
                    <h4 className="mt-3">Sign Up</h4>
                    <p>
                      Montes vivamus curae quisque et primis pretium nullam. Congue
                      dis convalis eget ipsum cubilia ante.
                    </p>
                  </div>
                  <div className="col-md-3 zoom-on-hover">
                    <div className="icon-container">
                      <i className="bi bi-pc-display-horizontal"></i>
                    </div>
                    <h4 className="mt-3">Get Access</h4>
                    <p>Access to question bank of over 2000 questions.</p>
                  </div>
                  <div className="col-md-3 zoom-on-hover">
                    <div className="icon-container">
                      <i className="bi bi-patch-question"></i>
                    </div>
                    <h4 className="mt-3">Practice Questions</h4>
                    <p>
                      Prepare for the MLA exam in multiple modes of revision and track
                      your progress with your personalised dashboard.
                    </p>
                  </div>
                  <div className="col-md-3 zoom-on-hover">
                    <div className="icon-container">
                      <i className="bi bi-clipboard-check-fill"></i>
                    </div>
                    <h4 className="mt-3">Get Result</h4>
                    <p>
                      Compare your results with your peers with advanced analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section className="testimonial-section text-center fade-in">
              <div className="container">
                <h2 className="mb-4">What Our Students Are Saying</h2>
                <p className="mb-5">
                  Hear directly from our students about their experiences and journeys
                  at our university.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card testimonial-card zoom-effect" data-aos="fade-up">
                      <div className="card-body">
                        <p>
                          This university has provided me with the best learning
                          experience. The faculty and resources are outstanding!
                        </p>
                        <p className="testimonial-author">Student</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card testimonial-card zoom-effect" data-aos="fade-up">
                      <div className="card-body">
                        <p>
                          The diverse student community and opportunities for personal
                          growth have made my time here unforgettable.
                        </p>
                        <p className="testimonial-author">Student</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      }}
    />
  );
};

export default Home;
