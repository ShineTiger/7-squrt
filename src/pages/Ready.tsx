import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SecondTimer from "../components/SecondTimer";

const Ready = () => {
  const [timer, setTimer] = useState(3);
  const [isReady, setReady] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  const navigate = useNavigate();

  //시작버튼
  const togglePlay = () => {
    setReady(!isReady);
  };

  //준비타이머 종료
  useEffect(() => {
    if (timer === 0) {
      setReady(false);
      setPlaying(!isPlaying);
      navigate("/Main");
    }
  }, [timer]);

  return (
    <div>
      <div className="vh100-center bg-slate-50">
        <button
          onClick={togglePlay}
          className={isReady ? "none" : "circle-btn"}
        >
          시작
        </button>
        <SecondTimer
          second={timer}
          setSecond={setTimer}
          isPlay={isReady}
          className={isReady ? "font-mono text-6xl" : "none"}
        />
      </div>
    </div>
  );
};

export default Ready;
