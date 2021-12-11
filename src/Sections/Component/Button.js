import React from "react";

function Button (props){
    return (
        <button onClick={props.handleClick}>{props.symbol}</button>
    )
}
export default Button