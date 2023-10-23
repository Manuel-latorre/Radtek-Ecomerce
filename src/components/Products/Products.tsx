'use client'

import React, { useState, useEffect } from 'react';
import Product from './CardProduct';
import style from './Product.module.css'


export interface Product {
    _id: string,
    id: number,
    category: string,
    price: number,
    name: string,
    image: string,
    color: string,
    description: string,    
    brand: string,
    stock: number
}


async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://private-radtek-server.onrender.com/products');
  const data = await response.json();
  return data as Product[]; 
}


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className={style.products_container}>
        {products.map((product) => (
            <Product product={product} key={product._id}/>
        ))}
    </div>
  );
}
