import { Dropdown } from "flowbite-react";
import DropDownTheme from "./DropDownTheme";

interface IDropDownNewsFilter {
  categories: Set<string>;
  changeCategory: (category: string) => void;
  label: string;
}

const DropDownNewsFilter: React.FC<IDropDownNewsFilter> = ({
  categories,
  changeCategory,
  label,
}) => {
  return (
    <Dropdown
      theme={DropDownTheme}
      label={label}
      color="[--text]"
      className=""
      dismissOnClick={false}
    >
      {[...categories].map((c) => (
        <Dropdown.Item key={c} onClick={() => changeCategory(c)}>
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default DropDownNewsFilter;
