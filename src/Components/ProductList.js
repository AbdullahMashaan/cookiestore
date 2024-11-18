
import React from 'react';
import products from '../Data/products';
import ProductItem from './ProductItem';
import '../App.css'; 

const ProductList = () => {
  return (
    <div className="Products-List">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
