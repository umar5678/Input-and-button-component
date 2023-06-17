// import React from 'react'

const DefaultBtns = () => {
  return (
    <>
    
    <div className="simple-btns">
      <div className="btn-norm">
        <code>{`<Button />`} </code>
        <button>Default</button>
      </div>
      <div className="btn-fh">
        <code>{`&:hover, &:focus`} </code>
        <button>Default</button>
      </div>
    </div>


    <div className="outline-btns">
      <div className="outline-norm">
      <code>{`<Button variant="outline" />`} </code>
        <button>Default</button>
      </div>
      <div className="outline-fh">
        <code>{`&:hover, &:focus`} </code>
        <button>Default</button>
      </div>
    </div>

    <div className="text-btns">
      <div className="text-norm">
      <code>{`<Button variant="text" />`} </code>
        <button>Default</button>
      </div>
      <div className="text-fh">
        <code>{`&:hover, &:focus`} </code>
        <button>Default</button>
      </div>
    </div>
    </>
  )
}

export default DefaultBtns