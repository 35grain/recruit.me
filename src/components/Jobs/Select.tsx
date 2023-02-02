import { Dropdown } from "@nextui-org/react";
import { useMemo } from "react";

interface SelectProps {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  menuItems: string[];
}

export const Select = ({ selected, setSelected, menuItems }: SelectProps) => {
  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat css={{ tt: "capitalize", backgroundColor: "$white" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={(selection) => {
          // No idea why currentKey doesn't exist - it actually does and also works..
          // @ts-ignore
          setSelected([selection.currentKey]);
        }}
      >
        {menuItems.map((item) => (
          <Dropdown.Item key={item}>{item}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
