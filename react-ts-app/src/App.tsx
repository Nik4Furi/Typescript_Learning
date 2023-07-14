import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

export interface Products {
  id : number;
  name: string;
  price: number;
  description?: string;
}

function App() {
  const [products, setProducts] = useState<Products[]>([
    { id: 1 ,name: "Jwellery", price: 23 },
    { id: 2,name: "Jwellery", price: 2 }
  ]);

  const handleAddToCart = (id:number)=>{
    console.log('Id is ',id);
  }

  return (
    <>
      <h1>Products</h1>
      {
        products.map((product) => {
          return <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        })
      }
    </>
  );
}

export default App;
