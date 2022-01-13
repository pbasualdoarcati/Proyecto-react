import React from "react";

function Button (props){
    return (
        <button className="button__container" onClick={props.handleClick}>{props.symbol}</button>
    )
}
export default Button