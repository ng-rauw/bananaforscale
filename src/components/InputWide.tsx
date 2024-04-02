import { ChangeEventHandler, ReactNode } from "react";

type Props = {
  inputText: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  children: ReactNode;
};
const InputWide = ({ inputText, handleInputChange, children }: Props) => {
  return (
    <form
      action={() => {}}
      className="flex w-1/2 items-center rounded-3xl bg-white p-8 text-gray-600"
    >
      <input
        type="number"
        placeholder="0"
        min="0"
        value={inputText}
        className="w-full text-center text-9xl outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0"
        onChange={handleInputChange}
        onInputCapture={handleInputChange}
      />
      {children}
    </form>
  );
};

export default InputWide;
