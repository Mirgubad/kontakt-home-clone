import React from "react";

export default function ItemColors(props) {
  console.log(props.colors);
  props.colors.map((c) => console.log(c));
  return (
    <div className="color">
      <p>Rəng:</p>
      {props.colors.map((color) => (
        <button className={color} title={color}></button>
      ))}
    </div>
  );
}
