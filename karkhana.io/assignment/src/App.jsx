import { useState,useEffect } from 'react'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'

const products = [
  { id: 1,img:"https://uk.gimber.com/cdn/shop/products/GIMBER-500ml_1500x1500_crop_center.jpg?v=1608712713", name: 'ORI GIMBER 700ml', price: 24.95 },
  { id: 2,img:"https://uk.gimber.com/cdn/shop/products/GIMBER-500ml_1500x1500_crop_center.jpg?v=1608712713", name: 'GIMBER N°2 700 ml', price: 25.85 },
  { id: 3,img:"https://uk.gimber.com/cdn/shop/products/GIMBER-500ml_1500x1500_crop_center.jpg?v=1608712713", name: 'SML GIMBER 500ml', price: 20.45 },
  { id: 4,img:"https://uk.gimber.com/cdn/shop/products/GIMBER-500ml_1500x1500_crop_center.jpg?v=1608712713", name: 'GIMBER N°2 500 ml', price: 26.00 },
  { id: 5,img:"https://uk.gimber.com/cdn/shop/products/GIMBER-500ml_1500x1500_crop_center.jpg?v=1608712713", name: 'GIMBER N°2 500 ml', price: 26.00 },
  { id: 6,img:"https://uk.gimber.com/cdn/shop/products/GIMBER-500ml_1500x1500_crop_center.jpg?v=1608712713", name: 'GIMBER N°2 500 ml', price: 26.00 },
  { id: 7,img:"https://uk.gimber.com/cdn/shop/products/GIMBER-500ml_1500x1500_crop_center.jpg?v=1608712713", name: 'GIMBER N°2 500 ml', price: 26.00 },
  { id: 8,img:"https://uk.gimber.com/cdn/shop/products/GIMBER-500ml_1500x1500_crop_center.jpg?v=1608712713", name: 'GIMBER N°2 500 ml', price: 26.00 },
  { id: 9,img:"https://uk.gimber.com/cdn/shop/products/GIMBER-500ml_1500x1500_crop_center.jpg?v=1608712713", name: 'GIMBER N°2 500 ml', price: 26.00 },
 
];


function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };


  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price, 0);
    setTotal(newTotal);
  }, [cart]);


  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);

  };

  return (
    <>
    <div className="App">
    <div className="product-list">
      <ProductList products={products} addToCart={addToCart} />
    </div>
    <div className="cart">
      <Cart cart={cart} total={total} handleDelete={handleDelete} />
    </div>
   </div>
    <div className='navbar' style={{border:"1px solid black",display:"flex",justifyContent:"space-around"}}>
    < i className='swing-fwd-center' class='bx bxs-grid-alt'></i><i class='bx bxs-circle'></i><i class='bx bxs-receipt'></i><i class='bx bxl-google' ></i>
      </div></>
  )
}

export default App
