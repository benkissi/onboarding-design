import React, { useState, useEffect, useContext } from "react";
import TextInput from "../input";
import Select from "../select";

import { AppContext } from "../../AppContext";
import { isEmail } from "../../utils/validations";

import { FormWrapper } from "./onboarding-styles";

function StepOne() {
  const { appStore, setAppStore } = useContext(AppContext);
  const [userDetails, setUserDetails] = useState({
    name: appStore && appStore.name ? appStore.name : "",
    email: appStore && appStore.email ? appStore.email : "",
    password: appStore && appStore.password ? appStore.password : "",
    role: appStore && appStore.role ? appStore.role : "",
    nameError: false,
    emailError: false,
    passwordError: false,
    roleError: false,
    nameErrorMessage: "",
    passwordErrorMessage: "",
    emailErrorMessage: "",
    roleErrorMessage: "",
    started: false,
  });

  useEffect(() => {
    console.log("state", userDetails);
    if (userDetails.started) {
      setAppStore((prevState) => {
        return {
          ...prevState,
          name: userDetails.name,
          email: userDetails.email,
          password: userDetails.password,
          role: userDetails.role,
          error:
            userDetails.nameError ||
            userDetails.emailError ||
            userDetails.passwordError ||
            userDetails.roleError ||
            !userDetails.name ||
            !userDetails.email ||
            !userDetails.password ||
            !userDetails.role,
        };
      });
    }
  }, [userDetails]);

  const handleInputChange = (event) => {
    console.log("event", event.target.name);
    const { name: key, value } = event.target;
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [key]: value,
        started: true,
      };
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const inputValue = userDetails[name];
    if (name === "email") {
      isEmail(inputValue)
        ? setUserDetails((prevState) => {
            return {
              ...prevState,
              emailError: false,
              emailErrorMessage: "",
            };
          })
        : setUserDetails((prevState) => {
            return {
              ...prevState,
              emailError: true,
              emailErrorMessage: "Please enter a valid email address",
            };
          });
    } else if (name === "name") {
      userDetails.name.length > 2
        ? setUserDetails((prevState) => {
            return {
              ...prevState,
              nameError: false,
              nameErrorMessage: "",
            };
          })
        : setUserDetails((prevState) => {
            return {
              ...prevState,
              nameError: true,
              nameErrorMessage: "Name should not be less than 3 characters",
            };
          });
    } else if (name === "password") {
      userDetails.password.length > 7
        ? setUserDetails((prevState) => {
            return {
              ...prevState,
              passwordError: false,
              passwordErrorMessage: "",
            };
          })
        : setUserDetails((prevState) => {
            return {
              ...prevState,
              passwordError: true,
              passwordErrorMessage:
                "Password should not be less than 8 characters",
            };
          });
    }
  };

  const handleSelect = (selection) => {
    setUserDetails((prevState) => {
      return {
        ...prevState,
        role: selection,
      };
    });
  };

  const selectionList = ["Developer", "Product manager", "UI/UX Designer"];
  return (
    <FormWrapper>
      <div className="form-inner">
        <div className="header">
          <h1> Let's set up your account</h1>
          <p>
            Already have an account? <span className="highlight">Sign in</span>
          </p>
        </div>
        <div className="form">
          <div className="input">
            <TextInput
              placeholder="Your name"
              name="name"
              onInputChange={handleInputChange}
              type="text"
              value={userDetails.name}
              validate={handleBlur}
              isError={userDetails.nameError}
              errorMessage={userDetails.nameErrorMessage}
            />
          </div>
          <div className="input">
            <TextInput
              placeholder="Email address"
              name="email"
              onInputChange={handleInputChange}
              type="text"
              value={userDetails.email}
              validate={handleBlur}
              isError={userDetails.emailError}
              errorMessage={userDetails.emailErrorMessage}
            />
          </div>
          <div className="input">
            <Select
              placeholder="I will describe my user type as"
              icon="arrow.svg"
              list={selectionList}
              name="role"
              value={userDetails.role}
              onSelect={handleSelect}
            />
          </div>
          <div className="input">
            <TextInput
              placeholder="Password"
              tip="Minimum 8 characters"
              // icon="visible.svg"
              name="password"
              onInputChange={handleInputChange}
              type="password"
              value={userDetails.password}
              validate={handleBlur}
              isError={userDetails.passwordError}
              errorMessage={userDetails.passwordErrorMessage}
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default StepOne;
