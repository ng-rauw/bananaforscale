import React from "react";

type Props = {
  amount: number;
  scale: number;
  items: React.ReactNode[];
  icon: React.ReactNode;
  height?: number;
  width?: number;
  maxAmount?: number;
};
const DisplayUnits = ({
  amount,
  scale,
  items,
  icon,
  width = 400,
  height = 200,
  maxAmount = 15,
}: Props) => {
  return (
    <div className="flex items-center">
      <p
        className={`flex items-center text-center ${amount * scale > maxAmount ? "pl-8 text-9xl" : "text-6xl"}`}
      >
        {Intl.NumberFormat("es-ES").format(
          Math.round(amount * 100 * scale) / 100,
        )}
        <span className={`${amount * scale > maxAmount ? "w-44" : "w-32"}`}>
          {icon}
        </span>
      </p>
      {amount * scale < maxAmount ? (
        <div
          className={`flex flex-col-reverse items-center overflow-hidden`}
          style={{ width: width, height: height }}
        >
          {items.map((d) => d)}
        </div>
      ) : null}
    </div>
  );
};

export default DisplayUnits;
