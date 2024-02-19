import { Select } from "@chakra-ui/react";

type Option = {
  value: string;
  label: string;
};
type SelectProps = {
  options: Option[];
  onChange: (e: string) => void;
  variant: string;
};

const Dropdown = ({ options, variant, onChange }: SelectProps) => {
  return (
    <div>
      <Select
        variant={variant}
        mb={10}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value)
        }
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;
