import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

import { Wrapper, Circle } from "./progress-style";

function Progress({
  steps = [
    { name: "create account", step: 1 },
    { name: "add your address", step: 2 },
    { name: "connect social", step: 3 },
  ],
}) {
  const { appStore } = useContext(AppContext);
  const { step } = appStore;
  return (
    <Wrapper>
      <p>Step {step} of 3</p>
      {steps.map((stage) => {
        return (
          <Circle
            color={step >= stage.step ? "black" : "#ccc"}
            key={stage.step}
          ></Circle>
        );
      })}
    </Wrapper>
  );
}

export default Progress;
