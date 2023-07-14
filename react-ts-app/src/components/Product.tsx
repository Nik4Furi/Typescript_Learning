import React from 'react'
import {Products} from '../App'

interface ProductProps{
    product : Products;
    handleAddToCart(id:number):void
}

function Product( {product,handleAddToCart}:ProductProps) {
  return (
    <div>
       <h1> {product.name} </h1>
       <button onClick={()=>handleAddToCart(product.id)} > Add To cart </button>
      
    </div>
  )
}
export default Product
