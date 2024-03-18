import { useEffect, useMemo, useRef, useState } from "react";
import Digit from "../components/Clock/Digit";
import Divider from "../components/Clock/Divider";
import { getDisplayingTimeInfo, timezones } from "../utils/clockHandler";
import DropDownNewsFilter from "../components/DropDownNewsFilter/DropDownNewsFilter";

const ClockPage = () => {
  const [timeZone, setTimeZone] = useState('Europe/Moscow');

  const [date, setDate] = useState(new Date());
  const dateRef = useRef(new Date());

  const displayingTimeInfo = useMemo(() => getDisplayingTimeInfo(date, timeZone), [date]);

  useEffect(() => {
    const animation = () => {
      const seconds = dateRef.current.getSeconds();
      const current_date = new Date();

      if (seconds !== current_date.getSeconds()) {
        dateRef.current = current_date;
        setDate(current_date);
      }

      window.requestAnimationFrame(animation);
    };

    const id = window.requestAnimationFrame(animation);

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center *:py-5">
      <DropDownNewsFilter data={timezones} label={timeZone} onPick={(d: string) => setTimeZone(d)} />
      <div className="w-full flex flex-row items-center justify-center">
        <Digit activeSides={displayingTimeInfo[0]} />
        <Digit activeSides={displayingTimeInfo[1]} />
        <Divider />
        <Digit activeSides={displayingTimeInfo[2]} />
        <Digit activeSides={displayingTimeInfo[3]} />
        <Divider />
        <Digit activeSides={displayingTimeInfo[4]} />
        <Digit activeSides={displayingTimeInfo[5]} />
      </div>
    </div>
    
  );
};

export default ClockPage;
