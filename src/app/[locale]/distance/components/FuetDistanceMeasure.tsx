import React, { useEffect } from "react";
import DisplayUnits from "@/components/DisplayUnits";
import { useItemMeasure } from "@/app/[locale]/height/hooks/UseItemMeasure";
import { Measures } from "@/settings/measures";
import FuetIcon from "@/components/icons/FuetIcon";

type Props = {
  distance: number;
};
const FuetDistanceMeasure = ({ distance }: Props) => {
  const { item, scale, items, handleItemChange } = useItemMeasure({
    itemHeight: Measures.FUET,
    maximumItems: 15,
    icon: <FuetIcon></FuetIcon>,
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
          icon={<FuetIcon />}
        ></DisplayUnits>
      ) : (
        <div className={"mr-auto flex w-44 items-center"}>
          <FuetIcon />
        </div>
      )}
    </>
  );
};

export default FuetDistanceMeasure;
