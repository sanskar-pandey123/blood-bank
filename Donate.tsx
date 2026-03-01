import React, { useState } from "react";
import "../css/Donate.css";

/* =========================
   INTERFACE
========================= */
interface DonorForm {
  name: string;
  age: number;
  gender: string;
  bloodGroup: string;
  city: string;
  phone: string;
  lastDonation: string;
  healthIssue: string;
}


/* =========================
   COMPONENT
========================= */
const Donate: React.FC = () => {
  const [formData, setFormData] = useState<DonorForm>({
    name: "",
    age: 0,
    gender: "",
    bloodGroup: "",
    city: "",
    phone: "",
    lastDonation: "",
    healthIssue: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  await fetch("http://localhost:5000/api/donors", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  setSubmitted(true);
};


  return (
    <div className="donate-page">
      <div className="donate-card">
        <h1>Donate Blood</h1>
        <p className="subtitle">
          Your one donation can save up to three lives.  
          Please fill the form carefully.
        </p>

        {submitted && (
          <div className="success-box">
            ✅ Thank you for registering as a blood donor!
          </div>
        )}

        <form className="donate-form" onSubmit={handleSubmit}>

          <div className="field">
            <label>Full Name</label>
            <input type="text" name="name" onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Age</label>
            <input type="number" name="age" min={18} max={65} onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Gender</label>
            <select name="gender" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="field">
            <label>Blood Group</label>
            <select name="bloodGroup" onChange={handleChange} required>
              <option value="">Select</option>
              <option>A+</option><option>A-</option>
              <option>B+</option><option>B-</option>
              <option>O+</option><option>O-</option>
              <option>AB+</option><option>AB-</option>
            </select>
          </div>

          <div className="field">
            <label>City</label>
            <input type="text" name="city" onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input type="tel" name="phone" onChange={handleChange} required />
          </div>

          <div className="field">
            <label>Last Donation Date</label>
            <input type="date" name="lastDonation" onChange={handleChange} />
          </div>

          <div className="field full">
            <label>Any Health Issues?</label>
            <textarea
              name="healthIssue"
              placeholder="If none, write 'No'"
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn">Register as Donor</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
