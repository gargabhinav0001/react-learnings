import { useRef } from "react";

function useThrottle(fn, delay) {
  const timeOutId = useRef(null);

  return (...args) => {
    if (!timeOutId.current) {
      fn(...args);
      timeOutId.current = setTimeout(() => {
        clearInterval(timeOutId.current);
        timeOutId.current = null;
      }, delay);
    }
  };
}

export default useThrottle;
