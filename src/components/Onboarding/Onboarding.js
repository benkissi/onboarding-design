import React from "react";
import StepOne from "./StepOne";

import { Wrapper, Content, RightPane } from "./onboarding-styles";

function Onboarding() {
  return (
    <Wrapper>
      <Content>
        <StepOne />
      </Content>
      <RightPane>
        <h2>Sign up</h2>
        <p>Join our family of 5000+ users</p>
      </RightPane>
    </Wrapper>
  );
}

export default Onboarding;
