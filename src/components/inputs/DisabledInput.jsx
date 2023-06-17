// import React from 'react'

const DisabledInput = () => {
  return (
    <div className="disabled-input">

      <form className="normal">
        <code>{`<Input disabled />`}</code>
        <label htmlFor="simple-text">Label</label>
        <input type="text" name="simple-input" placeholder="Placeholder" />
      </form>
    </div>
  )
}

export default DisabledInput