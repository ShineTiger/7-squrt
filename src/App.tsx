import { useState, useEffect } from "react";
import useInterval from "./hooks/useInterval";

function App() {
  const [timer, setTimer] = useState<number>(0);
  const [isReady, setReady] = useState<boolean>(false);
  const [second, setSecond] = useState<number>(0);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [squatTime, setSquatTime] = useState<number>(0);
  const [squatSet, setSquatSet] = useState<number>(0);

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

  //10초 리셋
  useEffect(() => {
    if (second === 10) {
      setSecond(0);
      setSquatTime((squat) => squat + 1); //횟수 카운터
    }
  }, [second]);

  //세트 카운터
  useEffect(() => {
    if (squatTime === 10) {
      setSquatSet((set) => set + 1);
    }
  }, [squatTime]);

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
        <p>{squatSet}</p>
      </div>
    </div>
  );
}

export default App;
