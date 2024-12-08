import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBook, FaCode, FaQuran, FaDesktop, FaAtom, FaLanguage } from "react-icons/fa";
const S1 = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/PDF's/p1.pdf`; // Replace with your PDF file name
    link.download = "downloadedPDF.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("PDF downloading ...")
  };


  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          background: "#002244",
          minHeight: "100vh",
        }}
      >
        <h1 className="text-center text-white mb-5">Download Past Papers</h1>
        <div className="container">
          <div className="row g-2">
            {/* Card 1 */}
            <div className="col-md-4">
              <div
                className="card text-center p-4 shadow"
                style={{
                  backgroundColor: "#fff5e6",
                  borderRadius: "15px",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                  height:"70%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <FaBook className="display-1 text-warning mb-3" />
                <h5 className="card-title">Calculus & Analytical Geometry</h5>
                <button className="btn btn-warning mt-3" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div
                className="card text-center p-4 shadow"
                style={{
                  backgroundColor: "#e6f7ff",
                  borderRadius: "15px",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                  height:"70%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <FaCode className="display-1 text-primary mb-3" />
                <h5 className="card-title">Programming Fundamentals</h5>
                <button className="btn btn-primary mt-3" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div
                className="card text-center p-4 shadow"
                style={{
                  backgroundColor: "#f0f0f0",
                  borderRadius: "15px",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                  height:"70%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <FaQuran className="display-1 text-success mb-3" />
                <h5 className="card-title">Islamic Studies</h5>
                <button className="btn btn-success mt-3" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-4">
              <div
                className="card text-center p-4 shadow"
                style={{
                  backgroundColor: "#ffe6e6",
                  borderRadius: "15px",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                  height:"70%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <FaDesktop className="display-1 text-danger mb-3" />
                <h5 className="card-title">Information Technology</h5>
                <button className="btn btn-danger mt-3" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-4">
              <div
                className="card text-center p-4 shadow"
                style={{
                  backgroundColor: "#e6ffe6",
                  borderRadius: "15px",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                  height:"70%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <FaAtom className="display-1 text-info mb-3" />
                <h5 className="card-title">Applied Physics</h5>
                <button className="btn btn-info mt-3" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-md-4">
              <div
                className="card text-center p-4 shadow"
                style={{
                  backgroundColor: "#fff5f5",
                  borderRadius: "15px",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                  height:"70%",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <FaLanguage className="display-1 text-purple mb-3" />
                <h5 className="card-title">Functional English</h5>
                <button className="btn btn-purple mt-3" onClick={downloadPDF}>
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
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

    <div className="pdf" style={{ backgroundColor: "blue" }}>
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
