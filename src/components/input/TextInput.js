import React from "react";

import { Input, Wrapper, Inner, Icon } from "./input-styles";

function TextInput({
  placeholder = "Add text here",
  tip,
  icon,
  name,
  onInputChange,
  value,
  type = "text",
  validate,
  isError,
  errorMessage,
}) {
  return (
    <Wrapper>
      <Inner isError={isError}>
        <Input
          placeholder={placeholder}
          name={name}
          onChange={onInputChange}
          type={type}
          value={value}
          onBlur={validate}
        />
        {type === "password" ? "" : <Icon icon={icon} />}
      </Inner>

      {isError ? (
        <p className="input-error">{errorMessage}</p>
      ) : tip ? (
        <p className="tips">{tip}</p>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default TextInput;
