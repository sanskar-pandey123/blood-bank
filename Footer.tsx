import React from "react";
import { Link } from "react-router-dom";

/* =========================
   COMPONENT
========================= */
const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* ABOUT */}
        <div style={styles.col}>
          <h3 style={styles.logo}>🩸 BloodBank</h3>
          <p>
            Blood Bank is a digital platform that connects blood donors
            and patients during emergencies to save lives efficiently.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div style={styles.col}>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donate">Donate Blood</Link></li>
            <li><Link to="/find-blood">Find Blood</Link></li>
            <li><Link to="/request-blood">Request Blood</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div style={styles.col}>
          <h4>Contact</h4>
          <p>📍 India</p>
          <p>📞 +91 9752179918</p>
          <p>✉ sanskar@bloodbank.com</p>
        </div>

        {/* CALL TO ACTION */}
        <div style={styles.col}>
          <h4>Save Lives</h4>
          <p>
            Become a voluntary blood donor today and help save lives.
          </p>
          <Link to="/donate" style={styles.ctaBtn}>
            Donate Now
          </Link>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottom}>
        <p>
          © 2025 Blood Bank | Developed by <strong>Raj</strong>
        </p>
      </div>
    </footer>
  );
};


export default Footer;

/* =========================
   STYLES
========================= */
const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: "linear-gradient(135deg, #111, #2b0000)",
    color: "#fff",
    marginTop: "60px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px 30px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
  },

  col: {
    fontSize: "15px",
    lineHeight: "1.7",
  },

  logo: {
    color: "#ff4d4d",
    marginBottom: "10px",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  ctaBtn: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 20px",
    background: "#b30000",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  bottom: {
    textAlign: "center",
    padding: "15px",
    background: "#000",
    fontSize: "14px",
  },
};

