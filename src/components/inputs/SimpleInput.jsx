// import React from 'react'

const SimpleInput = () => {
  return (
    <div className="simple-input">

      <form className="normal">
        <code>{`<Input />`}</code>
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

export default SimpleInput