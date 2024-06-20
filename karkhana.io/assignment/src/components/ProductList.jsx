import React from 'react';
import Product from './Product';

function ProductList({ products, addToCart }) {
  return (
    <>
    <div style={{display:"flex"}}>
        
    <div style={{width:"92%"}}>
        <input style={{width:"58%",height:"40px",paddingLeft:"20px"}} type="text" placeholder='Search all product here...'  />
        <button>Search</button>
    </div>
   
    <button>+</button>

    </div>
    <br />
    <div className='filter' style={{display:"flex",justifyContent:"start",gap:"15px"}}>
      <div><i class='bx bxs-coffee-alt'></i>Ice Coffee</div>
      <div><i class='bx bxs-coffee-alt'></i>Hot Coffee</div>
      <div><i class='bx bx-coffee-togo'></i>Artisan Tea</div>
      <div><i class='bx bx-coffee-togo'></i>Ice Mojito</div>
      <div><i class='bx bx-fork'></i>Beverage</div>
    </div>
    <br />
    <div style={{display:"flex",flexWrap:"wrap",gap:"38px"}}>
      {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
        </>
  );
}

export default ProductList;
