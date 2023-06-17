// import React from 'react'
import SimpleInput from "./inputs/SimpleInput"
import ErrorInput from "./inputs/ErrorInput"
import DisabledInput from "./inputs/DisabledInput"
import HelperTextInput from "./inputs/HelperTextInput"
import InputWithIcon from "./inputs/InputWithIcon"
import InputSizeVar from "./inputs/InputSizeVar"
import TextInput from "./inputs/TextInput"
import Footer from "./Footer"



const InputsComp = () => {
  return ( 
    <div className="input-comp">

      <h3>Inputs</h3>
      <SimpleInput/>

      <ErrorInput/>

      <DisabledInput/>

      <HelperTextInput/>

      <InputWithIcon/>

      <InputSizeVar/>

      <TextInput/>

      <Footer/>

    </div>
  )
}

export default InputsComp