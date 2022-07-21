import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SecondCounter from "../components/SecondCounter";

const Ready = () => {
  const [timer, setTimer] = useState(0);
  const [isReady, setReady] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  const navigate = useNavigate();

  //시작버튼
  const togglePlay = () => {
    setReady(!isReady);
  };

  //준비타이머 종료
  useEffect(() => {
    if (timer === 3) {
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
        <SecondCounter
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
