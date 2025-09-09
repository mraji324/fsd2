import React from "react";

function ButtonClickHandler() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <div>
      <h2>Button Click Event Example</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default ButtonClickHandler;