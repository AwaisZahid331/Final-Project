import React from 'react';
import { FaDownload, FaCalendarAlt } from 'react-icons/fa';

const DownloadTable = () => {
  const downloadPDF = (fileName) => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/PDFs/${fileName}`; // Replace with the actual path
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: "#e0f7fa", borderRadius: "10px", padding: "40px" }}>
      <h3 className="text-center mb-4" style={{ fontSize: "2.5rem", color: "#00796b", fontWeight: "600" }}>
        Download Past Papers by Year
      </h3>

      {/* Download Button Below Heading */}
      <div className="text-center mb-4">
        <button
          className="btn btn-outline-primary rounded-circle"
          onClick={() => downloadPDF('2022_paper.pdf')}
          style={{
            padding: '15px',
            fontSize: '1.5rem',
            borderRadius: '50%',
            backgroundColor: '#00796b',
            borderColor: '#00796b',
            color: '#fff',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#004d40"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#00796b"}
        >
          <FaDownload />
        </button>
      </div>

      <div className="table-container" style={{ overflowX: 'auto', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
        <table className="table table-hover text-center" style={{ backgroundColor: "#ffffff", borderRadius: '10px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: "#00796b", color: "#fff", fontSize: '1.2rem', fontWeight: '500' }}>
              <th style={{ width: '100%' }}>Year</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {/* Year 2022 */}
            <tr
              className="table-row"
              style={{
                transition: 'all 0.2s ease',
                borderBottom: '2px solid #eeeeee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px',
              }}
            >
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarAlt className="me-2" style={{ color: "#00796b" }} />
                2022
              </td>
              <td>
                <button
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => downloadPDF('2022_paper.pdf')}
                  style={{
                    padding: '10px',
                    fontSize: '1.2rem',
                    borderRadius: '50%',
                    backgroundColor: '#00796b',
                    borderColor: '#00796b',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#004d40"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#00796b"}
                >
                  <FaDownload />
                </button>
              </td>
            </tr>

            {/* Year 2021 */}
            <tr
              className="table-row"
              style={{
                transition: 'all 0.2s ease',
                borderBottom: '2px solid #eeeeee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px',
              }}
            >
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarAlt className="me-2" style={{ color: "#28a745" }} />
                2021
              </td>
              <td>
                <button
                  className="btn btn-outline-success rounded-circle"
                  onClick={() => downloadPDF('2021_paper.pdf')}
                  style={{
                    padding: '10px',
                    fontSize: '1.2rem',
                    borderRadius: '50%',
                    backgroundColor: '#28a745',
                    borderColor: '#28a745',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#1c7430"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#28a745"}
                >
                  <FaDownload />
                </button>
              </td>
            </tr>

            {/* Year 2020 */}
            <tr
              className="table-row"
              style={{
                transition: 'all 0.2s ease',
                borderBottom: '2px solid #eeeeee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px',
              }}
            >
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarAlt className="me-2" style={{ color: "#dc3545" }} />
                2020
              </td>
              <td>
                <button
                  className="btn btn-outline-danger rounded-circle"
                  onClick={() => downloadPDF('2020_paper.pdf')}
                  style={{
                    padding: '10px',
                    fontSize: '1.2rem',
                    borderRadius: '50%',
                    backgroundColor: '#dc3545',
                    borderColor: '#dc3545',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#bd2130"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#dc3545"}
                >
                  <FaDownload />
                </button>
              </td>
            </tr>

            {/* Year 2019 */}
            <tr
              className="table-row"
              style={{
                transition: 'all 0.2s ease',
                borderBottom: '2px solid #eeeeee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px',
              }}
            >
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarAlt className="me-4" style={{ color: "#ffc107" }} />
                2019
              </td>
              <td>
                <button
                  className="btn btn-outline-warning rounded-circle"
                  onClick={() => downloadPDF('2019_paper.pdf')}
                  style={{
                    padding: '10px',
                    fontSize: '1.2rem',
                    borderRadius: '50%',
                    backgroundColor: '#ffc107',
                    borderColor: '#ffc107',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#e0a800"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#ffc107"}
                >
                  <FaDownload />
                </button>
              </td>
            </tr>

            {/* Year 2018 */}
            <tr
              className="table-row"
              style={{
                transition: 'all 0.2s ease',
                borderBottom: '2px solid #eeeeee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px',
              }}
            >
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarAlt className="me-1" style={{ color: "#17a2b8" }} />
                2018
              </td>
              <td>
                <button
                  className="btn btn-outline-info rounded-circle"
                  onClick={() => downloadPDF('2018_paper.pdf')}
                  style={{
                    padding: '10px',
                    fontSize: '1.2rem',
                    borderRadius: '50%',
                    backgroundColor: '#17a2b8',
                    borderColor: '#17a2b8',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#138496"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#17a2b8"}
                >
                  <FaDownload />
                </button>
              </td>
            </tr>
            <tr
              className="table-row"
              style={{
                transition: 'all 0.2s ease',
                borderBottom: '2px solid #eeeeee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px',
              }}
            >
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarAlt className="me-1" style={{ color: "#17a2b8" }} />
                2018
              </td>
              <td>
                <button
                  className="btn btn-outline-info rounded-circle"
                  onClick={() => downloadPDF('2018_paper.pdf')}
                  style={{
                    padding: '10px',
                    fontSize: '1.2rem',
                    borderRadius: '50%',
                    backgroundColor: '#17a2b8',
                    borderColor: '#17a2b8',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#138496"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#17a2b8"}
                >
                  <FaDownload />
                </button>
              </td>
            </tr>
            <tr
              className="table-row"
              style={{
                transition: 'all 0.2s ease',
                borderBottom: '2px solid #eeeeee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px',
              }}
            >
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarAlt className="me-1" style={{ color: "#17a2b8" }} />
                2018
              </td>
              <td>
                <button
                  className="btn btn-outline-info rounded-circle"
                  onClick={() => downloadPDF('2018_paper.pdf')}
                  style={{
                    padding: '10px',
                    fontSize: '1.2rem',
                    borderRadius: '50%',
                    backgroundColor: '#17a2b8',
                    borderColor: '#17a2b8',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#138496"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#17a2b8"}
                >
                  <FaDownload />
                </button>
              </td>
            </tr>
            <tr
              className="table-row"
              style={{
                transition: 'all 0.2s ease',
                borderBottom: '2px solid #eeeeee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px',
              }}
            >
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarAlt className="me-1" style={{ color: "#17a2b8" }} />
                2018
              </td>
              <td>
                <button
                  className="btn btn-outline-info rounded-circle"
                  onClick={() => downloadPDF('2018_paper.pdf')}
                  style={{
                    padding: '10px',
                    fontSize: '1.2rem',
                    borderRadius: '50%',
                    backgroundColor: '#17a2b8',
                    borderColor: '#17a2b8',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#138496"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#17a2b8"}
                >
                  <FaDownload />
                </button>
              </td>
            </tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DownloadTable;
