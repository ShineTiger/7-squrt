import { useState, useEffect } from "react";
import "./App.css";
import useInterval from "./hooks/useInterval";

function App() {
  const [second, setSecond] = useState<number>(0);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const delay: number = 1000;

  useInterval(
    () => {
      setSecond(second + 1);
    },
    isPlaying ? delay : null
  );

  useEffect(() => {
    if (second === 2) {
      setPlaying(!isPlaying);
    }
  }, [second]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setPlaying(!isPlaying);
        }}
      >
        시작
      </button>
      <p>{second}</p>
    </div>
  );
}

export default App;
