import React, { useState } from "react";
import { NavLink } from "react-router-dom";

/* =========================
   COMPONENT
========================= */
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    ...styles.link,
    ...(isActive ? styles.activeLink : {})
  });

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {/* LOGO */}
        <NavLink to="/" style={styles.logo}>
          🩸 Blood<span style={{ color: "#ffcccc" }}>Bank</span>
        </NavLink>

        {/* DESKTOP MENU */}
        <ul style={styles.menu}>
          <li><NavLink to="/" style={linkStyle}>Home</NavLink></li>
           <li><NavLink to="/about" style={linkStyle}>About</NavLink></li>
          <li><NavLink to="/donate" style={linkStyle}>Donate</NavLink></li>
          <li><NavLink to="/find-blood" style={linkStyle}>Find Blood</NavLink></li>
          <li><NavLink to="/request-blood" style={linkStyle}>Request</NavLink></li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          style={styles.menuBtn}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div style={styles.mobileMenu}>
          <NavLink to="/" style={styles.mobileLink} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/donate" style={styles.mobileLink} onClick={() => setOpen(false)}>Donate</NavLink>
          <NavLink to="/find-blood" style={styles.mobileLink} onClick={() => setOpen(false)}>Find Blood</NavLink>
          <NavLink to="/request-blood" style={styles.mobileLink} onClick={() => setOpen(false)}>Request</NavLink>
          <NavLink to="/about" style={styles.mobileLink} onClick={() => setOpen(false)}>About</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;

/* =========================
   STYLES
========================= */
const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#b30000",
  },
  nav: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "15px 25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  },
  menu: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    paddingBottom: "4px",
  },
  activeLink: {
    borderBottom: "2px solid #fff",
    fontWeight: "bold",
  },
  menuBtn: {
    display: "none",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "26px",
    cursor: "pointer",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    background: "#990000",
    padding: "15px",
    gap: "12px",
  },
  mobileLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};
