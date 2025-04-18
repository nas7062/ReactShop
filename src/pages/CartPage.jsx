import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CartPage = () => {
  const carItems = useLoaderData()
  console.log(carItems)
  return (
    <main>
      <h2>CartPage</h2>
    </main>
  )
}

export default CartPage
