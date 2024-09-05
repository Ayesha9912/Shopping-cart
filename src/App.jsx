import React from 'react'
import Productpage from './Productpage'
import Cartpage from './cartpage'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Productpage />} />
      <Route path="/cart" element={<Cartpage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
