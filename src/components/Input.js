import React from "react";
import "./Input.css";

export default function Input({text, type, handleChange}){
    return (
        <>
        <div className="input-label">
        <label>{text}</label>
        <input onChange={handleChange} type={type} />
        </div>
        </>
    )
}