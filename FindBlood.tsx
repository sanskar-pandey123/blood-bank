import React, { useEffect, useState } from "react";
import "../css/FindBlood.css";

interface Donor {
  _id: string;
  name: string;
  bloodGroup: string;
  city: string;
  phone: string;
}

const FindBlood: React.FC = () => {
  const [city, setCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [donors, setDonors] = useState<Donor[]>([]);
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>([]);

  /* 🔹 FETCH ALL DONORS ONCE */
  useEffect(() => {
    fetch("http://localhost:5000/api/donors")
      .then((res) => res.json())
      .then((data) => {
        setDonors(data);
        setFilteredDonors(data);
      });
  }, []);

  /* 🔹 APPLY FILTER ON CHANGE */
  useEffect(() => {
    const result = donors.filter((d) => {
      const cityMatch =
        city === "" || d.city.toLowerCase().includes(city.toLowerCase());

      const bloodMatch =
        bloodGroup === "" || d.bloodGroup === bloodGroup;

      return cityMatch && bloodMatch;
    });

    setFilteredDonors(result);
  }, [city, bloodGroup, donors]);

  return (
    <div className="find-page">
      <h1>Find Blood Donor</h1>

      <div className="filters">
        <input
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="">All Blood Groups</option>
          <option>A+</option><option>A-</option>
          <option>B+</option><option>B-</option>
          <option>O+</option><option>O-</option>
          <option>AB+</option><option>AB-</option>
        </select>
      </div>

      <div className="results">
        {filteredDonors.length === 0 ? (
          <p>No donors found</p>
        ) : (
          filteredDonors.map((d) => (
            <div key={d._id} className="donor-card">
              <h3>{d.name}</h3>
              <span>{d.bloodGroup}</span>
              <p>📍 {d.city}</p>
              <p>📞 {d.phone}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FindBlood;
