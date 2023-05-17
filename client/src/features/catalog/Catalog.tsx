
import ProductList from "./ProductList";
import { Product } from "../../app/models/product";
import React, { useEffect, useState } from "react";



export default function Catalog() {
    const [products, setProduct] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/Products')
        .then(response => response.json())
        .then(data => setProduct(data));
    }, []);
  
    return (
        <>
 <ProductList products={products} />
        </>
    )
}


        