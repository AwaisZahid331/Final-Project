import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./UploadedPDF.css"; // Link the new CSS file

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
        getPDFs(); // Fetch the updated list of files
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
      const response = await axios.delete(`http://localhost:5000/delete-file/${id}`);
      if (response.status === 200) {
        alert("File deleted successfully");
        getPDFs(); // Refresh the list of PDFs after deletion
      } else {
        alert("Failed to delete file");
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("An error occurred while deleting the file");
    }
  };

  return (
    <>
    <br/>
    <br/>
    <div className="pdf-container">
      <header className="header">
        <img src="https://t4.ftcdn.net/jpg/03/06/22/13/360_F_306221381_hT611gyYaBpiuD0VCV33s74sdggUcSKA.jpg" alt="PDF Background" className="header-img" />
        <div className="header-content">
          <h1>PDF Upload & Viewer</h1>
          <p>Upload, view, and manage your Data easily!</p>
        </div>
      </header>

      <section className="upload-section">
        <div className="form-container">
          <h3>Upload a New PDF</h3>
          <form onSubmit={submitPDF}>
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter PDF title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
            <label className="form-label">Select PDF</label>
            <input
              type="file"
              className="form-control"
              accept="application/pdf"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="btn upload-btn" type="submit">
              Upload PDF
            </button>
          </form>
        </div>
      </section>

      <section className="pdf-list-section">
        <h3>Uploaded PDFs</h3>
        <div className="pdf-list">
          {allPDFs.length === 0 ? (
            <p className="no-pdf-text">No PDFs uploaded yet.</p>
          ) : (
            allPDFs.map((data) => (
              <div className="pdf-item" key={data._id}>
                <div className="pdf-info">
                  <h5 className="pdf-title">{data.title}</h5>
                  <button
                    className="btn view-btn"
                    onClick={() => showPDF(data.pdf)}
                    >
                    View PDF
                  </button>
                  <button
                    className="btn delete-btn"
                    onClick={() => deletePDF(data._id)}
                  >
                    Delete PDF
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
          </>
  );
};

export default UploadedPDF;
