import React from "react";
import { useState, useEffect } from "react";
import useInterval from "../hooks/useInterval";

const Ready = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isReady, setReady] = useState<boolean>(false);
  const [isPlaying, setPlaying] = useState<boolean>(false);

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

  return (
    <>
      <button
        onClick={() => {
          setReady(!isReady);
        }}
      >
        시작
      </button>
      <ReadyTimer />
    </>
  );
};

export default Ready;
