import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <>
    <div className="pdf">
   <br /><br />
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
  </>
  );
};

export default UploadedPDF;
