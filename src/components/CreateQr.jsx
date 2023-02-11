import React from "react";
import { useState } from "react";
import QRCode from "qrcode";

const CreateQr = () => {
  const [qrValue, setQrValue] = useState("");
  const [qrImageUrl, setQrImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!qrValue) {
      return alert("Please Enter Some value");
    }

    const response = await QRCode.toDataURL(qrValue);
    setQrImageUrl(response);
  };

  return (
    <div className="col-md-6">
      <div className="card m-3 justify-content-space-between" >
        <h2 className="text-center mb-4 ">Create QR Code</h2>

        <div className="card-body d-flex flex-column align-items-center">
          <form
            onSubmit={handleSubmit}
            className="d-flex align-items-center justify-content-between"
          >
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Enter Text"
              value={qrValue}
              onChange={(e) => setQrValue(e.target.value)}
            />
            <button type="submit" className="btn btn-primary addbtn">
              Generate
            </button>
          </form>
          {qrImageUrl && (
            <div className="mt-4 qrimg">
              <a href={qrImageUrl} download="qr.png">
                <img src={qrImageUrl} alt={console.log(qrImageUrl)} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateQr;
