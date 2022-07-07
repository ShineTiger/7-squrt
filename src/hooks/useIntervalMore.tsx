import { useEffect, useRef, useCallback } from "react";

const useIntervalMore = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  const intervalIdRef: { current: NodeJS.Timeout | null } = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  //시간설정
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      intervalIdRef.current = setInterval(tick, delay);
    }

    const id = intervalIdRef.current;
    return () => {
      clearInterval(id);
    };
  }, [delay]);

  useEffect(() => {
    const id = intervalIdRef.current;
    return () => {
      clearInterval(id);
    };
  }, []);

  const resetInterval = useCallback(() => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = setInterval(savedCallback.current, delay);
  }, [delay]);

  return resetInterval;
};

export default useIntervalMore;
