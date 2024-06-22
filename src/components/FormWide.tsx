import { Formik, Form, Field } from "formik";
import React from "react";

export type OptionScaleModel = {
  value: number;
  label: string;
};
type Props = {
  inputText: string;
  scale: number;
  handleInputChange: (value: number) => void;
  handleScaleChange: (value: number) => void;
  options: OptionScaleModel[];
  className?: string;
};

const FormWide = ({
  inputText,
  handleInputChange,
  handleScaleChange,
  options,
  scale,
  className,
}: Props) => {
  return (
    <Formik
      initialValues={{ inputText: inputText, scale: 1 }}
      onSubmit={() => {}}
    >
      <Form
        className={`${className} flex items-center rounded-3xl bg-white p-8 text-gray-600`}
      >
        <Field
          type="number"
          name="inputText"
          placeholder="0"
          min="0"
          value={inputText}
          className="w-full text-center text-9xl outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(Number(e.target.value));
          }}
        />
        <Field
          as="select"
          name="scale"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            handleScaleChange(Number(e.target.value));
          }}
          value={scale}
          className="cursor-pointer appearance-none bg-white p-2 text-center text-5xl outline-0"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      </Form>
    </Formik>
  );
};

export default FormWide;
