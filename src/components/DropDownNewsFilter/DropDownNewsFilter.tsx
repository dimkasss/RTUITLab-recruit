import { Dropdown } from "flowbite-react";
import DropDownTheme from "./DropDownTheme";

interface IDropDownNewsFilter {
  data: Set<string>;
  onPick: (category: string) => void;
  label: string;
}

const DropDownNewsFilter: React.FC<IDropDownNewsFilter> = ({
  data,
  onPick,
  label,
}) => {
  return (
    <Dropdown
      theme={DropDownTheme}
      label={label}
      color="[--text]"
      dismissOnClick={true}
    >
      {[...data].map((d) => (
        <Dropdown.Item key={d} onClick={() => onPick(d)}>
          {d.charAt(0).toUpperCase() + d.slice(1)}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default DropDownNewsFilter;
