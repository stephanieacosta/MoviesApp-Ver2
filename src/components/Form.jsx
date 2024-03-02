import React from "react";

function Form({ value, onChange, onClick, content }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Nombre de la película"
      />
      <button onClick={onClick}>{content}</button>
    </>
  );
}

export default Form;
