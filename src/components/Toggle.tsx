"use client";
import { Formik, Form, Field } from "formik";
import React from "react";
import { useTranslations } from "next-intl";

type Props = {
  inputText: string;
  initialValue: boolean;
  handleInputChange: (value: boolean) => void;
};

const Toggle = ({ inputText, initialValue, handleInputChange }: Props) => {
  const t = useTranslations("Index");

  return (
    <Formik initialValues={{ toggle: initialValue }} onSubmit={() => {}}>
      {({ values }) => (
        <Form className="">
          <label className="inline-flex cursor-pointer items-center">
            <Field
              type="checkbox"
              name="toggle"
              className="peer sr-only"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                values.toggle = !values.toggle;
                handleInputChange(Boolean(values.toggle));
              }}
            />
            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-blue-500 after:transition-all after:content-[''] peer-checked:bg-yellow-400 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"></div>
            <span className="text-m ms-3 font-medium text-white">
              {t("change_mode")}
            </span>
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default Toggle;
