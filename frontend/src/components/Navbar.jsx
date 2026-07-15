import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const handLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        window.location.href = "/";
    };

    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}>FakeStore</h2>

            <div style={styles.links}>
                <Link to="/" style={styles.link}>Home</Link>

                <Link to="/products" style={styles.link}>Products</Link>

                {isLoggedIn ? (
                    <button onClick={handLogout} style={styles.logoutButton}>
                        Logout
                    </button>
                ) : (
                    <Link to="/login" style={styles.link}>Login</Link>
                )}
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#444",
        color: "#fff",
        padding: "15px 40px"
    },

    logo: {
        margin: 0
    },

    links: {
        display: "flex",
        gap: "20px",
        alignItems: "center"
    },

    link: {
        color: "#fff",
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "18px"
    },

    logoutButton: {
        background: "#ff4d4d",
        color: "#fff",
        border: "none",
        padding: "8px 16px",
        borderRadius: "5px",
        cursor: "pointer"
    }
};

export default Navbar;