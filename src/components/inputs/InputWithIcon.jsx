// import React from 'react'
import {AiFillPhone} from "react-icons/ai"
import {AiFillShopping} from "react-icons/ai"

const InputWithIcon = () => {
  return (
    <div className="inputWithIcon">

      <form className="normal">
        <code>{`<Input startIcon />`}</code>
        <label htmlFor="simple-text">Label</label>
        <AiFillPhone/>
        <input type="text" name="simple-input" placeholder="Placeholder"/>
       
      </form>

      <form className="hover">
        <code>{`<Input endIcon />`}</code>
        <label htmlFor="simple-text">Label</label>
        <AiFillShopping/>
        <input type="text" name="simple-input" placeholder="Placeholder"/>
       
      </form>

    </div>
  )
}

export default InputWithIcon