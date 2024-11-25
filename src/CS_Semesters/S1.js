import React, { useEffect, useState } from "react";
import axios from "axios";

const S1 = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/PDF's/p1.pdf`; // Replace with your PDF file name
    link.download = "downloadedPDF.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#002244",
        minHeight: "100vh",
        color: "#333",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 style={{ fontWeight: "bold", color: "orange" }}>Download Past Papers</h2>
        <p style={{ fontSize: "1.1rem", color: "white" }}>
          Get access to past papers for better preparation and understanding.
        </p>
      </div>

      {/* Papers Section */}
      <div className="container">
        <div className="row">
          {[
            { name: "Calculus & Analytical Geometry" },
            { name: "Programming Fundamentals" },
            { name: "Islamic Studies" },
            { name: "ICT" },
            { name: "Applied Physics" },
            { name: "Functional English" },
          ].map((subject, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="card h-100 shadow"
                style={{
                  borderRadius: "10px",
                  backgroundColor:"white",
                  border: "none",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="card-body text-center" >
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "#007bff",
                      marginBottom: "1rem",
                    }}
                  >
                    {subject.name}
                  </h5>
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#007bff",
                      borderColor: "#007bff",
                      padding: "10px 20px",
                      fontWeight: "bold",
                    }}
                    onClick={downloadPDF}
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Styling */}
      <style jsx>{`
        .card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>

























      <div className="container">
        <UploadedPDF />
      </div>
    </>
  );
};









const UploadedPDF = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [allPDFs, setAllPDFs] = useState([]);

  useEffect(() => {
    getPDFs();
  }, []);

  const getPDFs = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files");
      console.log("Fetched files:", result.data.data);
      setAllPDFs(result.data.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const submitPDF = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Upload result:", result.data);
      if (result.data.status === "ok") {
        alert("Uploaded Successfully");
        // Fetch the updated list of files
        getPDFs();
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred during upload");
    }
  };

  const showPDF = (pdf) => {
    const encodedPdf = encodeURIComponent(pdf);
    window.open(
      `http://localhost:5000/files/${encodedPdf}`,
      "_blank",
      "noreferrer"
    );
  };

  const deletePDF = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-file/${id}`);
      alert("File deleted successfully");
      getPDFs(); // Refresh the list of PDFs
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("An error occurred while deleting the file");
    }
  };

  return (

    <div className="pdf" style={{backgroundColor:"blue"}}>
      <br />
      <br />
      <div className="formstyle">
        <h3>Upload PDF</h3>
        <form onSubmit={submitPDF}>
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="uploaded">
        <h3>Uploaded PDFs</h3>
        <div className="output-div">
          {allPDFs.length === 0
            ? "No PDFs uploaded"
            : allPDFs.map((data) => (
                <div className="inner-div" key={data._id}>
                  <h5>Title: {data.title}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => showPDF(data.pdf)}
                  >
                    Show PDF
                  </button>
                  <i
                    className="fas fa-times delete-icon"
                    onClick={() => deletePDF(data._id)}
                    title="Delete"
                  ></i>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default S1;
