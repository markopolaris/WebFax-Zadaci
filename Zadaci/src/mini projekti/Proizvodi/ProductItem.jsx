import React from 'react';

function ProductItem({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px', borderRadius: '8px' }}>
      <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
      <h2>{product.title}</h2>
      <p>{product.description.substring(0, 100)}...</p>
      <p><strong>Cena:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductItem;
