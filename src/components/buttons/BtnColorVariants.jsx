// import React from 'react'

const BtnColorVariants = () => {
  return (
    <div className="clrvariant">

      {/* default buttons */}

      <div className="default-btns">
        <div className="btn-norm">
          <code>{`<Button color=”default” />`} </code>
          <button>Default</button>
        </div>
        <div className="btn-fh">
          <code>{`&:hover, &:focus`} </code>
          <button>Default</button>
        </div>
      </div>

{/* primery btns */}
      <div className="primery-btns">
        <div className="btn-norm">
          <code>{`<Button color=”primary” />`} </code>
          <button>Default</button>
        </div>
        <div className="btn-fh">
          <code>{`&:hover, &:focus`} </code>
          <button>Default</button>
        </div>
      </div>

{/* secondsary btns */}
      <div className="secondary-btns">
        <div className="btn-norm">
          <code>{`<Button color=”secondary” />`} </code>
          <button>Default</button>
        </div>
        <div className="btn-fh">
          <code>{`&:hover, &:focus`} </code>
          <button>Default</button>
        </div>
      </div>

{/* Danger btns */}
      <div className="danger-btns">
        <div className="btn-norm">
          <code>{`<Button color=”danger” />`} </code>
          <button>Danger</button>
        </div>
        <div className="btn-fh">
          <code>{`&:hover, &:focus`} </code>
          <button>Danger</button>
        </div>
      </div>
    </div>
  )
}

export default BtnColorVariants