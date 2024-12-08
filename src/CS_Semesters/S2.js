import React from 'react';
import { FaBook, FaCode, FaPenFancy, FaChartPie, FaMicrochip } from "react-icons/fa";
const S2 = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/PDF's/p1.pdf`; // Replace with your PDF file name
    link.download = 'downloadedPDF.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container-fluid py-5" style={{ backgroundColor: "#002244" }}>
        <h1 className="text-center text-white mb-5">Download Past Papers</h1>
        <hr />
        <div className="row justify-content-center g-0">
          {/* Card 1 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card text-center p-4 shadow"
              style={{
                backgroundColor: "#fff5e6",
                borderRadius: "15px",
                transform: "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaBook className="display-1 text-warning mb-3" />
              <h5 className="card-title">Discrete Structure</h5>
              <button className="btn btn-warning mt-3" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card text-center p-4 shadow"
              style={{
                backgroundColor: "#e6f7ff",
                borderRadius: "15px",
                transform: "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaCode className="display-1 text-primary mb-3" />
              <h5 className="card-title">Object-Oriented Programming</h5>
              <button className="btn btn-primary mt-3" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card text-center p-4 shadow"
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: "15px",
                transform: "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaChartPie className="display-1 text-success mb-3" />
              <h5 className="card-title">Statistics</h5>
              <button className="btn btn-success mt-3" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card text-center p-4 shadow"
              style={{
                backgroundColor: "#ffe6e6",
                borderRadius: "15px",
                transform: "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaMicrochip className="display-1 text-danger mb-3" />
              <h5 className="card-title">Digital Logic and Design</h5>
              <button className="btn btn-danger mt-3" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card text-center p-4 shadow"
              style={{
                backgroundColor: "#fff0f5",
                borderRadius: "15px",
                transform: "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaPenFancy className="display-1 text-purple mb-3" />
              <h5 className="card-title">Comprehension & Presentation Skills</h5>
              <button className="btn btn-purple mt-3" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card text-center p-4 shadow"
              style={{
                backgroundColor: "#fff0f5",
                borderRadius: "15px",
                transform: "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <FaPenFancy className="display-1 text-purple mb-3" />
              <h5 className="card-title">Comprehension & Presentation Skills</h5>
              <button className="btn btn-purple mt-3" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>




    </>
  );
};

export default S2;
