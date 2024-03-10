import { Dropdown } from "flowbite-react";
import DropDownTheme from "./DropDownTheme";

const DropDownNewsFilter = () => {
  return (
    <Dropdown
      theme={DropDownTheme}
      label="Категория"
      color="[--text]"
      className="p-3"
      dismissOnClick={false}
    >
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default DropDownNewsFilter;
