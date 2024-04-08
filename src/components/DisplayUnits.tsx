import React from "react";
import { Textfit } from "react-textfit";
type Props = {
  amount: number;
  scale: number;
  items: React.ReactNode[];
  icon: React.ReactNode;
  height?: number;
  width?: number;
  maxAmount?: number;
  className?: string;
};
const DisplayUnits = ({
  amount,
  scale,
  items,
  icon,
  width = 400,
  height = 200,
  maxAmount = 15,
  className,
}: Props) => {
  return (
    <div
      className={`grid px-2 ${className} ${amount * scale > maxAmount ? "grid-flow-col-dense" : "grid-flow-col-dense"} items-center`}
    >
      <Textfit
        className={`grid h-full w-auto items-center text-9xl`}
        mode="multi"
      >
        {amount * scale > 9999999
          ? amount.toExponential(4)
          : Intl.NumberFormat("es-ES").format(
              Math.round(amount * 100 * scale) / 100,
            )}
      </Textfit>
      <span className={`grid ${amount * scale > maxAmount ? "w-44" : "w-32"}`}>
        {icon}
      </span>
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
