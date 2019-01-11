import React, { Component } from "react";
const Company = props => {
  return (
    <div className="picture">
      <div>{props.companyName}</div>
      <div>{props.totalExper}</div>
      {props.children}
      {/*Whenever this component is invoked {props.children} will also be displayed and this is just a reference to what is between the opening and closing tags of the component*/}
      {/*But the real power of props.children is that it can be anything!*/}.
    </div>
  );
};
export default Company;
