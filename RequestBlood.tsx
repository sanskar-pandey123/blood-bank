import React, { useState } from "react";
import "../css/RequestBlood.css";

/* =========================
   INTERFACE
========================= */
interface BloodRequest {
  patientName: string;
  bloodGroup: string;
  unitsRequired: number;
  hospitalName: string;
  city: string;
  contactPerson: string;
  contactNumber: string;
  urgency: string;
  additionalInfo: string;
}

/* =========================
   COMPONENT
========================= */
const RequestBlood: React.FC = () => {
  const [requestData, setRequestData] = useState<BloodRequest>({
    patientName: "",
    bloodGroup: "",
    unitsRequired: 1,
    hospitalName: "",
    city: "",
    contactPerson: "",
    contactNumber: "",
    urgency: "",
    additionalInfo: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRequestData((prev) => ({
      ...prev,
      [name]: name === "unitsRequired" ? Number(value) : value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  await fetch("http://localhost:5000/api/requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData),
  });

  setSubmitted(true);
};

  return (
    <div className="request-page">
      <div className="request-card">
        <h1>Request Blood</h1>
        <p className="subtitle">
          Emergency blood requirement? Fill the form carefully.
          We will help connect you with donors quickly.
        </p>

        {submitted && (
          <div className="success-box">
            🚑 Blood request submitted successfully.  
            Donors will be notified soon.
          </div>
        )}

        <form className="request-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Patient Name</label>
            <input type="text" name="patientName" onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Required Blood Group</label>
            <select name="bloodGroup" onChange={handleChange} required>
              <option value="">Select</option>
              <option>A+</option><option>A-</option>
              <option>B+</option><option>B-</option>
              <option>O+</option><option>O-</option>
              <option>AB+</option><option>AB-</option>
            </select>
          </div>

          <div className="field">
            <label>Units Required</label>
            <input type="number" name="unitsRequired" min={1} onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Hospital Name</label>
            <input type="text" name="hospitalName" onChange={handleChange} required />
          </div>

          <div className="field">
            <label>City</label>
            <input type="text" name="city" onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Contact Person</label>
            <input type="text" name="contactPerson" onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Contact Number</label>
            <input type="tel" name="contactNumber" onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Urgency Level</label>
            <select name="urgency" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Critical">Critical (Immediate)</option>
              <option value="High">High (Within Hours)</option>
              <option value="Normal">Normal</option>
            </select>
          </div>

          <div className="field full">
            <label>Additional Information</label>
            <textarea
              name="additionalInfo"
              placeholder="Any special instructions or notes"
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn">Submit Blood Request</button>
        </form>
      </div>
    </div>
  );
};

export default RequestBlood;
