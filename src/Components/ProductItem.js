
import React from 'react';
import '../App.css'; 

const ProductItem = ({ product }) => {
  return (
    <div className='Product-Item'>
      <img className='Product-Img' src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductItem;


