import React from "react";

const Input = ({ type, placeholder, set }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
            set(e.target.value)
        }}
      />
    );
};

export default Input;