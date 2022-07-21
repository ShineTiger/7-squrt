import useInterval from "../hooks/useInterval";

const SecondCounter = ({ second, setSecond, isPlay }) => {
  useInterval(
    () => {
      setSecond(second + 1);
    },
    isPlay ? 1000 : null
  );
  return second;
};

export default SecondCounter;
