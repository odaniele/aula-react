import React from "react";

const InputComponent = ({ value, onChange }) => {
    return (
        <input
        type = "text"
        placeholder="Digite seu nome"
        value = {value}
        onChange = {onChange}
        />
    );
};

export default InputComponent;