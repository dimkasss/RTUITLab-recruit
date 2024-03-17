interface IDigit {
  activeSides: ActiveSidesList;
}

export type ActiveSidesList = boolean[];

const Digit: React.FC<IDigit> = ({ activeSides }) => {
  const borders = [
    `border-2 border-solid ${
      activeSides[0] ? "border-t-[--text]" : "border-t-[--bg]"
    } ${activeSides[1] ? "border-r-[--text]" : "border-r-[--bg]"} 
    ${activeSides[5] ? "border-l-[--text]" : "border-l-[--bg]"} 
    ${activeSides[6] ? "border-b-[--text]" : "border-b-[--bg]"}`,
    `border-2 border-solid border-t-[--bg] ${
      activeSides[2] ? "border-r-[--text]" : "border-r-[--bg]"
    } ${activeSides[4] ? "border-l-[--text]" : "border-l-[--bg]"} ${
      activeSides[3] ? "border-b-[--text]" : "border-b-[--bg]"
    }`,
  ];
  return (
    <div
      className={`flex flex-col items-center justify-around p-0 *:p-4 *:mx-1`}
    >
      <div className={borders[0]}></div>
      <div className={borders[1]}></div>
    </div>
  );
};

export default Digit;
