import { MouseEventHandler } from "react";

interface IButton {
  children: string | string[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-[--btn] p-3 rounded-xl">
      {children}
    </button>
  );
};

export default Button;
