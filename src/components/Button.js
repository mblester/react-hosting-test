import React from "react";

export function Button(props) {
    const { label = "Defaults", handleClick = () => console.log("I am default!")} = props;
    return <button onClick={handleClick}>{label}</button>
}
