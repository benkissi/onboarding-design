import React from "react";
import TextInput from "../input";

import { FormWrapper } from "./onboarding-styles";

function StepOne() {
  return (
    <FormWrapper>
      <div className="header">
        <h1> Let's set up your account</h1>
        <p>
          Already have an account? <span className="signin-link">Sign in</span>
        </p>
      </div>
      <div className="form">
        <TextInput />
      </div>
    </FormWrapper>
  );
}

export default StepOne;
