import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faUserCheck,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";



const resumes = [
  {
    id: 1,
    name: "Template 1",
    imgSrc: "https://via.placeholder.com/200", // Replace with actual image URL
    downloadLink: "/path-to-resume1.docx", // Replace with actual file URL
  },
  {
    id: 2,
    name: "Template 2",
    imgSrc: "https://via.placeholder.com/200", // Replace with actual image URL
    downloadLink: "/path-to-resume2.docx",
  },
  {
    id: 3,
    name: "Template 3",
    imgSrc: "https://via.placeholder.com/200", // Replace with actual image URL
    downloadLink: "/path-to-resume3.docx",
  },
  {
    id: 4,
    name: "Template 4",
    imgSrc: "https://via.placeholder.com/200", // Replace with actual image URL
    downloadLink: "/path-to-resume4.docx",
  },
];
const ResumeBuilder = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#132b50", minHeight: "100vh" }}
      >
        <br /> <br />
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="display-4" style={{ color: "orange" }}>
            Resume Builder
          </h1>
          <p className="lead" style={{ color: "white" }}>
            Create professional resumes effortlessly with our easy-to-use Resume
            Builder.
          </p>
        </div>
        {/* Features Section */}
        <div className="row d-flex justify-content-center text-center">
          {/* Card 1 */}
          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-lg border-0">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faPalette}
                  size="3x"
                  className="mb-3 text-primary"
                />
                <h5 className="card-title">Customizable Templates</h5>
                <p className="card-text">
                  Choose from various professional templates and tailor them to
                  your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-lg border-0">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faUserCheck}
                  size="3x"
                  className="mb-3 text-success"
                />
                <h5 className="card-title">Easy to Use</h5>
                <p className="card-text">
                  A user-friendly interface to make resume building hassle-free.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-lg border-0">
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faFileDownload}
                  size="3x"
                  className="mb-3 text-danger"
                />
                <h5 className="card-title">Downloadable</h5>
                <p className="card-text">
                  Download your resume in PDF format with just a click.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Call-to-Action Section */}
        <br />
        <div className="text-center mt-4">
          <Link
            to="https://resume-builder-8gsdictis-awaiszahid331s-projects.vercel.app/"
            className="btn btn-custom btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Resume Builder
          </Link>
        </div>{" "}
        <br />
      </div>
      <div className="row g-0 bg-body-secondary position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/15/15/49/resume-6627200_1280.jpg"
            className="w-100"
            alt="..."
          />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h2 className="mt-0 text-center">Professional Resume Templates</h2>
          <p>
            Build your resume effortlessly with{" "}
            <strong>StudentResourceHub's</strong> <br />
            collection of professional templates designed to meet diverse career
            needs.
          </p>
          <p>
            Whether you're a student, a fresher, or a professional, our
            templates ensure you present your skills and achievements in the
            best way possible.
          </p>
          <p>
            Select from a variety of customizable templates that are easy to
            use, visually appealing, and ATS-friendly, ensuring you stand out in
            the competitive job market.
          </p>
          <p>
            Start building your career today with{" "}
            <strong>StudentResourceHub's Resume</strong>
            <br /> Builder and take the first step toward your dream job!
          </p>
          <br />
          <div className="button-container">
            <button className="animated-btn">
              <a
                href="https://www.livecareer.co.uk/lp/india/lukindlp01.aspx?utm_source=google&utm_medium=sem&utm_campaign=20985335710&utm_term=resume%20templates%20free%20download&network=g&device=c&adposition=&adgroupid=157697775065&placement=&adid=704321250884&gad_source=1&gclid=CjwKCAiAjKu6BhAMEiwAx4UsAk4MplJtMm2UpFipAHV_LERlA8W1YOm-vmWwGYuS3IKJtlLxDIaAuRoC7UgQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
                className="stretched-link"
              >
                Find Templates
              </a>
            </button>
          </div>
        </div>
      </div>


      {/* this is fro resume  */}
      <div className="resume-gallery">
      {resumes.map((resume) => (
        <div key={resume.id} className="resume-card">
          <img src={resume.imgSrc} alt={resume.name} className="resume-image" />
          <div className="hover-overlay">
            <a
              href={resume.downloadLink}
              download
              className="download-btn"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ResumeBuilder;
