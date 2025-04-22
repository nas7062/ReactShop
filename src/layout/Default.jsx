import React from 'react'
import Header from '../organism/Header'
import Footer from '../organism/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Suspense } from 'react'
const Default = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <ScrollRestoration scrollBehavior="auto" />
      <Footer />
    </>
  )
}

export default Default
