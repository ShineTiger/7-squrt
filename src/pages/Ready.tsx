import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SecondTimer from "../components/SecondTimer";

const Ready = () => {
  const [timer, setTimer] = useState(3);
  const [isPlaying, setPlaying] = useState(false);

  const navigate = useNavigate();
  const play = true;

  //준비타이머 종료
  useEffect(() => {
    if (timer === 0) {
      setPlaying(!isPlaying);
      navigate("/Main");
    }
  }, [timer]);

  return (
    <div>
      <SecondTimer
        second={timer}
        setSecond={setTimer}
        isPlay={play}
        className="font-mono text-6xl"
      />
    </div>
  );
};

export default Ready;
