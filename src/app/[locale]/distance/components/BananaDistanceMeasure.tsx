import React, { useEffect } from "react";
import DisplayUnits from "@/components/DisplayUnits";
import BananaIcon from "@/components/icons/Banana";
import { useItemMeasure } from "@/app/[locale]/height/hooks/UseItemMeasure";
import BananaScaleIcon from "@/components/icons/BananaScale";
import { Measures } from "@/settings/measures";

type Props = {
  distance: number;
};
const BananaDistanceMeasure = ({ distance }: Props) => {
  const { item, scale, items, handleItemChange } = useItemMeasure({
    itemHeight: Measures.BANANA,
    maximumItems: 15,
    icon: <BananaScaleIcon></BananaScaleIcon>,
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
          maxAmount={15}
          icon={<BananaIcon />}
        ></DisplayUnits>
      ) : (
        <div className={"mr-auto flex w-44 items-center"}>
          <BananaIcon />
        </div>
      )}
    </>
  );
};

export default BananaDistanceMeasure;
