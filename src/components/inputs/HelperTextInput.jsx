// import React from 'react'

const HelperTextInput = () => {
  return (
    <div className="helpertext-input">

      <form className="normal">
        <code>{`<Input helperText=”Some interesting text” />`}</code>
        <label htmlFor="simple-text">Label</label>
        <input type="text" name="simple-input" placeholder="Placeholder"/>
        <p>Some interesting text</p>
      </form>

      <form className="hover">
        <code>{`<Input helperText=”Some interesting text” error />`}</code>
        <label htmlFor="simple-text">Label</label>
        <input type="text" name="simple-input" placeholder="Placeholder"/>
        <p>Some interesting text</p>
      </form>

    </div>
  )
}

export default HelperTextInput