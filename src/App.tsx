import { useState } from "react";
import "./App.css";

function App() {
  const [second, setSecond] = useState(0);

  let newTime = 0;
  const countingSecond = () => {
    newTime++;
    console.log(newTime);
    setSecond(newTime);
  };

  //카운트 시작버튼
  const startBtn = () => {
    setInterval(countingSecond, 1000);
  };

  return (
    <div className="App">
      <button onClick={startBtn}>시작</button>
      <p>{second}</p>
    </div>
  );
}

export default App;
