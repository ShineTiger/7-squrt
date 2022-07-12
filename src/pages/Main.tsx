import React from "react";
import { useState, useEffect } from "react";
import useInterval from "../hooks/useInterval";
import Ready from "./Ready";

const Main = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isReady, setReady] = useState<boolean>(false);

  const [second, setSecond] = useState<number>(0);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [squatTime, setSquatTime] = useState<number>(0);
  const [squatSet, setSquatSet] = useState<number>(0);
  const [frameImage, setFrameImage] = useState("p0.gif");

  //시작버튼
  const togglePlay = () => {
    setReady(!isReady);
  };

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

  //이미지렌더
  useEffect(() => {
    if (second === 1) {
      setFrameImage("p1.gif");
    } else if (second === 2) {
      setFrameImage("p2.gif");
    } else if (second === 3) {
      setFrameImage("p3.gif");
    } else if (second === 4) {
      setFrameImage("p4.gif");
    } else if (4 < second && second < 8) {
      setFrameImage("p5.gif");
    } else if (second === 8) {
      setFrameImage("p3.gif");
    } else if (second === 9) {
      setFrameImage("p1.gif");
    } else if (second === 0) {
      setFrameImage("p0.gif");
    }
  }, [second]);

  //세트 카운터
  useEffect(() => {
    if (squatTime === 10) {
      setSquatSet((set) => set + 1);
    }
  }, [squatTime]);

  return (
    <div>
      <button onClick={togglePlay}>시작</button>
      <ReadyTimer />
      <SecondCounter />
      <p>{squatTime}</p>
      <p>{squatSet}</p>
      <img src={`/image/${frameImage}`} />
    </div>
  );
};

export default Main;
