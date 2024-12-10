import React from 'react';
import { FaDownload, FaCalendarAlt } from 'react-icons/fa';

const S1 = () => {


  const downloadPDF = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl; // Use the raw GitHub URL for the file
    link.download = fileUrl.split('/').pop();  // This extracts the filename from the URL for downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container-fluid " style={{ background: "linear-gradient(135deg, #141E30, #243B55)", padding: "40px" }}>
      <h3
        className="text-center mb-4"
        style={{
          fontSize: "2.5rem",
          color: "white",
          fontWeight: "600",
          animation: "fadeIn 2s ease-in-out",
          fontFamily: "sans-serif",
        }}
      >
       Explore 1st Semester Past Papers Sorted by Year
      </h3>


      {/* Download Button Below Heading */}


      <div
        className="table-container"
        style={{
          height: "400px", // Set a fixed height for the container
          overflowY: "auto", // Enable vertical scrolling
          overflowX: "auto",
          borderRadius: "10px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          scrollBehavior: "smooth", // Smooth scrolling effect
        }}
      >
        <style>
          {`
    /* Custom scrollbar styling */
    .table-container::-webkit-scrollbar {
      width: 12px; /* Scrollbar width */
    }
    .table-container::-webkit-scrollbar-track {
      background: linear-gradient(to bottom, #e0f7fa, #ffffff); /* Gradient background */
      border-radius: 10px;
    }
    .table-container::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #00796b, #004d40); /* Gradient scrollbar */
      border-radius: 10px;
      border: 2px solid #ffffff; /* Adds a border around the scrollbar */
    }
    .table-container::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #004d40, #00251a); /* Darker gradient on hover */
    }

    /* Scrollbar animation */
    @keyframes scroll-highlight {
      0%, 100% {
        background: #00796b;
      }
      50% {
        background: #004d40;
      }
    }
    .table-container::-webkit-scrollbar-thumb {
      animation: scroll-highlight 2s infinite; /* Smooth color transition */
    }
    `}
        </style>
        <table
          className="table table-hover text-center"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#00796b",
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: "500",
              }}
            >
              <th style={{ width: "70%", fontFamily:"sans-serif" }}>Year</th>
              <th style={{ width: "30%" ,fontFamily:"sans-serif"}}>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="table-row"
              style={{
                transition: "all 0.2s ease",
                borderBottom: "2px solid #eeeeee",
                cursor: "pointer",
                height: "60px",
              }}
            >
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  fontFamily:"sans-serif"
                }}
              >
                <FaCalendarAlt className="me-2" style={{ color: "blue" }} />
                Programming Fandamental
              </td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => downloadPDF("https://raw.githubusercontent.com/AwaisZahid331/Data-pdf/main/FA%20CS%202019.pdf")}
                  style={{
                    padding: "10px",
                    fontSize: "1.2rem",
                    borderRadius: "50%",
                    backgroundColor: "#00796b",
                    borderColor: "#00796b",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#004d40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#00796b")
                  }
                >
                  <FaDownload />
                </button>

              </td>
            </tr>
            <tr
              className="table-row"
              style={{
                transition: "all 0.2s ease",
                borderBottom: "2px solid #eeeeee",
                cursor: "pointer",
                height: "60px",
              }}
            >
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  fontFamily:"sans-serif"
                }}
              >
                <FaCalendarAlt className="me-2" style={{ color: "blue" }} />
                Information Communication Technology
              </td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => downloadPDF("https://raw.githubusercontent.com/AwaisZahid331/Data-pdf/main/PP%20CS%202017.pdf")}
                  style={{
                    padding: "10px",
                    fontSize: "1.2rem",
                    borderRadius: "50%",
                    backgroundColor: "#00796b",
                    borderColor: "#00796b",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#004d40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#00796b")
                  }
                >
                  <FaDownload />
                </button>

              </td>
            </tr>
            <tr
              className="table-row"
              style={{
                transition: "all 0.2s ease",
                borderBottom: "2px solid #eeeeee",
                cursor: "pointer",
                height: "60px",
              }}
            >
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  fontFamily:"sans-serif"
                }}
              >
                <FaCalendarAlt className="me-2" style={{ color: "blue" }} />
                Applied Physics
              </td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => downloadPDF("https://raw.githubusercontent.com/AwaisZahid331/Data-pdf/main/PP%20CS%202018.pdf")}
                  style={{
                    padding: "10px",
                    fontSize: "1.2rem",
                    borderRadius: "50%",
                    backgroundColor: "#00796b",
                    borderColor: "#00796b",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#004d40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#00796b")
                  }
                >
                  <FaDownload />
                </button>

              </td>
            </tr>
            <tr
              className="table-row"
              style={{
                transition: "all 0.2s ease",
                borderBottom: "2px solid #eeeeee",
                cursor: "pointer",
                height: "60px",
              }}
            >
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  fontFamily:"sans-serif"
                }}
              >
                <FaCalendarAlt className="me-2" style={{ color: "blue" }} />
                Calculus I
              </td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => downloadPDF("https://raw.githubusercontent.com/AwaisZahid331/Data-pdf/main/PP%20CS%202018.pdf")}
                  style={{
                    padding: "10px",
                    fontSize: "1.2rem",
                    borderRadius: "50%",
                    backgroundColor: "#00796b",
                    borderColor: "#00796b",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#004d40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#00796b")
                  }
                >
                  <FaDownload />
                </button>

              </td>
            </tr>
            <tr
              className="table-row"
              style={{
                transition: "all 0.2s ease",
                borderBottom: "2px solid #eeeeee",
                cursor: "pointer",
                height: "60px",
              }}
            >
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  fontFamily:"sans-serif"
                }}
              >
                <FaCalendarAlt className="me-2" style={{ color: "blue" }} />
                Functional English
              </td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => downloadPDF("https://raw.githubusercontent.com/AwaisZahid331/Data-pdf/main/PP%20CS%202018.pdf")}
                  style={{
                    padding: "10px",
                    fontSize: "1.2rem",
                    borderRadius: "50%",
                    backgroundColor: "#00796b",
                    borderColor: "#00796b",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#004d40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#00796b")
                  }
                >
                  <FaDownload />
                </button>

              </td>
            </tr>
            <tr
              className="table-row"
              style={{
                transition: "all 0.2s ease",
                borderBottom: "2px solid #eeeeee",
                cursor: "pointer",
                height: "60px",
              }}
            >
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  fontFamily:"sans-serif"
                }}
              >
                <FaCalendarAlt className="me-2" style={{ color: "blue" }} />
                Islamic Studies
              </td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => downloadPDF("https://raw.githubusercontent.com/AwaisZahid331/Data-pdf/main/PP%20CS%202018.pdf")}
                  style={{
                    padding: "10px",
                    fontSize: "1.2rem",
                    borderRadius: "50%",
                    backgroundColor: "#00796b",
                    borderColor: "#00796b",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#004d40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#00796b")
                  }
                >
                  <FaDownload />
                </button>

              </td>
            </tr>
            <tr
              className="table-row"
              style={{
                transition: "all 0.2s ease",
                borderBottom: "2px solid #eeeeee",
                cursor: "pointer",
                height: "60px",
              }}
            >
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <FaCalendarAlt className="me-2" style={{ color: "blue" }} />
                2018
              </td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => downloadPDF("https://raw.githubusercontent.com/AwaisZahid331/Data-pdf/main/PP%20CS%202018.pdf")}
                  style={{
                    padding: "10px",
                    fontSize: "1.2rem",
                    borderRadius: "50%",
                    backgroundColor: "#00796b",
                    borderColor: "#00796b",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#004d40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#00796b")
                  }
                >
                  <FaDownload />
                </button>

              </td>
            </tr>


            {/* Add more rows here as needed */}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default S1;

