"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

const Product = (props: Props) => {
  const router = useRouter();
  const productid  = 100;;
  const handlechange = ()=>{
    router.push("/");
  };

  return ( 
  <>
        <Link href="/">Home</Link>
        <h1>product list</h1>
        <h2>product 1</h2>
        <h2>product 2</h2>
        <h2>product 3</h2>
        <h2><Link href={`products/${productid}`}></Link>product {productid}</h2>
        <button onClick={handlechange}>Place Order</button>
  </>
  )
}
export default Product;
