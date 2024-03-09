import { NavLink } from "react-router-dom";
import Button from "./Button";

interface IButtonLink {
    children: string;
    to: string;
}

const ButtonLink: React.FC<IButtonLink> = ({ children, to }) => {
    return (
        <NavLink className={({ isActive }) => isActive ? "*:bg-[--bg] *:border *:border-[--btn]" : ""} to={to}><Button>{children}</Button></NavLink>
    )
}

export default ButtonLink;