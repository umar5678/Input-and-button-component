// import React from 'react'

const TextInput = () => {
  return (
    <div className="text-input">

      <form className="normal">
        <code>{`<Input value=”text” />`}</code>
        <label htmlFor="simple-text">Label</label>
        <textarea type="text" name="simple-input" placeholder="Placeholder"  />
      </form>

      <form className="wide">
        <code>{`<Input value=”text” />`}</code>
        <label htmlFor="simple-text">Label</label>
        <textarea type="text" name="simple-input" placeholder="Placeholder"  />
      </form>

      <form className="extended">
        <code>{`<Input value=”text” />`}</code>
        <label htmlFor="simple-text">Label</label>
        <textarea type="text" name="simple-input" placeholder="Placeholder"  />
      </form>

    </div>
  )
}

export default TextInput