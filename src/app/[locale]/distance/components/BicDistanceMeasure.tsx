import React, { useEffect } from "react";
import DisplayUnits from "@/components/DisplayUnits";
import { useItemMeasure } from "@/app/[locale]/height/hooks/UseItemMeasure";
import { Measures } from "@/settings/measures";
import BicIcon from "@/components/icons/Bic";
import BicScaleIcon from "@/components/icons/BicScale";

type Props = {
  distance: number;
};
const BicDistanceMeasure = ({ distance }: Props) => {
  const { item, scale, items, handleItemChange } = useItemMeasure({
    itemHeight: Measures.BIC,
    icon: <BicScaleIcon></BicScaleIcon>,
  });
  useEffect(() => {
    handleItemChange(distance);
  }, [distance]);
  return (
    <>
      {item > 0 ? (
        <DisplayUnits
          amount={item}
          scale={scale}
          items={items}
          maxAmount={3.1}
          icon={<BicIcon />}
        ></DisplayUnits>
      ) : (
        <div className={"mr-auto flex w-44 items-center"}>
          <BicIcon />
        </div>
      )}
    </>
  );
};

export default BicDistanceMeasure;
