
import React from 'react';
import '../App.css'; 

const ProductItem = (props) => {
  return (
    <div className='Product-Item'>
      <img className='Product-Img' src={props.myProduct.image} alt={props.myProduct.name} />
      <h1>{props.myProduct.name}</h1>
      <p>{props.myProduct.price}</p>
    </div>
  );
};

export default ProductItem;


