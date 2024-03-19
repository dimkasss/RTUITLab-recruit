import { useEffect, useMemo, useRef, useState } from "react";
import Digit from "../components/Clock/Digit";
import Divider from "../components/Clock/Divider";
import { getDisplayingTimeInfo, timezones } from "../utils/clockHandler";
import { Checkbox, Label } from "flowbite-react";
import DropDownNewsFilter from "../components/DropDownNewsFilter/DropDownNewsFilter";

const ClockPage = () => {
  const [isTwelveHourFormat, setIsTwelveHourFormat] = useState(false);
  const [withSeconds, setWithSeconds] = useState(true);
  const [timeZone, setTimeZone] = useState("Europe/Moscow");
  const [date, setDate] = useState(new Date());

  const dateRef = useRef(new Date());

  const [displayingTimeInfo, meridiem] = useMemo(
    () => getDisplayingTimeInfo(date, timeZone, isTwelveHourFormat),
    [date, timeZone, isTwelveHourFormat]
  );

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
      <div className="flex flex-wrap items-center  *:flex justify-center *:py-2 *:px-2 *:*:px-2">
        <div>
          <Checkbox
            defaultChecked={isTwelveHourFormat}
            id="isTwelveHours"
            onClick={() => setIsTwelveHourFormat(!isTwelveHourFormat)}
          />
          <Label htmlFor="isTwelveHours" className="flex">
            Set&nbsp;
            <a
              target="_blank"
              onClick={() =>
                window.open(
                  "https://en.wikipedia.org/wiki/Date_and_time_notation_in_the_United_States#:~:text=The%20United%20States%20uses%20the,appended%20universally%20in%20written%20language"
                )
              }
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              US Time format
            </a>
          </Label>
        </div>
        <div>
          <Checkbox
            defaultChecked={withSeconds}
            id="withSeconds"
            onClick={() => setWithSeconds(!withSeconds)}
          />
          <Label htmlFor="withSeconds" className="flex">
            Require seconds
          </Label>
        </div>
        <div>
          <Checkbox
            defaultChecked={withSeconds}
            id="withSeconds"
            onClick={() => setWithSeconds(!withSeconds)}
          />
          <Label htmlFor="withSeconds" className="flex">
            Require seconds
          </Label>
        </div>
      </div>
      <DropDownNewsFilter
        data={timezones}
        label={timeZone}
        onPick={(d: string) => setTimeZone(d)}
      />
      <div className="w-full flex flex-row items-center justify-center">
        <Digit activeSides={displayingTimeInfo[0]} />
        <Digit activeSides={displayingTimeInfo[1]} />
        <Divider />
        <Digit activeSides={displayingTimeInfo[2]} />
        <Digit activeSides={displayingTimeInfo[3]} />

        {withSeconds ? (
          <>
            <Divider />
            <Digit activeSides={displayingTimeInfo[4]} />
            <Digit activeSides={displayingTimeInfo[5]} />
          </>
        ) : (
          <></>
        )}
        {isTwelveHourFormat ? (
          <div className="text-3xl flex items-end h-full px-2 font-light">
            <p>{meridiem}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ClockPage;
