import React from 'react'

type Props = {
    params: {
      productid: string;
    };
  };

const productid = ({params}:Props) => {
  return (
    <div>product {params.productid} details</div>
  )
}

export default productid