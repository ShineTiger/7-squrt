import { useState, useEffect } from "react";
import useInterval from "./hooks/useInterval";

function App() {
  const [timer, setTimer] = useState<number>(0);
  const [isReady, setReady] = useState<boolean>(false);
  const [second, setSecond] = useState<number>(0);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [squatTime, setSquatTime] = useState<number>(0);

  //준비타이머
  const ReadyTimer = () => {
    useInterval(
      () => {
        setTimer(timer + 1);
      },
      isReady ? 1000 : null
    );
    return (
      <>
        <p>{timer}</p>
      </>
    );
  };

  //준비타이머 종료
  useEffect(() => {
    if (timer === 3) {
      setReady(false);
      setPlaying(!isPlaying);
    }
  }, [timer]);

  //초 카운터
  const SecondCounter = () => {
    useInterval(
      () => {
        setSecond(second + 1);
      },
      isPlaying ? 1000 : null
    );
    return (
      <>
        <p>{second}</p>
      </>
    );
  };

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
      <button
        onClick={() => {
          setReady(!isReady);
        }}
      >
        시작
      </button>
      <div>
        <ReadyTimer />
        <SecondCounter />
        <p>{squatTime}</p>
      </div>
    </div>
  );
}

export default App;
