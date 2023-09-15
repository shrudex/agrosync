import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Classify.css";

const Classify = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    // setFile('image');
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/imageupload",
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
    <div className="classify-main bg-green-300 w-full h-full overflow-hidden">
      <div className="classify-main-p">
        <div className="text-classify">
          <h1>CROP DISEASE DETECTION</h1>
          <input type="file" onChange={handleFileChange} name="image" />
          <button
            className="rounded border-2 border-black"
            onClick={handleUpload}
          >
            Upload & Classify
          </button>

          {result && <p>Result: {result}</p>}
        </div>
        <img src="" alt="Image Loading" />
      </div>
    </div>
  );
};

export default Classify;
