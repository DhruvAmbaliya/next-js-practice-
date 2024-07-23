import Link from 'next/link'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
        <div>Home</div>
    <Link href="/products">Products</Link>
    </>

  )
}

export default Home