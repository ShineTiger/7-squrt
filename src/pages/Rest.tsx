import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SecondCounter from "../components/SecondCounter";

const Rest = () => {
  const [timer, setTimer] = useState(0);
  const [isReady, setReady] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const play = true;

  const navigate = useNavigate();

  //휴식끝내기
  const overRest = () => {
    navigate("/Main");
  };

  //휴식타이머 종료
  useEffect(() => {
    if (timer === 60) {
      setReady(false);
      setPlaying(!isPlaying);
      navigate("/Main");
    }
  }, [timer]);

  return (
    <>
      <button onClick={overRest} className="btn btn-wide">
        휴식끝내기
      </button>
      <SecondCounter
        second={timer}
        setSecond={setTimer}
        isPlay={play}
        className="font-mono text-6xl"
      />
    </>
  );
};

export default Rest;
