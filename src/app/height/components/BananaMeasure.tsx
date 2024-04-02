"use client";
import { useState, ReactElement, ChangeEvent } from "react";
import BananaScaleIcon from "@/components/icons/BananaScale";
import BananaIcon from "@/components/icons/Banana";

export default function BananaMeasure() {
  const BANANA_HEIGHT = 20.5;
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
  const generateBananas = (n: number) => {
    const divArray: ReactElement[] = [];
    if (n > 15) {
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
      className={`flex w-full  ${banana * scale > 15 ? "justify-items-start" : "justify-between"}  p-8`}
    >
      <form
        action={() => {}}
        className="flex w-1/2 items-center rounded-3xl bg-white p-8 text-gray-600"
      >
        <input
          type="number"
          placeholder="0"
          min="0"
          value={bananaText}
          className="w-full text-center text-9xl outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0"
          onChange={handleBananaChange}
          onInputCapture={handleBananaChange}
        />
        <select
          onChange={handleScaleChange}
          className="cursor-pointer appearance-none bg-white p-2 text-center text-5xl outline-0"
        >
          <option value={1}>cm</option>
          <option value={100}>m</option>
          <option value={100000}>km</option>
        </select>
      </form>
      {banana > 0 ? (
        <div className="flex items-center">
          <p
            className={`flex items-center text-center ${banana * scale > 15 ? "pl-8 text-9xl" : "text-6xl"}`}
          >
            {Intl.NumberFormat("es-ES").format(
              Math.round(banana * 100 * scale) / 100,
            )}
            <span className={`${banana * scale > 15 ? "w-44" : "w-32"}`}>
              <BananaIcon />
            </span>
          </p>
          {banana * scale < 15 ? (
            <div
              className={`flex flex-col-reverse items-center overflow-hidden`}
              style={{ width: 400, height: 200 }}
            >
              {bananas.map((d) => d)}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
