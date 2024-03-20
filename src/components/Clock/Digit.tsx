interface IDigit {
  activeSides: ActiveSidesList;
}

export type ActiveSidesList = boolean[];

const Digit: React.FC<IDigit> = ({ activeSides }) => {
  const borders = [
    `border-4 md:border-8 border-solid ${
      activeSides[0] ? "border-t-[--text]" : "border-t-[--bg-shadow]"
    } ${activeSides[1] ? "border-r-[--text]" : "border-r-[--bg-shadow]"} 
    ${activeSides[5] ? "border-l-[--text]" : "border-l-[--bg-shadow]"} 
    ${activeSides[6] ? "border-b-[--text]" : "border-b-[--bg-shadow]"}`,
    `border-4 md:border-8 border-solid border-t-[--bg] ${
      activeSides[2] ? "border-r-[--text]" : "border-r-[--bg-shadow]"
    } ${activeSides[4] ? "border-l-[--text]" : "border-l-[--bg-shadow]"} ${
      activeSides[3] ? "border-b-[--text]" : "border-b-[--bg-shadow]"
    }`,
  ];
  return (
    <div
      className={`flex flex-col items-center justify-around p-0 *:p-3 md:*:p-6 *:mx-1`}
    >
      <div className={borders[0]}></div>
      <div className={borders[1]}></div>
    </div>
  );
};

export default Digit;
