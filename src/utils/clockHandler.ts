import { ActiveSidesList } from "../components/Clock/Digit";

const getDisplayingTimeInfo = (
  date: Date,
  timezone: string,
  isTwelveHourFormat: boolean
): [ActiveSidesList[], string] => {
  const format = isTwelveHourFormat ? "en-US" : "ru-RU";

  const hours = date.toLocaleString(format, {
    hour: "2-digit",
    timeZone: timezone,
  });
  const minutes = date.toLocaleString(format, {
    minute: "2-digit",
    timeZone: timezone,
  });
  const seconds = date.toLocaleString(format, {
    second: "2-digit",
    timeZone: timezone,
  });

  let hPos1, hPos2;
  if (hours.length === 1) {
    hPos1 = 0;
    hPos2 = Number(hours[0]);
  } else {
    hPos1 = Number(hours[0]);
    hPos2 = Number(hours[1]);
  }

  let mPos1, mPos2;
  if (minutes.length === 1) {
    mPos1 = 0;
    mPos2 = Number(minutes[0]);
  } else {
    mPos1 = Number(minutes[0]);
    mPos2 = Number(minutes[1]);
  }

  let sPos1, sPos2;
  if (seconds.length === 1) {
    sPos1 = 0;
    sPos2 = Number(seconds[0]);
  } else {
    sPos1 = Number(seconds[0]);
    sPos2 = Number(seconds[1]);
  }

  const clockTimeNumber = [hPos1, hPos2, mPos1, mPos2, sPos1, sPos2];

  const sides: ActiveSidesList[] = [];

  clockTimeNumber.forEach((n) => {
    sides.push(getDigitalFromNumerical(n));
  });

  const res: [ActiveSidesList[], string] = [sides, ""];

  if (isTwelveHourFormat)
    res[1] = date.getHours() > 12 || date.getHours() === 0 ? "pm" : "am";

  return res;
};

const getDigitalFromNumerical = (num: number): ActiveSidesList => {
  /* explanation: displayingTimeInfo consists of six boolean arrays each with size of 7, 
  boolean inside of those represent whether the side of digit should be colored or not (7 sides total, if all the sides are colored then we have "8" digit)
  order of booleans array: [top, top right, bottom right, bottom, bottom left, top left, center]
  цифровые часы короче
  */
  if (num === 0) return [true, true, true, true, true, true, false];
  if (num === 1) return [false, true, true, false, false, false, false];
  if (num === 2) return [true, true, false, true, true, false, true];
  if (num === 3) return [true, true, true, true, false, false, true];
  if (num === 4) return [false, true, true, false, false, true, true];
  if (num === 5) return [true, false, true, true, false, true, true];
  if (num === 6) return [true, false, true, true, true, true, true];
  if (num === 7) return [true, true, true, false, false, false, false];
  if (num === 8) return [true, true, true, true, true, true, true];
  if (num === 9) return [true, true, true, true, false, true, true];
  return [false, false, false, false, false, false, false];
};

const timezones = new Set([
  "Europe/Moscow",
  "Europe/Kaliningrad",
  "Europe/Simferopol",
  "Europe/Kirov",
  "Europe/Astrakhan",
  "Europe/Volgograd",
  "Europe/Saratov",
  "Europe/Ulyanovsk",
  "Europe/Samara",
  "Asia/Yekaterinburg",
  "Asia/Omsk",
  "Asia/Novosibirsk",
  "Asia/Barnaul",
  "Asia/Tomsk",
  "Asia/Novokuznetsk",
  "Asia/Krasnoyarsk",
  "Asia/Irkutsk",
  "Asia/Chita",
  "Asia/Yakutsk",
  "Asia/Khandyga",
  "Asia/Vladivostok",
  "Asia/Ust-Nera",
  "Asia/Magadan",
  "Asia/Sakhalin",
  "Asia/Srednekolymsk",
  "Asia/Kamchatka",
  "Asia/Anadyr",
  "Europe/Belgrade",
  "Asia/Dubai",
  "Europe/Tirane",
  "Asia/Yerevan",
  "Europe/Vienna",
  "Australia/Melbourne",
  "Australia/Sydney",
  "Europe/Minsk",
  "America/Toronto",
  "Europe/Berlin",
  "Europe/Copenhagen",
  "Europe/Helsinki",
  "Europe/Paris",
  "Europe/London",
  "Asia/Tbilisi",
  "Europe/Budapest",
  "Europe/Rome",
  "Asia/Tokyo",
  "Asia/Pyongyang",
  "Asia/Seoul",
  "Asia/Almaty",
  "Europe/Riga",
  "Asia/Kathmandu",
  "Europe/Warsaw",
  "Europe/Stockholm",
  "Asia/Singapore",
  "Europe/Istanbul",
  "Europe/Kiev",
  "America/New_York",
  "Asia/Tashkent",
  "America/Caracas",
]);

export { getDisplayingTimeInfo, timezones };
