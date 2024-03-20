import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef({});

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 100);
    } else {
      clearInterval(timerRef.current as NodeJS.Timeout);
    }
  }, [isRunning]);

  return (
    <div className="text-3xl flex flex-col items-center justify-center *:my-3 font-bold">
      <div>
        {Math.floor(timer / 10)}.{timer % 10} s
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button onClick={() => setIsRunning((isRunning) => !isRunning)}>
          Click
        </Button>
        <Button
          onClick={() => {
            setTimer(0);
            setIsRunning((isRunning) => !isRunning);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
export default Stopwatch;
