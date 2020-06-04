import React, { useState, useContext, useEffect } from "react";
import StepOne from "./StepOne";
import Progress from "../progress";
import Button from "../button";

import { AppContext } from "../../AppContext";

import {
  Wrapper,
  Content,
  RightPane,
  Actions,
  ContentInner,
} from "./onboarding-styles";

function Onboarding() {
  const { appStore, setAppStore } = useContext(AppContext);
  const [buttonActive, setButtonState] = useState(false);
  const { error } = appStore;
  useEffect(() => {
    if (error) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
    console.log("The store*", appStore);
  }, [appStore]);

  const handleNext = () => {
    console.log("next");
    setAppStore((prevState) => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  };
  return (
    <Wrapper>
      <Content>
        <div className="progress">
          <Progress />
        </div>
        <ContentInner>
          <div className="step">
            <StepOne />
          </div>
          <Actions>
            <div className="actions-inner">
              <div className="button">
                <Button
                  text="Next"
                  disabled={!buttonActive}
                  click={handleNext}
                />
              </div>
              <div>
                <p className="notice">
                  By clicking the "Next" button, you agree to creating a free
                  account, and to{" "}
                  <span className="highlight">Terms of Service</span> and{" "}
                  <span className="highlight">Privacy Policy</span>
                </p>
              </div>
            </div>
          </Actions>
        </ContentInner>
      </Content>
      <RightPane>
        <h2>Sign up</h2>
        <p>Join our family of 5000+ users</p>
      </RightPane>
    </Wrapper>
  );
}

export default Onboarding;
