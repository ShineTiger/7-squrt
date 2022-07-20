import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SecondCounter from "../components/SecondCounter";

const Ready = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isReady, setReady] = useState<boolean>(false);
  const [isPlaying, setPlaying] = useState<boolean>(false);

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
    <>
      <button onClick={togglePlay}>시작</button>
      <SecondCounter second={timer} setSecond={setTimer} isPlay={isReady} />
    </>
  );
};

export default Ready;
