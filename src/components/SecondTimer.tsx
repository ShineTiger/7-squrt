import { Dispatch, SetStateAction } from "react";
import useInterval from "../hooks/useInterval";

interface aboutProps {
  second: number;
  setSecond: Dispatch<SetStateAction<number>>;
  isPlay: boolean;
  className: string;
}

const SecondTimer: React.FC<aboutProps> = ({
  second,
  setSecond,
  isPlay,
  className,
}) => {
  useInterval(
    () => {
      setSecond(second - 1);
    },
    isPlay ? 1000 : null
  );
  return <h4 className={className}>{second}</h4>;
};

export default SecondTimer;
