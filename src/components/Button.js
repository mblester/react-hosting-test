import React from "react";

export function Button(props) {
    const { label = "Default", handleClick = () => console.log("I am Default")} = props;
    return <button onClick={handleClick}>{label}</button>; 
}