import React from "react";

export const Counter = ({props}) => {
    console.log(props)
    return (
        <>
        <div className="text">
        <h1>Simple Counter</h1>
        <div className="counter">{props}</div>
        </div>
        
        </>
    )
}