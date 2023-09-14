import React from "react";
import axios from "axios";
import { useState } from "react";
const Classify = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/classify/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Image Classification App</h1>
      <input type="file" onChange={handleFileChange} />
      <button className="rounded border-2 border-black" onClick={handleUpload}>Upload & Classify</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default Classify;
