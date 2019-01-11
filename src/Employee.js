import React, { Component } from "react";

const Input = props => {
  return (
    <div className={props.wrapClass}>
      <label htmlFor={props.id} className={props.labelClass}>
        {props.label}
      </label>
      <input
        // type={props.type}
        // id={props.id}
        // placeholder={props.placeholder}
        // value={props.value}
        {...props}
        onChange={e => props.onchange(e.target.value)}
        className={props.inputClass}
      />
    </div>
  );
};
export default Input;
