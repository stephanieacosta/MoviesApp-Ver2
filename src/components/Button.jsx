import React from "react";

function Button({ onClick, content }) {
  return <button onClick={onClick}>{content}</button>;
}

export default Button;
