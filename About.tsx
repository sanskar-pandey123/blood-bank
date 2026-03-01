import React from "react";
import "../css/About.css";

/* =========================
   COMPONENT
========================= */
const About: React.FC = () => {
  return (
    <div className="about-container">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Blood Bank</h1>
        <p>
          A digital platform created to connect blood donors and patients
          in emergency situations and save lives.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Blood Bank is a community-driven web application developed to make
          blood donation and blood search easier, faster, and more reliable.
          This platform acts as a bridge between voluntary blood donors and
          people who urgently require blood due to medical emergencies,
          surgeries, or accidents.
        </p>
        <p>
          Our goal is to remove delays, confusion, and lack of information
          during critical times by providing a simple and organized system
          where donors can register and patients can find suitable blood
          quickly.
        </p>
      </section>

      {/* WHY THIS PLATFORM */}
      <section className="about-section alt">
        <h2>Why This Platform Exists</h2>
        <p>
          In many emergency cases, patients and their families struggle to
          find the required blood group at the right time. Hospitals and
          blood banks may have limited stock, and manual searching can cost
          precious lives.
        </p>
        <p>
          This platform was created to solve this real-world problem by
          allowing donors to voluntarily register their availability and
          enabling patients to search donors by city and blood group within
          seconds.
        </p>
      </section>

      {/* OUR MISSION */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <ul>
          <li>✔ Encourage voluntary blood donation</li>
          <li>✔ Reduce blood shortage during emergencies</li>
          <li>✔ Provide fast and accurate donor search</li>
          <li>✔ Build a strong and responsible donor community</li>
        </ul>
      </section>

      {/* OUR VISION */}
      <section className="about-section alt">
        <h2>Our Vision</h2>
        <p>
          Our vision is to create a nationwide digital blood donation network
          where every willing donor is easily reachable and no life is lost
          due to unavailability of blood.
        </p>
        <p>
          In the future, we aim to integrate hospitals, blood banks, and
          emergency services into one unified system for maximum impact.
        </p>
      </section>

      {/* ABOUT DEVELOPER */}
      <section className="about-section">
        <h2>About the Developer</h2>
        <p>
          This Blood Bank web application has been designed and developed by
          <strong> Raj</strong> as a full-stack development project using
          modern web technologies.
        </p>
        <p>
          The purpose of developing this project is not only academic but
          also practical — to understand real-world problem solving using
          React, TypeScript, and modern frontend architecture.
        </p>
        <p>
          Through this project, the developer aims to enhance skills in
          user interface design, state management, form handling, routing,
          and scalable application structure.
        </p>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="about-section alt">
        <h2>Technology Stack Used</h2>
        <ul>
          <li>⚙ React + TypeScript (TSX)</li>
          <li>⚙ Vite for fast development</li>
          <li>⚙ React Router for navigation</li>
          <li>⚙ Modern CSS & Responsive Design</li>
          <li>⚙ Backend ready for Node.js & MongoDB integration</li>
        </ul>
      </section>

      {/* FUTURE SCOPE */}
      <section className="about-section">
        <h2>Future Scope</h2>
        <p>
          This platform can be expanded in the future with advanced features
          such as:
        </p>
        <ul>
          <li>• Real-time donor availability</li>
          <li>• Hospital & blood bank integration</li>
          <li>• Emergency request notifications</li>
          <li>• SMS / Email alerts for donors</li>
          <li>• Admin panel for verification</li>
        </ul>
      </section>

      {/* FOOTER MESSAGE */}
      <section className="about-footer-message">
        <h3>
          “Donate Blood, Save Lives – A Small Act That Creates a Big Impact.”
        </h3>
      </section>

    </div>
  );
};

export default About;
