// import React from 'react'

const ErrorInput = () => {
  return (
    <div className="error-input">

    <form className="normal">
      <code>{`<Input error />`}</code>
      <label htmlFor="simple-text">Label</label>
      <input type="text" name="simple-input" placeholder="Placeholder"/>
    </form>

    <form className="hover">
      <code>{`&:hover`}</code>
      <label htmlFor="simple-text">Label</label>
      <input type="text" name="simple-input" placeholder="Placeholder"/>
    </form>

    <form className="focus">
      <code>{`&:focus`}</code>
      <label htmlFor="simple-text">Label</label>
      <input type="text" name="simple-input" placeholder="Placeholder"/>
    </form>



  </div>
  )
}

export default ErrorInput