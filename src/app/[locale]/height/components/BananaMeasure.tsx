"use client";
import BananaScaleIcon from "@/components/icons/BananaScale";
import { useItemMeasure } from "@/app/[locale]/height/hooks/UseItemMeasure";
import FormWide, { OptionScaleModel } from "@/components/FormWide";
import DisplayUnits from "@/components/DisplayUnits";
import BananaIcon from "@/components/icons/Banana";
import { Measures } from "@/settings/measures";

export default function BananaMeasure() {
  const MAXIMUM_BANANAS = 15;
  const icon = <BananaScaleIcon></BananaScaleIcon>;
  const { itemText, item, scale, items, handleItemChange, handleScaleChange } =
    useItemMeasure({
      itemHeight: Measures.BANANA,
      maximumItems: MAXIMUM_BANANAS,
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
      className={`flex w-full  ${item * scale > MAXIMUM_BANANAS ? "justify-items-start" : "justify-between"}  p-8`}
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
          className={"max-w-[50%]"}
          amount={item}
          scale={scale}
          items={items}
          maxAmount={MAXIMUM_BANANAS}
          icon={<BananaIcon />}
        ></DisplayUnits>
      ) : (
        <div className={"mr-auto flex w-44 items-center"}>
          <BananaIcon />
        </div>
      )}
    </section>
  );
}
