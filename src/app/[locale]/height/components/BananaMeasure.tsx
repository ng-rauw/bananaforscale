"use client";
import { useState, ReactElement, ChangeEvent } from "react";
import BananaScaleIcon from "@/components/icons/BananaScale";
import BananaIcon from "@/components/icons/Banana";
import InputWide from "@/components/InputWide";
import DisplayUnits from "@/components/DisplayUnits";
import SelectScale, { OptionScaleModel } from "@/components/SelectScale";

export default function BananaMeasure() {
  const BANANA_HEIGHT = 20.5;
  const MAXIMUM_BANANAS = 15;
  const [bananaText, setBananaText] = useState("");
  const [banana, setBanana] = useState(0);
  const [scale, setScale] = useState(1);
  const [bananas, setBananas] = useState<ReactElement[]>([]);
  const handleBananaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBananaText(e.target.value);
    setBanana(Number(e.target.value) / BANANA_HEIGHT);
    generateBananas(banana * scale);
  };
  const handleScaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBananaText("");
    setBanana(0);
    setScale(Number(e.target.value));
    generateBananas(banana * scale);
  };
  const options: OptionScaleModel[] = [
    { value: 1, label: "cm" },
    { value: 100, label: "m" },
    {
      value: 100000,
      label: "km",
    },
  ];
  const generateBananas = (n: number) => {
    const divArray: ReactElement[] = [];
    if (n > MAXIMUM_BANANAS) {
      setBananas(divArray);
      return;
    }
    for (let i = 0; i < n; i++) {
      // Percentage that each banana occupies of the total height
      const width = Math.floor(200 / n);

      // If the width is greater than the size available, move it so only the right percentage of banana is showing
      const top =
        width > 200 ? 200 - (Math.round(banana * 100 * scale) / 100) * 200 : 0;

      divArray.push(
        <div
          key={i}
          className={`relative flex`}
          style={{
            top: -top,
            width: width < 400 ? width : 400,
            height: width < 400 ? width : 400,
          }}
        >
          <BananaScaleIcon></BananaScaleIcon>
        </div>,
      );
    }
    setBananas(divArray);
  };
  return (
    <section
      className={`flex w-full  ${banana * scale > MAXIMUM_BANANAS ? "justify-items-start" : "justify-between"}  p-8`}
    >
      <InputWide inputText={bananaText} handleInputChange={handleBananaChange}>
        <SelectScale
          handleScaleChange={handleScaleChange}
          options={options}
        ></SelectScale>
      </InputWide>
      {banana > 0 ? (
        <DisplayUnits
          amount={banana}
          scale={scale}
          items={bananas}
          maxAmount={MAXIMUM_BANANAS}
          icon={<BananaIcon />}
        ></DisplayUnits>
      ) : (
        <></>
      )}
    </section>
  );
}
