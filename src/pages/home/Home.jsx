import React from 'react'
import Catelogue from '../../components/catalogues/Catelogue'
import Newsletter from '../../components/Newsletter'
import Products from '../../components/Products'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div>
      <Slider />
      <Catelogue />
      <Products />
      <Newsletter />
    </div>
  )
}

export default Home