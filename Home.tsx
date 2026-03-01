import React, { useEffect, useState } from "react";
import "../css/Home.css";

/* =========================
   INTERFACE
========================= */
interface BloodRequest {
  _id: string;
  patientName: string;
  bloodGroup: string;
  unitsRequired: number;
  hospitalName: string;
  city: string;
  urgency: string;
}

const Home: React.FC = () => {

  /* =========================
     STATE: LIVE REQUESTS
  ========================= */
  const [requests, setRequests] = useState<BloodRequest[]>([]);

  /* =========================
     FETCH LIVE REQUESTS
  ========================= */
  useEffect(() => {
    fetch("http://localhost:5000/api/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">

      {/* ================= HERO WITH VIDEO ================= */}
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/video/blood-vedio.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h1>Donate Blood, Save Lives</h1>
          <p>
            A trusted digital blood bank platform connecting donors and
            patients across cities during medical emergencies.
          </p>

          <div className="hero-buttons">
            <a href="/donate" className="btn primary">Donate Blood</a>
            <a href="/find-blood" className="btn secondary">Find Blood</a>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-advanced">
        {[
          { count: "10,000+", label: "Registered Donors", icon: "🩸" },
          { count: "5,000+", label: "Lives Saved", icon: "❤️" },
          { count: "100+", label: "Cities Covered", icon: "🌍" },
          { count: "24/7", label: "Emergency Support", icon: "🚑" },
        ].map((item, index) => (
          <div key={index} className="stat-box">
            <div className="stat-icon">{item.icon}</div>
            <h2>{item.count}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* ================= LIVE BLOOD REQUESTS ================= */}
      <section className="live-requests">
        <h2>🚨 Active Blood Requests</h2>

        <div className="request-grid">
          {requests.length === 0 ? (
            <p>No active requests</p>
          ) : (
            requests.map((req) => (
              <div
                key={req._id}
                className={`request-card ${req.urgency.toLowerCase()}`}
              >
                <span className="urgency">{req.urgency}</span>
                <h3>{req.patientName}</h3>
                <p><strong>Blood:</strong> {req.bloodGroup}</p>
                <p><strong>Units:</strong> {req.unitsRequired}</p>
                <p><strong>City:</strong> {req.city}</p>
                <p className="hospital">{req.hospitalName}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-advanced">
        <div className="about-content">
          <h2>About Blood Bank</h2>

          <p>
            Blood Bank is a community-driven digital platform built to solve one
            of the most critical healthcare challenges — timely access to blood
            during medical emergencies.
          </p>

          <p>
            We aim to eliminate delays by directly connecting verified voluntary
            blood donors with patients, hospitals, and emergency responders using
            modern web technology.
          </p>

          <ul className="about-points">
            <li>✔ Fast donor search by city & blood group</li>
            <li>✔ Trusted & verified donor community</li>
            <li>✔ Emergency-first approach</li>
            <li>✔ Completely free & accessible</li>
          </ul>
        </div>

        <div className="about-image">
          <img src="/images/hospital.jpg" alt="hospital" />
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="how">
        <h2 className="how-title">How It Works</h2>
        <p className="how-subtitle">
          Simple steps to connect blood donors and patients instantly
        </p>

        <div className="how-cards">

          <div className="how-card">
            <span className="step">01</span>
            <div className="icon">📝</div>
            <h3>Register</h3>
            <p>
              Create your donor profile by providing accurate
              blood group, city, and contact details.
            </p>
          </div>

          <div className="how-card">
            <span className="step">02</span>
            <div className="icon">🔍</div>
            <h3>Search Blood</h3>
            <p>
              Patients can search for available donors
              based on required blood group and location.
            </p>
          </div>

          <div className="how-card">
            <span className="step">03</span>
            <div className="icon">📞</div>
            <h3>Connect Instantly</h3>
            <p>
              Direct communication enables faster response
              during emergency situations.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DONOR SHOWCASE ================= */}
      <section className="donor-section">
        <h2 className="section-title">Our Life Savers</h2>
        <p className="section-subtitle">
          Meet some of our amazing blood donors who help save lives every day
        </p>

        <div className="donors">

          <div className="donor-card">
            <img src="/images/donar1.jpg" alt="donor" />
            <h4>Rahul Sharma</h4>
            <span className="blood-tag">A+</span>
            <p>📍 Delhi</p>
            <p className="donor-desc">
              Regular donor helping patients in emergency situations.
            </p>
          </div>

          <div className="donor-card featured">
            <img src="/images/donar2.jpg" alt="donor" />
            <h4>Anita Verma</h4>
            <span className="blood-tag">O+</span>
            <p>📍 Mumbai</p>
            <p className="donor-desc">
              Active donor known for quick response and support.
            </p>
          </div>

          <div className="donor-card">
            <img src="/images/donar3.jpg" alt="donor" />
            <h4>Amit Patel</h4>
            <span className="blood-tag">B+</span>
            <p>📍 Ahmedabad</p>
            <p className="donor-desc">
              Passionate about community service and healthcare.
            </p>
          </div>

        </div>
      </section>

      {/* ================= BLOOD GROUPS ================= */}
      <section className="blood-section">
        <h2 className="section-title">Available Blood Groups</h2>
        <p className="section-subtitle">
          We connect donors and patients across all major blood groups
        </p>

        <div className="blood-groups">
          {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map((bg) => (
            <div key={bg} className="blood-card">
              <span className="blood-icon">🩸</span>
              <h3>{bg}</h3>
              <p>Available</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-advanced">
        <div className="cta-content">
          <span className="cta-badge">🩸 Emergency Help</span>

          <h2>Your One Donation Can Save Multiple Lives</h2>

          <p>
            Every drop of blood counts. Join our mission to ensure that
            no life is lost due to the unavailability of blood during
            critical situations.
          </p>

          <div className="cta-actions">
            <a href="/donate" className="cta-btn primary">Become a Donor</a>
            <a href="/request-blood" className="cta-btn secondary">Request Blood</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
