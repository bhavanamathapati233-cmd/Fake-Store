import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1>FakeStore</h1>
      <div style={styles.links}>


        <Link to="/" styles={styles.link}>Home</Link>
        <br></br>
        <Link to="/products" styles={styles.link}>Products </Link>

      </div>
    </nav>
  )
}


const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    background: "gray",
    alignItems: "center",
    padding: "15px 40px",
    color: "#fff"
  },
  links: { display: "flex", gap: "20px" },
  link: { color: "#fff", textDecoration: "none", fontWeight: "500" }
}

export default Navbar;