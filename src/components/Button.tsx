import { MouseEventHandler } from "react";

interface IButton {
  children: string | string[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-[--btn] rounded-xl m-3 px-4">
      {children}
    </button>
  );
};

export default Button;
