import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading products...</p>;

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.title} style={styles.image} />
          <h4>{product.title.slice(0, 40)}...</h4>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    padding: '20px'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'contain',
    marginBottom: '10px'
  }
};

export default Products;