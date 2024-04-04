"use client";
import BananaScaleIcon from "@/components/icons/BananaScale";
import { useItemMeasure } from "@/app/[locale]/height/hooks/UseItemMeasure";
import FormWide, { OptionScaleModel } from "@/components/FormWide";
import DisplayUnits from "@/components/DisplayUnits";
import BananaIcon from "@/components/icons/Banana";
import FuetIcon from "@/components/icons/FuetIcon";

export default function FuetMeasure() {
  const FUET_HEIGHT = 38;
  const MAXIMUM_FUETS = 15;
  const icon = <FuetIcon></FuetIcon>;
  const { itemText, item, scale, items, handleItemChange, handleScaleChange } =
    useItemMeasure({
      itemHeight: FUET_HEIGHT,
      maximumItems: MAXIMUM_FUETS,
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

  return (
    <section
      className={`flex w-full  ${item * scale > MAXIMUM_FUETS ? "justify-items-start" : "justify-between"}  p-8`}
    >
      <FormWide
        inputText={itemText}
        handleInputChange={handleItemChange}
        handleScaleChange={handleScaleChange}
        options={options}
        scale={scale}
      ></FormWide>
      {item > 0 ? (
        <DisplayUnits
          amount={item}
          scale={scale}
          items={items}
          maxAmount={MAXIMUM_FUETS}
          icon={<FuetIcon />}
        ></DisplayUnits>
      ) : null}
    </section>
  );
}
