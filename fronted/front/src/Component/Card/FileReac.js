import React, { useState } from "react";
import Button from "@mui/material/Button";
import mammoth from "mammoth";

const FileReac = () => {
  const [fileContent, setFileContent] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const arrayBuffer = e.target.result;

        mammoth.extractRawText({ arrayBuffer: arrayBuffer })
          .then(result => {
            setFileContent(result.value);
          })
          .catch(error => {
            console.error("Error reading file:", error);
          });
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleImportFile = () => {
    // Trigger file input click
    document.getElementById("file-input").click();
  };

  const handleDisplayContent = () => {
    console.log("File Content:", fileContent);
    // You can perform other actions with the file content here
  };

  return (
    <div>
      <div className="card-block">
        <p className="select-card">1. Please choose card Style</p>
        <Button onClick={handleDisplayContent} className="pers-btn">
          Display File Content
        </Button>
      </div>

      <div className="file-upload">
        {/* Hidden file input */}
        <input
          type="file"
          id="file-input"
          onChange={handleFileChange}
          style={{ display: "none" }}
          directory="E:\downloaddd\movies"
        />
        
        {/* Import button */}
        <Button onClick={handleImportFile} className="pers-btn">
          Import
        </Button>
      </div>

      {fileContent && (
        <div className="file-content">
          <h2>File Content:</h2>
          <pre>{fileContent}</pre>
        </div>
      )}
    </div>
  );
};

export default FileReac;
