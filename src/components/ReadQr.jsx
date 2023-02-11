import React from "react";
import { useState, useRef } from "react";
import QrScanner from "qr-scanner";

const ReadQr = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const fileRef = useRef();

  const handleClick = () => {
    fileRef.current.click();
    console.log(file);
  };
  const handleChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    const result = await QrScanner.scanImage(file);
    setData(result);

    if (result.match(/^(http|https):\/\/[^ "]+$/)) {
      window.open(result, "_blank");
    }
  };

  return (
    <div className="col-md-6 ">
      <div className="card m-3 justify-content-space-between">
        <h2 className="text-center mb-4">Scan QR Code</h2>

        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-success"
          >
            Scan Qr
          </button>
          <input
            type="file"
            ref={fileRef}
            onChange={handleChange}
            accept=".png, .jpg, .jpeg"
            className="d-none"
          />
          <div className="mt-4 d-flex flex-column align-items-center justify-content-center qrimg">
            {file && <img src={URL.createObjectURL(file)} alt="qr-code" />}
            {data && <p className="pData fw-bold mt-5">data:{data}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadQr;
