import React from "react";

function StringLiteralsExample() {
  const name = "YOUR NAME";
  const message = `Hello, ${name}! Welcome to React.`;

  return (
    <div>
      <h2>String Literals Example</h2>
      <p>{message}</p>
    </div>
  );
}

export default StringLiteralsExample;
