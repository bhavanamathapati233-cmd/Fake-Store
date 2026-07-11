import React from 'react'
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section style={styles.hero}>
            <div>
                <h1 style={styles.heading}>Welcome to FakeStore</h1>
                <p style={styles.para}> Shop the product</p>
                <Link to="/Products" style={styles.button}>Shop Now</Link>
            </div>
        </section>
    )
}

const styles = {
    hero: {
        backgroundImage: "url('https://img.magnific.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg')",
        width: "100%",
        height: "85vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifycontent: "center",
    },
    overlay: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifycontent: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    heading: {
        color: "#fff",
        fontSize: "2.5rem",
    },
    para: {
        color: "#fff",
        fontSize: "1.5rem",
        marginTop: "10px",
    },
    button: {
        display: "inline-block",
        background: "#1a1a2e",
        marginTop: "20px",
        padding: "10px 25px",
        color: "#fff",
        textDecoration: "none",
    },

}

export default HeroSection