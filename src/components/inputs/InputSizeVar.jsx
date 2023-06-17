// import React from 'react'

const InputSizeVar = () => {
  return (
    <div className="inputSizeVar">

      <form className="normal">
        <code>{`<Input size=”sm” />`}</code>
        <label htmlFor="simple-text">Label</label>
        <input type="text" name="simple-input" placeholder="Placeholder"/>
       
      </form>

      <form className="hover">
        <code>{`<Input size=”md” />`}</code>
        <label htmlFor="simple-text">Label</label>
        <input type="text" name="simple-input" placeholder="Placeholder"/>
       
      </form>

    </div>
  )
}

export default InputSizeVar