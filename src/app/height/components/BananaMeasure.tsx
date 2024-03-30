"use client";
import { useState } from "react";
import BananaScaleIcon from "@/components/icons/BananaScale";

export default function BananaMeasure() {
  const BANANA_HEIGHT = 20.5;
  const [banana, setBanana] = useState(0);
  const [bananas, setBananas] = useState<JSX.Element[]>([]);
  const handleBananaChange = (e) => {
    setBanana(e.target.value);
    generateBananas(e.target.value);
  };
  const generateBananas = (n: number) => {
    const divArray: JSX.Element[] = [];
    for (let i = 0; i < n; i++) {
      const width = Math.floor(200 / n) + "px";
      divArray.push(
        <div key={i} className={`flex`} style={{ width: width, height: width }}>
          <BananaScaleIcon></BananaScaleIcon>
        </div>,
      );
    }
    setBananas(divArray);
  };
  return (
    <section>
      <form action="">
        <input type="number" onChange={handleBananaChange} />
        <button>Enter</button>
      </form>
      {banana}
      <br />
      {banana * BANANA_HEIGHT}
      <div className={`flex flex-col`}>{bananas.map((d) => d)}</div>
    </section>
  );
}
