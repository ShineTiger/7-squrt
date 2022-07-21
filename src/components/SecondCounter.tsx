import useInterval from "../hooks/useInterval";

interface SecondCounter {
  second: number;
  setSecond: number;
  isPlay: boolean;
  className: String;
}

const SecondCounter = ({ second, setSecond, isPlay, className }) => {
  useInterval(
    () => {
      setSecond(second + 1);
    },
    isPlay ? 1000 : null
  );
  return <h4 className={className}>{second}</h4>;
};

export default SecondCounter;
