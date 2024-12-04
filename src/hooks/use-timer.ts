import { useState, useEffect } from "react";

const useTimer = (
  delay: number = 1000,
  optionalStringProp?: string
): boolean => {
  const [isTimerDone, setIsTimerDone] = useState<boolean>(false);

  useEffect(() => {
    // Reset the timer state when the timer is set or the optional string prop changes
    setIsTimerDone(false); // Reset timer state
    const timer = setTimeout(() => {
      setIsTimerDone(true);
    }, delay);

    // Clean up the timer on component unmount or when the optional string prop changes
    return () => clearTimeout(timer);
  }, [delay, optionalStringProp]); // Track delay and optional string prop

  return isTimerDone;
};

export default useTimer;
