import React from "react";
import { useState, useEffect } from "react";
import useInterval from "../hooks/useInterval";
import Ready from "./Ready";
import SecondCounter from "../components/SecondCounter";

const Main = () => {
  const [second, setSecond] = useState<number>(0);
  const [squatTime, setSquatTime] = useState<number>(0);
  const [squatSet, setSquatSet] = useState<number>(0);
  const [frameImage, setFrameImage] = useState("p0.gif");

  const play = true;

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
      <SecondCounter second={second} setSecond={setSecond} isPlay={play} />
      <p>{squatTime}</p>
      <p>{squatSet}</p>
      <img src={`/image/${frameImage}`} />
    </div>
  );
};

export default Main;
