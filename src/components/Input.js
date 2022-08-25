import React from "react";
import "./Input.css";

export default function Input({text, type}){
    return (
        <>
        <div className="input-label">
        <label>{text}</label>
        <input type={type} />
        </div>
        </>
    )
}