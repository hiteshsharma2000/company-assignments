import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img style={{width:"180px"}}  src={product.img}  alt="" />   
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
