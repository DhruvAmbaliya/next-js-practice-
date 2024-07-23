"use client"
import React from 'react'
import { notFound } from 'next/navigation'
type Props = {
    params:{
        reviewid:string;
        productid: string;
    }
}


const getRandomInt = (count: number) => {
  return Math.floor(Math.random()*count);
}

const reviewid =({params}: Props)=> {
  const random = getRandomInt(2);
  if(random === 1){
    throw new Error("error loading review")
  }
    if(parseInt(params.reviewid)>1000){
        notFound();
    }
  return (
    <div>review {params.productid} for product {params.reviewid}</div>
  )
}

export default reviewid