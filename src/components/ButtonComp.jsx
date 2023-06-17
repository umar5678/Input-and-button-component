// import React from 'react'
import DefaultBtns from "./buttons/DefaultBtns"
import DisabledBtns from "./buttons/DisabledBtns"
import GroceryBtns from "./buttons/GroceryBtns"
import BtnSizes from "./buttons/BtnSizes"
import BtnColorVariants from "./buttons/BtnColorVariants"
import Footer from "./Footer"

const ButtonComp = () => {
  return (
    <div className="btn-comp">
      <h3>Buttons</h3>
      <DefaultBtns/>

      <DisabledBtns/>

      <GroceryBtns/>

      <BtnSizes/>

      <BtnColorVariants/>

      <Footer/>
    </div>
  )
}

export default ButtonComp