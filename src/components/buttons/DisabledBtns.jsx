// import React from 'react'

const DisabledBtns = () => {
    return (
        <div>
            <div className="disableShadow-btn">
                <div className="disableShadow-norm">
                    <code>{`<Button disableShadow />`} </code>
                    <button>Default</button>
                </div>
            </div>

            <div className="disabled-btns">
                <div className="disabled-norm">
                    <code>{`<Button disabled />`} </code>
                    <button>Default</button>
                </div>
                <div className="disabled-fh">
                    <code>{`<Button variant="text" disabled />`} </code>
                    <button>Default</button>
                </div>
            </div>
        </div>
    )
}

export default DisabledBtns