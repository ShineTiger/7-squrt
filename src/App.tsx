import { useState } from "react";
import "./App.css";
import useInterval from "./hooks/useInterval";

function App() {
  const [timer, setTimer] = useState<number>(0);
  const [isReady, setReady] = useState<boolean>(false);
  const [second, setSecond] = useState<number>(0);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [squatTime, setSquatTime] = useState<number>(0);

  //준비타이머
  useInterval(
    () => {
      setTimer(timer + 1);
    },
    isReady ? 1000 : null
  );

  //준비타이머 종료
  useEffect(() => {
    if (timer === 3) {
      setReady(false);
      setPlaying(!isPlaying);
    }
  }, [timer]);

  //초 카운터
  useInterval(
    () => {
      setSecond(second + 1);
    },
    isPlaying ? 1000 : null
  );

  //스쿼트횟수 카운터
  useEffect(() => {
    for (let i = 1; i < 4; i++) {
      if (second === 10 * i) {
        setSquatTime((squat) => squat + 1);
      }
    }
  }, [second]);

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setReady(!isReady);
          }}
        >
          시작
        </button>
        <p>{timer}</p>
        <p>{second}</p>
        <p>{squatTime}</p>
      </div>
    </div>
  );
}

export default App;
