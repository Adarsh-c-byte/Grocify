import React from 'react'
import BgSeafood from "../../assets/seafood-banner.jpg"
import CategoryPage from '../CategoryPage/CategoryPage'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Sea food & Meat" bgImage={BgSeafood} categories={["Sea Food","Meat"]} />
    </div>
  )
}

export default SeaFood
