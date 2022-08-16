import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SecondCounter from "../components/SecondCounter";
import { atom, useRecoilState } from "recoil";

const setCounter = atom({
  key: "squatState",
  default: 0,
});

const Main = () => {
  const [second, setSecond] = useState(0);
  const [frameImage, setFrameImage] = useState("pose-0.svg");
  const [totalSquat, setTotalSquat] = useRecoilState(setCounter);
  const squatTimeRef = useRef(0);

  const play = true;

  const navigate = useNavigate();

  //이미지렌더
  useEffect(() => {
    if (second === 1) {
      setFrameImage("pose-1.svg");
    } else if (second === 2) {
      setFrameImage("pose-2.svg");
    } else if (second === 3) {
      setFrameImage("pose-3.svg");
    } else if (second === 4) {
      setFrameImage("pose-4.svg");
    } else if (4 < second && second < 8) {
      setFrameImage("pose-5.svg");
    } else if (second === 8) {
      setFrameImage("pose-3.svg");
    } else if (second === 9) {
      setFrameImage("pose-1.svg");
    } else if (second === 0) {
      setFrameImage("pose-0.svg");
    }
    if (second === 10) {
      setSecond(0);
      squatTimeRef.current = squatTimeRef.current + 1;
    }
    if (squatTimeRef.current === 10) {
      setTotalSquat((set) => set + 1);
      navigate("/Rest");
    }
  }, [second]);

  //달성페이지 이동
  useEffect(() => {
    if (totalSquat === 3) {
      navigate("/Goal");
    }
  }, [totalSquat]);

  return (
    <div className="flex flex-wrap basis-full">
      <div className="basis-full text-center">
        <SecondCounter
          second={second}
          setSecond={setSecond}
          isPlay={play}
          className="font-mono text-6xl"
        />
        <div className="flex mt-8">
          <div className="basis-2/4">
            <p>횟수</p>
            <p className="text-3xl">{squatTimeRef.current}</p>
          </div>
          <div className="basis-2/4">
            <p>완료한 세트</p>
            <p className="text-3xl">{totalSquat}</p>
          </div>
        </div>
      </div>
      <div className="basis-full">
        <img
          src={`/image/${frameImage}`}
          className="m-auto"
          alt="스쿼트이미지 가이드"
        />
      </div>
    </div>
  );
};

export default Main;
