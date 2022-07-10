import { useState, useEffect } from "react";
import useInterval from "./hooks/useInterval";
import Ready from "./pages/Ready";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <div>
        <Ready />
        <Main />
      </div>
    </div>
  );
}

export default App;
