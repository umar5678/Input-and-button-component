// import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

const GroceryBtns = () => {
    return (
        <div>
            <div className="grocery-btns">
                <div className="startIcon-norm">
                    <code>{`<Button startIcon=”local_grocery_store” />`} </code>
                    <button> <AiOutlineShoppingCart/> Default</button>
                </div>
                <div className="endIcon-fh">
                    <code>{`<Button endIcon=”local_grocery_store” />`} </code>
                    <button>Default <AiOutlineShoppingCart/></button>
                </div>
            </div>
        </div>
    )
}

export default GroceryBtns