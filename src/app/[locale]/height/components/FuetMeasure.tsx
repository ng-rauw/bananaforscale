"use client";
import { useItemMeasure } from "@/app/[locale]/height/hooks/UseItemMeasure";
import FormWide, { OptionScaleModel } from "@/components/FormWide";
import DisplayUnits from "@/components/DisplayUnits";
import FuetIcon from "@/components/icons/FuetIcon";
import { Measures } from "@/settings/measures";
import useGlobalHeightContext from "@/app/[locale]/height/heightContext";

export default function FuetMeasure() {
  const MAXIMUM_FUETS = 15;
  const icon = <FuetIcon></FuetIcon>;

  const { itemText, item, scale, items, handleItemChange, handleScaleChange } =
    useItemMeasure({
      itemHeight: Measures.FUET,
      icon,
    });
  const options: OptionScaleModel[] = [
    { value: 1, label: "cm" },
    { value: 100, label: "m" },
    {
      value: 100000,
      label: "km",
    },
  ];
  const { isGlobalMode, globalScale, globalItem } = useGlobalHeightContext();

  return (
    <section
      className={`flex w-full  ${item * scale > MAXIMUM_FUETS ? "justify-items-start" : "justify-between"}  p-8`}
    >
      {isGlobalMode ? (
        <DisplayUnits
          className={"max-w-[50%]"}
          amount={globalItem / Measures.FUET}
          scale={globalScale}
          items={items}
          maxAmount={0}
          icon={<FuetIcon />}
        ></DisplayUnits>
      ) : (
        <>
          <FormWide
            inputText={itemText}
            handleInputChange={handleItemChange}
            handleScaleChange={handleScaleChange}
            options={options}
            scale={scale}
            className={"w-1/2"}
          ></FormWide>
          {item > 0 ? (
            <DisplayUnits
              className={"max-w-[50%]"}
              amount={item}
              scale={scale}
              items={items}
              maxAmount={MAXIMUM_FUETS}
              icon={<FuetIcon />}
            ></DisplayUnits>
          ) : (
            <div className={"mr-auto flex w-44 items-center"}>
              <FuetIcon />
            </div>
          )}
        </>
      )}
    </section>
  );
}
