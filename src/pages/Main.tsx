import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SecondCounter from "../components/SecondCounter";
import { atom, useRecoilState } from "recoil";

const Main = () => {
  const [second, setSecond] = useState(0);
  const [squatTime, setSquatTime] = useState(0);
  const [frameImage, setFrameImage] = useState("p0.gif");
  const play = true;

  const setCounter = atom({
    key: "squatState",
    default: 0,
  });

  const [squat, setSquat] = useRecoilState(setCounter);

  const navigate = useNavigate();

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
    if (squatTime === 1) {
      setSquat((set) => set + 1);
      navigate("/Rest");
    }
  }, [squatTime]);

  return (
    <div className="vh100-center text-center">
      <div className="basis-2/4">
        <SecondCounter
          second={second}
          setSecond={setSecond}
          isPlay={play}
          className="font-mono text-6xl"
        />
        <div className="flex mt-8">
          <div className="basis-2/4">
            <p>횟수</p>
            <p className="text-3xl">{squatTime}</p>
          </div>
          <div className="basis-2/4">
            <p>완료한 세트</p>
            <p className="text-3xl">{squat}</p>
          </div>
        </div>
      </div>
      <div className="basis-2/4 ">
        <p className="text-center">
          <img src={`/image/${frameImage}`} className="w-full" />
        </p>
      </div>
    </div>
  );
};

export default Main;
