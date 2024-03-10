import { MouseEventHandler, ReactNode } from "react";

interface IButton {
  children: string | string[] | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={`bg-[--btn] p-3 rounded-xl`}>
      {children}
    </button>
  );
};

export default Button;
