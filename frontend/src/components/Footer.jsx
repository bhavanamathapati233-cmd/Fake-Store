import React from 'react'

function Footer() {
  return (
    <footer styles={styles.footer}>
      <p> 2026 Fakestore. All Rights reserved</p>
    </footer>
  )
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "grey",

  }
}

export default Footer