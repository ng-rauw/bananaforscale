import React, { ChangeEventHandler } from "react";

type Props = {
  handleScaleChange: ChangeEventHandler<HTMLSelectElement>;
  options: OptionScaleModel[];
};
const SelectScale = ({ handleScaleChange, options }: Props) => {
  return (
    <select
      onChange={handleScaleChange}
      className="cursor-pointer appearance-none bg-white p-2 text-center text-5xl outline-0"
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};
export type OptionScaleModel = {
  value: number;
  label: string;
};
export default SelectScale;
