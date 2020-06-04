import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import Onboarding from "./components/Onboarding";

import "./App.css";

function App() {
  const STORE = {
    onboardingCompleted: false,
    userData: null,
    error: true,
    step: 1,
  };
  const [appStore, setAppStore] = useState(STORE);

  useEffect(() => {}, [appStore]);

  return (
    <AppContext.Provider value={{ appStore, setAppStore }}>
      <div className="App">
        <Onboarding />
      </div>
    </AppContext.Provider>
  );
}

export default App;
