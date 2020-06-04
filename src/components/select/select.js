import React, { useState } from "react";

import {
  Input,
  Wrapper,
  Inner,
  Icon,
  SelectItems,
  SelectInner,
  SelectItem,
} from "./select-styles";

function Select({
  placeholder = "Add text here",
  tip,
  icon,
  list,
  role,
  onSelect,
  value,
}) {
  const selectionInput = value ? value : "";
  const [toggleSelect, setToggle] = useState(false);
  const [selection, setSelection] = useState(selectionInput);

  const handleSelection = (selection) => {
    setSelection(selection);
    setToggle(false);
    onSelect(selection);
  };
  return (
    <Wrapper>
      <Inner>
        <Input
          placeholder={placeholder}
          value={selection}
          name={role}
          onClick={() => setToggle(!toggleSelect)}
          readOnly
        />
        <Icon
          isOpen={toggleSelect}
          icon={icon}
          onClick={() => setToggle(!toggleSelect)}
        />
      </Inner>
      <SelectItems show={toggleSelect}>
        <SelectInner show={toggleSelect}>
          {list
            ? list.map((item) => (
                <SelectItem
                  key={item}
                  className="items"
                  onClick={() => handleSelection(item)}
                >
                  <p>{item}</p>
                </SelectItem>
              ))
            : ""}
        </SelectInner>
      </SelectItems>

      {tip ? <p className="tips">{tip}</p> : ""}
    </Wrapper>
  );
}

export default Select;
