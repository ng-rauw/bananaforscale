"use client";
import BananaScaleIcon from "@/components/icons/BananaScale";
import SelectScale, { OptionScaleModel } from "@/components/SelectScale";
import { useItemMeasure } from "@/app/[locale]/height/hooks/UseItemMeasure";
import InputWide from "@/components/InputWide";
import DisplayUnits from "@/components/DisplayUnits";
import BananaIcon from "@/components/icons/Banana";

export default function BananaMeasure() {
  const BANANA_HEIGHT = 20.5;
  const MAXIMUM_BANANAS = 15;
  const icon = <BananaScaleIcon></BananaScaleIcon>;
  const { itemText, item, scale, items, handleItemChange, handleScaleChange } =
    useItemMeasure({
      itemHeight: BANANA_HEIGHT,
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
      <InputWide inputText={itemText} handleInputChange={handleItemChange}>
        <SelectScale
          handleScaleChange={handleScaleChange}
          options={options}
        ></SelectScale>
      </InputWide>
      {item > 0 ? (
        <DisplayUnits
          amount={item}
          scale={scale}
          items={items}
          maxAmount={MAXIMUM_BANANAS}
          icon={<BananaIcon />}
        ></DisplayUnits>
      ) : null}
    </section>
  );
}
