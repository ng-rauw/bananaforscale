import { useState, ReactElement, useEffect } from "react";

type Props = {
  itemHeight: number;
  maximumItems: number;
  icon: ReactElement;
};

export function useItemWeightLayoutMeasure({ itemHeight, icon }: Props) {
  const [itemText, setItemText] = useState("");
  const [item, setItem] = useState(0);
  const [scale, setScale] = useState(1);
  const [items, setItems] = useState<ReactElement[]>([]);

  useEffect(() => {
    generateItems(item * scale);
  }, [item, scale]);

  const handleItemChange = (data: number) => {
    setItemText(data.toString());
    setItem(data / itemHeight);
  };

  const handleScaleChange = (data: number) => {
    setItemText("");
    setItem(0);
    setScale(data);
  };

  const generateItems = (n: number) => {
    const divArray: ReactElement[] = [];
    if (n > itemHeight) {
      setItems(divArray);
      return;
    }
    for (let i = 0; i < n; i++) {
      // Percentage that each item occupies of the total height
      const width = Math.floor(200 / n);

      // If the width is greater than the size available, move it so only the right percentage of item is showing
      const top =
        width > 200 ? 200 - (Math.round(item * 100 * scale) / 100) * 200 : 0;

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
          {icon}
        </div>,
      );
    }

    setItems(divArray);
  };

  return {
    itemText,
    item,
    scale,
    items,
    handleItemChange,
    handleScaleChange,
  };
}
