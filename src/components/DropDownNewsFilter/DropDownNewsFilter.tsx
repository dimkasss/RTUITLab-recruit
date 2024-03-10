import { Dropdown } from "flowbite-react";
import DropDownTheme from "./DropDownTheme";

interface IDropDownNewsFilter {
  categories: Set<string>;
  changeCategory: (category: string) => void;
}

const DropDownNewsFilter: React.FC<IDropDownNewsFilter> = ({
  categories,
  changeCategory,
}) => {
  return (
    <Dropdown
      theme={DropDownTheme}
      label="Category"
      color="[--text]"
      className=""
      dismissOnClick={false}
    >
      {[...categories].map((c) => (
        <Dropdown.Item onClick={() => changeCategory(c)}>
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default DropDownNewsFilter;
