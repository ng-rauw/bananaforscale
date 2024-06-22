"use client";

import Toggle from "@/components/Toggle";
import useGlobalHeightContext from "@/app/[locale]/height/heightContext";
import FormWide, { OptionScaleModel } from "@/components/FormWide";

export default function ConfigMeasure() {
  const {
    globalItemText,
    isGlobalMode,
    globalScale,
    handleIsGlobalModeChange,
    handleGlobalScaleChange,
    handleGlobalItemChange,
  } = useGlobalHeightContext();
  const options: OptionScaleModel[] = [
    { value: 1, label: "cm" },
    { value: 100, label: "m" },
    {
      value: 100000,
      label: "km",
    },
  ];
  return (
    <section className={`flex w-full flex-col p-8`}>
      <Toggle
        inputText={"Cambiar modo"}
        initialValue={isGlobalMode}
        handleInputChange={handleIsGlobalModeChange}
      />
      <br />
      {isGlobalMode ? (
        <FormWide
          inputText={globalItemText}
          handleInputChange={handleGlobalItemChange}
          handleScaleChange={handleGlobalScaleChange}
          options={options}
          scale={globalScale}
        ></FormWide>
      ) : (
        <></>
      )}
    </section>
  );
}
