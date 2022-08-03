import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SecondTimer from "../components/SecondTimer";

const Rest = () => {
  const [timer, setTimer] = useState(60);
  const [isReady, setReady] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const play = true;

  const navigate = useNavigate();

  //휴식끝내기
  const overRest = () => {
    navigate("/Ready");
  };

  //휴식타이머 종료
  useEffect(() => {
    if (timer === 0) {
      setReady(false);
      setPlaying(!isPlaying);
      navigate("/Main");
    }
  }, [timer]);

  return (
    <>
      <button onClick={overRest} className="circle-btn inline-block">
        <SecondTimer
          second={timer}
          setSecond={setTimer}
          isPlay={play}
          className="font-mono text-6xl"
        />
        <p className="text-2xl">휴식끝내기</p>
      </button>
    </>
  );
};

export default Rest;
